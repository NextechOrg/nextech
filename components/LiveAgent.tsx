'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, HelpCircle, Mail } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function LiveAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const [sessionId] = useState(() => {
    // Gerar ID único da sessão
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  });
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: 'Olá! 👋 Seja bem-vindo à **Nextech**. \n\nSou seu assistente virtual e estou aqui para te ajudar a tirar sua ideia do papel. \n\nQual o objetivo do seu projeto hoje?' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          sessionId,
          email: email || undefined,
        }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
      
      // Se a resposta tem link WhatsApp, mostrar formulário de contato (nome, email, telefone)
      if (data.content?.includes('wa.me') && !email && !showContactForm) {
        setShowContactForm(true);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Desculpe, tive um problema técnico. Pode me chamar no WhatsApp? +55 21 93300-9048' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !phone.trim()) return;

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido');
      return;
    }

    // Validação básica de telefone (BR)
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      alert('Por favor, insira um telefone válido (com DDD)');
      return;
    }

    setIsLoading(true);
    try {
      // Salvar email no servidor (será capturado na próxima requisição de chat)
      await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, { role: 'user', content: `Meu email é: ${email}. Meu telefone é: ${phone}. Meu nome é: ${name || 'Cliente'}.` }],
          sessionId,
          email,
          phone,
          name,
        }),
      });
      
      setShowContactForm(false);
    } catch (error) {
      console.error('Erro ao salvar contato:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-24 z-50 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      {/* Balão de Boas-vindas */}
      {!isOpen && showBubble && (
        <div className="mb-4 bg-background border-2 border-primary rounded-2xl p-4 shadow-xl max-w-[280px] animate-in slide-in-from-bottom-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">Precisa de ajuda?</p>
                <p className="text-xs text-muted-foreground mt-1">Clique no chat para conversar com nosso consultor</p>
              </div>
            </div>
            <button 
              onClick={() => setShowBubble(false)}
              className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] max-h-[60vh] sm:max-h-[70vh] bg-background border-2 border-primary rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <span className="font-bold">Consultor nexIA</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "flex gap-3 max-w-[85%]",
                m.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}>
                <div className={cn(
                  "p-3 rounded-2xl text-sm leading-relaxed shadow-sm prose prose-sm dark:prose-invert max-w-none",
                  m.role === 'user' 
                    ? "bg-primary text-primary-foreground rounded-tr-none prose-p:text-primary-foreground" 
                    : "bg-background border rounded-tl-none"
                )}>
                  <ReactMarkdown
                    components={{
                      a: ({ href, children }) => {
                        const isWhatsApp = href?.includes('wa.me');
                        return (
                          <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={cn(
                              "transition-all duration-200",
                              isWhatsApp 
                                ? "inline-block w-full text-center bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl no-underline my-2 shadow-md hover:shadow-lg scale-100 hover:scale-[1.02] active:scale-[0.98] animate-bounce-subtle"
                                : "text-primary font-bold underline"
                            )}
                          >
                            {children}
                          </a>
                        );
                      }
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 mr-auto max-w-[85%]">
                <div className="bg-background border p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-xs text-muted-foreground">Digitando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form */}
          {showContactForm && (
            <div className="p-4 border-t bg-background space-y-3">
              <p className="text-xs text-muted-foreground font-medium">Para avançarmos, preencha seus dados de contato</p>
              <form onSubmit={handleContactSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="flex-1 bg-muted border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(DDD) 99999-9999"
                    className="w-[160px] bg-muted border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full bg-muted border-none rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
                      required
                    />
                  </div>
                  <Button type="submit" size="icon" disabled={isLoading} className="shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          )}

          {/* Input */}
          {!showContactForm && (
            <form onSubmit={handleSubmit} className="p-4 border-t bg-background flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-muted border-none rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-primary outline-none"
              />
              <Button type="submit" size="icon" disabled={isLoading} className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setShowBubble(false);
        }}
        className={cn(
          "h-14 w-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative font-bold text-lg",
          isOpen ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>
    </div>
  );
}
