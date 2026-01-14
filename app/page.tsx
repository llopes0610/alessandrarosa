'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, MessageCircle, Target, Users, Sparkles, Star } from 'lucide-react';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-amber-50 to-stone-50">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-stone-800">
              Recomeçar
            </div>
            <button className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Começar Agora
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-stone-200/50 text-stone-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Recomeço com Voz e Posicionamento
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-stone-800">
                Tenha orgulho da sua história.
                <br />
                <span className="text-stone-600 text-3xl lg:text-4xl mt-4 block">
                  Agora aprenda a falar por ela.
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-lg text-stone-700 font-medium">
                  VOCÊ NÃO ESTÁ AQUI POR ACASO...
                </p>
                <p className="text-stone-600 leading-relaxed">
                  Você chegou até este espaço porque algo dentro de você cansou de se calar, de se adaptar demais, de se esquecer.
                </p>
                <p className="text-stone-600">Talvez você esteja:</p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    saindo de uma fase difícil
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    se sentindo invisível
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    tentando se reconstruir
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                    ou apenas cansada de não ser ouvida
                  </li>
                </ul>
              </div>

              <button className="bg-stone-700 hover:bg-stone-800 text-white px-10 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-xl">
                QUERO FAZER PARTE DA MENTORIA
              </button>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/alessandra.jpg" 
                  alt="Alessandra Rosa" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-stone-300/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-2xl text-center text-stone-700 font-light">
          Você não precisa mudar quem você é.
          <br />
          <span className="font-semibold text-stone-800">
            Você só precisa aprender a se posicionar com a sua verdade.
          </span>
        </p>
      </div>

      {/* Offerings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">O Que Está Sendo Lançado</span>
            <h2 className="text-4xl font-bold text-stone-800 mt-2 mb-4">
              Duas experiências. Um mesmo caminho.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mini-curso */}
            <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-stone-200">
              <div className="bg-gradient-to-br from-stone-600 to-stone-700 p-8">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  O Começo
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Mini-curso
                  <br />
                  VOZ QUE POSICIONA
                </h3>
              </div>
              
              <div className="p-8">
                <p className="text-stone-600 mb-6 text-lg">
                  Aqui você aprende a:
                </p>
                <ul className="space-y-4 mb-8">
                  {['Falar com clareza', 'Colocar limites', 'Se expressar sem culpa', 'Sair do silêncio e da explosão'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-stone-600"></div>
                      </div>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-stone-100 rounded-2xl p-6 mb-6 border border-stone-200">
                  <p className="text-stone-800 font-semibold text-center">
                    É onde sua voz volta para você.
                  </p>
                </div>

                <button className="w-full bg-stone-700 hover:bg-stone-800 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Começar Agora
                </button>
              </div>
            </div>

            {/* Mentoria */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-orange-200">
              <div className="bg-gradient-to-br from-orange-600 to-amber-700 p-8">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  O Próximo Capítulo
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Mentoria
                  <br />
                  RECOMEÇO COM PROPÓSITO
                </h3>
              </div>
              
              <div className="p-8">
                <p className="text-stone-600 mb-6 text-lg">
                  Aqui você aprofunda:
                </p>
                <ul className="space-y-4 mb-8">
                  {['Sua autoestima', 'Seus limites', 'Sua história', 'Seus relacionamentos', 'Seu posicionamento profissional'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                      </div>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-orange-50 rounded-2xl p-6 mb-6 border border-orange-200">
                  <p className="text-orange-900 font-semibold text-center">
                    Não é só sobre falar. É sobre se escolher.
                  </p>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Quero Saber Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sem comunicação */}
            <div className="space-y-6">
              <div className="inline-block bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-semibold border border-red-200">
                O que acontece quando você não se comunica bem
              </div>
              <h3 className="text-3xl font-bold text-stone-800">
                Você:
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
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-600 italic pt-4 text-sm">
                Não porque você é fraca. Mas porque nunca te ensinaram a <span className="font-semibold text-stone-800">usar sua voz como ferramenta de poder.</span>
              </p>
            </div>

            {/* Com aprendizado */}
            <div className="space-y-6">
              <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                O que acontece quando você aprende
              </div>
              <h3 className="text-3xl font-bold text-stone-800">
                Você:
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
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-stone-800 font-semibold text-lg pt-4">
                Porque a sua voz muda... e a sua vida acompanha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-stone-600 font-semibold text-sm uppercase tracking-wider">Quem Te Guia</span>
          <h2 className="text-4xl font-bold text-stone-800 mt-2 mb-6">
            Alessandra Rosa
          </h2>
          <div className="space-y-2 mb-8">
            <p className="text-stone-600">Representante Comercial</p>
            <p className="text-stone-600">Gestão de Relações Humanas</p>
            <p className="text-stone-800 font-semibold">Mentora de mulheres em recomeço</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-stone-200">
            <p className="text-2xl text-stone-700 font-light">
              Eu não ensino mulheres a gritar.
              <br />
              <span className="font-bold text-stone-800">
                Eu ensino mulheres a se posicionar.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Como Funciona o Caminho
          </h2>
          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 border border-stone-200">
            <p className="text-lg text-stone-700 mb-4">
              Você começa pelo:
            </p>
            <p className="text-2xl font-bold text-stone-800 mb-2">
              Voz que Posiciona
            </p>
            <p className="text-stone-600 mb-4">
              e se quiser aprofundar, continua na
            </p>
            <p className="text-2xl font-bold text-stone-800 mb-6">
              Mentoria Recomeço com Propósito
            </p>
            <div className="space-y-2 text-stone-600">
              <p>Um leva ao outro.</p>
              <p>Sem pressão.</p>
              <p className="font-semibold">Com consciência.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For You Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Este Espaço é Para Você Se:
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Você sente que se perdeu de si',
              'Quer se reconstruir',
              'Quer falar sem medo',
              'Quer se respeitar',
              'Quer viver com mais verdade'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-stone-200">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-stone-700 to-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Você não precisa provar nada para ninguém.
          </h2>
          <p className="text-2xl mb-8 font-light">
            Só precisa <span className="font-semibold">parar de se abandonar.</span>
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <p className="text-3xl font-bold mb-2">
              Tenha orgulho da sua história.
            </p>
            <p className="text-xl">
              Ela é sua — e de mais ninguém.
            </p>
          </div>

          <button className="bg-white text-stone-800 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3">
            Comece Agora pelo Voz que Posiciona
            <ArrowRight size={24} />
          </button>
          
          <p className="mt-6 text-white/80">
            👇 Dê o primeiro passo do seu recomeço
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold text-stone-300 mb-4">
            Recomeçar
          </div>
          <p className="text-stone-400">
            © 2025 Alessandra Rosa. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;