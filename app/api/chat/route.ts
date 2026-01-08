import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Modelo eficiente e rápido
      messages: [
        {
          role: 'system',
          content: `Você é o Agente de Vendas da NexTechIA, uma consultoria de tecnologia premium.
          Seu objetivo é converter visitantes em leads de forma ética e profissional.
          
          Informações da NexTechIA:
          - Serviços: Sites Estáticos Express (72h), Agentes de WhatsApp com IA, Sistemas Web (Django), Chatbots Oficiais.
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
    });

    return NextResponse.json({ 
      role: 'assistant', 
      content: response.choices[0].message.content 
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Erro ao processar sua solicitação.' }, { status: 500 });
  }
}
