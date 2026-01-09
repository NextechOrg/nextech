import { createServerSupabaseClient } from '@/lib/supabaseClient'
import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await req.json()

    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase
      .from('leads')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro ao atualizar lead:', error)
    return NextResponse.json(
      { error: 'Erro ao atualizar lead' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const supabase = createServerSupabaseClient()

    const { error } = await supabase
      .from('leads')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao deletar lead:', error)
    return NextResponse.json(
      { error: 'Erro ao deletar lead' },
      { status: 500 }
    )
  }
}
