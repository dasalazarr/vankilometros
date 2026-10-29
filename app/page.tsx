'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Sun,
  FileCheck2,
  BarChart3,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import SneakPeekModal from '@/components/SneakPeekModal';
import VanHotspotsSection from '@/components/VanHotspotsSection';
import ValueSystemsBento from '@/components/ValueSystemsBento';
import InteractiveRouteMap from '@/components/InteractiveRouteMap';
import FinancialSimulatorSection from '@/components/FinancialSimulatorSection';
import ConvocatoriaSection, {
  ConvocatoriaRole,
} from '@/components/ConvocatoriaSection';

export default function HomePage() {
  const [isSneakPeekOpen, setIsSneakPeekOpen] = useState(false);

  // Shared cross-section state for smooth pre-filling of the Convocatoria form
  const [convocatoriaRole, setConvocatoriaRole] =
    useState<ConvocatoriaRole>('club');
  const [prefilledFormat, setPrefilledFormat] = useState<
    'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio' | undefined
  >(undefined);
  const [prefilledMonth, setPrefilledMonth] = useState<number | undefined>(
    undefined
  );
  const [prefilledCities, setPrefilledCities] = useState<string | undefined>(
    undefined
  );
  const [prefilledSponsorTier, setPrefilledSponsorTier] = useState<
    string | undefined
  >(undefined);

  const scrollToConvocatoria = () => {
    const el = document.getElementById('convocatoria');
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handlePostularClubClick = () => {
    setConvocatoriaRole('club');
    scrollToConvocatoria();
  };

  const handleSelectFormatForClub = (
    formatId: 'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio'
  ) => {
    setConvocatoriaRole('club');
    setPrefilledFormat(formatId);
    scrollToConvocatoria();
  };

  const handleSelectMonthForClub = (monthNumber: number, baseCities: string) => {
    setConvocatoriaRole('club');
    setPrefilledMonth(monthNumber);
    setPrefilledCities(baseCities);
    scrollToConvocatoria();
  };

  const handleSelectSponsorPackage = (tierId: string) => {
    setConvocatoriaRole('sponsor');
    setPrefilledSponsorTier(tierId);
    scrollToConvocatoria();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A2540]">
      {/* Sticky Top Bar + Scrollytelling Route Progress Line */}
      <Navbar onPostularClick={handlePostularClubClick} />

      <main className="flex-1">
        {/* SECCIÓN 1: HERO SECTION (Impacto Inmediato + Sneak Peek) */}
        <section
          id="inicio"
          className="relative min-h-[86vh] flex flex-col justify-between bg-[#0A2540] text-white overflow-hidden"
        >
          {/* Real Photo of Soledad & Citroën Jumpy in the Ecuadorian Andes */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/aistudio/image_8e5d8680.png"
              alt="Soledad Hernández junto a la Citroën Jumpy de Kilómetros con Propósito en los Andes ecuatorianos"
              fill
              priority
              className="object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Measured Multi-Stop Scrim for High Legibility (4.5:1+ contrast) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-[#0A2540]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-[#0A2540]/50" />
          </div>

          {/* Hero Main Content Container */}
          <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 pt-14 pb-12 md:pt-20 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left 8 Columns: Core Proposition & Double CTA */}
            <div className="lg:col-span-8">
              {/* Unboxed Kicker (Zero-Pill Metadata Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-4">
                <span>FASE PILOTO ECUADOR</span>
                <span aria-hidden="true">·</span>
                <span>DISTRITO 4400</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-300">EN PREPARACIÓN</span>
              </div>

              <h1
                className="font-bold tracking-tight text-white text-balance leading-[1.08]"
                style={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: 'clamp(2.35rem, 4.5vw, 4rem)',
                }}
              >
                Kilómetros con Propósito: Ecuador
              </h1>

              <h2 className="mt-5 text-base md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
                Transformamos el servicio rotario en Ecuador en una docuserie
                viva, un estudio móvil y un motor permanente de recaudación y
                alianzas.
              </h2>

              {/* Double CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handlePostularClubClick}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-bold text-sm transition-colors whitespace-nowrap shrink-0 shadow-lg cursor-pointer"
                >
                  <span>Postular un Proyecto de mi Club</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsSneakPeekOpen(true)}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#003B73]/90 hover:bg-[#003B73] text-white border border-white/25 font-semibold text-sm backdrop-blur-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Play className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                  <span>Ver Sneak Peek del Formato (1:30 min)</span>
                </button>
              </div>
            </div>

            {/* Right 4 Columns: Official Expedition Identity Lockup Card */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-xl max-w-xs w-full text-[#0A2540]">
                <div className="relative w-full h-40">
                  <Image
                    src="/assets/aistudio/image_29e4428b.png"
                    alt="Emblema Oficial Kilómetros con Propósito Ecuador"
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#003B73]">
                    Unidad Móvil Citroën Jumpy
                  </span>
                  <span className="font-mono text-[#3B6E5C] font-semibold">
                    Distrito 4400
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Glassmorphism Metrics Strip at Bottom of Hero */}
          <div className="relative z-10 border-t border-white/15 bg-[#0A2540]/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div>
                <p className="text-lg md:text-xl font-bold text-white font-mono tabular-nums">
                  6 Meses de Ruta
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Sábados y Domingos (100% fines de semana)
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-bold text-[#F59E0B] font-mono tabular-nums">
                  +7.200 Km Estimados
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Promedio operativo de 1.200 km/mes
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-bold text-white font-mono tabular-nums">
                  10 a 12 Proyectos
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Documentados en Sierra, Costa y Amazonía
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-bold text-emerald-300 font-mono tabular-nums">
                  3 Formatos
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Manos a la Obra · Huella · Podcast Móvil
                </p>
              </div>

              <div>
                <p className="text-lg md:text-xl font-bold text-white font-mono tabular-nums">
                  Recaudación 24/7
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Pasarela permanente de doble carril habilitada
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: EL "SNEAK PEEK" (La Van como Ecosistema Móvil) */}
        <VanHotspotsSection
          onSelectSponsorPackage={handleSelectSponsorPackage}
        />

        {/* SECCIÓN 3: LOS SISTEMAS DE VALOR AGREGADO (Bento Grid) */}
        <ValueSystemsBento
          onSelectFormatForClub={handleSelectFormatForClub}
          onSelectSponsorRail={() => handleSelectSponsorPackage('combustible-mes')}
        />

        {/* SECCIÓN 4: MAPA INTERACTIVO DE LA RUTA (6 Meses · 100% Fines de Semana) */}
        <InteractiveRouteMap
          onSelectMonthForClub={handleSelectMonthForClub}
        />

        {/* SECCIÓN 5: TRANSPARENCIA FINANCIERA Y SIMULADOR DE PATROCINIO */}
        <FinancialSimulatorSection
          onSelectSponsorTier={(tierId) => handleSelectSponsorPackage(tierId)}
        />

        {/* SECCIÓN 6: CONVOCATORIA ABIERTA (Formularios Interactivos de Captación) */}
        <ConvocatoriaSection
          activeRole={convocatoriaRole}
          onRoleChange={setConvocatoriaRole}
          prefilledFormat={prefilledFormat}
          prefilledMonth={prefilledMonth}
          prefilledCities={prefilledCities}
          prefilledSponsorTier={prefilledSponsorTier}
        />
      </main>

      {/* FOOTER: RESPALDO ÉTICO E INSTITUCIONAL */}
      <footer className="bg-[#0A2540] text-white border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          {/* 4 Ethical & Operational Guarantee Seals */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-4">
              PROTOCOLO DE ÉTICA, SEGURIDAD Y GOBERNANZA DEL PILOTO
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-[#F59E0B] mb-2" />
                <h4 className="text-sm font-bold text-white">
                  Consentimiento Informado y Protección de Menores
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Autorización expresa de imagen en cada comunidad y cumplimiento
                  estricto de protocolos de protección infantil y dignidad
                  humana.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Sun className="w-5 h-5 text-emerald-300 mb-2" />
                <h4 className="text-sm font-bold text-white">
                  Conducción Diurna y Seguridad Vial
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Desplazamientos planificados 100% en horario diurno, pernocta
                  segura verificada y mantenimiento preventivo mensual.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <FileCheck2 className="w-5 h-5 text-[#F59E0B] mb-2" />
                <h4 className="text-sm font-bold text-white">
                  Validación Factual Previa con cada Club
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Ningún episodio se publica sin la revisión previa de datos,
                  cifras y créditos junto al Club Rotario responsable del
                  proyecto.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <BarChart3 className="w-5 h-5 text-emerald-300 mb-2" />
                <h4 className="text-sm font-bold text-white">
                  Rendición de Cuentas Mensual
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Corte financiero mensual abierto al centavo (FDS 4) con
                  separación total entre cuentas de los clubes y operación de
                  ruta.
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Credits & Legal Notice */}
          <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-white rounded-xl p-1.5 shrink-0">
                <Image
                  src="/assets/aistudio/image_29e4428b.png"
                  alt="Logo Kilómetros con Propósito Ecuador"
                  fill
                  className="object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p
                  className="text-base font-bold text-white"
                  style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                >
                  Kilómetros con Propósito: Ecuador
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  Propuesta liderada por{' '}
                  <strong className="text-white">Soledad Hernández</strong> ·
                  Con el impulso del{' '}
                  <strong className="text-white">
                    Club Rotario Quito Intercultural
                  </strong>{' '}
                  y el equipo de apoyo en Distrito 4400 y Rotaract.
                </p>
              </div>
            </div>

            <div className="max-w-xl text-xs text-slate-400 leading-relaxed">
              <strong className="text-slate-200">
                Nota legal y de autonomía institucional:
              </strong>{' '}
              Iniciativa piloto de comunicación, documentación y articulación de
              impacto social promovida desde socios rotarios del Distrito 4400.
              El uso de emblemas e identidad visual se rige bajo los
              lineamientos de marca de Rotary International, manteniendo
              autonomía operativa y contabilidad separada.
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive 1:30 min Format Sneak Peek Modal */}
      <SneakPeekModal
        isOpen={isSneakPeekOpen}
        onClose={() => setIsSneakPeekOpen(false)}
        onPostularClub={handlePostularClubClick}
      />
    </div>
  );
}
