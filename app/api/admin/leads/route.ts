import { createServerSupabaseClient } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

// GET - Listar todos os leads
export async function GET() {
  try {
    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro ao listar leads:', error)
    return NextResponse.json(
      { error: 'Erro ao listar leads' },
      { status: 500 }
    )
  }
}
