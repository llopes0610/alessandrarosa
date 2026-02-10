'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AnaliseDePerfilPage() {
  return (
    <main className="bg-white">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-6">
          Análise de Perfil Comportamental
        </h1>

        <p className="text-lg text-stone-600 mb-10">
          Um mapa claro de como você se comunica, reage emocionalmente
          e se posiciona nas relações pessoais e profissionais.
        </p>

        <div className="space-y-6 text-stone-700 leading-relaxed">
          <p>
            Mais do que um teste, esta análise revela padrões de comportamento,
            pontos fortes e ajustes necessários para uma comunicação mais consciente.
          </p>
          <p>
            A forma como você fala nasce da sua história, das suas experiências
            e da forma como aprendeu a se proteger.
          </p>
          <p>
            Com clareza, você deixa de se confundir — e passa a se posicionar.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 rounded-full bg-accent text-primary px-8 py-4 hover:opacity-90 transition"
          >
            Quero minha análise
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
