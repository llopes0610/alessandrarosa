'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const names = [
  'Ana Souza',
  'Mariana Lopes',
  'Fernanda Silva',
  'Juliana Costa',
  'Camila Rocha',
  'Patrícia Almeida',
  'Renata Martins',
  'Larissa Pacheco',
  'Daniela Ribeiro',
  'Vanessa Nogueira',
  'Paula Azevedo',
  'Carolina Farias',
  'Bruna Teixeira',
  'Natália Guedes',
  'Tatiane Barros',
  'Luciana Freitas',
  'Débora Macedo',
  'Aline Moreira',
  'Simone Batista',
  'Beatriz Cunha',
];

const mentorships = [
  'Mentoria Essência',
  'Mentoria Recomeço',
  'Mentoria Posicionamento',
];

export default function MentorshipActivity() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const showNotification = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const mentorship =
        mentorships[Math.floor(Math.random() * mentorships.length)];

      setMessage(`${name} adquiriu a ${mentorship}`);
      setVisible(true);

      setTimeout(() => setVisible(false), 4000);
    };

    showNotification();
    const interval = setInterval(showNotification, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`
        fixed bottom-6 left-1/2 -translate-x-1/2
        sm:left-6 sm:translate-x-0
        z-50
        transition-all duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <div className="
        flex items-center gap-3
        px-5 py-3
        bg-white/90 backdrop-blur
        border border-stone-200
        rounded-2xl shadow-xl
        max-w-[90vw]
      ">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles size={18} className="text-primary" />
        </div>

        <p className="text-sm text-stone-700">
          {message}
        </p>
      </div>
    </div>
  );
}
