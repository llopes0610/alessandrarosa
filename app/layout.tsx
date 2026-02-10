import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ================= Fonts ================= */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

/* ================= SEO + SOCIAL METADATA ================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://alessandrarosa.com.br"),

  title: {
    default: "Recomeçar com Voz e Posicionamento | Alessandra Rosa",
    template: "%s | Alessandra Rosa",
  },

  description:
    "Mentoria para mulheres que desejam resgatar sua voz, identidade e posicionamento com propósito. Um caminho de clareza, limites e recomeço consciente.",

  keywords: [
    "mentoria feminina",
    "recomeço feminino",
    "posicionamento feminino",
    "voz feminina",
    "autoestima feminina",
    "identidade feminina",
    "mentoria para mulheres",
    "desenvolvimento pessoal feminino",
  ],

  authors: [{ name: "Alessandra Rosa" }],
  creator: "Alessandra Rosa",
  publisher: "Alessandra Rosa Mentoria",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://alessandrarosa.com.br",
  },

  /* ================= Open Graph (WhatsApp, Facebook, Instagram) ================= */
  openGraph: {
    title: "Recomeçar com Voz e Posicionamento | Alessandra Rosa",
    description:
      "Uma mentoria para mulheres que desejam se posicionar com verdade, clareza e propósito.",
    url: "https://alessandrarosa.com.br",
    siteName: "Alessandra Rosa Mentoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/alessandra.jpg",
        width: 1200,
        height: 630,
        alt: "Alessandra Rosa — Mentora de Mulheres",
      },
    ],
  },

  /* ================= Twitter / X Card ================= */
  twitter: {
    card: "summary_large_image",
    title: "Recomeçar com Voz e Posicionamento | Alessandra Rosa",
    description:
      "Mentoria para mulheres que desejam resgatar sua voz, identidade e posicionamento com propósito.",
    images: ["/alessandra.jpg"],
    creator: "@alessandrarosa", // opcional — pode remover se não usar
  },
};

/* ================= Root Layout ================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* ================= Schema.org – Autoridade ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alessandra Rosa",
              description:
                "Mentora de mulheres em recomeço com foco em posicionamento, identidade e voz.",
              url: "https://alessandrarosa.com.br",
              image: "https://alessandrarosa.com.br/alessandra.jpg",
              sameAs: [],
            }),
          }}
        />
      </head>

      <body
        className={`
          ${playfair.variable}
          ${inter.variable}
          antialiased
          bg-stone-50
          text-stone-800
          font-sans
        `}
      >
        {/* ================= HEADER GLOBAL ================= */}
        <Header />

        {/* ================= CONTEÚDO ================= */}
        <main className="pt-24 sm:pt-32">
          {children}
        </main>

        {/* ================= FOOTER GLOBAL ================= */}
        <Footer />
      </body>
    </html>
  );
}
