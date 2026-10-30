'use client';

import React, {useState} from 'react';
import {MapPin} from 'lucide-react';
import {ROUTE_MONTHS} from '@/lib/expedition-data';
import {useLang} from '@/lib/i18n/context';

// Proyección lineal lon/lat → viewBox. Ecuador continental cabe en
// lon −81.2…−75.0 y lat 1.6…−5.1, cerca del ecuador, así que la
// distorsión de una proyección equirectangular es despreciable.
const SCALE = 80;
const LON_MIN = -81.2;
const LAT_MAX = 1.6;
const VIEW_W = Math.round(6.2 * SCALE);
const VIEW_H = Math.round(6.7 * SCALE);

const project = (lon: number, lat: number) => ({
  x: (lon - LON_MIN) * SCALE,
  y: (LAT_MAX - lat) * SCALE,
});

// Contorno simplificado de Ecuador continental (lon, lat), en sentido horario
// desde la desembocadura del río Mataje.
const ECUADOR_OUTLINE: [number, number][] = [
  [-78.86, 1.45], [-78.58, 1.24], [-78.2, 1.12], [-77.95, 0.88],
  [-77.67, 0.83], [-77.42, 0.4], [-77.1, 0.36], [-76.58, 0.26],
  [-76.29, 0.42], [-76.03, 0.32], [-75.8, 0.08], [-75.37, -0.15],
  [-75.25, -0.55], [-75.21, -0.97], [-75.55, -1.56], [-76.1, -2.1],
  [-76.64, -2.61], [-77.2, -2.8], [-77.84, -3.0], [-78.19, -3.38],
  [-78.45, -3.78], [-78.58, -4.2], [-78.64, -4.55], [-78.95, -4.8],
  [-79.21, -4.96], [-79.45, -4.6], [-79.62, -4.45], [-80.03, -4.35],
  [-80.44, -4.43], [-80.15, -3.85], [-80.3, -3.4], [-79.95, -3.15],
  [-79.85, -2.65], [-80.1, -2.55], [-80.39, -2.63], [-80.75, -2.4],
  [-81.01, -2.19], [-80.78, -1.95], [-80.81, -1.55], [-80.92, -1.06],
  [-80.71, -0.95], [-80.45, -0.6], [-80.2, -0.3], [-80.05, 0.07],
  [-80.08, 0.65], [-79.65, 0.98], [-79.25, 1.1],
];

