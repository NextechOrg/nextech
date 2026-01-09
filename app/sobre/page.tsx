import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
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

      {/* SEÇÃO 2: MARCUS RAMALHO - FUNDADOR */}
      <section className="py-24 bg-muted/30">
        <Container>
          <div className="max-w-6xl mx-auto space-y-16">
            {/* HERO DO FUNDADOR */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Marcus Ramalho
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fundador & CTO
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tecnologia aplicada com foco em resultado, simplicidade e execução no mundo real.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 px-3 py-1 bg-background rounded-full text-sm font-medium">
                    <Cpu className="h-4 w-4 text-primary" />
                    Software Developer
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-background rounded-full text-sm font-medium">
                    <Globe className="h-4 w-4 text-primary" />
                    Data Scientist
                  </div>
                </div>
                
                <div className="pt-2">
                  <a 
                    href="https://www.linkedin.com/in/marcus-ramalho-8a440545/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#0077B5] transition-colors font-medium"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Conectar no LinkedIn</span>
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-background border shadow-xl">
                <Image 
                  src="/marcus.jpg" 
                  alt="Marcus Ramalho" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* EXPERIÊNCIA E VISÃO */}
            <div className="max-w-3xl mx-auto space-y-8">
              <h3 className="text-3xl font-bold">Experiência e Visão</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A trajetória de Marcus Ramalho é marcada pela união entre a visão estratégica de negócios e a execução técnica rigorosa. 
                  Com formação em Administração e Mestrado focado em Finanças e Ciência de Dados, sua atuação transita entre a 
                  arquitetura de sistemas complexos e a análise profunda de grandes volumes de dados.
                </p>
                <p>
                  Atualmente lidera o desenvolvimento de soluções corporativas e plataformas de dados em centros de excelência acadêmica e profissional. A Nextech nasceu como a síntese dessa experiência: 
                  levar para o mercado a mesma robustez e eficiência aplicadas em ambientes de alta exigência.
                </p>
              </div>
            </div>

            {/* ATUAÇÃO TÉCNICA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Atuação Técnica</h3>
                <p className="text-muted-foreground">Competências centrais voltadas para a construção de ativos tecnológicos sustentáveis.</p>
                <ul className="space-y-4">
                  {[
                    "Desenvolvimento de sistemas web end-to-end",
                    "Engenharia de dados e processos de ETL complexos",
                    "Criação de dashboards estratégicos e plataformas de dados",
                    "Automação inteligente de processos e fluxos de trabalho",
                    "Integração sistêmica entre dados, processos e IA"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-background border p-8 rounded-2xl flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Docência e Transmissão</h4>
                    <p className="text-sm text-muted-foreground">Professor em programas de MBA em Ciência de Dados e Finanças.</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic border-l-2 border-primary pl-4">
                  "A tecnologia só cumpre seu papel quando simplifica processos e gera retorno tangível, seja ele financeiro, 
                  operacional ou estratégico."
                </p>
              </div>
            </div>

            {/* DESTAQUES E GOVERNANÇA */}
            <section className="bg-slate-950 text-slate-50 py-16 px-8 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white">Destaques e Reconhecimentos</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Award className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-white italic">Premiação em Hackathon</h4>
                        <p className="text-sm text-slate-400">Desenvolvimento de solução tecnológica aplicada a problemas reais em tempo recorde.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-white">Certificações em IA</h4>
                        <p className="text-sm text-slate-400">Certificações e participação ativa em iniciativas globais de Machine Learning.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <BookOpen className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-white">Produção Técnica</h4>
                        <p className="text-sm text-slate-400">Contribuição acadêmica e técnica constante nas áreas de dados e inteligência artificial.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-white">Governança e Visão</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    A pesquisa em Governança de Inteligência Artificial é um pilar fundamental da visão de Marcus. 
                    Em um cenário de rápida evolução, a importância de soluções responsáveis e sustentáveis 
                    supera a mera implementação técnica.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Essa visão influencia diretamente todos os projetos da Nextech, garantindo que a inovação 
                    esteja alinhada com a segurança operacional e a ética de dados.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA FINAL */}
            <div className="bg-muted p-12 rounded-3xl border text-center space-y-8">
              <h3 className="text-3xl font-bold">Quer conversar sobre um projeto ou ideia?</h3>
              <p className="max-w-xl mx-auto text-muted-foreground">
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
          </div>
        </Container>
      </section>
    </div>
  );
}
