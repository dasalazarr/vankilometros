// Fuente única de contenido. Todo proviene de la
// "Propuesta de documentación de proyectos Rotarios en Ecuador" (versión 26/10/2026).

export const PROPOSAL_PDF_URL = '/propuesta-kilometros-con-proposito.pdf';

export interface RouteMonth {
  month: number;
  zone: string;
  base: string;
  weekendUse: string;
  optional?: boolean;
  // Punto representativo de la zona en coordenadas reales (grados decimales)
  lon: number;
  lat: number;
}

export interface WeekendPlan {
  weekend: number;
  saturday: string;
  sunday: string;
}

export type FormatId = 'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio';

export interface ProductionFormat {
  id: FormatId;
  index: string;
  name: string;
  stage: string;
  description: string;
}

export interface BudgetLine {
  label: string;
  basis?: string;
  monthlyUsd?: number;
  totalUsd: number;
}

export const OUTCOMES = [
  {
    audience: 'Para el Distrito 4400',
    text: 'Mayor posicionamiento, visibilidad institucional y reconocimiento del impacto de sus clubes en el Ecuador.',
  },
  {
    audience: 'Para los clubes rotarios',
    text: 'Una herramienta audiovisual para difundir sus proyectos, mostrar resultados y atraer nuevos aliados, recursos y voluntarios.',
  },
  {
    audience: 'Para la sociedad',
    text: 'Conocer qué es Rotary, qué hace, cómo y por qué lo hace, descubriendo oportunidades concretas para sumarse a iniciativas que transforman comunidades.',
  },
];

export const HERO_FACTS = [
  {value: '6 meses', label: 'Solo sábados y domingos'},
  {value: '10 a 12', label: 'Proyectos documentados'},
  {value: '12 + 24', label: 'Episodios y videos cortos'},
  {value: '1.200 km', label: 'Máximo presupuestado por mes'},
];

export const PRODUCTION_FORMATS: ProductionFormat[] = [
  {
    id: 'manos-a-la-obra',
    index: '01',
    name: 'Manos a la Obra',
    stage: 'En ejecución / planificación activa',
    description:
      'La llegada de la van coincide con un hito en vivo: una minga comunitaria, una entrega de insumos o una brigada médica. La audiencia ve y experimenta la acción en tiempo real.',
  },
  {
    id: 'huella-rotaria',
    index: '02',
    name: 'Huella Rotaria',
    stage: 'Proyectos ejecutados / post-ejecución',
    description:
      'Mini-documental de alto impacto visual para medir resultados, auditar la sostenibilidad del proyecto y activar un crowdfunding permanente para financiar su Fase 2 o escalamiento.',
  },
  {
    id: 'voces-del-territorio',
    index: '03',
    name: 'Voces del Territorio',
    stage: 'Podcast / entrevista en vivo',
    description:
      'Un set móvil junto a la van para conversar, en vivo o grabado, con beneficiarios, líderes comunitarios, autoridades locales y socios del club sobre la problemática y las soluciones en el territorio.',
  },
];

export const VISIT_FLOW = [
  'Coordinar la visita y acordar alcance, horarios, permisos y personas entrevistadas.',
  'Recoger entrevistas, imágenes y evidencias, respetando el funcionamiento del proyecto.',
  'Editar una historia que explique el problema, la respuesta, los resultados y la forma de participar.',
  'Remitir datos y fragmentos sensibles al responsable para validación factual y de permisos.',
  'Publicar, entregar materiales y revisar los contactos generados a los 30 y 60 días.',
];

