import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const baseURL = "https://nextech.net.br";

export const metadata: Metadata = {
  title: "Nextech | Desenvolvimento de Sites, Sistemas e Automações",
  description: "Desenvolvimento de sites profissionais, sistemas web e automações inteligentes com IA. Soluções robustas para o mundo real.",
  keywords: ["Desenvolvimento Web", "IA", "Automação", "Chatbots WhatsApp", "Sistemas Web"],
  authors: [{ name: "Nextech" }],
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: baseURL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseURL,
    siteName: "Nextech",
    title: "Nextech | Desenvolvimento de Sites, Sistemas e Automações",
    description: "Desenvolvimento de sites profissionais, sistemas web e automações inteligentes com IA. Soluções robustas para o mundo real.",
    images: [
      {
        url: `${baseURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nextech - Desenvolvimento Web e IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nextech | Desenvolvimento de Sites, Sistemas e Automações",
    description: "Desenvolvimento de sites profissionais, sistemas web e automações inteligentes com IA.",
    images: [`${baseURL}/og-image.jpg`],
  },
  icons: {
    icon: "/favicon.svg",
  },
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
        <LiveAgent />
        <Analytics />
      </body>
    </html>
  );
}
