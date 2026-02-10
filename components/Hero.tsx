'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section
      className="relative pt-28 sm:pt-32 lg:pt-36 overflow-hidden bg-secondarySoft"
      style={{
        backgroundImage: "url('/fundo.svg')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondarySoft/95 via-secondarySoft/85 to-secondarySoft pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ================= TEXTO ================= */}
          <div
            className={`max-w-xl space-y-7 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Eyebrow */}
            <p className="uppercase tracking-[0.35em] text-xs text-stone-700">
              Mentoria para mulheres
            </p>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-primary">
              Recomeçar com voz
              <br />
              <span className="italic text-primaryMuted">e posicionamento</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed">
              Tenha orgulho da sua história.
              <br />
              Aprenda a se posicionar com clareza e verdade.
            </p>

            {/* Bloco de contexto */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
              <p className="text-sm uppercase tracking-widest text-stone-600">
                Você não está aqui por acaso
              </p>

              <p className="text-stone-600 leading-relaxed">
                Algo em você cansou de se calar, de se adaptar demais,
                de se esquecer para caber.
              </p>

              <ul className="space-y-1.5 text-stone-700 text-sm">
                <li>• Saindo de uma fase difícil</li>
                <li>• Se sentindo invisível</li>
                <li>• Tentando se reconstruir</li>
                <li>• Cansada de não ser ouvida</li>
              </ul>
            </div>

            {/* CTA — LINK REAL */}
            <Link
              href="/servicos/recomecar-com-voz"
              className="
                w-full sm:w-auto
                inline-flex items-center justify-center gap-3
                bg-primary hover:bg-primaryMuted
                text-white
                px-8 py-5
                rounded-full
                text-base font-medium
                transition-all duration-300
                hover:shadow-xl hover:scale-[1.02]
              "
            >
              Conhecer os caminhos da mentoria
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* ================= IMAGEM ================= */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">

              {/* Glow suave */}
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl" />

              {/* Imagem */}
              <img
                src="/logoAbout.svg"
                alt="Alessandra Rosa"
                className="relative w-full h-auto drop-shadow-2xl z-10"
                style={{
                  maxHeight: '620px',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
