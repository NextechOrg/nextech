import { createServerSupabaseClient } from '@/lib/supabaseClient'
import { Lead, ChatHistory } from '@/lib/types'

/**
 * Salva mensagem no histórico de chat
 */
export async function saveChatMessage(
  sessionId: string,
  role: 'user' | 'assistant',
  content: string,
  leadId?: string
) {
  try {
    const supabase = createServerSupabaseClient()
    
    const { data, error } = await supabase
      .from('chat_history')
      .insert({
        lead_id: leadId || null,
        session_id: sessionId,
        role,
        content,
        created_at: new Date().toISOString(),
      })
      .select()
    
    if (error) {
      console.error('Erro ao salvar mensagem:', error)
      return null
    }
    
    return data[0]
  } catch (error) {
    console.error('Erro ao salvar chat message:', error)
    return null
  }
}

/**
 * Cria ou atualiza um lead
 */
export async function upsertLead(
  email: string,
  data: Partial<Omit<Lead, 'id' | 'created_at' | 'updated_at'>>
): Promise<Lead | null> {
  try {
    const supabase = createServerSupabaseClient()
    
    // Verificar se lead já existe
    const { data: existingLead, error: selectError } = await supabase
      .from('leads')
      .select('*')
      .eq('email', email)
      .single()
    
    if (selectError && selectError.code !== 'PGRST116') {
      // PGRST116 = nenhum resultado encontrado (ok)
      console.error('Erro ao buscar lead:', selectError)
      return null
    }
    
    const leadData = {
      ...data,
      email,
      updated_at: new Date().toISOString(),
    }
    
    if (existingLead) {
      // Update
      const { data: updatedLead, error: updateError } = await supabase
        .from('leads')
        .update(leadData)
        .eq('id', existingLead.id)
        .select()
        .single()
      
      if (updateError) {
        console.error('Erro ao atualizar lead:', updateError)
        return null
      }
      
      return updatedLead
    } else {
      // Insert
      const { data: newLead, error: insertError } = await supabase
        .from('leads')
        .insert({
          ...leadData,
          created_at: new Date().toISOString(),
        })
        .select()
        .single()
      
      if (insertError) {
        console.error('Erro ao inserir lead:', insertError)
        return null
      }
      
      return newLead
    }
  } catch (error) {
    console.error('Erro ao fazer upsert de lead:', error)
    return null
  }
}

/**
 * Calcula score de qualificação baseado em interações
 */
export function calculateLeadScore(
  messageCount: number,
  hasObjective: boolean,
  hasPhone: boolean,
  sessionDurationMinutes: number
): number {
  let score = 0
  
  // Base por mensagens (máx 40 pontos)
  score += Math.min(messageCount * 5, 40)
  
  // Bonus por ter objetivo (20 pontos)
  if (hasObjective) score += 20
  
  // Bonus por telefone (15 pontos)
  if (hasPhone) score += 15
  
  // Bonus por tempo de sessão (25 pontos)
  score += Math.min((sessionDurationMinutes / 10) * 25, 25)
  
  return Math.min(score, 100)
}

/**
 * Registra interação do usuário
 */
export async function logInteraction(
  leadId: string,
  type: 'message' | 'page_view' | 'form_submit' | 'button_click',
  metadata?: Record<string, any>
) {
  try {
    const supabase = createServerSupabaseClient()
    
    const { error } = await supabase
      .from('interactions')
      .insert({
        lead_id: leadId,
        type,
        metadata,
        created_at: new Date().toISOString(),
      })
    
    if (error) {
      console.error('Erro ao registrar interação:', error)
      return false
    }
    
    return true
  } catch (error) {
    console.error('Erro ao registrar interação:', error)
    return false
  }
}
