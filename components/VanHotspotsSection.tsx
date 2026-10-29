'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import {VAN_HOTSPOTS, VanHotspot} from '@/lib/expedition-data';

interface VanHotspotsSectionProps {
  onSelectSponsorPackage: (packageId: string) => void;
}

export default function VanHotspotsSection({
  onSelectSponsorPackage,
}: VanHotspotsSectionProps) {
  const [activeSpotId, setActiveSpotId] = useState<string>(VAN_HOTSPOTS[0].id);

  const activeIndex = VAN_HOTSPOTS.findIndex((h) => h.id === activeSpotId);
  const activeSpot: VanHotspot =
    VAN_HOTSPOTS[activeIndex >= 0 ? activeIndex : 0];

  const handlePrev = () => {
    const nextIdx =
      (activeIndex - 1 + VAN_HOTSPOTS.length) % VAN_HOTSPOTS.length;
    setActiveSpotId(VAN_HOTSPOTS[nextIdx].id);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % VAN_HOTSPOTS.length;
    setActiveSpotId(VAN_HOTSPOTS[nextIdx].id);
  };

  return (
    <section
      id="ecosistema-van"
      className="py-20 md:py-28 bg-[#0A2540] text-white border-b border-white/10"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-3">
            <span>01. INFRAESTRUCTURA TECNOLÓGICA Y MEDIÁTICA</span>
            <span aria-hidden="true">·</span>
            <span>CITROËN JUMPY OVERLAND</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-white text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            Más que un vehículo: Una aceleradora de impacto sobre ruedas.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-2xl">
            Explora los 5 nodos operativos de la unidad móvil. Haz clic o pasa
            el cursor sobre cada punto interactivo (+) de la fotografía para
            inspeccionar cómo producimos, editamos y conectamos proyectos en
            cualquier rincón del Ecuador.
          </p>
        </div>

        {/* Interactive Selector Tabs Above Split */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {VAN_HOTSPOTS.map((spot) => {
            const isSelected = spot.id === activeSpot.id;
            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setActiveSpotId(spot.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#F59E0B] text-[#0A2540] border-[#F59E0B] font-semibold'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {spot.number}. {spot.title}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Interactive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Cols: Interactive Vehicle Canvas with 5 Hotspots */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px]">
              <Image
                src="/assets/aistudio/image_8e5d8680.png"
                alt="Soledad junto a la Citroën Jumpy equipada con carpa de techo y planchas de rescate en los Andes"
                fill
                className="object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* Subtle vignette scrim for hotspot contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-black/30 pointer-events-none" />

              {/* Hotspot Markers */}
              {VAN_HOTSPOTS.map((spot) => {
                const isSelected = spot.id === activeSpot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveSpotId(spot.id)}
                    onMouseEnter={() => setActiveSpotId(spot.id)}
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                    }}
                    aria-label={`Inspeccionar ${spot.title}: ${spot.zone}`}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isSelected
                        ? 'bg-[#F59E0B] text-[#0A2540] scale-115 shadow-xl ring-4 ring-[#F59E0B]/35 z-20'
                        : 'bg-[#0A2540]/90 text-white border border-white/40 hover:bg-[#F59E0B] hover:text-[#0A2540] hover:scale-110 z-10'
                    }`}
                  >
                    <Plus
                      className={`w-5 h-5 transition-transform duration-150 ${
                        isSelected ? 'rotate-45 stroke-[2.5]' : 'stroke-2'
                      }`}
                    />
                    {/* Floating Tooltip Label on Desktop */}
                    <span
                      className={`hidden sm:block pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 px-2.5 py-1 rounded bg-[#0A2540]/95 border border-white/20 text-[11px] font-medium text-white whitespace-nowrap shadow-lg transition-opacity duration-150 ${
                        isSelected
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {spot.number}. {spot.title}
                    </span>
                  </button>
                );
              })}

              {/* Bottom Caption Bar inside Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 bg-[#0A2540]/90 backdrop-blur-md border border-white/15 px-4 py-3 rounded-xl">
                <div>
                  <p className="text-xs font-mono text-[#F59E0B]">
                    NODO ACTIVO {activeSpot.number}/05 ·{' '}
                    {activeSpot.zone.toUpperCase()}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {activeSpot.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Punto anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Siguiente punto"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Detailed Inspection Panel */}
          <div className="lg:col-span-5 bg-[#001E3C] border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                <span className="text-xs font-mono text-[#F59E0B]">
                  UBICACIÓN EN LA VAN: {activeSpot.zone.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-slate-400 tabular-nums">
                  {activeSpot.number} / 05
                </span>
              </div>

              <h3
                className="mt-5 text-2xl font-bold text-white"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                {activeSpot.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-emerald-300">
                {activeSpot.subtitle}
              </p>

              <p className="mt-4 text-sm md:text-base text-slate-200 leading-relaxed">
                {activeSpot.description}
              </p>

              {/* Technical Specifications List */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Especificaciones Operativas en Ruta
                </p>
                <ul className="space-y-2.5">
                  {activeSpot.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Action inside Inspection Card */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">
                  ¿Te interesa impulsar este componente del ecosistema?
                </p>
                <p className="text-xs font-semibold text-white mt-0.5">
                  Disponible para patrocinio en efectivo o en especie
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  onSelectSponsorPackage(
                    activeSpot.sponsorPackageId || 'produccion'
                  )
                }
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Apadrinar Módulo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
