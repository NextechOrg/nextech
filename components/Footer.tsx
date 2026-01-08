import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight text-foreground">
                <span className="text-primary">NexTech</span>IA
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Desenvolvimento de sites, sistemas web e automações inteligentes para empresas que precisam funcionar melhor no mundo real.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link href="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Todos os Serviços</Link></li>
              <li><Link href="/sites-express" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sites Express</Link></li>
              <li><Link href="/agentes-ia" className="text-sm text-muted-foreground hover:text-primary transition-colors">Agentes de IA</Link></li>
              <li><Link href="/chatbots-whatsapp" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chatbots WhatsApp</Link></li>
              <li><Link href="/sistemas-web" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sistemas Web</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NexTechIA. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <span>Next.js & Django Stack</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
