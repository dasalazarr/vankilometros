'use client';

import React, {useState} from 'react';
import {
  BUDGET_CATEGORIES,
  SPONSORSHIP_TIERS,
  TOTAL_BUDGET_USD,
} from '@/lib/expedition-data';
import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Calculator,
  Plus,
  Minus,
} from 'lucide-react';

interface FinancialSimulatorSectionProps {
  onSelectSponsorTier: (tierId: string, simulatedAmount: number) => void;
}

export default function FinancialSimulatorSection({
  onSelectSponsorTier,
}: FinancialSimulatorSectionProps) {
  const [expandedCategoryIds, setExpandedCategoryIds] = useState<string[]>([
    'operacion-ruta',
    'preparacion-equipos',
    'contingencia',
  ]);

  // Interactive Sponsorship Simulator state
  const [fuelMonthsCount, setFuelMonthsCount] = useState<number>(2); // $120 per month
  const [prodSharesCount, setProdSharesCount] = useState<number>(1); // $401.67 per 1/6 share (or $2,410 total)
  const [corporateSponsorsCount, setCorporateSponsorsCount] =
    useState<number>(1); // $1,500 per corporate sponsor
  const [amortizeEditionWithDistrict, setAmortizeEditionWithDistrict] =
    useState<boolean>(false);

  const toggleCategory = (id: string) => {
    setExpandedCategoryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const fuelTotal = fuelMonthsCount * 120;
  const prodTotal = Math.round(prodSharesCount * 401.67 * 100) / 100;
  const corporateTotal = corporateSponsorsCount * 1500;
  const districtInKindTotal = amortizeEditionWithDistrict ? 2400 : 0;

  const simulatedRaised =
    Math.round(
      (fuelTotal + prodTotal + corporateTotal + districtInKindTotal) * 100
    ) / 100;
  const progressPct = Math.min(
    100,
    Math.round((simulatedRaised / TOTAL_BUDGET_USD) * 1000) / 10
  );
  const remainingUsd = Math.max(
    0,
    Math.round((TOTAL_BUDGET_USD - simulatedRaised) * 100) / 100
  );

  const formatUsd = (val: number) =>
    val.toLocaleString('es-EC', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <section
      id="transparencia"
      className="py-20 md:py-28 bg-[#F8FAFC] text-[#0A2540] border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#003B73] mb-3">
            <span>04. FINANZAS ABIERTAS Y SOSTENIBILIDAD</span>
            <span aria-hidden="true">·</span>
            <span>PRESUPUESTO 6 MESES: $9.048,20 USD</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            Inversión Transparente al Centavo: Sé parte del motor.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Convertimos el presupuesto operativo de{' '}
            <strong className="font-semibold text-[#0A2540]">
              $9.048,20 USD
            </strong>{' '}
            en módulos tangibles y auditables donde clubes, empresas, GADs y
            ciudadanos pueden apadrinar kilómetros o equipamiento específico.
          </p>
        </div>

        {/* Visual Budget Progress Bar & Distribution */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                META OPERATIVA TOTAL DEL PILOTO (6 MESES · 12 PROYECTOS)
              </p>
              <div className="flex items-baseline gap-3 mt-1">
                <span
                  className="text-3xl md:text-4xl font-bold text-[#0A2540] font-mono tabular-nums"
                  style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                >
                  $9.048,20 USD
                </span>
                <span className="text-xs md:text-sm text-slate-500 font-mono tabular-nums">
                  ($1.508,03 USD promedio integral/mes · ~$754 USD por proyecto
                  documentado)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setExpandedCategoryIds(
                    expandedCategoryIds.length === BUDGET_CATEGORIES.length
                      ? []
                      : BUDGET_CATEGORIES.map((c) => c.id)
                  )
                }
                className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-[#0A2540] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {expandedCategoryIds.length === BUDGET_CATEGORIES.length
                  ? 'Contraer Desglose'
                  : 'Expandir Todo el Desglose'}
              </button>
            </div>
          </div>

          {/* 3-Segment Proportional Bar */}
          <div className="mt-6">
            <div className="h-4 w-full rounded-full overflow-hidden flex bg-slate-100 p-0.5 gap-0.5">
              <div
                style={{width: '61.54%'}}
                className="h-full bg-[#003B73] rounded-l-full"
                title="Operación en Ruta: $5.568,00 USD (61,54%)"
              />
              <div
                style={{width: '25.42%'}}
                className="h-full bg-[#3B6E5C]"
                title="Preparación, Seguridad y Equipos: $2.300,00 USD (25,42%)"
              />
              <div
                style={{width: '13.04%'}}
                className="h-full bg-[#F59E0B] rounded-r-full"
                title="Reserva de Contingencia 15%: $1.180,20 USD (13,04%)"
              />
            </div>

            {/* Segment Legend */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-semibold text-[#003B73]">
                  1. Operación en Ruta (61,5%)
                </span>
                <span className="font-mono font-bold tabular-nums text-[#0A2540]">
                  $5.568,00
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-semibold text-[#3B6E5C]">
                  2. Preparación y Equipos (25,4%)
                </span>
                <span className="font-mono font-bold tabular-nums text-[#0A2540]">
                  $2.300,00
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                <span className="font-semibold text-amber-700">
                  3. Contingencia 15% (13,1%)
                </span>
                <span className="font-mono font-bold tabular-nums text-[#0A2540]">
                  $1.180,20
                </span>
              </div>
            </div>
          </div>

          {/* 3 Expandable Budget Blocks */}
          <div className="mt-8 space-y-4">
            {BUDGET_CATEGORIES.map((cat) => {
              const isExpanded = expandedCategoryIds.includes(cat.id);
              return (
                <div
                  key={cat.id}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                >
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 bg-slate-50 hover:bg-slate-100/80 transition-colors text-left cursor-pointer"
                  >
                    <div>
                      <h3 className="text-base font-bold text-[#0A2540]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="text-base font-bold font-mono tabular-nums text-[#003B73]">
                        ${formatUsd(cat.totalUsd)} USD
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="divide-y divide-slate-100 px-5 py-2">
                      {cat.items.map((item) => (
                        <div
                          key={item.id}
                          className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs md:text-sm"
                        >
                          <div>
                            <p className="font-medium text-[#0A2540]">
                              {item.label}
                            </p>
                            {item.note && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {item.note}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-4 font-mono tabular-nums shrink-0">
                            {item.monthlyUsd && (
                              <span className="text-xs text-slate-500">
                                ${item.monthlyUsd}/mes × 6m
                              </span>
                            )}
                            <span className="font-semibold text-[#0A2540] min-w-[95px] text-right">
                              ${formatUsd(item.totalUsd)} USD
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Sponsorship Simulator */}
        <div className="bg-[#0A2540] text-white rounded-2xl p-6 md:p-8 border border-slate-800 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                <Calculator className="w-4 h-4" />
                <span>SIMULADOR INTERACTIVO DE FINANCIAMIENTO MODULAR</span>
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-white mt-1"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                Arma la combinación de padrinos para cubrir el 100% de la ruta
              </h3>
            </div>
            <div className="text-right font-mono tabular-nums">
              <p className="text-xs text-slate-300">Cobertura Simulada</p>
              <p className="text-2xl font-bold text-[#F59E0B]">
                ${formatUsd(simulatedRaised)} / $9.048,20 USD ({progressPct}%)
              </p>
            </div>
          </div>

          {/* Live Simulated Progress Bar */}
          <div className="mt-5">
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3B6E5C] via-[#10B981] to-[#F59E0B] transition-all duration-150"
                style={{width: `${progressPct}%`}}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-xs font-mono tabular-nums text-slate-300">
              <span>
                Suma de aportes simulados: ${formatUsd(simulatedRaised)} USD
              </span>
              <span>
                {remainingUsd > 0
                  ? `Restante por cubrir: $${formatUsd(remainingUsd)} USD`
                  : '¡Meta 100% cubierta! El excedente fortalece difusión y proyectos.'}
              </span>
            </div>
          </div>

          {/* Simulator Controls Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Control 1: Fuel Months */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#F59E0B]">
                  MÓDULO COMBUSTIBLE ($120/MES)
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Meses de Ruta Apadrinados
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  1.200 km diésel por mes (máx. 6 meses)
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFuelMonthsCount(Math.max(0, fuelMonthsCount - 1))
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Disminuir meses de combustible"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono font-bold text-sm w-8 text-center tabular-nums">
                    {fuelMonthsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFuelMonthsCount(Math.min(6, fuelMonthsCount + 1))
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Aumentar meses de combustible"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 tabular-nums">
                  +${fuelTotal} USD
                </span>
              </div>
            </div>

            {/* Control 2: Production Package Shares */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#F59E0B]">
                  PAQUETE PRODUCCIÓN ($401,67 × 6)
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Cuotas de Equipamiento/ Conectividad
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Total paquete: $2.410 USD (6 fracciones)
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setProdSharesCount(Math.max(0, prodSharesCount - 1))
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Disminuir cuotas de producción"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono font-bold text-sm w-8 text-center tabular-nums">
                    {prodSharesCount}/6
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setProdSharesCount(Math.min(6, prodSharesCount + 1))
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Aumentar cuotas de producción"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 tabular-nums">
                  +${formatUsd(prodTotal)}
                </span>
              </div>
            </div>

            {/* Control 3: Corporate / GAD Sponsors */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#F59E0B]">
                  MARCA EN LA VAN ($1.500 C/U)
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Aliados Corporativos / GADs
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Vinilado exterior + créditos en 12 episodios
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCorporateSponsorsCount(
                        Math.max(0, corporateSponsorsCount - 1)
                      )
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Disminuir patrocinadores corporativos"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono font-bold text-sm w-8 text-center tabular-nums">
                    {corporateSponsorsCount}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setCorporateSponsorsCount(
                        Math.min(6, corporateSponsorsCount + 1)
                      )
                    }
                    className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                    aria-label="Aumentar patrocinadores corporativos"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 tabular-nums">
                  +${corporateTotal.toLocaleString('es-EC')}
                </span>
              </div>
            </div>

            {/* Control 4: District Delegation In-Kind Toggle */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-emerald-300">
                  OPTIMIZACIÓN EN ESPECIE
                </p>
                <p className="text-sm font-semibold text-white mt-1">
                  Célula Digital Distrito 4400
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  Amortiza $2.400 USD de edición con jóvenes Rotaract/Universidades
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() =>
                    setAmortizeEditionWithDistrict(!amortizeEditionWithDistrict)
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    amortizeEditionWithDistrict
                      ? 'bg-emerald-400 text-[#0A2540]'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  {amortizeEditionWithDistrict ? 'Activada ✓' : 'Activar Aporte'}
                </button>
                <span className="text-xs font-mono font-semibold text-emerald-300 tabular-nums">
                  {amortizeEditionWithDistrict ? '+$2.400 USD' : '$0 USD'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Action Cards: "¿Cómo apadrinar Kilómetros con Propósito?" */}
        <div>
          <h3
            className="text-2xl font-bold text-[#0A2540] mb-6"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            ¿Cómo apadrinar Kilómetros con Propósito?
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {SPONSORSHIP_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs hover:border-[#003B73]/40 transition-colors"
              >
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#003B73]">
                    {tier.badgeText}
                  </p>
                  <h4
                    className="mt-2 text-xl font-bold text-[#0A2540]"
                    style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                  >
                    {tier.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {tier.subtitle}
                  </p>

                  <div className="mt-4 pb-4 border-b border-slate-200 flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono tabular-nums text-[#0A2540]">
                      ${tier.amountUsd.toLocaleString('es-EC')}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {tier.unitLabel}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {tier.benefits.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#3B6E5C] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectSponsorTier(tier.id, tier.amountUsd)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Elegir este Paquete de Apadrinamiento</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
