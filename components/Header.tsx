'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <Link href="/" className="flex items-center">
              <img
                src="/logoNome.svg"
                alt="Alessandra Rosa"
                className="w-36 h-auto"
              />
            </Link>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-stone-700">
              <Link href="/" className="hover:text-primary transition">Início</Link>
              <Link href="/servicos" className="hover:text-primary transition">Serviços</Link>
              <Link href="/sobre" className="hover:text-primary transition">Sobre</Link>
              <Link href="/contato" className="hover:text-primary transition">Contato</Link>
            </nav>

            {/* CTA DESKTOP */}
            <Link
              href="/servicos"
              className="hidden md:inline-flex rounded-full bg-primary hover:bg-primaryMuted px-6 py-3 text-sm text-white transition"
            >
              Conhecer serviços
            </Link>

            {/* BOTÃO MOBILE */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2"
              aria-label="Abrir menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MENU MOBILE */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <span className="font-serif text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 py-10 text-lg text-stone-700">
          <Link onClick={() => setOpen(false)} href="/">Início</Link>
          <Link onClick={() => setOpen(false)} href="/servicos">Serviços</Link>
          <Link onClick={() => setOpen(false)} href="/sobre">Sobre</Link>
          <Link onClick={() => setOpen(false)} href="/contato">Contato</Link>

          <Link
            onClick={() => setOpen(false)}
            href="/servicos"
            className="mt-6 rounded-full bg-primary px-6 py-4 text-center text-white"
          >
            Conhecer serviços
          </Link>
        </nav>
      </aside>
    </>
  );
}
