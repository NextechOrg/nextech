import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { ServiceCard } from '@/components/ServiceCard';
import { Globe, MessageSquare, Layout, Smartphone, Search, Database, Zap, Bot } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Nossos Serviços</h1>
            <p className="text-xl text-muted-foreground">
              Soluções completas para transformar a presença digital da sua empresa e otimizar processos internos.
            </p>
          </div>
          <div className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Análise e serviços tecnológicos"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Sites Estáticos Express"
            description="Site profissional ultra-rápido com chatbot integrado. Entrega em tempo recorde."
            href="/sites-express"
            icon={Zap}
          />
          <ServiceCard
            title="Agentes de WhatsApp IA"
            description="Agentes inteligentes com linguagem natural para vendas e suporte avançado."
            href="/agentes-ia"
            icon={Bot}
          />
          <ServiceCard
            title="Desenvolvimento Personalizado"
            description="Criamos sistemas que se adaptam ao seu negócio. Soluções escaláveis e seguras."
            href="/sistemas-web"
            icon={Layout}
          />
          <ServiceCard
            title="Chatbots Oficiais"
            description="Integração oficial com API do WhatsApp para automação de fluxos padrão."
            href="/chatbots-whatsapp"
            icon={MessageSquare}
          />
          <ServiceCard
            title="Sites de Alta Performance"
            description="Landing pages e sites institucionais otimizados para máxima conversão."
            href="/"
            icon={Globe}
          />
          <ServiceCard
            title="Sistemas de Gestão (ERP)"
            description="Dashboards e painéis administrativos para controle total da sua operação."
            href="/sistemas-web"
            icon={Database}
          />
          <ServiceCard
            title="SEO e Visibilidade"
            description="Otimização técnica para garantir que sua empresa seja encontrada no Google."
            href="/"
            icon={Search}
          />
          <ServiceCard
            title="Aplicações Mobile Web"
            description="Experiências fluidas em smartphones com tecnologias web modernas (PWA)."
            href="/"
            icon={Smartphone}
          />
        </div>

        <div className="mt-20 bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Precisa de uma solução sob medida?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Nossa equipe técnica está pronta para analisar seu projeto e propor a melhor arquitetura.
          </p>
          <Link href="/contato">
            <Button size="lg">Entrar em Contato</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
