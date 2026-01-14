'use client';

import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section className="pt-28 sm:pt-32">
      
      {/* ================= BANNER ================= */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-[1500ms] ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
        }`}
      >
        <img
          src="/alessandra.jpg"
          alt="Alessandra Rosa"
          className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] object-cover"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Tag */}
            <span className="inline-block bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider">
              Recomeço com Voz e Posicionamento
            </span>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-stone-900 mb-4">
                Tenha orgulho
                <br />
                <span className="italic">da sua história.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-stone-700 font-light">
                Agora aprenda a falar por ela.
              </p>
            </div>

            <div className="h-px w-20 bg-stone-300" />

            {/* Description */}
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wider text-stone-900 font-medium">
                Você não está aqui por acaso
              </p>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
                Você chegou até este espaço porque algo dentro de você cansou de
                se calar, de se adaptar demais, de se esquecer.
              </p>
            </div>

            {/* Pain Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {[
                'Saindo de uma fase difícil',
                'Se sentindo invisível',
                'Tentando se reconstruir',
                'Cansada de não ser ouvida',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-200 hover:shadow-md transition"
                >
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-600" />
                  <span className="text-sm sm:text-base text-stone-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="group inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-full transition-all hover:shadow-xl">
                <span className="text-base sm:text-lg font-light">
                  Iniciar Minha Transformação
                </span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-stone-200">
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
                <p className="text-sm text-stone-600">
                  <span className="font-semibold text-stone-900">200+</span>{' '}
                  mulheres transformadas
                </p>
              </div>

              <div className="h-8 w-px bg-stone-300 hidden sm:block" />

              <div>
                <p className="text-2xl font-light text-stone-900">98%</p>
                <p className="text-sm text-stone-600">Taxa de satisfação</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
