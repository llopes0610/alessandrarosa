'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4f3f2f] via-[#3a2f24] to-[#2d2419]" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#cdb9a1]/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Parallax */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />

      <div className="relative mx-auto max-w-5xl z-10">

        {/* Ícone */}
        <div
          className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
              <Heart className="text-white" size={28} fill="white" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div
          className={`text-center mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white mb-6">
            Você não precisa provar
            <br />
            <span className="italic text-secondary">nada para ninguém.</span>
          </h2>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary/50" />
            <Sparkles className="text-accent" size={20} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary/50" />
          </div>

          <p className="text-2xl sm:text-3xl font-light text-white/90">
            Só precisa{' '}
            <span className="font-semibold text-secondary italic">
              parar de se abandonar.
            </span>
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* CTA PRINCIPAL */}
          <Link
            href="/servicos/voz-que-posiciona"
            className="
              group relative w-full sm:w-auto
              bg-secondary
              hover:bg-accent
              text-white
              px-10 sm:px-12 py-5 sm:py-6
              rounded-full
              text-lg sm:text-xl font-medium
              transition-all duration-300
              hover:shadow-2xl hover:scale-[1.02]
              flex items-center justify-center gap-3
            "
          >
            Começar pelo Voz que Posiciona
            <ArrowRight
              size={22}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>

          {/* CTA SECUNDÁRIO */}
          <Link
            href="/servicos/recomecar-com-voz"
            className="
              group relative w-full sm:w-auto
              border-2 border-secondary
              text-white
              px-8 sm:px-10 py-5 sm:py-6
              rounded-full
              text-base sm:text-lg font-medium
              transition-all duration-300
              hover:bg-secondary hover:text-primary
              flex items-center justify-center gap-2
            "
          >
            Conhecer a Mentoria
          </Link>
        </div>

        {/* Footer info */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-white/60 text-sm sm:text-base">
            Dê o primeiro passo do seu recomeço hoje
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
    </section>
  );
}
