'use client';

import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function SobrePage() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-white overflow-hidden">

      {/* Background sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="text-accent" size={18} />
            <span className="text-xs uppercase tracking-[0.3em] text-stone-600">
              Quem te guia
            </span>
            <Sparkles className="text-accent" size={18} />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.15] mb-6">
            Alessandra Rosa
          </h1>

          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed">
            Mentora de mulheres em recomeço, comunicação consciente
            e fortalecimento da identidade feminina.
          </p>
        </div>

        {/* ================= GRID IMAGEM + TEXTO ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGEM */}
          <div className="relative">
            <div className="absolute -inset-6 bg-secondarySoft rounded-[2.5rem] blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl">
              <Image
                src="/alessandraSobre.png"
                alt="Alessandra Rosa"
                width={900}
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="space-y-6 text-stone-700 leading-relaxed">

            <p>
              Alessandra Rosa atua com <strong>Gestão de Pessoas</strong>,
              com foco no desenvolvimento humano, comunicação consciente
              e fortalecimento das relações no ambiente profissional.
            </p>

            <p>
              Seu trabalho valoriza comportamento, postura e clareza
              como pilares para resultados sustentáveis — porque,
              antes de qualquer técnica, estão as pessoas.
            </p>

            <p>
              É <strong>mentora de mulheres em fase de recomeço</strong>,
              conduzindo processos de autoconhecimento,
              posicionamento e fortalecimento da voz feminina,
              sempre com respeito à história, à essência
              e ao momento de cada mulher.
            </p>

            <p>
              Também atua como <strong>representante comercial</strong>,
              com experiência prática em vendas, negociação
              e relacionamento com clientes.
              Essa vivência traz autoridade real ao seu trabalho,
              unindo técnica, sensibilidade
              e aplicação prática da comunicação no dia a dia.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 mt-8 italic text-primary text-lg">
              “Eu não ensino mulheres a se impor.
              <br />
              Eu ensino mulheres a se posicionar.”
            </blockquote>

          </div>
        </div>

      </div>
    </section>
  );
}
