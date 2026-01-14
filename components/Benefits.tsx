'use client';

interface BenefitsProps {
  isVisible: boolean;
}

export default function Benefits({ isVisible }: BenefitsProps) {
  return (
    <section 
      className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 mb-4">
            A Jornada de
            <br />
            <span className="italic">Transformação</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Coluna Esquerda */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2.5 rounded-full text-xs sm:text-sm border border-red-200">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span>Quando você não se comunica bem</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-6">
              O que acontece:
            </h3>
            
            <div className="space-y-3">
              {[
                'Engole o que sente',
                'Aceita menos do que merece',
                'Se explica demais',
                'Perde respeito',
                'Se apaga'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-stone-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 pl-4 border-l-2 border-stone-200">
              <p className="text-sm sm:text-base text-stone-600 italic">
                Não porque você é fraca. Mas porque nunca te ensinaram a <span className="font-semibold text-stone-900">usar sua voz como ferramenta de poder.</span>
              </p>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2.5 rounded-full text-xs sm:text-sm border border-green-200">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Quando você aprende</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mb-6">
              A transformação:
            </h3>
            
            <div className="space-y-3">
              {[
                'Diz não sem culpa',
                'Fala o que pensa',
                'Escolhe melhor',
                'Melhora relações',
                'Cresce profissionalmente',
                'Se sente inteira'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-orange-200">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 pl-4 border-l-2 border-amber-500">
              <p className="text-base sm:text-lg text-stone-900 font-semibold">
                Porque a sua voz muda... e a sua vida acompanha.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}