const OUTLINE_PATH =
  ECUADOR_OUTLINE.map(([lon, lat], i) => {
    const {x, y} = project(lon, lat);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

const NODES = ROUTE_MONTHS.map((m) => ({...m, ...project(m.lon, m.lat)}));
const QUITO = NODES[0];
const MAIN_LOOP = NODES.filter((n) => !n.optional);
const AMAZON = NODES.find((n) => n.optional);

const MAIN_PATH =
  [...MAIN_LOOP, QUITO]
    .map((n, i) => `${i === 0 ? 'M' : 'L'}${n.x.toFixed(1)},${n.y.toFixed(1)}`)
    .join(' ');

const EQUATOR_Y = project(0, 0).y;

const REGION_POSITIONS = [
  {key: 'coast' as const, ...project(-80.3, -2.3)},
  {key: 'andes' as const, ...project(-79.2, -3.6)},
  {key: 'amazon' as const, ...project(-76.75, -1.7)},
];

export default function InteractiveRouteMap() {
  const {t} = useLang();
  const [selectedMonth, setSelectedMonth] = useState(1);
  const activeIndex = Math.max(
    0,
    ROUTE_MONTHS.findIndex((m) => m.month === selectedMonth)
  );
  const active = ROUTE_MONTHS[activeIndex];
  const activeText = t.route.months[activeIndex];

  return (
    <section id="ruta" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
          {t.route.index}
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight text-balance"
          style={{fontFamily: 'var(--font-outfit), sans-serif'}}
        >
          {t.route.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slate-600 leading-relaxed">
          {t.route.intro}
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mapa */}
          <div className="lg:col-span-6 bg-[#0A2540] rounded-2xl p-4 sm:p-6">
            <svg
              viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
              className="w-full h-auto select-none"
              role="group"
              aria-label={t.route.mapLabel}
            >
              <path
                d={OUTLINE_PATH}
                fill="#133357"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <line
                x1="0"
                x2={VIEW_W}
                y1={EQUATOR_Y}
                y2={EQUATOR_Y}
                stroke="#F59E0B"
                strokeOpacity="0.4"
                strokeDasharray="4 4"
              />
              <text
                x="8"
                y={EQUATOR_Y - 6}
                fill="#F59E0B"
                fillOpacity="0.8"
                fontSize="11"
                fontFamily="monospace"
              >
                {t.route.equator}
              </text>

              {REGION_POSITIONS.map((r) => (
                <text
                  key={r.key}
                  x={r.x}
                  y={r.y}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.4)"
                  fontSize="12"
                  fontFamily="monospace"
                  letterSpacing="2"
                >
                  {t.route.regions[r.key]}
                </text>
              ))}

              <path
                d={MAIN_PATH}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {AMAZON && (
                <line
                  x1={QUITO.x}
                  y1={QUITO.y}
                  x2={AMAZON.x}
                  y2={AMAZON.y}
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeDasharray="6 5"
                />
              )}

              {NODES.map((node, i) => {
                const isSelected = node.month === selectedMonth;
                return (
                  <g
                    key={node.month}
                    role="button"
                    tabIndex={0}
                    aria-label={t.route.monthNodeLabel(node.month, t.route.months[i].zone)}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedMonth(node.month)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedMonth(node.month);
                      }
                    }}
                    className="cursor-pointer outline-none [&:focus-visible>circle:first-child]:stroke-white"
                  >
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="20"
                      fill="#F59E0B"
                      fillOpacity={isSelected ? 0.25 : 0}
                      stroke="transparent"
                      strokeWidth="2"
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 13 : 11}
                      fill={isSelected ? '#F59E0B' : '#0A2540'}
                      stroke={node.optional ? '#10B981' : '#F59E0B'}
                      strokeWidth="2.5"
                      strokeDasharray={node.optional ? '3 2' : undefined}
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fill={isSelected ? '#0A2540' : '#FFFFFF'}
                      fontSize="11"
                      fontWeight="bold"
                      fontFamily="monospace"
                    >
                      {node.month}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <span className="inline-block w-5 h-0.5 bg-[#F59E0B]" />
                {t.route.legendMain}
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block w-5 border-t-2 border-dashed border-[#10B981]" />
                {t.route.legendOptional}
              </span>
            </div>
          </div>

          {/* Detalle del mes */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label={t.route.tabsLabel}>
              {ROUTE_MONTHS.map((m) => {
                const isSelected = m.month === selectedMonth;
                return (
                  <button
                    key={m.month}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedMonth(m.month)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#003B73] text-white border-[#003B73]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t.route.month} {m.month}
                    {m.optional ? ` · ${t.route.optionalShort}` : ''}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6" role="tabpanel">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-500">
                {t.route.month} {active.month}
                {active.optional ? ` · ${t.route.optionalLong}` : ''}
              </p>
              <h3
                className="mt-1 text-2xl md:text-3xl font-bold"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                {activeText.zone}
              </h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  {t.route.possibleBase} {activeText.base}
                </span>
              </p>
              <p className="mt-4 text-base text-slate-800 leading-relaxed">
                {activeText.weekendUse}
              </p>
            </div>

            <p className="mt-8 text-sm text-slate-600 leading-relaxed">
              {t.route.kmNote}
            </p>
          </div>
        </div>

        {/* Distribución mensual de referencia */}
        <div className="mt-16">
          <h3
            className="text-xl font-bold"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            {t.route.distributionTitle}
          </h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[560px] text-sm text-left">
              <thead>
                <tr className="border-b border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-500">
                  <th className="py-3 pr-4 font-medium w-24">{t.route.weekendCol}</th>
                  <th className="py-3 pr-4 font-medium">{t.route.saturdayCol}</th>
                  <th className="py-3 font-medium">{t.route.sundayCol}</th>
                </tr>
              </thead>
              <tbody>
                {t.route.weekendPlan.map((w, i) => (
                  <tr key={i} className="border-b border-slate-200 align-top">
                    <td className="py-3 pr-4 font-mono font-semibold text-[#003B73]">
                      {i + 1}
                    </td>
                    <td className="py-3 pr-4 text-slate-700">{w.saturday}</td>
                    <td className="py-3 text-slate-700">{w.sunday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            {t.route.distributionNote}
          </p>
        </div>
      </div>
    </section>
  );
}
