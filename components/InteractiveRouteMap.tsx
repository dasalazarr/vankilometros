'use client';

import React, {useState} from 'react';
import {
  ROUTE_MONTHS,
  RouteMonth,
  WEEKEND_CADENCE,
} from '@/lib/expedition-data';
import {
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface InteractiveRouteMapProps {
  onSelectMonthForClub: (monthNumber: number, baseCities: string) => void;
}

export default function InteractiveRouteMap({
  onSelectMonthForClub,
}: InteractiveRouteMapProps) {
  const [selectedMonth, setSelectedMonth] = useState<number>(1);
  const [selectedWeekendIdx, setSelectedWeekendIdx] = useState<number>(0);

  const activeRoute: RouteMonth =
    ROUTE_MONTHS.find((m) => m.month === selectedMonth) || ROUTE_MONTHS[0];

  return (
    <section
      id="mapa-ruta"
      className="py-20 md:py-28 bg-white text-[#0A2540] border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
            <span>03. DESPLIEGUE TERRITORIAL · DISTRITO 4400</span>
            <span aria-hidden="true">·</span>
            <span>6 MESES · 100% FINES DE SEMANA</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            Mapa Interactivo de la Ruta: 7.200+ km conectando Sierra, Costa y
            Amazonía.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Selecciona cada nodo mensual en el mapa o en la barra superior para
            revisar las ciudades base, los cupos de documentación disponibles y
            asegurar la visita a tu club antes de que la van pase por tu zona.
          </p>
        </div>

        {/* Month Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {ROUTE_MONTHS.map((m) => {
            const isSelected = m.month === selectedMonth;
            return (
              <button
                key={m.month}
                type="button"
                onClick={() => setSelectedMonth(m.month)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#003B73] text-white border-[#003B73]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                Mes {m.month}
                {m.Optional ? ' (Opc.)' : ''} · {m.region.split('·')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Map + Monthly Operational Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 6 Cols: Stylized Interactive SVG Map of Ecuador */}
          <div className="lg:col-span-6 bg-[#0A2540] text-white rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between gap-4 z-10">
              <div>
                <p className="text-xs font-mono text-[#F59E0B]">
                  CARTOGRAFÍA OPERATIVA · ECUADOR CONTINENTAL
                </p>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Haz clic en cualquier nodo (M1 a M6) para inspeccionar el
                  corredor
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-300 tabular-nums shrink-0">
                1.200 km / mes
              </span>
            </div>

            {/* Stylized Ecuador Vector Map & Route Line */}
            <div className="my-4 flex items-center justify-center">
              <svg
                viewBox="0 0 500 500"
                className="w-full max-w-[440px] h-auto select-none"
                role="img"
                aria-label="Mapa estilizado de la ruta de 6 meses por Ecuador"
              >
                <defs>
                  <linearGradient
                    id="ecuadorLandGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#133357" />
                    <stop offset="60%" stopColor="#1B463E" />
                    <stop offset="100%" stopColor="#0E2947" />
                  </linearGradient>
                  <linearGradient
                    id="routeStrokeGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B6E5C" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>

                {/* Subtle Grid Lines */}
                <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                  <line x1="0" y1="125" x2="500" y2="125" />
                  <line x1="0" y1="250" x2="500" y2="250" />
                  <line x1="0" y1="375" x2="500" y2="375" />
                  <line x1="125" y1="0" x2="125" y2="500" />
                  <line x1="250" y1="0" x2="250" y2="500" />
                  <line x1="375" y1="0" x2="375" y2="500" />
                </g>

                {/* Equator Line 0°0'0" */}
                <line
                  x1="20"
                  y1="118"
                  x2="480"
                  y2="118"
                  stroke="#F59E0B"
                  strokeOpacity="0.35"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <text
                  x="28"
                  y="110"
                  fill="#F59E0B"
                  fillOpacity="0.7"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  LAT 0°00&apos; ECUADOR
                </text>

                {/* Stylized Silhouette of Continental Ecuador */}
                <path
                  d="M 165,55 L 255,48 L 345,75 L 435,140 L 455,225 L 405,310 L 325,365 L 265,435 L 185,465 L 135,430 L 130,365 L 85,325 L 65,255 L 80,185 L 115,115 Z"
                  fill="url(#ecuadorLandGrad)"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="2"
                />

                {/* Andean Cordillera Topographic Spine */}
                <path
                  d="M 250,55 Q 235,160 225,250 T 195,445"
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="18"
                  strokeLinecap="round"
                />

                {/* Full 6-Month Expedition Route Path */}
                <path
                  d="M 245,125 C 245,175 235,200 235,235 C 235,295 215,340 205,385 C 155,375 115,330 115,275 C 115,220 155,195 185,175 C 235,165 280,195 315,225"
                  fill="none"
                  stroke="url(#routeStrokeGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />

                {/* Region Labels */}
                <text
                  x="72"
                  y="235"
                  fill="rgba(255,255,255,0.45)"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  COSTA
                </text>
                <text
                  x="248"
                  y="310"
                  fill="rgba(255,255,255,0.45)"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  SIERRA
                </text>
                <text
                  x="345"
                  y="205"
                  fill="rgba(255,255,255,0.45)"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  AMAZONÍA
                </text>

                {/* Interactive Monthly Nodes */}
                {ROUTE_MONTHS.map((node) => {
                  const isSelected = node.month === selectedMonth;
                  return (
                    <g
                      key={node.month}
                      onClick={() => setSelectedMonth(node.month)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={node.coordinates.x}
                          cy={node.coordinates.y}
                          r="24"
                          fill="#F59E0B"
                          fillOpacity="0.22"
                        />
                      )}
                      <circle
                        cx={node.coordinates.x}
                        cy={node.coordinates.y}
                        r={isSelected ? '14' : '11'}
                        fill={isSelected ? '#F59E0B' : '#0A2540'}
                        stroke={isSelected ? '#FFFFFF' : '#F59E0B'}
                        strokeWidth="2.5"
                      />
                      <text
                        x={node.coordinates.x}
                        y={node.coordinates.y + 4}
                        textAnchor="middle"
                        fill={isSelected ? '#0A2540' : '#FFFFFF'}
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        M{node.month}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Footer Legend */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <span>Kilómetro Cero: Quito (Distrito 4400)</span>
              <span className="font-mono text-[#F59E0B] tabular-nums">
                Total Ruta: +7.200 km estimados
              </span>
            </div>
          </div>

          {/* Right 6 Cols: Active Month Detailed Card */}
          <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <span className="text-xs font-mono font-semibold text-[#003B73] uppercase tracking-wider">
                  {activeRoute.region}
                </span>
                <span className="text-xs font-mono text-[#3B6E5C] font-semibold tabular-nums">
                  Cupos de Documentación: {activeRoute.availableSlots} de{' '}
                  {activeRoute.projectSlots} disponibles
                </span>
              </div>

              <h3
                className="mt-5 text-2xl md:text-3xl font-bold text-[#0A2540]"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                {activeRoute.title}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Ciudades Base / Corredor: {activeRoute.baseCities}</span>
              </div>

              <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                {activeRoute.summary}
              </p>

              {/* Monthly Operational KPI Grid */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                  <p className="text-xs text-slate-500">Recorrido Estimado</p>
                  <p className="text-base font-bold text-[#0A2540] font-mono tabular-nums mt-0.5">
                    {activeRoute.kilometers.toLocaleString('es-EC')} km
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                  <p className="text-xs text-slate-500">Altitud de Operación</p>
                  <p className="text-sm font-bold text-[#0A2540] font-mono tabular-nums mt-0.5">
                    {activeRoute.elevationRange}
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5">
                  <p className="text-xs text-slate-500">Ritmo Mensual</p>
                  <p className="text-sm font-bold text-[#3B6E5C] font-mono tabular-nums mt-0.5">
                    {activeRoute.fieldWeekends} FDS Campo +{' '}
                    {activeRoute.productionWeekends} Estudio
                  </p>
                </div>
              </div>

              {/* Key Objectives for the Selected Month */}
              <div className="mt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                  Hitos Operativos del Mes {activeRoute.month}
                </p>
                <ul className="space-y-2.5">
                  {activeRoute.keyFocus.map((focus, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#003B73] shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">
                  ¿Tu Club pertenece a este corredor geográfico?
                </p>
                <p className="text-xs font-semibold text-[#0A2540] mt-0.5">
                  Reserva uno de los {activeRoute.projectSlots} fines de semana
                  de rodaje del Mes {activeRoute.month}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  onSelectMonthForClub(
                    activeRoute.month,
                    activeRoute.baseCities
                  )
                }
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Postular en Mes {activeRoute.month}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* WIDGET DEL RITMO OPERATIVO (Timeline de 4 Fines de Semana) */}
        <div className="mt-12 bg-[#0A2540] text-white rounded-2xl p-6 md:p-8 border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                DISCIPLINA OPERATIVA · CERO COMPROMISO DE LUNES A VIERNES
              </p>
              <h3
                className="text-xl md:text-2xl font-bold text-white mt-1"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                Widget del Ritmo Operativo Mensual (Ciclo de 4 Fines de Semana)
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-300">
              2 Proyectos Documentados y Auditados cada Mes
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEEKEND_CADENCE.map((item, idx) => {
              const isSelected = selectedWeekendIdx === idx;
              return (
                <button
                  key={item.weekend}
                  type="button"
                  onClick={() => setSelectedWeekendIdx(idx)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#003B73] border-[#F59E0B] shadow-md'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#F59E0B] font-bold">
                        {item.weekend}
                      </span>
                      <span className="text-slate-300">{item.days}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-emerald-300">
                    Entregable: {item.deliverable}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
