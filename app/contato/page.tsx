import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Contato | BaXiJen",
  description: "Entre em contato conosco. Estamos prontos para conversar sobre suas necessidades e apresentar nossas soluções.",
  openGraph: {
    title: "Contato | BaXiJen",
    description: "Entre em contato com a BaXiJen para conhecer nossas soluções.",
    url: "https://baxijen.tech/contato",
    type: "website",
  },
};

export default function ContatoPage() {
  'use client';
  return (
    <div className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Fale Conosco</h1>
            <p className="text-xl text-muted-foreground">
              Estamos prontos para ouvir seus desafios e propor a solução tecnológica ideal.
            </p>
          </div>
          <div className="relative h-[250px] lg:h-[300px] w-full rounded-2xl overflow-hidden shadow-xl border bg-muted">
            <Image 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Atendimento e Suporte BaXiJen"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <a href="https://wa.me/5521933009048" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 (21) 93300-9048
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">E-mail</h3>
                  <p className="text-muted-foreground">nextmetal@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Localização</h3>
                  <p className="text-muted-foreground">Escritório Remoto - Atendimento Nacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chamada para Ação */}
          <div className="bg-muted p-8 rounded-2xl border flex flex-col items-center justify-center text-center space-y-6">
            <h2 className="text-2xl font-bold">Inicie seu projeto hoje</h2>
            <p className="text-muted-foreground">
              A forma mais rápida de falar conosco e obter um orçamento inicial é através do nosso WhatsApp oficial.
            </p>
            <a href="https://wa.me/5521933009048" target="_blank" className="w-full">
              <Button size="lg" className="w-full py-8 text-xl">
                 Abrir WhatsApp agora
              </Button>
            </a>
            <p className="text-xs text-muted-foreground">
              Tempo médio de resposta: menos de 1 hora em horário comercial.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
