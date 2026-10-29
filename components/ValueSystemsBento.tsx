'use client';

import React, {useState} from 'react';
import {
  PRODUCTION_FORMATS,
  ProductionFormat,
  SAMPLE_BLUEPRINTS,
  RotaryBlueprint,
} from '@/lib/expedition-data';
import {
  Play,
  ShieldCheck,
  Download,
  ArrowRight,
  Check,
  FileText,
  CreditCard,
  Building2,
  Globe,
  Users,
} from 'lucide-react';

interface ValueSystemsBentoProps {
  onSelectFormatForClub: (
    formatId: 'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio'
  ) => void;
  onSelectSponsorRail: () => void;
}

const GATEWAYS = ['PayPhone', 'Banco Pichincha', 'Stripe', 'GoFundMe'] as const;
const PRESET_AMOUNTS = [25, 50, 120, 500];

export default function ValueSystemsBento({
  onSelectFormatForClub,
  onSelectSponsorRail,
}: ValueSystemsBentoProps) {
  // Block A state
  const [selectedFormatId, setSelectedFormatId] = useState<
    'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio'
  >('manos-a-la-obra');

  // Block B state (Always-On Dual Rail)
  const [activeRail, setActiveRail] = useState<'carril-1' | 'carril-2'>(
    'carril-1'
  );
  const [selectedGateway, setSelectedGateway] =
    useState<(typeof GATEWAYS)[number]>('PayPhone');
  const [donationAmount, setDonationAmount] = useState<number>(120);
  const [simulatedSuccess, setSimulatedSuccess] = useState<boolean>(false);

  // Block C state (Open-Source Blueprint)
  const [selectedBlueprintIdx, setSelectedBlueprintIdx] = useState<number>(0);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const currentFormat: ProductionFormat =
    PRODUCTION_FORMATS.find((f) => f.id === selectedFormatId) ||
    PRODUCTION_FORMATS[0];

  const currentBlueprint: RotaryBlueprint =
    SAMPLE_BLUEPRINTS[selectedBlueprintIdx] || SAMPLE_BLUEPRINTS[0];

  const handleDownloadBlueprint = (bp: RotaryBlueprint) => {
    const content = [
      `====================================================================`,
      `KILÓMETROS CON PROPÓSITO: ECUADOR · DISTRITO 4400`,
      `FICHA PEDAGÓGICA OPEN-SOURCE ROTARIO (BLUEPRINT ${bp.code})`,
      `====================================================================`,
      ``,
      `PROYECTO: ${bp.title}`,
      `CLUB RESPONSABLE: ${bp.club}`,
      `PROVINCIA / CORREDOR: ${bp.province}`,
      `ÁREA DE INTERÉS ROTARIO: ${bp.areaOfFocus}`,
      `PRESUPUESTO REFERENCIAL: $${bp.budgetUsd.toLocaleString('es-EC')} USD`,
      `BENEFICIARIOS DIRECTOS: ${bp.beneficiaries} personas`,
      `TIEMPO DE EJECUCIÓN: ${bp.executionWeeks} semanas`,
      ``,
      `1. PROBLEMA QUE RESUELVE`,
      `${bp.problem}`,
      ``,
      `2. SOLUCIÓN TÉCNICA IMPLEMENTADA`,
      `${bp.solution}`,
      ``,
      `3. PASO A PASO PARA QUE OTRO CLUB LO REPLIQUE`,
      ...bp.replicationSteps.map((step, i) => `   Paso ${i + 1}: ${step}`),
      ``,
      `4. CÁPSULA DE LECCIÓN APRENDIDA EN TERRENO`,
      `"${bp.learnedLesson}"`,
      ``,
      `--------------------------------------------------------------------`,
      `Generado desde la plataforma Kilómetros con Propósito · Distrito 4400`,
    ].join('\n');

    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${bp.code}-Blueprint-Rotario.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadedId(bp.id);
    setTimeout(() => setDownloadedId(null), 3000);
  };

  return (
    <section
      id="sistemas-valor"
      className="py-20 md:py-28 bg-[#F8FAFC] text-[#0A2540] border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
            <span>02. SISTEMAS DE VALOR AGREGADO</span>
            <span aria-hidden="true">·</span>
            <span>ARQUITECTURA DEL ECOSISTEMA</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            ¿Cómo funciona la máquina? Mucho más que un canal de YouTube.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Diseñamos tres motores integrados para que cada fin de semana de
            rodaje se convierta en voluntariado activo, recaudación permanente
            conectada al club y conocimiento replicable para todo el mundo
            rotario.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* BLOQUE A: Full 12-Col Marquee Bento Card - La Matriz de 3 Formatos Rotativos */}
          <div className="lg:col-span-12 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#003B73]">
                  BLOQUE A · MATRIZ AUDIOVISUAL ADAPTABLE
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold text-[#0A2540] mt-1"
                  style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                >
                  La Matriz de 3 Formatos Rotativos
                </h3>
              </div>

              {/* Interactive Segmented Tab Control */}
              <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl">
                {PRODUCTION_FORMATS.map((fmt) => {
                  const isActive = fmt.id === selectedFormatId;
                  return (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => setSelectedFormatId(fmt.id)}
                      className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#003B73] text-white shadow-xs'
                          : 'text-slate-600 hover:text-[#0A2540]'
                      }`}
                    >
                      {fmt.index}. {fmt.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Format Content + Interactive Screen Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-stretch">
              {/* Left 5 Cols: Format Explanation */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#3B6E5C] uppercase tracking-wider">
                    ETAPA DEL PROYECTO: {currentFormat.stageLabel}
                  </div>
                  <h4
                    className="mt-2 text-2xl font-bold text-[#0A2540]"
                    style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                  >
                    {currentFormat.name}
                  </h4>

                  <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
                      {currentFormat.question}
                    </p>
                    <p className="mt-1.5 text-sm md:text-base text-slate-700 leading-relaxed">
                      {currentFormat.answer}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                      Entregables por Visita de Fin de Semana
                    </p>
                    <ul className="space-y-2.5">
                      {currentFormat.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700"
                        >
                          <Check className="w-4 h-4 text-[#3B6E5C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => onSelectFormatForClub(currentFormat.id)}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Postular mi Proyecto en este Formato</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right 7 Cols: Live Interactive Mockup Preview of Final Output */}
              <div className="lg:col-span-7 bg-[#0A2540] text-white rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#F59E0B]">
                      <span>MOCKUP DEL RESULTADO FINAL</span>
                      <span aria-hidden="true">·</span>
                      <span>{currentFormat.mockup.episodeCode}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-300 tabular-nums">
                      Duración est.: {currentFormat.mockup.duration}
                    </span>
                  </div>

                  {/* Episode Preview Header */}
                  <div className="mt-5">
                    <p className="text-xs text-emerald-300 font-medium">
                      {currentFormat.mockup.club} ·{' '}
                      {currentFormat.mockup.location}
                    </p>
                    <h5
                      className="text-lg md:text-xl font-bold text-white mt-1"
                      style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                    >
                      {currentFormat.mockup.title}
                    </h5>
                  </div>

                  {/* Quantitative Impact Strip inside Mockup */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                      <p className="text-xs text-slate-400">
                        {currentFormat.mockup.primaryMetricLabel}
                      </p>
                      <p className="text-base font-bold text-white font-mono tabular-nums mt-0.5">
                        {currentFormat.mockup.primaryMetricValue}
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3.5">
                      <p className="text-xs text-slate-400">
                        {currentFormat.mockup.secondaryMetricLabel}
                      </p>
                      <p className="text-base font-bold text-[#F59E0B] font-mono tabular-nums mt-0.5">
                        {currentFormat.mockup.secondaryMetricValue}
                      </p>
                    </div>
                  </div>

                  {/* Narrative Highlights */}
                  <div className="mt-5 space-y-2">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Estructura de Conversión del Episodio
                    </p>
                    {currentFormat.mockup.highlights.map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-slate-200 bg-white/5 px-3.5 py-2.5 rounded-lg"
                      >
                        <span className="font-mono text-[#F59E0B] font-semibold">
                          0{i + 1}.
                        </span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Mockup Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>
                      Ficha Digital verificada + Subtítulos ES/EN incluidos
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectFormatForClub(currentFormat.id)}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {currentFormat.mockup.ctaLabel}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* BLOQUE B: 7 Columns - Motor de Recaudación "Always-On" (Pasarela Permanente + Doble Carril) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#003B73]">
                  BLOQUE B · PASARELA PERMANENTE 24/7
                </p>
                <span className="text-xs font-mono text-[#3B6E5C]">
                  DOBLE CARRIL AUDITABLE
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold text-[#0A2540] mt-1"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                Motor de Recaudación &ldquo;Always-On&rdquo;
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Un episodio publicado en el Mes 1 no muere en el Mes 1. Cada
                proyecto documentado desbloquea su propia{' '}
                <strong className="font-semibold text-[#0A2540]">
                  Ficha Digital verificada
                </strong>{' '}
                conectada a pasarelas locales e internacionales con separación
                transparente de cuentas.
              </p>

              {/* Dual-Rail Interactive Switcher */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setActiveRail('carril-1');
                    setSimulatedSuccess(false);
                  }}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeRail === 'carril-1'
                      ? 'bg-[#003B73] text-white border-[#003B73]'
                      : 'bg-slate-50 text-[#0A2540] border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span
                      className={
                        activeRail === 'carril-1'
                          ? 'text-[#F59E0B] font-semibold'
                          : 'text-[#003B73]'
                      }
                    >
                      CARRIL 1 · 100% AL PROYECTO
                    </span>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold">Cuenta Oficial del Club</p>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      activeRail === 'carril-1'
                        ? 'text-slate-200'
                        : 'text-slate-600'
                    }`}
                  >
                    Donaciones ciudadanas y aportes van directo a las cuentas
                    oficiales verificadas de cada club responsable.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveRail('carril-2');
                    setSimulatedSuccess(false);
                  }}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    activeRail === 'carril-2'
                      ? 'bg-[#003B73] text-white border-[#003B73]'
                      : 'bg-slate-50 text-[#0A2540] border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span
                      className={
                        activeRail === 'carril-2'
                          ? 'text-[#F59E0B] font-semibold'
                          : 'text-[#3B6E5C]'
                      }
                    >
                      CARRIL 2 · IMPULSO A LA RUTA
                    </span>
                    <Globe className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-bold">Sostenibilidad del Motor</p>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      activeRail === 'carril-2'
                        ? 'text-slate-200'
                        : 'text-slate-600'
                    }`}
                  >
                    Patrocinios corporativos y crowdfunding operativo para
                    cubrir kilómetros, producción y equipamiento con auditoría
                    independiente.
                  </p>
                </button>
              </div>

              {/* Interactive Digital Ficha Prototype */}
              <div className="mt-5 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <span className="text-xs font-mono font-semibold text-[#0A2540]">
                    SIMULADOR DE FICHA DIGITAL VERIFICADA
                  </span>
                  <span className="text-xs text-[#3B6E5C] font-medium">
                    Destino:{' '}
                    {activeRail === 'carril-1'
                      ? 'Cuenta Bancaria Club Rotario Anfitrión (100%)'
                      : 'Fondo Operativo Auditado Ruta Distrito 4400'}
                  </span>
                </div>

                {/* Gateway Selector */}
                <div className="mt-3">
                  <p className="text-xs text-slate-500 mb-2">
                    1. Selecciona pasarela local o internacional habilitada:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {GATEWAYS.map((gw) => (
                      <button
                        key={gw}
                        type="button"
                        onClick={() => {
                          setSelectedGateway(gw);
                          setSimulatedSuccess(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          selectedGateway === gw
                            ? 'bg-[#0A2540] text-white border-[#0A2540]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {gw}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Amount Selector */}
                <div className="mt-4">
                  <p className="text-xs text-slate-500 mb-2">
                    2. Simula un monto de aporte (USD):
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {PRESET_AMOUNTS.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amt);
                          setSimulatedSuccess(false);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold tabular-nums border transition-colors cursor-pointer ${
                          donationAmount === amt
                            ? 'bg-[#F59E0B] text-[#0A2540] border-[#F59E0B]'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        ${amt} USD
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Routing Breakdown */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-600 font-mono tabular-nums">
                    <span>Pasarela: {selectedGateway}</span>
                    <span className="mx-2">·</span>
                    <span className="font-semibold text-[#0A2540]">
                      Transferencia neta: ${donationAmount},00 USD
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSimulatedSuccess(true)}
                    className="px-4 py-2 rounded-lg bg-[#003B73] hover:bg-[#0A2540] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Probar Flujo de Pasarela
                  </button>
                </div>

                {simulatedSuccess && (
                  <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between gap-3">
                    <span>
                      ✓ Simulación verificada: ${donationAmount},00 USD vía{' '}
                      <strong>{selectedGateway}</strong> enrutados directamente a{' '}
                      <strong>
                        {activeRail === 'carril-1'
                          ? 'la cuenta oficial del Club Rotario responsable'
                          : 'el fondo auditado de operación en ruta'}
                      </strong>
                      .
                    </span>
                    <button
                      type="button"
                      onClick={onSelectSponsorRail}
                      className="underline font-semibold whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Inscribir aporte real
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* BLOQUE C: 5 Columns - Repositorio Pedagógico ("Open-Source Rotario") */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-mono uppercase tracking-wider text-[#3B6E5C]">
                  BLOQUE C · CONOCIMIENTO REPLICABLE
                </p>
                <span className="text-xs font-mono text-slate-500">
                  OPEN-SOURCE ROTARIO
                </span>
              </div>

              <h3
                className="text-xl md:text-2xl font-bold text-[#0A2540] mt-1"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                Repositorio Pedagógico (Blueprints)
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Cada episodio cierra con una cápsula de{' '}
                <strong className="font-semibold text-[#0A2540]">
                  Lección Aprendida
                </strong>
                . En la web se desbloquea una ficha descargable (Blueprint) que
                explica: Problema → Solución → Presupuesto → Cómo otro club en
                Ecuador o el mundo puede replicarlo paso a paso.
              </p>

              {/* Blueprint Switcher */}
              <div className="mt-4 flex items-center gap-2">
                {SAMPLE_BLUEPRINTS.map((bp, idx) => (
                  <button
                    key={bp.id}
                    type="button"
                    onClick={() => setSelectedBlueprintIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedBlueprintIdx === idx
                        ? 'bg-[#3B6E5C] text-white border-[#3B6E5C]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Ejemplo {bp.code}
                  </button>
                ))}
              </div>

              {/* Blueprint Card Preview */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{currentBlueprint.code}</span>
                  <span className="tabular-nums font-semibold text-[#003B73]">
                    Presupuesto: $
                    {currentBlueprint.budgetUsd.toLocaleString('es-EC')} USD
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#0A2540]">
                  {currentBlueprint.title}
                </h4>

                <div className="space-y-2 text-xs text-slate-700">
                  <div>
                    <span className="font-semibold text-[#003B73]">
                      Problema:{' '}
                    </span>
                    <span>{currentBlueprint.problem}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#3B6E5C]">
                      Solución:{' '}
                    </span>
                    <span>{currentBlueprint.solution}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-slate-800">
                    <span className="font-semibold text-amber-900">
                      Lección Aprendida:{' '}
                    </span>
                    <span>&ldquo;{currentBlueprint.learnedLesson}&rdquo;</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-500 font-mono tabular-nums">
                {currentBlueprint.beneficiaries} beneficiarios ·{' '}
                {currentBlueprint.executionWeeks} semanas
              </div>
              <button
                type="button"
                onClick={() => handleDownloadBlueprint(currentBlueprint)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A2540] hover:bg-[#003B73] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {downloadedId === currentBlueprint.id
                    ? 'Blueprint Descargado ✓'
                    : 'Descargar Blueprint'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
