'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import {formatUsd as formatUsdBase} from '@/lib/expedition-data';
import {en} from './en';
import {es, type Dict} from './es';
import type {Lang} from './types';

const STORAGE_KEY = 'kcp-lang';

const DICTS: Record<Lang, Dict> = {es, en};

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
  formatUsd: (value: number, decimals?: number) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener('storage', listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', listener);
  };
}

// Elección hecha en esta sesión (vale aunque el almacenamiento esté bloqueado).
let memoryLang: Lang | null = null;

// Elección de esta sesión; si no, la preferencia guardada; si no, el idioma del navegador.
function getSnapshot(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') return stored;
  } catch {
    // Almacenamiento bloqueado: se usa el idioma del navegador.
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

// El servidor (y la hidratación) siempre en español, como el HTML inicial.
const getServerSnapshot = (): Lang => 'es';

export function LanguageProvider({children}: {children: React.ReactNode}) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = DICTS[lang].meta.title;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    memoryLang = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sin persistencia: el cambio sigue valiendo para esta sesión.
    }
    listeners.forEach((l) => l());
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: DICTS[lang],
      formatUsd: (v, decimals = 0) => formatUsdBase(v, decimals, lang),
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang debe usarse dentro de <LanguageProvider>');
  return ctx;
}
