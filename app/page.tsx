'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  MessageSquare, 
  Layout, 
  Settings, 
  ShieldCheck, 
  Zap, 
  BarChart, 
  Bot
} from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80",
    alt: "Cibersegurança e Tecnologia"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    alt: "Hardware e Inovação"
  },
  {
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80",
    alt: "Inteligência Artificial e Futuro"
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    alt: "Redes e Dados Globais"
  }
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-background">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                index === currentImage ? "opacity-40" : "opacity-0"
              )}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                priority={index === 0}
                className="object-cover scale-105"
              />
            </div>
          ))}
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
        </div>

        <Container className="relative z-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-md border-primary/20">
              <span className="text-primary mr-2 font-bold animate-pulse">Novo:</span> Automações inteligentes com IA
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl font-sans leading-[1.1]">
              Sites, sistemas e <span className="text-primary bg-clip-text">automações inteligentes</span> para empresas que precisam funcionar melhor.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="https://wa.me/5521933009048" target="_blank">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg shadow-xl shadow-primary/20">
                  Falar no WhatsApp
                </Button>
              </Link>
              <Link href="/servicos">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg backdrop-blur-sm">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Sites Express"
              description="Site profissional ultra-rápido com chatbot integrado. Entrega em tempo recorde para seu negócio."
              href="/sites-express"
              icon={Zap}
            />
            <ServiceCard
              title="Agentes de WhatsApp"
              description="IA generativa para atendimento humano e conversacional 24/7 sem scripts engessados."
              href="/agentes-ia"
              icon={Bot}
            />
            <ServiceCard
              title="Chatbots Oficiais"
              description="Integração com API do WhatsApp para automação de vendas e suporte inteligente."
              href="/chatbots-whatsapp"
              icon={MessageSquare}
            />
            <ServiceCard
              title="Sistemas sob Medida"
              description="Backend robusto e interfaces modernas para gerenciar seu negócio com total controle."
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

      {/* FAQ Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { 
                  q: "Quanto tempo demora para meu site ficar pronto?", 
                  a: "No serviço 'Sites Express', entregamos em até 72 horas. Projetos de sistemas complexos podem levar de 2 a 8 semanas, dependendo da necessidade." 
                },
                { 
                  q: "O agente de IA funciona 24 horas?", 
                  a: "Sim! Nossos agentes baseados em OpenAI funcionam ininterruptamente, atendendo e qualificando seus contatos mesmo enquanto você dorme." 
                },
                { 
                  q: "Vocês cuidam da hospedagem?", 
                  a: "Sim. Nossas soluções de sites estáticos já incluem 1 ano de hospedagem gratuita com certificado SSL." 
                },
                { 
                  q: "Como funciona a manutenção dos sistemas?", 
                  a: "Oferecemos pacotes mensais de suporte e evolução para garantir que seu sistema Django ou Next.js esteja sempre atualizado e seguro." 
                },
                { 
                  q: "Posso integrar o chatbot com meu sistema atual?", 
                  a: "Com certeza. Nossas automações podem ser conectadas via API com CRMs, Planilhas Google ou qualquer software que você já utilize." 
                }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-muted/20 border rounded-2xl hover:border-primary/30 transition-colors">
                  <h3 className="text-lg font-bold mb-2 flex gap-3 text-foreground">
                    <span className="text-primary font-mono">?</span> {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
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
