'use client';

import React, { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisibleSections((prev) => {
            const next = new Set(prev);
            next.add(index);
            return next;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* ================= Header ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logoNome.svg"
                alt="Recomeçar com Propósito — Alessandra Rosa"
                className="w-36 sm:w-48 h-auto"
              />
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                document
                  .querySelector('#cta')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full bg-primary hover:bg-primaryMuted px-5 py-2.5 text-sm font-light text-white transition sm:px-6 sm:py-3 sm:text-base"
            >
              Começar Jornada
            </button>
          </div>
        </div>
      </header>

      {/* ================= Hero ================= */}
      {/* ⚠️ Compensação do header fixo */}
      <main className="pt-[calc(5rem+2rem)] sm:pt-40">
        <div ref={(el) => addToRefs(el, 0)}>
          <Hero isVisible={visibleSections.has(0)} />
        </div>

        {/* ================= About ================= */}
        <div ref={(el) => addToRefs(el, 1)}>
          <About isVisible={visibleSections.has(1)} />
        </div>

        {/* ================= Offerings ================= */}
        <div ref={(el) => addToRefs(el, 2)}>
          <Offerings isVisible={visibleSections.has(2)} />
        </div>

        {/* ================= Benefits ================= */}
        <div ref={(el) => addToRefs(el, 3)}>
          <Benefits isVisible={visibleSections.has(3)} />
        </div>

        {/* ================= CTA ================= */}
        <div id="cta" ref={(el) => addToRefs(el, 4)}>
          <CTA isVisible={visibleSections.has(4)} />
        </div>

        {/* ================= Footer ================= */}
        <Footer />
      </main>
    </div>
  );
}
