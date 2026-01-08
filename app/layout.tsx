import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LiveAgent } from "@/components/LiveAgent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexTechIA | Desenvolvimento de Sites, Sistemas e Automações",
  description: "Desenvolvimento de sites profissionais com Next.js, sistemas web com Django e automações inteligentes com IA. Soluções robustas para o mundo real.",
  keywords: ["Next.js", "Django", "Desenvolvimento Web", "IA", "Automação", "Chatbots WhatsApp", "Sistemas Web"],
  authors: [{ name: "NexTechIA" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <LiveAgent />
      </body>
    </html>
  );
}