export const ROUTE_MONTHS: RouteMonth[] = [
  {
    month: 1,
    zone: 'Quito y valles; Imbabura',
    base: 'Quito',
    weekendUse:
      'Dos salidas locales y dos fines de semana de producción y coordinación.',
    lon: -78.47,
    lat: -0.18,
  },
  {
    month: 2,
    zone: 'Sierra centro',
    base: 'Ambato o Riobamba',
    weekendUse:
      'Traslado y primera visita en un fin de semana; segunda salida cercana y dos fines de semana de producción.',
    lon: -78.63,
    lat: -1.45,
  },
  {
    month: 3,
    zone: 'Sierra sur',
    base: 'Cuenca',
    weekendUse:
      'Traslado por etapas y visitas cercanas. Loja o El Oro solo si caben sin sobrecargar la conducción.',
    lon: -79.0,
    lat: -2.9,
  },
  {
    month: 4,
    zone: 'Costa',
    base: 'Por definir entre Guayaquil y Manabí',
    weekendUse:
      'Elegir un corredor prioritario; dos fines de semana de campo y dos de producción.',
    lon: -80.15,
    lat: -1.65,
  },
  {
    month: 5,
    zone: 'Santo Domingo y Quito',
    base: 'Santo Domingo; retorno a Quito',
    weekendUse:
      'Visitas finales, retorno por etapas, seguimiento e informe si se cierra a los cinco meses.',
    lon: -79.17,
    lat: -0.25,
  },
  {
    month: 6,
    zone: 'Amazonía (opcional)',
    base: 'Tena o Puyo; retorno a Quito',
    weekendUse:
      'Elegir una zona amazónica, realizar visitas viables y reservar tiempo para el cierre.',
    optional: true,
    lon: -77.9,
    lat: -1.25,
  },
];

export const WEEKEND_PLAN: WeekendPlan[] = [
  {
    weekend: 1,
    saturday: 'Traslado diurno y visita o entrevistas.',
    sunday: 'Completar grabación y volver a la base o establecer la siguiente.',
  },
  {
    weekend: 2,
    saturday: 'Respaldos y edición del primer episodio.',
    sunday:
      'Validación disponible, publicación y coordinación de la próxima visita.',
  },
  {
    weekend: 3,
    saturday: 'Segunda salida y documentación.',
    sunday: 'Completar la visita y traslado a la base.',
  },
  {
    weekend: 4,
    saturday: 'Edición del segundo episodio y piezas cortas.',
    sunday:
      'Publicación, seguimiento, gastos y planificación del siguiente mes.',
  },
];

export const OPERATION_BUDGET: BudgetLine[] = [
  {
    label: 'Combustible diésel',
    basis: '1.200 km × 10 L/100 km; reserva sobre el cálculo de USD 98,59.',
    monthlyUsd: 120,
    totalUsd: 720,
  },
  {
    label: 'Alimentación',
    basis: '8 días × USD 10. Solo alimentación en días del proyecto.',
    monthlyUsd: 80,
    totalUsd: 480,
  },
  {
    label: 'Pernocta y estacionamiento',
    basis: '4 noches × USD 12 en salidas de campo.',
    monthlyUsd: 48,
    totalUsd: 288,
  },
  {
    label: 'Conectividad',
    basis: 'Plan de 65 GB de USD 45,99 más USD 14,01 para recargas.',
    monthlyUsd: 60,
    totalUsd: 360,
  },
  {
    label: 'Mantenimiento ordinario',
    basis: 'Aceite, filtros y desgaste; sin reparación mayor. Por cotizar.',
    monthlyUsd: 100,
    totalUsd: 600,
  },
  {
    label: 'Seguros y asistencia',
    basis: 'Vehículo y protección personal. Por cotizar.',
    monthlyUsd: 90,
    totalUsd: 540,
  },
  {
    label: 'Apoyo parcial de edición',
    basis: 'Estimación propia; alcance del servicio por cotizar.',
    monthlyUsd: 400,
    totalUsd: 2400,
  },
  {
    label: 'Peajes y logística menor',
    basis: 'Peajes, agua, lavandería y consumibles. Estimación propia.',
    monthlyUsd: 30,
    totalUsd: 180,
  },
];

export const PREP_BUDGET: BudgetLine[] = [
  {label: 'Revisión inicial y elementos de seguridad', totalUsd: 600},
  {label: 'Equipo audiovisual complementario', totalUsd: 850},
  {label: 'Almacenamiento y respaldos', totalUsd: 350},
  {label: 'Identidad del canal y materiales iniciales', totalUsd: 500},
];

