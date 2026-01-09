-- Tabela de Leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  objective TEXT,
  source TEXT NOT NULL CHECK (source IN ('chat', 'form', 'whatsapp')),
  score INTEGER DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  phone TEXT,
  company TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_source ON leads(source);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Tabela de Histórico de Chat
CREATE TABLE chat_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para chat_history
CREATE INDEX idx_chat_history_lead_id ON chat_history(lead_id);
CREATE INDEX idx_chat_history_session_id ON chat_history(session_id);
CREATE INDEX idx_chat_history_created_at ON chat_history(created_at DESC);

-- Tabela de Interações (rastreamento de ações)
CREATE TABLE interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('message', 'page_view', 'form_submit', 'button_click')),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para interactions
CREATE INDEX idx_interactions_lead_id ON interactions(lead_id);
CREATE INDEX idx_interactions_type ON interactions(type);
CREATE INDEX idx_interactions_created_at ON interactions(created_at DESC);

-- View para análise rápida de leads
CREATE VIEW leads_summary AS
SELECT 
  l.id,
  l.name,
  l.email,
  l.source,
  l.score,
  l.status,
  COUNT(DISTINCT ch.session_id) as chat_sessions,
  COUNT(DISTINCT i.id) as total_interactions,
  MAX(i.created_at) as last_interaction,
  l.created_at,
  l.updated_at
FROM leads l
LEFT JOIN chat_history ch ON l.id = ch.lead_id
LEFT JOIN interactions i ON l.id = i.lead_id
GROUP BY l.id;

-- Row Level Security (RLS) - Ativar segurança por linha
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE interactions ENABLE ROW LEVEL SECURITY;

-- Políticas RLS (apenas admin pode ler todos os leads)
-- Você precisará configurar autenticação Supabase antes de aplicar essas políticas
