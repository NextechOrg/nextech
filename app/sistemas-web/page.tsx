import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Database, Shield, Server, Layout, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "BaXiJen | Sistemas Web",
  description: "Desenvolvimento de sistemas web personalizados e robustos. Soluções escaláveis para todos os tipos de negócios.",
  openGraph: {
    title: "BaXiJen | Sistemas Web",
    description: "Desenvolvimento de sistemas web personalizados e robustos para seu negócio.",
    url: "https://baxijen.tech/sistemas-web",
    type: "website",
  },
};

export default function SistemasWebPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">Sistemas Web sob Medida</h1>
            <p className="text-xl text-muted-foreground">
              Desenvolvemos o "cérebro" digital da sua empresa com as tecnologias mais modernas e seguras do mercado.
            </p>
          </div>
          <div className="relative h-[250px] lg:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Código e Backend Profissional"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="h-10 w-10 text-primary shrink-0"><Server /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Back-end Robusto</h3>
                <p className="text-muted-foreground">Frameworks de alta performance que garantem segurança e escalabilidade desde o primeiro dia de operação.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 text-primary shrink-0"><Layout /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interfaces Modernas</h3>
                <p className="text-muted-foreground">Painéis administrativos rápidos, intuitivos e totalmente responsivos para que você controle tudo de qualquer lugar.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 text-primary shrink-0"><Database /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dados Estruturados</h3>
                <p className="text-muted-foreground">Modelagem de banco de dados profissional para garantir a integridade e a velocidade das suas informações.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-10 w-10 text-primary shrink-0"><Shield /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">Segurança em Primeiro Lugar</h3>
                <p className="text-muted-foreground">Proteção contra vulnerabilidades comuns da web e conformidade com as melhores práticas de desenvolvimento.</p>
              </div>
            </div>
          </div>

          <div className="bg-muted p-8 rounded-2xl border sticky top-24">
            <h3 className="text-xl font-bold mb-4">O que entregamos:</h3>
            <ul className="space-y-3 mb-8">
              {[
                'Dashboard de indicadores em tempo real.',
                'Gestão de usuários e permissões.',
                'Relatórios automatizados e exportáveis.',
                'API para integração com apps.',
                'Backup automático e segurança TLS.',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contato" className="block w-full">
              <Button className="w-full" size="lg">Solicitar Projeto</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
