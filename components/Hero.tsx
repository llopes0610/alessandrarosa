'use client';

import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-0 bg-secondarySoft overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end lg:items-center">

          {/* Texto */}
          <div
            className={`max-w-xl space-y-6 sm:space-y-7 pb-8 sm:pb-0 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-primary">
              Recomeçar com voz
              <br />
              <span className="italic">e posicionamento</span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-stone-700 leading-relaxed">
              Tenha orgulho da sua história.
              <br />
              Agora aprenda a falar por ela.
            </p>

            <p className="font-sans uppercase tracking-widest text-xs text-stone-800 font-medium">
              Você não está aqui por acaso
            </p>

            <p className="font-sans text-stone-600 leading-relaxed">
              Você chegou até este espaço porque algo dentro de você cansou de se
              calar, de se adaptar demais, de se esquecer.
            </p>

            <ul className="font-sans space-y-1.5 text-stone-700">
              <li>• Saindo de uma fase difícil</li>
              <li>• Se sentindo invisível</li>
              <li>• Tentando se reconstruir</li>
              <li>• Ou apenas cansada de não ser ouvida</li>
            </ul>

            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primaryMuted text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
              Quero fazer parte da mentoria
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Imagem - Rente ao final em todos os tamanhos */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background decorativo */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondaryMuted/30 rounded-full blur-3xl"></div>
              
              {/* Imagem sempre rente ao fundo */}
              <div className="relative">
                <img
                  src="/alessandra.svg"
                  alt="Alessandra Rosa"
                  className="w-full h-auto drop-shadow-2xl relative z-10"
                  style={{ 
                    marginBottom: '-1px',
                    maxHeight: '650px',
                    objectFit: 'contain',
                    objectPosition: 'bottom'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curva suave na transição (opcional) */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}