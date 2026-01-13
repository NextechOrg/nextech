import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { teamMembers } from '@/lib/teamMembers';
import { Target, Eye, ShieldCheck, CheckCircle2, Award, BookOpen, Cpu, Globe, Scale, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Sobre Nextech | História, Missão e Fundador",
  description: "Conheça a história da Nextech, nossa missão e Marcus Ramalho, fundador e desenvolvedor de sistemas focado em soluções reais de IA.",
  openGraph: {
    title: "Sobre Nextech | História, Missão e Fundador",
    description: "Conheça a história da Nextech e Marcus Ramalho, nosso fundador.",
    url: "https://nextech.net.br/sobre",
    type: "website",
  },
};

export default function SobrePage() {
  return (
    <div className="space-y-24">
      {/* SEÇÃO 1: A NEXTECH */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">A Nextech</h1>
              <p className="text-xl text-muted-foreground">
                Tecnologia de ponta com foco em resolver problemas do mundo real.
              </p>
            </div>

            <div className="relative h-[400px] w-full mb-16 rounded-2xl overflow-hidden border shadow-xl bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                alt="Colaboração e tecnologia na Nextech"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6 text-lg">
              <p>
                Nascemos da necessidade de empresas que buscam mais do que apenas um site bonito. Na Nextech, acreditamos que a tecnologia deve ser uma alavanca de crescimento e eficiência, não uma fonte de frustração.
              </p>
              <p>
                Unimos a velocidade e interatividade das interfaces modernas com a robustez e segurança de sistemas empresariais. Nossa abordagem é sempre técnica, pragmática e focada em resultados.
              </p>
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
      </section>

      {/* SEÇÃO 2: EQUIPE */}
      <section className="py-24 bg-muted/30">
        <Container>
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Equipe</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Profissionais especializados em suas áreas, unindo expertise técnica e visão estratégica para entregar soluções de excelência.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-24">
        <Container>
          <div className="bg-muted p-12 rounded-3xl border text-center space-y-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold">Quer conversar sobre um projeto ou ideia?</h3>
            <p className="text-muted-foreground">
              Para discutir viabilidade técnica ou propostas de desenvolvimento especializado, entre em contato direto.
            </p>
            <div className="flex justify-center">
              <a 
                href="https://wa.me/5521933009048?text=Olá%20Marcus,%20venho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-lg shadow-lg scale-100 hover:scale-[1.05] transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
