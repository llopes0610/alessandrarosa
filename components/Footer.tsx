'use client';

import { Instagram, Youtube, Linkedin } from 'lucide-react';

const navigation = [
  { label: 'Início', href: '#hero' },
  { label: 'Propósito', href: '#philosophy' },
  { label: 'O que oferecemos', href: '#offerings' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Sobre', href: '#about' },
  { label: 'Começar', href: '#cta' },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-200 px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-2">
            Recomeçar
          </h3>
          <p className="text-sm text-stone-400 leading-relaxed">
            Um espaço de reconexão, clareza e posicionamento.
            <br />
            Não para mudar quem você é, mas para viver com verdade.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="uppercase tracking-widest text-xs text-stone-400 mb-4">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleScroll(item.href)}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="uppercase tracking-widest text-xs text-stone-400 mb-4">
            Conecte-se
          </h4>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              <Youtube size={18} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center">
        <p className="text-xs text-stone-500 tracking-wide">
          © {new Date().getFullYear()} Alessandra Rosa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
