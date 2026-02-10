'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RecomecarComVozPage() {
  return (
    <main className="bg-stone-50">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-6">
          Mentoria Recomeçar com Voz
        </h1>

        <p className="text-lg text-stone-600 mb-10">
          Um espaço seguro e estruturado para mulheres que desejam se reencontrar,
          se posicionar e seguir com consciência.
        </p>

        <div className="space-y-6 text-stone-700 leading-relaxed">
          <p>
            Esta mentoria não ensina técnicas superficiais de comunicação.
          </p>
          <p>
            É um processo de reconstrução da voz, dos limites e da identidade,
            respeitando a história, o ritmo e o momento de cada mulher.
          </p>
          <p>
            Aqui, comunicação vira maturidade emocional, relações saudáveis
            e crescimento pessoal e profissional.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 rounded-full bg-secondary text-white px-8 py-4 hover:opacity-90 transition"
          >
            Quero entender se é para mim
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
