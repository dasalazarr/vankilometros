'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {
  X,
  Play,
  Pause,
  Volume2,
  Subtitles,
  ArrowRight,
  Compass,
  Mic,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface SneakPeekModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostularClub: () => void;
}

const TEASER_CHAPTERS = [
  {
    id: 0,
    timeRange: '00:00 – 00:22',
    durationSec: 22,
    title: '01. Llegada a Territorio y Contexto Andino',
    formatTag: 'Apertura Cinematográfica · Dron y Ruta',
    subtitleEs:
      '“Cada fin de semana encendemos la Citroën Jumpy para transformar proyectos rotarios del Distrito 4400 en historias vivas que conectan a todo el Ecuador...”',
    subtitleEn:
      '“Every weekend we start the Citroën Jumpy to turn District 4400 Rotary projects into living stories that connect all of Ecuador...”',
    visualNote:
      'Toma aérea en los Andes ecuatorianos: Soledad junto a la van equipada con carpa de techo y planchas de rescate llegando a una comunidad a 3.500 m.s.n.m.',
    metricsOverlay: 'Ruta: 1.200 km/mes · 100% Fines de Semana',
  },
  {
    id: 1,
    timeRange: '00:22 – 00:50',
    durationSec: 28,
    title: '02. Acción en Terreno: Manos a la Obra & Huella Rotaria',
    formatTag: 'Documentación de Impacto Real',
    subtitleEs:
      '“No grabamos discursos de oficina. Entramos a la minga, auditamos obras ya entregadas y mostramos con números claros cómo cambia la vida de una familia.”',
    subtitleEn:
      '“We don’t film office speeches. We join the community work, audit completed projects, and show with clear numbers how a family’s life changes.”',
    visualNote:
      'Cámara en mano siguiendo la instalación de filtros de agua limpia y entrevistando a madres beneficiarias junto a los socios del club anfitrión.',
    metricsOverlay: 'Validación Factual Previa con cada Club',
  },
  {
    id: 2,
    timeRange: '00:50 – 01:12',
    durationSec: 22,
    title: '03. Set Móvil: "Voces del Territorio"',
    formatTag: 'Podcast Itinerante bajo el Toldo',
    subtitleEs:
      '“Desplegamos el toldo lateral de la van en la plaza del pueblo: sentamos en la misma mesa al alcalde local, al líder comunitario y al presidente del Club Rotario.”',
    subtitleEn:
      '“We deploy the van’s side awning in the town square: bringing the local mayor, the community leader, and the Rotary Club president to the same table.”',
    visualNote:
      'Set de 3 micrófonos dinámicos montado al costado de la Citroën Jumpy con el logo de Kilómetros con Propósito y los escudos de los patrocinadores de fondo.',
    metricsOverlay: 'Diálogo Multi-Actor · Alianzas GADs + Empresas',
  },
  {
    id: 3,
    timeRange: '01:12 – 01:30',
    durationSec: 18,
    title: '04. Motor Always-On y Blueprint Open-Source',
    formatTag: 'Recaudación 24/7 + Ficha Replicable',
    subtitleEs:
      '“Cuando termina el episodio, empieza el verdadero motor: se activa la pasarela de donación directa al club y se libera el Blueprint para replicarlo en cualquier país.”',
    subtitleEn:
      '“When the episode ends, the real engine begins: direct donations to the club go live and the Open-Source Blueprint is unlocked for replication worldwide.”',
    visualNote:
      'Pantalla dividida mostrando el código QR en pantalla, la pasarela de doble carril verificada y la guía descargable paso a paso.',
    metricsOverlay: '100% Donación al Club · Subtítulos ES / EN',
  },
];

