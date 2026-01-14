'use client';

import { ArrowRight, Check } from 'lucide-react';

interface OfferingsProps {
  isVisible: boolean;
}

export default function Offerings({ isVisible }: OfferingsProps) {
  return (
    <section 
      className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-stone-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-stone-500">O Que Oferecemos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mt-4 mb-4">
            Duas experiências.
            <br />
            <span className="italic">Um mesmo caminho.</span>
          </h2>
          <div className="h-px w-20 bg-stone-300 mx-auto mt-6"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 - Mini-curso */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-200">
            <div className="bg-gradient-to-br from-stone-700 to-stone-900 p-8 sm:p-10">
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-xs uppercase tracking-wider mb-4">
                O Começo
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                Mini-curso
                <br />
                <span className="font-semibold">VOZ QUE POSICIONA</span>
              </h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <p className="text-stone-600 mb-6 text-base sm:text-lg">
                Aqui você aprende a:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Falar com clareza e autenticidade',
                  'Colocar limites saudáveis',
                  'Se expressar sem culpa',
                  'Sair do silêncio e da explosão'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-stone-600" size={14} />
                    </div>
                    <span className="text-sm sm:text-base text-stone-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-stone-50 rounded-2xl p-6 mb-6 border border-stone-200">
                <p className="text-sm sm:text-base text-center text-stone-800">
                  É onde <span className="font-semibold italic">sua voz volta para você.</span>
                </p>
              </div>

              <button className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                <span className="text-base font-light">Começar Agora</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Card 2 - Mentoria */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-200">
            <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-8 sm:p-10">
              <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-xs uppercase tracking-wider mb-4">
                O Próximo Capítulo
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
                Mentoria
                <br />
                <span className="font-semibold">RECOMEÇO COM PROPÓSITO</span>
              </h3>
            </div>
            
            <div className="p-6 sm:p-8">
              <p className="text-stone-600 mb-6 text-base sm:text-lg">
                Aqui você aprofunda:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Sua autoestima e valor próprio',
                  'Seus limites pessoais e profissionais',
                  'Sua história e narrativa',
                  'Seus relacionamentos',
                  'Seu posicionamento como mulher'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-orange-600" size={14} />
                    </div>
                    <span className="text-sm sm:text-base text-stone-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-orange-50 rounded-2xl p-6 mb-6 border border-orange-200">
                <p className="text-sm sm:text-base text-center text-orange-900">
                  Não é só sobre falar. É sobre <span className="font-semibold italic">se escolher.</span>
                </p>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                <span className="text-base font-light">Quero Saber Mais</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}