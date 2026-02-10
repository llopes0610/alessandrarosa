'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicosPage() {
  return (
    <main className="bg-stone-50">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-stone-500 mb-4">
            Serviços
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
            Caminhos diferentes.
            <br />
            <span className="italic text-primaryMuted">O mesmo propósito.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-stone-600 mb-16">
            Cada serviço foi criado para um momento específico da sua jornada.
            Escolha o que faz sentido agora — não o que parece certo para os outros.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Voz que Posiciona */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl text-primary mb-3">
                  Voz que Posiciona
                </h2>
                <p className="text-stone-600 mb-6">
                  Um mini curso de oratória e comunicação consciente para mulheres
                  que desejam se expressar com clareza, firmeza e respeito.
                </p>
              </div>

              <Link
                href="/servicos/voz-que-posiciona"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-6 py-3 hover:bg-primaryMuted transition"
              >
                Conhecer
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Recomeçar com Voz */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl text-primary mb-3">
                  Recomeçar com Voz
                </h2>
                <p className="text-stone-600 mb-6">
                  Uma mentoria profunda para mulheres em fase de recomeço que
                  desejam reconstruir identidade, limites e posicionamento.
                </p>
              </div>

              <Link
                href="/servicos/recomecar-com-voz"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-white px-6 py-3 hover:opacity-90 transition"
              >
                Entender a Mentoria
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Análise de Perfil */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-2xl text-primary mb-3">
                  Análise de Perfil Comportamental
                </h2>
                <p className="text-stone-600 mb-6">
                  Um mapa claro de como você se comunica, reage emocionalmente
                  e se posiciona nas relações.
                </p>
              </div>

              <Link
                href="/servicos/analise-de-perfil"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-primary px-6 py-3 hover:opacity-90 transition"
              >
                Ver Detalhes
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-20 inline-flex items-center gap-2 text-stone-500">
            <Sparkles size={16} />
            <span>Você não precisa fazer tudo agora. Só o que é verdadeiro.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
