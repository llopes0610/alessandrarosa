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
    { text: 'Se apaga', delay: 400 }
  ];

  const afterItems = [
    { text: 'Diz não sem culpa', delay: 0 },
    { text: 'Fala o que pensa', delay: 100 },
    { text: 'Escolhe melhor', delay: 200 },
    { text: 'Melhora relações', delay: 300 },
    { text: 'Cresce profissionalmente', delay: 400 },
    { text: 'Se sente inteira', delay: 500 }
  ];

  return (
    <section 
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-secondarySoft/20 to-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header Premium */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-accent" size={20} />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-stone-600 font-medium">A Jornada</span>
            <Sparkles className="text-accent" size={20} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary leading-[1.15] mb-6">
            A Jornada de
            <br />
            <span className="italic text-primaryMuted">Transformação</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30"></div>
          </div>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Veja como sua vida muda quando você aprende a usar sua voz com poder
          </p>
        </div>

        {/* Comparação Before/After */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          
          {/* Coluna ANTES - Problemas */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            onMouseEnter={() => setActiveColumn('before')}
            onMouseLeave={() => setActiveColumn(null)}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-4 bg-red-500/10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 ${activeColumn === 'before' ? 'opacity-100' : ''}`}></div>
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-red-50 border-2 border-red-200 text-red-700 px-5 py-3 rounded-full text-sm font-medium mb-8 shadow-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full blur animate-pulse"></div>
                  <div className="relative w-2.5 h-2.5 rounded-full bg-red-500"></div>
                </div>
                <span>Quando você não se comunica bem</span>
              </div>
              
              {/* Título */}
              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                O que acontece:
                <X className="text-red-500" size={28} strokeWidth={2.5} />
              </h3>
              
              {/* Lista de problemas */}
              <div className="space-y-4 mb-10">
                {beforeItems.map((item, i) => (
                  <div 
                    key={i}
                    className={`group relative transition-all duration-500 hover:-translate-x-2 ${activeColumn === 'before' ? 'opacity-100' : 'opacity-80'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    {/* Glow no hover */}
                    <div className="absolute -inset-2 bg-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-stone-200 group-hover:border-red-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-red-400 rounded-full blur group-hover:blur-md transition-all"></div>
                        <div className="relative w-3 h-3 rounded-full bg-red-400"></div>
                      </div>
                      <span className="text-base text-stone-700 leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quote destaque */}
              <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 sm:p-8 border-2 border-red-200/50 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl"></div>
                <p className="relative text-stone-600 italic leading-relaxed">
                  Não porque você é fraca. Mas porque nunca te ensinaram a <span className="font-semibold text-stone-900 not-italic">usar sua voz como ferramenta de poder.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Divisor visual - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primaryMuted rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <ArrowRight className="text-white" size={24} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Coluna DEPOIS - Soluções */}
          <div 
            className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            onMouseEnter={() => setActiveColumn('after')}
            onMouseLeave={() => setActiveColumn(null)}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-4 bg-accent/10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 ${activeColumn === 'after' ? 'opacity-100' : ''}`}></div>
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/20 to-accent/20 border-2 border-secondary text-primary px-5 py-3 rounded-full text-sm font-medium mb-8 shadow-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent rounded-full blur animate-pulse"></div>
                  <div className="relative w-2.5 h-2.5 rounded-full bg-accent"></div>
                </div>
                <span>Quando você aprende</span>
              </div>
              
              {/* Título */}
              <h3 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-8 flex items-center gap-3">
                A transformação:
                <Check className="text-accent" size={28} strokeWidth={2.5} />
              </h3>
              
              {/* Lista de benefícios */}
              <div className="space-y-4 mb-10">
                {afterItems.map((item, i) => (
                  <div 
                    key={i}
                    className={`group relative transition-all duration-500 hover:translate-x-2 ${activeColumn === 'after' ? 'opacity-100' : 'opacity-80'}`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                  >
                    {/* Glow no hover */}
                    <div className="absolute -inset-2 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative flex items-center gap-4 p-5 bg-gradient-to-r from-secondarySoft to-white rounded-2xl border-2 border-secondary/30 group-hover:border-accent shadow-sm group-hover:shadow-md transition-all duration-300">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-accent rounded-full blur group-hover:blur-md transition-all"></div>
                        <div className="relative w-3 h-3 rounded-full bg-accent"></div>
                      </div>
                      <span className="text-base text-stone-700 font-medium leading-relaxed">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quote destaque */}
              <div className="relative bg-gradient-to-br from-secondary/10 via-accent/5 to-white rounded-2xl p-6 sm:p-8 border-2 border-secondary shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                <p className="relative text-lg text-primary font-semibold leading-relaxed">
                  Porque a sua voz muda... <span className="italic text-primaryMuted">e a sua vida acompanha.</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Bottom */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-3 rounded-full border border-primary/20 mb-6">
            <Sparkles className="text-accent" size={16} />
            <span className="text-sm text-stone-700">Pronta para começar sua transformação?</span>
          </div>
          <p className="text-stone-600 text-lg">
            Escolha o caminho que faz sentido para você agora
          </p>
        </div>

      </div>
    </section>
  );
}