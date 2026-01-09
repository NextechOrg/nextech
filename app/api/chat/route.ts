import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'
import { saveChatMessage, upsertLead, calculateLeadScore, logInteraction } from '@/lib/supabaseService'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Padrão para detectar quando o lead está sendo capturado
const LEAD_CAPTURE_PATTERNS = {
  name: /(?:meu nome é|me chamo|sou|chamam-me)\s+([a-záéíóúâêãõ\s]+)/i,
  email: /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/,
  phone: /(?:\+55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}/,
}

function extractLeadData(messages: any[]) {
  const conversationText = messages.map(m => m.content).join(' ')
  
  const nameMatch = conversationText.match(LEAD_CAPTURE_PATTERNS.name)
  const emailMatch = conversationText.match(LEAD_CAPTURE_PATTERNS.email)
  const phoneMatch = conversationText.match(LEAD_CAPTURE_PATTERNS.phone)
  
  return {
    name: nameMatch ? nameMatch[1].trim() : null,
    email: emailMatch ? emailMatch[1] : null,
    phone: phoneMatch ? phoneMatch[0] : null,
  }
}

export async function POST(req: Request) {
  try {
    const { messages, sessionId, email: providedEmail, phone: providedPhone, name: providedName } = await req.json()

    if (!sessionId) {
      return NextResponse.json({ error: 'sessionId é obrigatório' }, { status: 400 })
    }

    // Salvar mensagem do usuário no banco
    const lastMessage = messages[messages.length - 1]
    if (lastMessage?.role === 'user') {
      // Ainda não temos o lead_id até fazer o upsert; manter null
      await saveChatMessage(sessionId, 'user', lastMessage.content)
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `Você é o Agente de Vendas da Nextech, uma consultoria de tecnologia premium.
          Seu objetivo é converter visitantes em leads de forma ética e profissional.
          
          Informações da Nextech:
          - Serviços: Sites Estáticos Express (72h), Agentes de WhatsApp com IA, Sistemas Web Corporativos, Chatbots Oficiais.
          - Contato WhatsApp: +55 21 93300-9048.
          
          Protocolo de Fechamento:
          1. Quando o cliente demonstrar interesse, peça o nome e o objetivo do projeto.
          2. Após receber essas informações, gere uma saudação final e um link de WhatsApp personalizado.
          3. IMPORTANTE: O link deve ser gerado pelo sistema wa.me com o parâmetro text contendo os dados coletados.
          Exemplo: https://wa.me/5521933009048?text=Ola%20Marcus,%20meu%20nome%20e%20[Nome].%20Quero%20falar%20sobre%20[Projeto].
          4. O link deve aparecer como um link clicável (markdown) no final da resposta.
          
          Orientações:
          - Seja cordial e técnico.
          - Se o cliente não fornecer os dados espontaneamente, peça educadamente para prosseguir com o orçamento.
          - Responda de forma concisa (máximo 3 parágrafos).`,
        },
        ...messages,
      ],
      temperature: 0.7,
    })

    const assistantContent = response.choices[0].message.content || ''

    // Salvar resposta do assistente
    await saveChatMessage(sessionId, 'assistant', assistantContent)

    // Extrair dados do lead da conversa
    const leadData = extractLeadData(messages)
    const finalEmail = (providedEmail || leadData.email)?.trim() || null
    const finalPhone = (providedPhone || leadData.phone)?.trim() || null
    const finalName = (providedName || leadData.name)?.trim() || null

    // Se temos dados de lead, salvar no banco
    if (finalEmail) {
      const score = calculateLeadScore(
        messages.length,
        !!finalName || messages.some(m => m.content?.toLowerCase().includes('objetivo')),
        !!finalPhone,
        0 // sessionDurationMinutes seria calculado no front-end
      )

      const lead = await upsertLead(finalEmail, {
        name: finalName || 'Lead sem nome',
        phone: finalPhone || undefined,
        objective: messages[messages.length - 1]?.content || null,
        source: 'chat',
        score,
        status: score >= 60 ? 'qualified' : 'new',
      })

      if (lead) {
        await logInteraction(lead.id, 'message', {
          messageCount: messages.length,
          hasWALink: assistantContent.includes('wa.me'),
        })
        // Vincular histórico desta sessão ao lead
        // Opcional: atualizar mensagens antigas desta sessão com lead_id
        try {
          const { createServerSupabaseClient } = await import('@/lib/supabaseClient')
          const supabase = createServerSupabaseClient()
          await supabase
            .from('chat_history')
            .update({ lead_id: lead.id })
            .eq('session_id', sessionId)
            .is('lead_id', null)
        } catch (e) {
          console.warn('Falha ao vincular sessão ao lead:', e)
        }
      }
    }

    return NextResponse.json({
      role: 'assistant',
      content: assistantContent,
      leadLinked: !!finalEmail,
    })
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json({ error: 'Erro ao processar sua solicitação.' }, { status: 500 })
  }
}
