'use client';

import { Quote } from 'lucide-react';

interface AboutProps {
  isVisible: boolean;
}

export default function About({ isVisible }: AboutProps) {
  return (
    <section 
      className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-100 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-stone-500">Quem Te Guia</span>
        <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 mt-4 mb-6">
          Alessandra Rosa
        </h2>
        <div className="space-y-1 mb-10">
          <p className="text-sm sm:text-base text-stone-600">Representante Comercial</p>
          <p className="text-sm sm:text-base text-stone-600">Gestão de Relações Humanas</p>
          <p className="text-sm sm:text-base text-stone-900 font-semibold">Mentora de mulheres em recomeço</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-stone-200">
            <Quote className="text-stone-300 mb-4 mx-auto" size={36} />
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-stone-700 leading-relaxed mb-4">
              Eu não ensino mulheres a gritar.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-stone-900 italic">
              Eu ensino mulheres a se posicionar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}