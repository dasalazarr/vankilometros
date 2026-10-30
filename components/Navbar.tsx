'use client';

import React, {useEffect, useState} from 'react';
import {Languages} from 'lucide-react';
import {useLang} from '@/lib/i18n/context';
import {LANGS} from '@/lib/i18n/types';

interface NavbarProps {
  onPostularClick: () => void;
}

export default function Navbar({onPostularClick}: NavbarProps) {
  const {lang, setLang, t} = useLang();
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
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-4">
        <a
          href="#inicio"
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap"
          style={{fontFamily: 'var(--font-outfit), sans-serif'}}
        >
          Kilómetros con Propósito
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white hover:underline underline-offset-8 decoration-[#F59E0B] transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            role="group"
            aria-label={t.nav.langGroup}
            className="inline-flex items-center gap-1 rounded-lg border border-white/20 p-0.5 text-xs font-semibold"
          >
            <Languages
              className="w-3.5 h-3.5 ml-1.5 text-slate-300 hidden sm:block"
              aria-hidden="true"
            />
            {LANGS.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                aria-pressed={lang === code}
                aria-label={t.nav.langOption[code]}
                title={t.nav.langOption[code]}
                onClick={() => setLang(code)}
                className={`px-2 py-1.5 rounded-md uppercase transition-colors cursor-pointer ${
                  lang === code
                    ? 'bg-white text-[#0A2540]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onPostularClick}
            className="hidden sm:block px-4 py-2 text-xs font-semibold text-[#0A2540] bg-[#F59E0B] hover:bg-[#FF8A00] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            {t.nav.apply}
          </button>
        </div>
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
