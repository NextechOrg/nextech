import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL e chave anônima são obrigatórias')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Cliente de servidor para operações com privilégios (apenas server-side)
export const createServerSupabaseClient = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY
  
  // Se não tiver service key, use a client padrão
  if (!supabaseServiceKey) {
    console.warn('SUPABASE_SERVICE_KEY não configurada. Usando client padrão.')
    return createClient(supabaseUrl, supabaseAnonKey)
  }
  
  return createClient(supabaseUrl!, supabaseServiceKey)
}
