'use client';

import { useState } from 'react';
import { Quote, Award, Heart, Sparkles } from 'lucide-react';

interface AboutProps {
  isVisible: boolean;
}

export default function About({ isVisible }: AboutProps) {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f1ed] via-[#faf8f5] to-white overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background orgânico */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cdb9a1]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4f3f2f]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cdb9a1]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">

        {/* HEADER PREMIUM */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Badge */}
          <div className="relative inline-flex items-center gap-4 sm:gap-6 group mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex items-center gap-2">
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            </div>

            <span className="relative text-sm sm:text-base uppercase tracking-[0.35em] font-semibold bg-gradient-to-r from-primary via-primaryMuted to-primary bg-clip-text text-transparent">
              Quem te guia
            </span>

            <div className="flex items-center gap-2">
              <div
                className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/60"></div>
            </div>
          </div>

          {/* Nome da Mentora */}
          <div className="space-y-3">
            <p className="font-sans uppercase tracking-[0.3em] text-xs sm:text-sm text-stone-500">
              Mentora
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Alessandra Rosa
            </h2>

            <div className="flex items-center justify-center gap-3 pt-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40"></div>
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40"></div>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Imagem */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-md lg:max-w-lg w-full">
              <div className="absolute -inset-8 bg-gradient-to-br from-[#cdb9a1]/20 via-transparent to-[#4f3f2f]/10 rounded-full blur-3xl"></div>

              <img
                src="/aboutLogo.svg"
                alt="Alessandra Rosa"
                className="relative w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 60px rgba(79, 63, 47, 0.15))',
                }}
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {[
              {
                icon: Award,
                title: 'Representante Comercial',
                desc: 'Experiência sólida em negociação e posicionamento profissional',
              },
              {
                icon: Heart,
                title: 'Gestão de Relações Humanas',
                desc: 'Atuação focada em desenvolvimento pessoal e emocional',
              },
              {
                icon: Sparkles,
                title: 'Mentora de mulheres em recomeço',
                desc: 'Guiando mulheres a se posicionarem com clareza e verdade',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl bg-white/70 backdrop-blur border border-stone-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{item.title}</p>
                  <p className="text-sm text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 sm:p-14 border shadow-2xl">
            <Quote className="text-primary/30 mb-8 mx-auto" size={48} />

            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-center text-primary mb-4">
              Eu não ensino mulheres a gritar.
            </p>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold italic text-center text-primary">
              Eu ensino mulheres a se posicionar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
