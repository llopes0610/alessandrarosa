'use client';

import { ArrowRight } from 'lucide-react';

interface CTAProps {
  isVisible: boolean;
}

export default function CTA({ isVisible }: CTAProps) {
  return (
    <section
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-stone-900 to-stone-950" />

      <div className="relative mx-auto max-w-4xl text-center text-white z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
          Você não precisa provar
          <br />
          <span className="italic">nada para ninguém.</span>
        </h2>

        <p className="text-xl font-light mb-10">
          Só precisa <span className="font-semibold">parar de se abandonar.</span>
        </p>

        <button className="group bg-secondary text-primary px-10 py-5 rounded-full text-lg font-light hover:scale-105 transition inline-flex items-center gap-3">
          Comece agora
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
