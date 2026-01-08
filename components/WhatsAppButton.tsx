import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521933009048?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20com%20a%20NexTechIA."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "bg-[#25D366] text-white p-4 rounded-full shadow-lg",
        "transition-all duration-300 hover:scale-110 active:scale-95",
        "flex items-center justify-center animate-bounce-subtle"
      )}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
