import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { CheckCircle2, Award, BookOpen, Cpu, Globe, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Marcus Ramalho | Fundador da Nextech",
  description: "Conheça a trajetória de Marcus Ramalho, fundador da Nextech, desenvolvedor de sistemas e cientista de dados focado em soluções reais de IA e Governança.",
};

export default function FundadorPage() {
  return (
    <div className="pt-24 pb-16 space-y-24">
      {/* 1. HERO */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Fundador da Nextech
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tecnologia aplicada com foco em resultado, simplicidade e execução no mundo real.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm font-medium">
                  <Cpu className="h-4 w-4 text-primary" />
                  Senior Python Developer
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm font-medium">
                  <Globe className="h-4 w-4 text-primary" />
                  Data Scientist
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted border antialiased shadow-xl">
              <Image 
                src="/marcus.jpg" 
                alt="Marcus Ramalho" 
                fill 
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. APRESENTAÇÃO */}
      <section className="bg-muted/30 py-20">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Experiência e Visão</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A trajetória de Marcus Ramalho é marcada pela união entre a visão estratégica de negócios e a execução técnica rigorosa. 
                Com formação em Administração e Mestrado focado em Finanças e Ciência de Dados, sua atuação transita entre a 
                arquitetura de sistemas complexos e a análise profunda de grandes volumes de dados.
              </p>
              <p>
                Atualmente lidera o desenvolvimento de soluções end-to-end utilizando ecossistemas modernos como Python (Django, Streamlit) 
                e R (Shiny) em centros de excelência acadêmica e profissional. A Nextech nasceu como a síntese dessa experiência: 
                levar para o mercado a mesma robustez e eficiência aplicadas em ambientes de alta exigência técnica.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. ATUAÇÃO PROFISSIONAL */}
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Atuação Técnica</h2>
              <p className="text-muted-foreground">Competências centrais voltadas para a construção de ativos tecnológicos sustentáveis.</p>
              <ul className="space-y-4">
                {[
                  "Desenvolvimento de sistemas web end-to-end",
                  "Engenharia de dados e processos de ETL complexos",
                  "Criação de dashboards estratégicos e plataformas de dados",
                  "Automação inteligente de processos e fluxos de trabalho",
                  "Integração sistêmica entre dados, processos e IA",
                  "Stack: Next.js, Django, Python e R"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl border flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Docência e Transmissão</h3>
                  <p className="text-sm text-muted-foreground">Professor em programas de MBA em Ciência de Dados e Finanças.</p>
                </div>
              </div>
              <p className="text-muted-foreground italic border-l-2 pl-4">
                "A tecnologia só cumpre seu papel quando simplifica processos e gera retorno tangível, seja ele financeiro, 
                operacional ou estratégico."
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. DESTAQUES & 5. PESQUISA */}
      <section className="bg-slate-950 text-slate-50 py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Destaques e Reconhecimentos</h2>
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
                    <h4 className="font-bold text-white border-b border-slate-800 pb-1">Certificações em IA</h4>
                    <p className="text-sm text-slate-400">Certificações e participação ativa em iniciativas globais de Machine Learning.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BookOpen className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-white border-b border-slate-800 pb-1">Produção Técnica</h4>
                    <p className="text-sm text-slate-400">Contribuição acadêmica e técnica constante nas áreas de dados e inteligência artificial.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-white">Governança e Visão</h2>
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
        </Container>
      </section>

      {/* 6. FILOSOFIA & 7. CONEXÃO */}
      <section>
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Filosofia de Trabalho</h2>
              <p className="text-muted-foreground">
                Tecnologia clara, confiável e orientada a resultados. O foco principal é sempre entender o 
                problema do cliente antes de propor qualquer linha de código, evitando complexidade desnecessária.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Nextech</h2>
              <p className="text-muted-foreground font-medium">
                A Nextech é a extensão prática desse compromisso. Aqui, entregamos agilidade sem abrir mão 
                da profundidade técnica necessária para sistemas robustos de alto desempenho.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. CTA FINAL */}
      <section className="pb-24">
        <Container>
          <div className="bg-muted p-12 rounded-3xl border text-center space-y-8">
            <h2 className="text-3xl font-bold">Quer conversar sobre um projeto ou ideia?</h2>
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
        </Container>
      </section>
    </div>
  );
}
