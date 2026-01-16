'use client';

import { useState } from 'react';
import { Quote, Award, Heart, Sparkles } from 'lucide-react';

interface AboutProps {
  isVisible: boolean;
}

export default function About({ isVisible }: AboutProps) {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section 
      className={`relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f5f1ed] via-[#faf8f5] to-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background orgânico e sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cdb9a1]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4f3f2f]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cdb9a1]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        
        {/* Header Premium - Apenas QUEM TE GUIA */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge QUEM TE GUIA - Premium */}
          <div className="relative inline-flex items-center gap-4 sm:gap-6 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Linha esquerda */}
            <div className="relative flex items-center gap-2">
              <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-r from-transparent via-primary/40 to-primary/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
            </div>
            
            {/* Texto QUEM TE GUIA */}
            <div className="relative">
              <span className="text-sm sm:text-base lg:text-lg uppercase tracking-[0.35em] font-semibold bg-gradient-to-r from-primary via-primaryMuted to-primary bg-clip-text text-transparent">
                Quem Te Guia
              </span>
              {/* Underline decorativo */}
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
            </div>
            
            {/* Linha direita */}
            <div className="relative flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 sm:w-16 lg:w-20 h-px bg-gradient-to-l from-transparent via-primary/40 to-primary/60"></div>
            </div>
          </div>
        </div>

        {/* Grid: Imagem primeiro no mobile, depois conteúdo */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* Imagem integrada organicamente - PRIMEIRO NO MOBILE */}
          <div className={`relative flex justify-center lg:justify-end order-first transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative max-w-md lg:max-w-lg w-full">
              
              {/* Efeitos orgânicos ao redor da imagem */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#cdb9a1]/20 via-transparent to-[#4f3f2f]/10 rounded-full blur-3xl"></div>
              <div className="absolute -inset-12 bg-gradient-to-tl from-accent/10 via-transparent to-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              {/* Container da imagem - SEM bordas duras */}
              <div className="relative">
                {/* Sombra suave e orgânica */}
                <div className="absolute inset-0 rounded-3xl shadow-2xl opacity-30"></div>
                
                {/* Imagem com transparência natural */}
                <img
                  src="/logoAbout.svg"
                  alt="Alessandra Rosa Mentoria"
                  className="relative w-full h-auto drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 60px rgba(79, 63, 47, 0.15))'
                  }}
                />
              </div>

              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3s' }}></div>
            </div>
          </div>

          {/* Conteúdo - Credenciais - SEGUNDO NO MOBILE */}
          <div className={`space-y-8 order-last transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Credenciais com animação */}
            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  color: 'primary',
                  title: 'Representante Comercial',
                  desc: 'Experiência em negociação e relacionamentos',
                  delay: 0
                },
                {
                  icon: Heart,
                  color: 'secondary',
                  title: 'Gestão de Relações Humanas',
                  desc: 'Especialista em desenvolvimento pessoal',
                  delay: 100
                },
                {
                  icon: Sparkles,
                  color: 'accent',
                  title: 'Mentora de mulheres em recomeço',
                  desc: 'Transformando vidas através do autoconhecimento',
                  delay: 200
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-stone-200/50 hover:border-stone-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-${item.color}/20`}>
                    <item.icon className={`text-${item.color}`} size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg text-stone-900 font-semibold mb-1">{item.title}</p>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Números com hover state */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-stone-200/50">
              {[
                { number: '200+', label: 'Mulheres transformadas', color: 'primary' },
                { number: '15+', label: 'Anos de experiência', color: 'secondary' },
                { number: '98%', label: 'Satisfação', color: 'accent' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="text-center group cursor-default"
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="relative inline-block mb-3">
                    <div className={`absolute inset-0 bg-${stat.color}/20 rounded-full blur-xl transition-all duration-300 ${hoveredStat === i ? 'blur-2xl scale-150' : ''}`}></div>
                    <p className={`relative text-3xl sm:text-4xl font-serif text-${stat.color} font-bold transition-transform duration-300 ${hoveredStat === i ? 'scale-110' : ''}`}>
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Quote Premium com glassmorphism */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background blur orgânico */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#cdb9a1]/30 via-white/50 to-[#4f3f2f]/20 rounded-[2rem] blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-12 lg:p-16 border border-white/50 shadow-2xl overflow-hidden">
            {/* Pattern orgânico interno */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <Quote className="text-primary/30 mb-8 mx-auto" size={48} />
              
              <blockquote className="space-y-6 mb-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif text-primary/90 leading-[1.3] text-center">
                  Eu não ensino mulheres a gritar.
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-primary italic text-center leading-[1.3]">
                  Eu ensino mulheres a se posicionar.
                </p>
              </blockquote>

              {/* Assinatura com linha decorativa */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30"></div>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
                  Com empatia, técnica e experiência real,{' '}
                  <span className="font-semibold text-primary">
                    eu te guio no caminho do seu recomeço autêntico.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Integrado */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-stone-600 text-lg mb-6 font-light">
            Pronta para começar sua jornada de transformação?
          </p>
          <button className="group relative bg-gradient-to-r from-primary to-primaryMuted hover:from-primaryMuted hover:to-primary text-white px-10 py-4 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2 text-base font-light tracking-wide">
              Conhecer a Mentoria
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

      </div>
    </section>
  );
}