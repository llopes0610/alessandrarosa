'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

interface CTAProps {
  isVisible: boolean;
}

export default function CTA({ isVisible }: CTAProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className={`relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background gradiente premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4f3f2f] via-[#3a2f24] to-[#2d2419]" />
      
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Orbs animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cdb9a1]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Parallax effect sutil com mouse */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
        }}
      >
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-accent rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-secondary rounded-full"></div>
      </div>

      <div className="relative mx-auto max-w-5xl z-10">
        
        {/* Ícone decorativo */}
        <div className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
              <Heart className="text-white" size={28} fill="white" />
            </div>
          </div>
        </div>

        {/* Headline principal */}
        <div className={`text-center mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.1] text-white mb-6">
            Você não precisa provar
            <br />
            <span className="italic text-secondary">nada para ninguém.</span>
          </h2>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/50"></div>
            <Sparkles className="text-accent" size={20} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50"></div>
          </div>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 mb-4">
            Só precisa <span className="font-semibold text-secondary italic">parar de se abandonar.</span>
          </p>
        </div>

        {/* Card de destaque */}
        <div className={`relative max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden">
            {/* Pattern interno */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-4">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                Tenha orgulho da sua história.
              </p>
              <p className="text-xl sm:text-2xl text-secondary font-light">
                Ela é sua — e de mais ninguém.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Botão principal */}
          <button className="group relative w-full sm:w-auto bg-gradient-to-r from-secondary via-[#d4c4ad] to-secondary hover:from-accent hover:via-secondary hover:to-accent text-primary px-10 sm:px-12 py-5 sm:py-6 rounded-full text-lg sm:text-xl font-light transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/30 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Comece Agora pelo Voz que Posiciona
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={22} />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>

          {/* Botão secundário */}
          <button className="group relative w-full sm:w-auto bg-white/5 backdrop-blur-sm border-2 border-secondary/30 hover:border-secondary text-white px-8 sm:px-10 py-5 sm:py-6 rounded-full text-base sm:text-lg font-light transition-all duration-300 hover:bg-white/10">
            <span className="flex items-center justify-center gap-2">
              Conhecer a Mentoria
            </span>
          </button>
        </div>

        {/* Footer info */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 text-white/60 text-sm sm:text-base">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            <span>Dê o primeiro passo do seu recomeço hoje</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
          </div>
        </div>

        {/* Stats rápidos */}
        <div className={`grid grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center group cursor-default">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-3xl sm:text-4xl font-serif text-secondary font-bold">200+</div>
            </div>
            <p className="text-xs sm:text-sm text-white/70">Mulheres transformadas</p>
          </div>
          
          <div className="text-center group cursor-default">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-3xl sm:text-4xl font-serif text-secondary font-bold">15+</div>
            </div>
            <p className="text-xs sm:text-sm text-white/70">Anos de experiência</p>
          </div>
          
          <div className="text-center group cursor-default">
            <div className="relative inline-block mb-3">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative text-3xl sm:text-4xl font-serif text-secondary font-bold">98%</div>
            </div>
            <p className="text-xs sm:text-sm text-white/70">Satisfação</p>
          </div>
        </div>

      </div>

      {/* Brilho no bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
    </section>
  );
}