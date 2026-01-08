import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { 
  Globe, 
  MessageSquare, 
  Layout, 
  Settings, 
  ShieldCheck, 
  Zap, 
  BarChart, 
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 backdrop-blur">
              <span className="text-primary mr-2">Novo:</span> Automações inteligentes com IA
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl font-sans">
              Sites, sistemas e automações inteligentes para empresas que precisam funcionar melhor.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Desenvolvemos soluções simples, robustas e sob medida usando Next.js, Django e automação inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://wa.me/5521933009048" target="_blank">
                <Button size="lg" className="w-full sm:w-auto">
                  Falar no WhatsApp
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Ver Serviços
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-sans">Serviços Principais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluções tecnológicas focadas em resultados reais e eficiência operacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Sites Profissionais"
              description="Desenvolvimento com Next.js para máxima performance, SEO e experiência do usuário impecável."
              href="/servicos"
              icon={Globe}
            />
            <ServiceCard
              title="Chatbots para WhatsApp"
              description="Automações inteligentes para atendimento e vendas que funcionam 24/7 sem interrupções."
              href="/chatbots-whatsapp"
              icon={MessageSquare}
            />
            <ServiceCard
              title="Sistemas Web sob Medida"
              description="Backend robusto em Django com interfaces modernas para gerenciar seu negócio com segurança."
              href="/sistemas-web"
              icon={Layout}
            />
          </div>
        </Container>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6 font-sans">Como Funciona</h2>
              <p className="text-muted-foreground mb-10">
                Nosso processo é direto e focado na entrega de valor contínuo para o seu negócio.
              </p>
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Diagnóstico', desc: 'Analisamos seus processos e identificamos gargalos que podem ser resolvidos com tecnologia.' },
                  { step: '02', title: 'Planejamento', desc: 'Desenhamos a arquitetura ideal (Next.js/Django) focada na sua necessidade específica.' },
                  { step: '03', title: 'Desenvolvimento', desc: 'Codificamos a solução com foco em qualidade, segurança e escalabilidade.' },
                  { step: '04', title: 'Suporte e Evolução', desc: 'Acompanhamos o pós-lançamento garantindo que tudo funcione perfeitamente.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 text-2xl font-bold text-primary/40">{item.step}</div>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-muted rounded-xl border shadow-lg overflow-hidden flex items-center justify-center">
               <Image 
                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                 alt="Desenvolvimento de software profissional"
                 fill
                 className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-muted/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-sans">Por que escolher a NexTechIA?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
             {[
               { icon: Zap, title: 'Performance', desc: 'Sites extremamente rápidos com Next.js.' },
               { icon: ShieldCheck, title: 'Segurança', desc: 'Sistemas robustos e protegidos com Django.' },
               { icon: Settings, title: 'Automação', desc: 'Processos repetitivos executados por IA.' },
               { icon: BarChart, title: 'Resultados', desc: 'Tecnologia que gera conversão e lucro.' },
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center">
                 <div className="mb-4 text-primary">
                    <item.icon className="h-10 w-10" />
                 </div>
                 <h3 className="font-bold mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.desc}</p>
               </div>
             ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-20 border-t">
        <Container>
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 text-center space-y-8 overflow-hidden relative">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sua empresa está pronta para o próximo nível?</h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Desenvolvemos a tecnologia que resolve seus problemas reais. Vamos conversar sobre o seu projeto?
              </p>
              <Link href="https://wa.me/5521933009048" target="_blank" className="inline-block">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-zinc-100">
                  Solicitar Orçamento no WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
