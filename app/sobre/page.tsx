import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Target, Eye, ShieldCheck, Code2, Server, Cpu } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">A NexTechIA</h1>
            <p className="text-xl text-muted-foreground">
              Tecnologia de ponta com foco em resolver problemas do mundo real.
            </p>
          </div>

          <div className="relative h-[400px] w-full mb-16 rounded-2xl overflow-hidden border shadow-xl bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              alt="Colaboração e tecnologia na NexTechIA"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6 text-lg">
            <p>
              Nascemos da necessidade de empresas que buscam mais do que apenas um site bonito. Na NexTechIA, acreditamos que a tecnologia deve ser uma alavanca de crescimento e eficiência, não uma fonte de frustração.
            </p>
            <p>
              Especializados na stack moderna de <strong>Next.js</strong> e <strong>Django</strong>, unimos a velocidade e interatividade do front-end com a robustez e segurança de back-ends empresariais. Nossa abordagem é sempre técnica, pragmática e focada em resultados.
            </p>
          </div>

          {/* New Tech Stack Section */}
          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossa Autoridade Técnica</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-muted/50 border hover:border-primary/50 transition-colors">
                <Code2 className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">Front-end Moderno</h4>
                <p className="text-sm text-muted-foreground">Utilizamos <strong>Next.js 15+</strong> e <strong>React 19</strong> para criar interfaces ultra-rápidas, com Server Components e otimização automática de performance.</p>
              </div>
              <div className="p-6 rounded-2xl bg-muted/50 border hover:border-primary/50 transition-colors">
                <Server className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">Backend Robusto</h4>
                <p className="text-sm text-muted-foreground">Sistemas complexos rodam em <strong>Django</strong> (Python), garantindo segurança de nível bancário, ORM confiável e APIs escaláveis.</p>
              </div>
              <div className="p-6 rounded-2xl bg-muted/50 border hover:border-primary/50 transition-colors">
                <Cpu className="h-10 w-10 text-primary mb-4" />
                <h4 className="text-xl font-bold mb-3">Inteligência Artificial</h4>
                <p className="text-sm text-muted-foreground">Integramos <strong>LLMs</strong> de última geração para criar agentes que não apenas respondem, mas tomam ações inteligentes via APIs oficiais.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
               <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <Target className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold mb-2">Missão</h3>
               <p className="text-sm">Democratizar o acesso a sistemas de alta complexidade para empresas que buscam eficiência operacional.</p>
            </div>
            <div className="text-center">
               <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <Eye className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold mb-2">Visão</h3>
               <p className="text-sm">Ser a principal parceira tecnológica de empresas que priorizam a inteligência e automação em seus processos.</p>
            </div>
            <div className="text-center">
               <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                 <ShieldCheck className="h-8 w-8" />
               </div>
               <h3 className="text-xl font-bold mb-2">Valores</h3>
               <p className="text-sm">Transparência técnica, código limpo, compromisso com prazos e foco total no valor gerado ao cliente.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
