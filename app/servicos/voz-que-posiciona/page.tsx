'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VozQuePosicionaPage() {
  return (
    <main className="bg-white">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-6">
          Voz que Posiciona
        </h1>

        <p className="text-lg text-stone-600 mb-10">
          Um mini curso de oratória e comunicação consciente para mulheres que
          desejam se expressar com clareza, firmeza e autenticidade — sem se calar
          ou se impor.
        </p>

        <div className="space-y-6 text-stone-700 leading-relaxed">
          <p>
            Aqui, comunicação não é performance. É presença.
          </p>
          <p>
            Você aprende a falar com maturidade emocional, a colocar limites
            com respeito e a sustentar sua voz mesmo em conversas difíceis.
          </p>
          <p>
            Este curso é para mulheres cansadas de se adaptar demais,
            de engolir palavras ou de reagir de forma impulsiva.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 rounded-full bg-primary text-white px-8 py-4 hover:bg-primaryMuted transition"
          >
            Quero começar pelo curso
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
