'use client';

import { ArrowRight } from 'lucide-react';

interface CTAProps {
  isVisible: boolean;
}

export default function CTA({ isVisible }: CTAProps) {
  return (
    <section 
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950"></div>
      
      <div className="relative mx-auto max-w-4xl text-center text-white z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight mb-6 sm:mb-8">
          Você não precisa provar
          <br />
          <span className="italic">nada para ninguém.</span>
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-10 sm:mb-12 text-white/90">
          Só precisa <span className="font-semibold">parar de se abandonar.</span>
        </p>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 mb-10 sm:mb-12 border border-white/10">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-3">
            Tenha orgulho da sua história.
          </p>
          <p className="text-lg sm:text-xl text-white/80">
            Ela é sua — e de mais ninguém.
          </p>
        </div>

        <button className="w-full sm:w-auto group bg-white text-stone-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-base sm:text-lg font-light transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3">
          <span>Comece Agora pelo Voz que Posiciona</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
        
        <p className="mt-6 sm:mt-8 text-sm sm:text-base text-white/60">
          👇 Dê o primeiro passo do seu recomeço
        </p>
      </div>
    </section>
  );
}