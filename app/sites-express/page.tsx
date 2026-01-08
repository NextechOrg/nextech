import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Zap, Layout, Bot, CheckCircle2, Globe } from 'lucide-react';
import Link from 'next/link';

export default function SitesExpressPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
              Entrega em até 7 dias
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sites Estáticos Express</h1>
            <p className="text-lg text-muted-foreground">
              Sua empresa online com velocidade máxima, segurança total e um chatbot inteligente integrado para capturar leads 24h.
            </p>
            <div className="space-y-4">
               {[
                 'Carregamento instantâneo para melhor SEO.',
                 'Chatbot de captura de contatos integrado.',
                 'Hospedagem inclusa e certificado SSL.',
                 'Totalmente responsivo e otimizado para mobile.',
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                   <span>{item}</span>
                 </div>
               ))}
            </div>
            <div className="pt-4">
              <Link href="https://wa.me/5521933009048" target="_blank">
                <Button size="lg">Solicitar meu Site</Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Site estático moderno e rápido"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur p-4 rounded-xl border shadow-lg max-w-[200px]">
               <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase">
                 <Bot className="h-4 w-4" /> Chatbot Ativo
               </div>
               <p className="text-[10px] text-muted-foreground italic">"Olá! Gostaria de um orçamento para seu novo site?"</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 border-y">
           <div className="text-center space-y-3">
             <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
               <Zap className="h-6 w-6" />
             </div>
             <h3 className="font-bold">Alta Performance</h3>
             <p className="text-sm text-muted-foreground">Sites estáticos são imbatíveis em velocidade, garantindo a melhor experiência ao usuário.</p>
           </div>
           <div className="text-center space-y-3">
             <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
               <Layout className="h-6 w-6" />
             </div>
             <h3 className="font-bold">Design Premium</h3>
             <p className="text-sm text-muted-foreground">Interface limpa, moderna e profissional alinhada à identidade da sua marca.</p>
           </div>
           <div className="text-center space-y-3">
             <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
               <Globe className="h-6 w-6" />
             </div>
             <h3 className="font-bold">Pronto para o Google</h3>
             <p className="text-sm text-muted-foreground">Otimização técnica rigorosa para que sua empresa apareça nas buscas.</p>
           </div>
        </div>
      </Container>
    </div>
  );
}
