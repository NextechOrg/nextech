import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Bot, MessageSquare, Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "BaXiJen | Agentes de IA",
  description: "Automação inteligente com agentes de IA. Crie assistentes virtuais que aprendem e se adaptam às necessidades do seu negócio.",
  openGraph: {
    title: "BaXiJen | Agentes de IA",
    description: "Automação inteligente com agentes de IA para seu negócio.",
    url: "https://baxijen.tech/agentes-ia",
    type: "website",
  },
};

export default function AgentesIAPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1000&q=80"
              alt="Agentes de Inteligência Artificial no WhatsApp"
              fill
              className="object-cover"
            />
            {/* Overlay simulando inteligência */}
            <div className="absolute inset-x-0 top-0 p-6 bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center gap-3 text-white">
                <Brain className="h-6 w-6 animate-pulse" />
                <span className="font-semibold tracking-wide">BaXiJen-AI Gen</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
              Inteligência Artificial Generativa
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Agentes de WhatsApp</h1>
            <p className="text-lg text-muted-foreground">
              Não é apenas um bot. É um agente inteligente que entende o contexto, responde como humano e fecha vendas no seu WhatsApp.
            </p>
            <div className="space-y-4">
               {[
                 'Linguagem Natural (NLP) avançada.',
                 'Treinado com os dados da sua empresa.',
                 'Capacidade de agendamento e consultoria.',
                 'Integração com APIs e bancos de dados externos.',
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <Sparkles className="h-5 w-5 text-primary shrink-0" />
                   <span>{item}</span>
                 </div>
               ))}
            </div>
            <div className="pt-4">
              <Link href="https://wa.me/5521933009048" target="_blank">
                <Button size="lg" className="flex gap-2">
                  <MessageSquare className="h-5 w-5" /> Contratar Agente
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-3xl p-8 md:p-12 mb-20 border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold italic">"O fim dos menus infinitos. O começo do diálogo inteligente."</h2>
            <p className="text-muted-foreground">
              Nossos agentes utilizam modelos de linguagem de última geração para garantir que seu cliente nunca receba uma resposta genérica ou irrelevante.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-background border rounded-2xl shadow-sm space-y-4">
            <div className="h-10 w-10 text-primary"><Bot /></div>
            <h3 className="text-xl font-bold">Atendimento Humanizado</h3>
            <p className="text-muted-foreground text-sm">Empatia e clareza nas respostas, mantendo o tom de voz da sua marca em todas as interações.</p>
          </div>
          <div className="p-8 bg-background border rounded-2xl shadow-sm space-y-4">
            <div className="h-10 w-10 text-primary"><Sparkles /></div>
            <h3 className="text-xl font-bold">Aprendizado Contínuo</h3>
            <p className="text-muted-foreground text-sm">O agente evolui a cada conversa, tornando-se cada vez mais eficiente no seu processo de venda.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
