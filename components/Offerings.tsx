'use client';

import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

interface OfferingsProps {
  isVisible: boolean;
}

export default function Offerings({ isVisible }: OfferingsProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section 
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-secondarySoft/30 to-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background decorativo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        {/* Header Premium */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-accent" size={20} />
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-stone-600 font-medium">O Que Oferecemos</span>
            <Sparkles className="text-accent" size={20} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-primary leading-[1.15] mb-6">
            Duas experiências.
            <br />
            <span className="italic text-primaryMuted">Um mesmo caminho.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/30"></div>
          </div>

          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Escolha por onde começar sua jornada de transformação
          </p>
        </div>

        {/* Cards Grid Premium */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1 - Mini-curso VOZ QUE POSICIONA */}
          <div 
            className={`group relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-primary to-primaryMuted rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
            
            {/* Card principal */}
            <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-stone-200 group-hover:border-primary/30">
              
              {/* Header com gradiente */}
              <div className="relative bg-gradient-to-br from-[#4f3f2f] via-[#5a4a3a] to-[#4f3f2f] p-10 sm:p-12 overflow-hidden">
                {/* Pattern decorativo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] mb-6 border border-white/20">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span>O Começo</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif text-white leading-tight mb-2">
                    Mini-curso
                  </h3>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    VOZ QUE POSICIONA
                  </p>

                  {/* Ícone decorativo */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl transition-all duration-500 ${hoveredCard === 1 ? 'scale-150' : 'scale-100'}`}></div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-8 sm:p-10">
                <p className="text-stone-600 mb-8 text-lg font-light">
                  Aqui você aprende a:
                </p>
                
                <ul className="space-y-5 mb-10">
                  {[
                    { text: 'Falar com clareza e autenticidade', delay: 0 },
                    { text: 'Colocar limites saudáveis', delay: 100 },
                    { text: 'Se expressar sem culpa', delay: 200 },
                    { text: 'Sair do silêncio e da explosão', delay: 300 }
                  ].map((item, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-4 transition-all duration-500 hover:translate-x-2 ${hoveredCard === 1 ? 'opacity-100' : 'opacity-80'}`}
                      style={{ transitionDelay: `${item.delay}ms` }}
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Check className="text-primary" size={14} strokeWidth={3} />
                      </div>
                      <span className="text-base text-stone-700 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Destaque */}
                <div className="bg-gradient-to-r from-secondarySoft to-white rounded-2xl p-6 sm:p-7 mb-8 border border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
                  <p className="text-base text-center text-primary relative z-10 leading-relaxed">
                    É onde <span className="font-semibold italic text-primaryMuted">sua voz volta para você.</span>
                  </p>
                </div>

                {/* Button Premium */}
                <button className="w-full group/btn relative bg-gradient-to-r from-primary to-primaryMuted hover:from-primaryMuted hover:to-primary text-white py-5 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3 text-base font-light tracking-wide">
                    Começar Agora
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Mentoria RECOMEÇO COM PROPÓSITO */}
          <div 
            className={`group relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
            
            {/* Card principal */}
            <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-stone-200 group-hover:border-secondary/30">
              
              {/* Header com gradiente */}
              <div className="relative bg-gradient-to-br from-[#cdb9a1] via-[#d4c4ad] to-[#cdb9a1] p-10 sm:p-12 overflow-hidden">
                {/* Pattern decorativo */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] mb-6 border border-white/30">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="font-medium">O Próximo Capítulo</span>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-serif text-primary leading-tight mb-2">
                    Mentoria
                  </h3>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-primary tracking-tight">
                    RECOMEÇO COM PROPÓSITO
                  </p>

                  {/* Ícone decorativo */}
                  <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full blur-2xl transition-all duration-500 ${hoveredCard === 2 ? 'scale-150' : 'scale-100'}`}></div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-8 sm:p-10">
                <p className="text-stone-600 mb-8 text-lg font-light">
                  Aqui você aprofunda:
                </p>
                
                <ul className="space-y-5 mb-10">
                  {[
                    { text: 'Sua autoestima e valor próprio', delay: 0 },
                    { text: 'Seus limites pessoais e profissionais', delay: 100 },
                    { text: 'Sua história e narrativa', delay: 200 },
                    { text: 'Seus relacionamentos', delay: 300 },
                    { text: 'Seu posicionamento como mulher', delay: 400 }
                  ].map((item, i) => (
                    <li 
                      key={i} 
                      className={`flex items-start gap-4 transition-all duration-500 hover:translate-x-2 ${hoveredCard === 2 ? 'opacity-100' : 'opacity-80'}`}
                      style={{ transitionDelay: `${item.delay}ms` }}
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/20 group-hover:border-secondary/40 transition-all duration-300">
                        <Check className="text-secondary" size={14} strokeWidth={3} />
                      </div>
                      <span className="text-base text-stone-700 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Destaque */}
                <div className="bg-gradient-to-r from-secondarySoft to-accent/5 rounded-2xl p-6 sm:p-7 mb-8 border border-secondary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
                  <p className="text-base text-center text-primary relative z-10 leading-relaxed">
                    Não é só sobre falar. É sobre <span className="font-semibold italic text-primaryMuted">se escolher.</span>
                  </p>
                </div>

                {/* Button Premium */}
                <button className="w-full group/btn relative bg-gradient-to-r from-secondary to-accent hover:from-accent hover:to-secondary text-white py-5 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3 text-base font-light tracking-wide">
                    Quero Saber Mais
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-stone-600 text-sm sm:text-base">
            💫 Comece pelo que faz mais sentido para você agora
          </p>
        </div>
      </div>
    </section>
  );
}