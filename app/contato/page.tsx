import { MessageCircle } from "lucide-react";

export default function ContatoPage() {
  return (
    <main className="bg-stone-50">
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-xs text-stone-500 mb-4">
            Fale comigo
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl text-primary mb-6">
            Dúvidas ou direcionamento?
          </h1>

          <p className="text-lg text-stone-600 mb-12">
            Se você não sabe qual caminho faz mais sentido para o seu momento,
            fale comigo diretamente.
          </p>

          <a
            href="https://wa.me/5513974151306"
            target="_blank"
            className="
              inline-flex items-center gap-3
              bg-primary hover:bg-primaryMuted
              text-white
              px-10 py-5
              rounded-full
              text-lg
              transition
              hover:shadow-xl
            "
          >
            <MessageCircle size={22} />
            Falar no WhatsApp
          </a>

          <p className="mt-6 text-sm text-stone-500">
            Atendimento humano • Resposta direta
          </p>

        </div>
      </section>
    </main>
  );
}
