// Fuente única de cifras, coordenadas e identificadores. Todo proviene de la
// "Propuesta de documentación de proyectos Rotarios en Ecuador" (versión 26/10/2026).
// Los textos viven en `lib/i18n/{es,en}.ts`, en el mismo orden que estas listas.

import type {Lang} from '@/lib/i18n/types';

export const PROPOSAL_PDF_URL = '/propuesta-kilometros-con-proposito.pdf';

export interface RouteMonth {
  month: number;
  optional?: boolean;
  // Punto representativo de la zona en coordenadas reales (grados decimales)
  lon: number;
  lat: number;
}

export type FormatId = 'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio';

export const FORMAT_IDS: {id: FormatId; index: string}[] = [
  {id: 'manos-a-la-obra', index: '01'},
  {id: 'huella-rotaria', index: '02'},
  {id: 'voces-del-territorio', index: '03'},
];

export interface BudgetLine {
  monthlyUsd?: number;
  totalUsd: number;
}

// Los cargos están en `footer.team` de los diccionarios, en el mismo orden.
export const TEAM_NAMES = [
  'Soledad Hernández',
  'Romeo Carvajal Raura',
  'Diego Andrés Salazar Ramírez',
];

export const ROUTE_MONTHS: RouteMonth[] = [
  {month: 1, lon: -78.47, lat: -0.18},
  {month: 2, lon: -78.63, lat: -1.45},
  {month: 3, lon: -79.0, lat: -2.9},
  {month: 4, lon: -80.15, lat: -1.65},
  {month: 5, lon: -79.17, lat: -0.25},
  {month: 6, optional: true, lon: -77.9, lat: -1.25},
];

export const OPERATION_BUDGET: BudgetLine[] = [
  {monthlyUsd: 120, totalUsd: 720}, // Combustible diésel
  {monthlyUsd: 80, totalUsd: 480}, // Alimentación
  {monthlyUsd: 48, totalUsd: 288}, // Pernocta y estacionamiento
  {monthlyUsd: 60, totalUsd: 360}, // Conectividad
  {monthlyUsd: 100, totalUsd: 600}, // Mantenimiento ordinario
  {monthlyUsd: 90, totalUsd: 540}, // Seguros y asistencia
  {monthlyUsd: 400, totalUsd: 2400}, // Apoyo parcial de edición
  {monthlyUsd: 30, totalUsd: 180}, // Peajes y logística menor
];

export const PREP_BUDGET: BudgetLine[] = [
  {totalUsd: 600}, // Revisión inicial y elementos de seguridad
  {totalUsd: 850}, // Equipo audiovisual complementario
  {totalUsd: 350}, // Almacenamiento y respaldos
  {totalUsd: 500}, // Identidad del canal y materiales iniciales
];

export const PRODUCTION_PACKAGE: BudgetLine[] = [
  {totalUsd: 850}, // Equipo complementario
  {totalUsd: 350}, // Respaldos
  {totalUsd: 500}, // Materiales iniciales
  {totalUsd: 600}, // Edición
  {totalUsd: 360}, // Conectividad
];

const sum = (lines: BudgetLine[], key: 'monthlyUsd' | 'totalUsd') =>
  lines.reduce((acc, l) => acc + (l[key] ?? 0), 0);

export const OPERATION_MONTHLY_USD = sum(OPERATION_BUDGET, 'monthlyUsd');
export const OPERATION_TOTAL_USD = sum(OPERATION_BUDGET, 'totalUsd');
export const PREP_TOTAL_USD = sum(PREP_BUDGET, 'totalUsd');
export const SUBTOTAL_USD = OPERATION_TOTAL_USD + PREP_TOTAL_USD;
export const CONTINGENCY_USD = Math.round(SUBTOTAL_USD * 0.15 * 100) / 100;
export const TOTAL_BUDGET_USD = SUBTOTAL_USD + CONTINGENCY_USD;
export const PRODUCTION_PACKAGE_USD = sum(PRODUCTION_PACKAGE, 'totalUsd');

// Formato manual para evitar diferencias de locale entre servidor y navegador.
// es: 1.200,50 · en: 1,200.50
export function formatUsd(value: number, decimals = 0, lang: Lang = 'es'): string {
  const [int, dec] = value.toFixed(decimals).split('.');
  const thousands = lang === 'en' ? ',' : '.';
  const decimal = lang === 'en' ? '.' : ',';
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
  return dec ? `${grouped}${decimal}${dec}` : grouped;
}
