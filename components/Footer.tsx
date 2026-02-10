'use client';

import Link from 'next/link';

const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/contato' },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-200 px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* BRAND / POSICIONAMENTO */}
        <div>
          <h3 className="font-serif text-2xl text-white mb-4">
            Alessandra Rosa
          </h3>

          <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
            Mentoria e desenvolvimento humano com foco em comunicação consciente,
            posicionamento e fortalecimento da identidade feminina.
          </p>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h4 className="uppercase tracking-widest text-xs text-stone-400 mb-6">
            Navegação
          </h4>

          <ul className="space-y-4 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="
                    inline-block
                    text-stone-300
                    hover:text-white
                    transition-colors
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO (SEM REDES SOCIAIS) */}
        <div>
          <h4 className="uppercase tracking-widest text-xs text-stone-400 mb-6">
            Contato
          </h4>

          <p className="text-sm text-stone-400 leading-relaxed mb-4">
            Para dúvidas, informações ou direcionamento sobre os serviços,
            entre em contato diretamente.
          </p>

          <Link
            href="/contato"
            className="
              inline-flex items-center gap-2
              text-sm font-medium
              text-white
              border-b border-white/30
              hover:border-white
              transition
            "
          >
            Ir para página de contato →
          </Link>
        </div>
      </div>

      {/* DIVISOR */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center">
        <p className="text-xs text-stone-500 tracking-wide">
          © {new Date().getFullYear()} Alessandra Rosa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
