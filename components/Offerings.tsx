'use client';

import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface OfferingsProps {
  isVisible: boolean;
}

export default function Offerings({ isVisible }: OfferingsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      className={`
        relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-white via-secondarySoft/30 to-white
        overflow-hidden transition-all duration-1000
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">

        {/* HEADER */}
        <div
          className={`
            text-center mb-16 sm:mb-20
            transition-all duration-1000 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-accent" size={20} />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-stone-600 font-medium">
              O que oferecemos
            </span>
            <Sparkles className="text-accent" size={20} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary leading-[1.15] mb-6">
            Duas experiências.
            <br />
            <span className="italic text-primaryMuted">Um mesmo caminho.</span>
          </h2>

          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto">
            Escolha por onde começar sua jornada de transformação
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">

          {/* ======================================================
              CARD 1 — VOZ QUE POSICIONA
          ====================================================== */}
          <div
            className={`
              group relative transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-stone-200">

              {/* HEADER */}
              <div className="bg-gradient-to-br from-[#3f3327] via-[#4f3f2f] to-[#3f3327] p-10 text-white">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] bg-black/30 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  O começo
                </span>

                <h3 className="text-3xl font-serif">Mini-curso</h3>
                <p className="text-2xl font-serif font-bold">
                  Voz que Posiciona
                </p>
              </div>

              {/* CONTEÚDO */}
              <div className="p-8 sm:p-10">
                <ul className="space-y-4 mb-10">
                  {[
                    'Falar com clareza e autenticidade',
                    'Colocar limites saudáveis',
                    'Se expressar sem culpa',
                    'Sair do silêncio e da explosão',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-primary" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>

                {/* CTA — CONTRASTE ALTO */}
                <Link
                  href="/servicos/voz-que-posiciona"
                  className="
                    group relative flex items-center justify-between
                    w-full rounded-2xl px-6 py-5
                    bg-gradient-to-r from-primary to-primaryMuted
                    text-white font-medium
                    shadow-xl shadow-primary/30
                    ring-1 ring-primary/40
                    transition-all duration-300
                    hover:scale-[1.02]
                    hover:shadow-2xl
                  "
                >
                  <span className="text-base">
                    Começar pelo Voz que Posiciona
                  </span>

                  <span className="
                    w-11 h-11 rounded-full
                    bg-white/25
                    flex items-center justify-center
                    transition-transform
                    group-hover:translate-x-1
                  ">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ======================================================
              CARD 2 — RECOMEÇAR COM VOZ
          ====================================================== */}
          <div
            className={`
              group relative transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-stone-200">

              {/* HEADER */}
              <div className="bg-gradient-to-br from-[#bfa98f] via-[#cdb9a1] to-[#bfa98f] p-10 text-primary">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] bg-white/70 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Próximo capítulo
                </span>

                <h3 className="text-3xl font-serif">Mentoria</h3>
                <p className="text-2xl font-serif font-bold">
                  Recomeçar com Voz
                </p>
              </div>

              {/* CONTEÚDO */}
              <div className="p-8 sm:p-10">
                <ul className="space-y-4 mb-10">
                  {[
                    'Autoestima e valor pessoal',
                    'Limites emocionais',
                    'História e identidade',
                    'Relacionamentos',
                    'Posicionamento como mulher',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-700">
                      <div className="w-6 h-6 rounded-full bg-secondary/25 flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-secondary" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>

                {/* CTA — CONTRASTE ALTO */}
                <Link
  href="/servicos/recomecar-com-voz"
  className="
    group relative flex items-center justify-between
    w-full rounded-2xl px-6 py-5
    bg-secondary
    text-white font-medium
    shadow-lg shadow-secondary/30
    transition-all duration-300
    hover:bg-secondary/90
    hover:scale-[1.02]
  "
>
  <span className="text-base">
    Conhecer a Mentoria
  </span>

  <span
    className="
      w-11 h-11 rounded-full
      bg-primary
      flex items-center justify-center
      transition-transform
      group-hover:translate-x-1
    "
  >
    <ArrowRight size={18} className="text-white" />
  </span>
</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