export default function SneakPeekModal({
  isOpen,
  onClose,
  onPostularClub,
}: SneakPeekModalProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [elapsedInChapter, setElapsedInChapter] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setIsPlaying(false);
      setElapsedInChapter(0);
      return;
    }
    setIsPlaying(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      setElapsedInChapter((prev) => {
        const currentDuration = TEASER_CHAPTERS[activeChapter].durationSec;
        if (prev + 1 >= currentDuration) {
          setActiveChapter((ch) => (ch + 1) % TEASER_CHAPTERS.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, activeChapter]);

  if (!isOpen) return null;

  const chapter = TEASER_CHAPTERS[activeChapter];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A2540]/85 backdrop-blur-md p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sneak-peek-title"
    >
      <div className="relative w-full max-w-4xl bg-[#0A2540] border border-white/15 rounded-2xl overflow-hidden shadow-2xl text-white my-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#001E3C]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
              TEASER OFICIAL · 01:30 MIN
            </span>
            <span className="text-white/30" aria-hidden="true">
              ·
            </span>
            <h3
              id="sneak-peek-title"
              className="text-sm md:text-base font-semibold text-white"
              style={{fontFamily: 'var(--font-outfit), sans-serif'}}
            >
              Sneak Peek del Formato: Kilómetros con Propósito
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar vista previa"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Video Storyboard Frame */}
        <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
          <Image
            src="/assets/aistudio/image_8e5d8680.png"
            alt="Soledad junto a la Citroën Jumpy en los Andes ecuatorianos"
            fill
            className={`object-cover transition-transform duration-700 ${
              activeChapter === 0
                ? 'scale-100 object-center'
                : activeChapter === 1
                ? 'scale-110 object-left'
                : activeChapter === 2
                ? 'scale-110 object-right'
                : 'scale-105 object-center'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/45 to-black/40" />

          {/* Top-Left Overlay Information */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4">
            <div className="bg-[#0A2540]/85 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-lg">
              <p className="text-xs font-mono text-[#F59E0B]">
                {chapter.timeRange} · {chapter.formatTag}
              </p>
              <p className="text-xs text-slate-200 mt-0.5">
                {chapter.metricsOverlay}
              </p>
            </div>

            {/* Logo Watermark in Corner */}
            <div className="hidden sm:flex items-center gap-2 bg-white/95 px-3 py-1.5 rounded-lg shadow-md">
              <div className="relative w-8 h-8">
                <Image
                  src="/assets/aistudio/image_29e4428b.png"
                  alt="Logo Kilómetros con Propósito"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-bold text-[#003B73] tracking-tight">
                Distrito 4400
              </span>
            </div>
          </div>

          {/* Center Visual Direction Note */}
          <div className="absolute inset-x-6 bottom-24 md:bottom-28 flex flex-col items-center text-center">
            <div className="max-w-2xl bg-black/75 backdrop-blur-md border border-white/15 px-5 py-3.5 rounded-xl">
              <p className="text-xs uppercase tracking-wider text-emerald-300 font-mono mb-1">
                [ Escena en Pantalla — {chapter.title} ]
              </p>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                {chapter.visualNote}
              </p>
            </div>
          </div>

          {/* Bilingual Subtitles Bar at Bottom of Video */}
          <div className="absolute inset-x-4 bottom-4 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-[#0A2540]/95 border border-[#F59E0B]/40 px-5 py-3 rounded-lg text-center shadow-lg">
              <p className="text-sm md:text-base font-medium text-white leading-snug">
                {lang === 'ES' ? chapter.subtitleEs : chapter.subtitleEn}
              </p>
            </div>
          </div>
        </div>

        {/* Player Controls & Chapter Scrubber */}
        <div className="p-6 bg-[#0A2540] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pausar Teaser</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Reproducir Teaser</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-300 font-mono tabular-nums">
                <Volume2 className="w-4 h-4 text-[#F59E0B]" />
                <span>
                  Capítulo {activeChapter + 1}/4 ({elapsedInChapter}s /{' '}
                  {chapter.durationSec}s)
                </span>
              </div>
            </div>

            {/* Bilingual Subtitle Switcher */}
            <div className="flex items-center gap-2">
              <Subtitles className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-300">Subtítulos:</span>
              <div className="flex items-center bg-white/10 p-0.5 rounded-lg">
                <button
                  type="button"
                  onClick={() => setLang('ES')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    lang === 'ES'
                      ? 'bg-[#F59E0B] text-[#0A2540] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Español (ES)
                </button>
                <button
                  type="button"
                  onClick={() => setLang('EN')}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    lang === 'EN'
                      ? 'bg-[#F59E0B] text-[#0A2540] font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>
          </div>

          {/* 4-Chapter Interactive Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TEASER_CHAPTERS.map((item, idx) => {
              const isActive = idx === activeChapter;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveChapter(idx);
                    setElapsedInChapter(0);
                  }}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border-[#F59E0B] shadow-sm'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                    <span className={isActive ? 'text-[#F59E0B] font-semibold' : ''}>
                      {item.timeRange}
                    </span>
                    {isActive && (
                      <span className="text-[11px] text-emerald-400">Activo</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white line-clamp-2">
                    {item.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Modal Footer CTA */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-300">
              ¿Listo para que la van visite el proyecto de tu Club en los próximos 6 meses?
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onPostularClub();
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Postular un Proyecto de mi Club</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
