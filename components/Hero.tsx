'use client';

import { ArrowRight } from 'lucide-react';

interface HeroProps {
  isVisible: boolean;
}

export default function Hero({ isVisible }: HeroProps) {
  return (
    <section className="pt-32 sm:pt-40 pb-20 bg-secondarySoft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div
            className={`max-w-xl space-y-7 transition-all duration-1000 ease-out ${
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

            <p className="font-sans uppercase tracking-widest text-xs text-stone-800">
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

            <button className="inline-flex items-center gap-3 bg-primary hover:bg-primaryMuted text-white px-8 py-4 rounded-full transition hover:shadow-lg">
              Quero fazer parte da mentoria
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Imagem */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="/alessandra.svg"
              alt="Alessandra Rosa"
              className="w-full max-w-md lg:max-w-lg h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
