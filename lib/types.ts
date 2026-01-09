export interface Lead {
  id: string
  name: string
  email: string
  objective: string | null
  source: 'chat' | 'form' | 'whatsapp'
  score: number // 0-100 - qualificação do lead
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  phone?: string
  company?: string
  notes?: string
  created_at: string
  updated_at: string
}

export interface ChatHistory {
  id: string
  lead_id: string | null // null se usuário não foi capturado ainda
  session_id: string // identificador da sessão de chat
  role: 'user' | 'assistant'
  content: string
  created_at: string
}

export interface Interaction {
  id: string
  lead_id: string
  type: 'message' | 'page_view' | 'form_submit' | 'button_click'
  metadata?: Record<string, any>
  created_at: string
}
