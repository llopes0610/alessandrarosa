'use client';

import { useState } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

interface BenefitsProps {
  isVisible: boolean;
}

export default function Benefits({ isVisible }: BenefitsProps) {
  const [activeColumn, setActiveColumn] = useState<'before' | 'after' | null>(null);

  const beforeItems = [
    { text: 'Engole o que sente', delay: 0 },
    { text: 'Aceita menos do que merece', delay: 100 },
    { text: 'Se explica demais', delay: 200 },
    { text: 'Perde respeito', delay: 300 },
    { text: 'Se apaga', delay: 400 },
  ];

  const afterItems = [
    { text: 'Diz não sem culpa', delay: 0 },
    { text: 'Fala com clareza', delay: 100 },
    { text: 'Escolhe melhor', delay: 200 },
    { text: 'Constrói relações saudáveis', delay: 300 },
    { text: 'Cresce profissionalmente', delay: 400 },
    { text: 'Se sente inteira', delay: 500 },
  ];

  return (
    <section
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8
      bg-gradient-to-b from-white via-secondarySoft/20 to-white
      overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background suave */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">

        {/* HEADER */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-accent" size={20} />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-stone-600 font-medium">
              A Jornada
            </span>
            <Sparkles className="text-accent" size={20} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary leading-[1.15] mb-6">
            A jornada de
            <br />
            <span className="italic text-primaryMuted">transformação</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            O que muda quando você aprende a usar sua voz com consciência
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ANTES */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            onMouseEnter={() => setActiveColumn('before')}
            onMouseLeave={() => setActiveColumn(null)}
          >
            <div className="relative">
              <div className="inline-flex items-center gap-3 bg-stone-100 border border-stone-200 text-stone-700 px-5 py-3 rounded-full text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-stone-400" />
                <span>Quando você se cala</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                O que acontece
                <X className="text-stone-400" size={26} />
              </h3>

              <div className="space-y-4 mb-10">
                {beforeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-stone-200 shadow-sm"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-400" />
                    <span className="text-base text-stone-700">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200">
                <p className="text-stone-600 italic leading-relaxed">
                  Não por falta de valor.
                  <br />
                  Mas por nunca ter aprendido a se posicionar.
                </p>
              </div>
            </div>
          </div>

          {/* DIVISOR DESKTOP */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primaryMuted rounded-full flex items-center justify-center shadow-xl">
              <ArrowRight className="text-white" size={22} />
            </div>
          </div>

          {/* DEPOIS */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            onMouseEnter={() => setActiveColumn('after')}
            onMouseLeave={() => setActiveColumn(null)}
          >
            <div className="relative">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary text-primary px-5 py-3 rounded-full text-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Quando você aprende</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                A transformação
                <Check className="text-accent" size={26} />
              </h3>

              <div className="space-y-4 mb-10">
                {afterItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-secondarySoft to-white rounded-2xl border border-secondary/30 shadow-sm"
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="text-base text-stone-700 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-white rounded-2xl p-6 sm:p-8 border border-secondary">
                <p className="text-primary font-semibold leading-relaxed">
                  Sua comunicação amadurece.
                  <br />
                  <span className="italic text-primaryMuted">
                    E a sua vida acompanha.
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
