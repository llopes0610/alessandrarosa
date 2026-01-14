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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div>
              <div className="font-serif text-2xl sm:text-3xl leading-none tracking-tight text-stone-900">
                Recomeçar
              </div>

              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-stone-500 font-light">
                com propósito
              </div>
            </div>
            <button
              onClick={() =>
                document
                  .querySelector('#cta')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-light text-white transition hover:bg-stone-800 sm:px-6 sm:py-3 sm:text-base"
            >
              Começar Jornada
            </button>
          </div>
        </div>
      </header>

      {/* ================= Hero ================= */}
      <div id="hero" ref={(el) => addToRefs(el, 0)}>
        <Hero isVisible={visibleSections.has(0)} />
      </div>

      {/* ================= Philosophy ================= */}
      <section
        id="philosophy"
        ref={(el) => addToRefs(el, 1)}
        className={`bg-white px-4 py-16 transition-all duration-1000 sm:px-6 sm:py-24 lg:px-8 lg:py-32 ${visibleSections.has(1) ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 font-serif text-3xl leading-[1.2] text-stone-900 sm:mb-8 sm:text-4xl lg:text-5xl xl:text-6xl">
            Você não precisa mudar
            <br />
            <span className="italic">quem você é.</span>
          </p>

          <div className="mx-auto my-8 h-px w-24 bg-stone-300" />

          <p className="text-xl font-light leading-relaxed text-stone-600 sm:text-2xl">
            Você só precisa{' '}
            <span className="font-semibold italic text-stone-900">
              aprender a se posicionar com a sua verdade.
            </span>
          </p>
        </div>
      </section>

      {/* ================= Offerings ================= */}
      <div id="offerings" ref={(el) => addToRefs(el, 2)}>
        <Offerings isVisible={visibleSections.has(2)} />
      </div>

      {/* ================= Benefits ================= */}
      <div id="benefits" ref={(el) => addToRefs(el, 3)}>
        <Benefits isVisible={visibleSections.has(3)} />
      </div>

      {/* ================= About ================= */}
      <div id="about" ref={(el) => addToRefs(el, 4)}>
        <About isVisible={visibleSections.has(4)} />
      </div>

      {/* ================= CTA ================= */}
      <div id="cta" ref={(el) => addToRefs(el, 5)}>
        <CTA isVisible={visibleSections.has(5)} />
      </div>

      {/* ================= Footer ================= */}
      <Footer />
    </div>
  );
}
