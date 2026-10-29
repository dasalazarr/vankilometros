'use client';

import React, {useEffect, useState} from 'react';

interface NavbarProps {
  onPostularClick: () => void;
}

const LINKS = [
  {href: '#propuesta', label: 'Propuesta'},
  {href: '#formatos', label: 'Formatos'},
  {href: '#ruta', label: 'Ruta'},
  {href: '#presupuesto', label: 'Presupuesto'},
  {href: '#apoyos', label: 'Apoyos y metas'},
];

export default function Navbar({onPostularClick}: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#0A2540]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-4">
        <a
          href="#inicio"
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap"
          style={{fontFamily: 'var(--font-outfit), sans-serif'}}
        >
          Kilómetros con Propósito
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white hover:underline underline-offset-8 decoration-[#F59E0B] transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onPostularClick}
          className="px-4 py-2 text-xs font-semibold text-[#0A2540] bg-[#F59E0B] hover:bg-[#FF8A00] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Postular proyecto
        </button>
      </div>

      <div className="h-0.5 w-full bg-white/5 overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-[#3B6E5C] via-[#10B981] to-[#F59E0B] transition-transform duration-150 origin-left"
          style={{transform: `scaleX(${scrollProgress / 100})`}}
        />
      </div>
    </header>
  );
}