export const PRODUCTION_PACKAGE: BudgetLine[] = [
  {label: 'Equipo complementario', totalUsd: 850},
  {label: 'Respaldos', totalUsd: 350},
  {label: 'Materiales iniciales', totalUsd: 500},
  {label: 'Edición', totalUsd: 600},
  {label: 'Conectividad', totalUsd: 360},
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

export const SUPPORT_MODALITIES = [
  {
    name: 'Aval institucional',
    request:
      'Carta que reconozca el propósito de servicio y autorice el alcance del respaldo, vigente para la fase piloto.',
  },
  {
    name: 'Articulación',
    request:
      'Designación de un enlace y presentación a clubes para recibir propuestas y coordinar visitas.',
  },
  {
    name: 'Difusión',
    request:
      'Compartir episodios y convocatorias pertinentes en canales distritales y de clubes participantes.',
  },
  {
    name: 'Apoyo en especie',
    request:
      'Contactos locales, lugares seguros de estacionamiento, conectividad o equipos, según disponibilidad.',
  },
  {
    name: 'Apoyo económico opcional',
    request:
      'Facilitar patrocinadores o considerar un aporte al paquete de producción, con acuerdo y rendición de cuentas.',
  },
];

export const GOALS = [
  {
    indicator: 'Proyectos documentados',
    target: '10 en 5 meses; 12 en 6 meses',
    verification: 'Ficha, autorizaciones y contenido publicado.',
  },
  {
    indicator: 'Episodios y videos cortos',
    target: '10 y 20 en 5 meses; 12 y 24 en 6 meses',
    verification: 'Registro de publicaciones.',
  },
  {
    indicator: 'Material para participantes',
    target: 'Un paquete por proyecto',
    verification: 'Enlaces y archivos entregados.',
  },
  {
    indicator: 'Contactos de participación',
    target: '30 contactos calificados',
    verification: 'Interés concreto remitido con consentimiento; sin duplicados.',
  },
  {
    indicator: 'Acciones posteriores',
    target: '6 confirmadas',
    verification:
      'El club o grupo confirma voluntariado, donación o avance de membresía.',
  },
  {
    indicator: 'Intercambio entre organizaciones',
    target: '2 encuentros',
    verification: 'Registro de participantes y acuerdos.',
  },
  {
    indicator: 'Rendición de cuentas',
    target: 'Mensual y final',
    verification: 'Reporte de actividad, gastos y resultados.',
  },
];

export const COMMITMENTS = [
  {
    title: 'Consentimiento y protección',
    text: 'Consentimiento informado en cada grabación; para menores, autorización del representante legal y acompañamiento de responsables.',
  },
  {
    title: 'Dignidad de las comunidades',
    text: 'Sin imágenes que exploten situaciones de vulnerabilidad y con un canal acordado para correcciones.',
  },
  {
    title: 'Seguridad y continuidad',
    text: 'Conducción diurna, pernocta autorizada y reprogramación ante inseguridad, clima adverso o fallas del vehículo.',
  },
  {
    title: 'Transparencia',
    text: 'Donaciones a proyectos y fondos de producción se registran e informan por separado. Ningún patrocinio condiciona testimonios.',
  },
];

export const TEAM = [
  {
    name: 'Soledad Hernández',
    role: 'Promotora y coordinadora del proyecto',
  },
  {
    name: 'Romeo Carvajal Raura',
    role: 'Presidente del Comité de Imagen Pública, Club Rotario Intercultural · Distrito 4400',
  },
  {
    name: 'Diego Andrés Salazar Ramírez',
    role: 'Vicepresidente, Club Rotaract de Pamplona',
  },
];

// Formato manual para evitar diferencias de locale entre servidor y navegador.
export function formatUsd(value: number, decimals = 0): string {
  const [int, dec] = value.toFixed(decimals).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return dec ? `${grouped},${dec}` : grouped;
}
