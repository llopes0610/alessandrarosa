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
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 
      bg-gradient-to-b from-[#f5f1ed] via-[#faf8f5] to-white 
      overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* BACKGROUND ORGÂNICO */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cdb9a1]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4f3f2f]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cdb9a1]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">

        {/* HEADER */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-stone-500 mb-3">
            Quem te guia
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Alessandra Rosa
          </h2>

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-stone-500 mt-2">
            Mentora
          </p>

          <div className="flex justify-center gap-3 mt-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* IMAGEM */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-md lg:max-w-lg w-full">

              {/* GLOW */}
              <div className="absolute -inset-10 bg-gradient-to-br from-[#cdb9a1]/25 via-transparent to-[#4f3f2f]/15 rounded-full blur-3xl" />

              {/* FOTO */}
              <img
                src="/alessandraAbout.jpeg"
                alt="Alessandra Rosa"
                className="
                  relative w-full h-auto object-cover
                  rounded-3xl
                  sm:rounded-[48%_52%_45%_55%/60%_50%_50%_40%]
                  shadow-2xl
                  saturate-95 contrast-105
                "
              />

              {/* FADE */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-3xl
                  sm:rounded-[48%_52%_45%_55%/60%_50%_50%_40%]
                  bg-gradient-to-t
                  from-[#faf8f5]/60
                  sm:from-[#faf8f5]/70
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* TEXTO */}
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
                className="
                  flex gap-4 p-5 rounded-2xl
                  bg-white/70 backdrop-blur
                  border border-stone-200
                  hover:shadow-lg transition-all
                "
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-stone-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-stone-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FRASE */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 sm:p-14 border shadow-2xl text-center">
            <Quote className="text-primary/30 mb-8 mx-auto" size={48} />
            <p className="font-serif text-2xl sm:text-3xl text-primary mb-4">
              Eu não ensino mulheres a gritar.
            </p>
            <p className="font-serif text-2xl sm:text-3xl font-bold italic text-primary">
              Eu ensino mulheres a se posicionar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
