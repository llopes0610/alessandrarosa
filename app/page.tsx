'use client';

import { useEffect, useRef, useState } from 'react';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Offerings from '@/components/Offerings';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';;
import MentorshipActivity from '@/components/MentorshipActivity';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.75;

        if (rect.top < triggerPoint) {
          setVisibleSections((prev) => {
            if (prev.has(index)) return prev;
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
    sectionRefs.current[index] = el;
  };

  return (
    <div className="min-h-screen bg-stone-50">

   

      {/* ================= MAIN ================= */}
      {/* compensação do header fixo */}
      <main className="pt-[calc(5rem+2rem)] sm:pt-40">

        {/* HERO */}
        <section ref={(el) => addToRefs(el, 0)}>
          <Hero isVisible={visibleSections.has(0)} />
        </section>

        {/* ABOUT */}
        <section ref={(el) => addToRefs(el, 1)}>
          <About isVisible={visibleSections.has(1)} />
        </section>

        {/* OFFERINGS / SERVIÇOS */}
        <section ref={(el) => addToRefs(el, 2)}>
          <Offerings isVisible={visibleSections.has(2)} />
        </section>

        {/* BENEFITS */}
        <section ref={(el) => addToRefs(el, 3)}>
          <Benefits isVisible={visibleSections.has(3)} />
        </section>

        {/* CTA FINAL */}
        <section ref={(el) => addToRefs(el, 4)}>
          <CTA isVisible={visibleSections.has(4)} />
        </section>

    
      </main>

      {/* ================= PROVA SOCIAL (FIXO) ================= */}
      <MentorshipActivity />

    </div>
  );
}
