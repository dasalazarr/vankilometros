export interface VanHotspot {
  id: string;
  number: string;
  zone: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  x: number; // percentage on image
  y: number; // percentage on image
  sponsorPackageId?: string;
}

export interface ProductionFormat {
  id: 'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio';
  index: string;
  name: string;
  stageLabel: string;
  question: string;
  answer: string;
  deliverables: string[];
  mockup: {
    episodeCode: string;
    title: string;
    club: string;
    location: string;
    duration: string;
    primaryMetricLabel: string;
    primaryMetricValue: string;
    secondaryMetricLabel: string;
    secondaryMetricValue: string;
    highlights: string[];
    ctaLabel: string;
  };
}

export interface RouteMonth {
  month: number;
  title: string;
  region: string;
  baseCities: string;
  Optional?: boolean;
  summary: string;
  kilometers: number;
  elevationRange: string;
  fieldWeekends: number;
  productionWeekends: number;
  projectSlots: number;
  availableSlots: number;
  keyFocus: string[];
  coordinates: { x: number; y: number }; // SVG map coordinates (viewBox 0 0 500 560)
}

export interface BudgetLineItem {
  id: string;
  label: string;
  monthlyUsd?: number;
  totalUsd: number;
  note?: string;
}

export interface BudgetCategory {
  id: string;
  title: string;
  subtitle: string;
  totalUsd: number;
  monthlyUsd?: number;
  percentage: number;
  colorHex: string;
  items: BudgetLineItem[];
}

export interface SponsorshipTier {
  id: string;
  title: string;
  subtitle: string;
  amountUsd: number;
  unitLabel: string;
  description: string;
  benefits: string[];
  badgeText: string;
}

export interface RotaryBlueprint {
  id: string;
  code: string;
  title: string;
  club: string;
  province: string;
  areaOfFocus: string;
  problem: string;
  solution: string;
  budgetUsd: number;
  beneficiaries: number;
  executionWeeks: number;
  replicationSteps: string[];
  learnedLesson: string;
}

export const VAN_HOTSPOTS: VanHotspot[] = [
  {
    id: 'podcast-set',
    number: '01',
    zone: 'En el Toldo / Lateral',
    title: 'Set de Podcast Itinerante',
    subtitle: 'Estudio "Voces del Territorio" al aire libre',
    description:
      'Aquí se despliega "Voces del Territorio": micrófonos, sillas de campaña y cámaras listas para entrevistar en vivo a beneficiarios, alcaldes y líderes rotarios en cualquier plaza o comunidad.',
    specs: [
      'Toldo lateral de despliegue rápido (2.5m x 2.0m)',
      'Sistema de grabación multipista con micrófonos dinámicos aislados del viento',
      'Iluminación LED bicolor portátil con baterías V-Mount',
      'Montaje en menos de 18 minutos en plazas comunitarias o proyectos rurales',
    ],
    x: 63,
    y: 36,
    sponsorPackageId: 'produccion',
  },
  {
    id: 'autonomia-overland',
    number: '02',
    zone: 'En la Carpa de Techo y Planchas Naranjas',
    title: 'Autonomía Overland',
    subtitle: 'Infraestructura propia para Sierra, Costa y Amazonía',
    description:
      'Alojamiento e infraestructura propia que permite llegar a comunidades rurales en Sierra, Costa y Amazonía sin depender de logística hotelera costosa.',
    specs: [
      'Carpa de techo rígida impermeable de alta montaña',
      'Planchas de rescate Maxtrax naranjas para caminos de tercer orden, lodo o arena',
      'Reducción del 75% en costos de hospedaje durante salidas de campo',
      'Operación 100% diurna con protocolo estricto de pernocta segura',
    ],
    x: 77,
    y: 46,
    sponsorPackageId: 'combustible-mes',
  },
  {
    id: 'isla-edicion',
    number: '03',
    zone: 'En el Interior',
    title: 'Isla de Edición y Conectividad',
    subtitle: 'Postproducción en ruta y respaldo redundante',
    description:
      'Estación móvil de respaldo de datos, edición de episodios (8-15 min) y micro-contenidos (Reels/Shorts de 30-90s) con subtítulos en español e inglés.',
    specs: [
      'Estación de energía auxiliar EcoFlow / inversor sinusoidal puro para equipos',
      'Doble respaldo en discos SSD NVMe rugerizados + sincronización en nube',
      'Conectividad móvil de alta capacidad (65GB+ mensuales) para envíos a revisión',
      'Flujo de subtitulado bilingüe (ES/EN) para alcance en Rotary International',
    ],
    x: 47,
    y: 50,
    sponsorPackageId: 'produccion',
  },
  {
    id: 'muro-patrocinadores',
    number: '04',
    zone: 'En la Puerta / Carrocería',
    title: 'Muro de Patrocinadores en Ruta',
    subtitle: 'Visibilidad física en 7.200+ km y presencia en pantalla',
    description:
      'Espacio físico oficial en el vinilado exterior de la van para lucir los logos de las empresas, GADs y clubes que apadrinan kilómetros de la ruta.',
    specs: [
      'Vinilado vehicular de alta resistencia UV y lluvia andina/amazónica',
      'Exposición directa en ferias comunitarias, centros urbanos y carreteras nacionales',
      'Presencia garantizada en tomas de dron, introducciones y cierres de los 12 episodios',
      'Código QR impreso en carrocería hacia el portal de donaciones y alianzas',
    ],
    x: 65,
    y: 63,
    sponsorPackageId: 'marca-van',
  },
  {
    id: 'alianza-distrital',
    number: '05',
    zone: 'En las Ruedas Rotarias',
    title: 'Alianza Sole + Delegación Distrital',
    subtitle: 'Dirección en terreno + célula digital joven del Distrito 4400',
    description:
      'Coordinación en terreno liderada por Soledad Hernández, potenciada en remoto por una célula digital de jóvenes del Distrito 4400 (Rotaract/Interact) gestionando redes, marca y tráfico.',
    specs: [
      'Conducción, producción de campo y dirección narrativa por Soledad Hernández',
      'Célula remota Rotaract/Interact: edición de Shorts, gestión de tráfico y comunidad',
      'Validación factual previa con el club anfitrión antes de cada publicación',
      'Transferencia de capacidades audiovisuales a jóvenes líderes del Distrito 4400',
    ],
    x: 36,
    y: 80,
    sponsorPackageId: 'marca-van',
  },
];

export const PRODUCTION_FORMATS: ProductionFormat[] = [
  {
    id: 'manos-a-la-obra',
    index: '01',
    name: 'Formato "Manos a la Obra"',
    stageLabel: 'En Ejecución / Planificación Activa',
    question: '¿Qué pasa cuando llega la van?',
    answer:
      'Coincidimos con un hito en vivo (minga comunitaria, brigada médica, entrega de insumos). La audiencia vive la acción en tiempo real y se activa el llamado a voluntariado inmediato.',
    deliverables: [
      'Episodio inmersivo de acción en terreno (8 a 12 min)',
      '2 Reels/Shorts de llamado urgente a manos voluntarias e insumos',
      'Activación del botón "Sumarme como Voluntario" en la ficha del club',
      'Cobertura en tiempo real durante el fin de semana de visita',
    ],
    mockup: {
      episodeCode: 'FORMATO 01 · EN TERRENO',
      title: 'Minga de Captación de Agua Limpia y Filtros Comunitarios',
      club: 'Club Rotario Quito Intercultural & Comunidad Andina',
      location: 'Páramo de Cotopaxi · 3.650 m.s.n.m.',
      duration: '11:20 min',
      primaryMetricLabel: 'Voluntarios Activados',
      primaryMetricValue: '48 en terreno',
      secondaryMetricLabel: 'Meta de Insumos en Vivo',
      secondaryMetricValue: '86% completada',
      highlights: [
        'Instalación en vivo de 35 sistemas de biofiltración familiar con líderes comunitarios.',
        'Apertura de convocatoria para ingenieros hidráulicos y voluntarios del Distrito 4400.',
        'Enlace directo a cuenta verificada del Club para completar lote de tubería PVC.',
      ],
      ctaLabel: 'Inscribirme a la Minga del Club',
    },
  },
  {
    id: 'huella-rotaria',
    index: '02',
    name: 'Formato "Huella Rotaria"',
    stageLabel: 'Proyectos Ejecutados / Post-ejecución',
    question: '¿Qué pasa cuando llega la van?',
    answer:
      'Producimos un mini-documental cinematográfico para auditar resultados, mostrar rostros transformados y encender la recaudación para su Fase 2 o escalamiento.',
    deliverables: [
      'Mini-documental de impacto verificado (10 a 15 min) con subtítulos ES/EN',
      'Auditoría visual de métricas a 6, 12 o 24 meses de haberse inaugurado',
      'Activación de pasarela permanente para financiar Fase 2 o Subvención Global',
      'Publicación del Blueprint Open-Source para que otros clubes lo repliquen',
    ],
    mockup: {
      episodeCode: 'FORMATO 02 · AUDITORÍA DE IMPACTO',
      title: 'De la Sequía a la Exportación: Sistema de Riego Tecnificado (Fase 2)',
      club: 'Clubes Rotarios de Sierra Centro',
      location: 'Comunidad San Juan, Chimborazo · 3.200 m.s.n.m.',
      duration: '14:05 min',
      primaryMetricLabel: 'Familias Productoras',
      primaryMetricValue: '124 familias (+210% ingresos)',
      secondaryMetricLabel: 'Recaudación Fase 2 Activa',
      secondaryMetricValue: '$6.450 / $10.000 USD',
      highlights: [
        'Testimonios verificados de mujeres agricultoras 14 meses después de la entrega inicial.',
        'Transparencia total: desglose de cómo se invirtieron los primeros $12.000 USD.',
        'Campaña internacional abierta con subtítulos en inglés para clubes hermanos en EE.UU. y Europa.',
      ],
      ctaLabel: 'Aportar a la Fase 2 del Proyecto',
    },
  },
  {
    id: 'voces-del-territorio',
    index: '03',
    name: 'Formato "Voces del Territorio"',
    stageLabel: 'Podcast & Entrevista en Vivo',
    question: '¿Qué pasa cuando llega la van?',
    answer:
      'Montamos el estudio móvil junto a la van para dialogar con beneficiarios, autoridades locales (GADs) y socios del club sobre soluciones reales.',
    deliverables: [
      'Episodio conversacional grabado bajo el toldo de la Citroën Jumpy (12 a 15 min)',
      '3 Clips verticales de alto impacto para LinkedIn, Instagram y YouTube Shorts',
      'Acta pública de compromisos entre Club Rotario, GAD local y empresa privada',
      'Distribución en Spotify, YouTube y portal web del Distrito 4400',
    ],
    mockup: {
      episodeCode: 'FORMATO 03 · SET DE PODCAST MÓVIL',
      title: 'Salud Materno-Infantil y Alianzas Público-Privadas en la Frontera Sur',
      club: 'Clubes Rotarios de Azuay y Loja + Alcaldía Local',
      location: 'Plaza Central · Sierra Sur',
      duration: '15:00 min',
      primaryMetricLabel: 'Interlocutores en Mesa',
      primaryMetricValue: 'Club + Alcaldía + Lideresa Rural',
      secondaryMetricLabel: 'Acuerdos Firmados en Ruta',
      secondaryMetricValue: '2 Convenios de Co-inversión',
      highlights: [
        'Diálogo sin guiones acartonados desde el territorio donde ocurre la necesidad.',
        'Compromiso en cámara de contraparte municipal para logística y mantenimiento.',
        'Posicionamiento de Rotary como articulador técnico confiable ante la ciudadanía.',
      ],
      ctaLabel: 'Escuchar Extracto y Ver Compromisos',
    },
  },
];

export const SAMPLE_BLUEPRINTS: RotaryBlueprint[] = [
  {
    id: 'bp-agua-paramo',
    code: 'BP-4400-01',
    title: 'Sistemas Comunitarios de Cosecha de Agua de Niebla y Biofiltración',
    club: 'Club Rotario Quito Intercultural',
    province: 'Pichincha / Cotopaxi',
    areaOfFocus: 'Agua, Saneamiento e Higiene',
    problem:
      'Comunidades dispersas a más de 3.400 m.s.n.m. carecen de red de agua potable y consumen agua superficial con presencia de coliformes y sedimentos.',
    solution:
      'Instalación de atrapanieblas modulares de malla Raschel reforzada conectados a tanques de reserva de 2.500L y filtros lentos de arena y carbón activado construidos en minga.',
    budgetUsd: 4850,
    beneficiaries: 180,
    executionWeeks: 6,
    replicationSteps: [
      'Diagnóstico participativo y análisis físico-químico de fuente de agua (Semana 1).',
      'Acuerdo con cabildo comunitario: el club aporta materiales críticos ($4.850) y la comunidad aporta mano de obra en 2 mingas de fin de semana.',
      'Capacitación a junta administradora de agua local para cambio de lecho filtrante cada 12 meses.',
      'Auditoría a los 60 días y levantamiento de línea base de reducción de enfermedades gastrointestinales.',
    ],
    learnedLesson:
      'No comprar tanques prefabricados en la capital: adquirirlos en el centro cantonal más cercano redujo el costo de flete en un 38% y activó la economía local.',
  },
  {
    id: 'bp-telemedicina-rural',
    code: 'BP-4400-02',
    title: 'Módulos Solares de Telemedicina y Diagnóstico Preventivo Rural',
    club: 'Clubes Rotarios del Corredor Manabí / Guayas',
    province: 'Manabí',
    areaOfFocus: 'Prevención y Tratamiento de Enfermedades',
    problem:
      'Recintos agrícolas costeros quedan incomunicados en época invernal, obligando a madres y adultos mayores a viajar 3 horas para controles básicos de hipertensión y glucosa.',
    solution:
      'Equipamiento de dispensario parroquial con kit energético solar autónomo, conectividad satelital/4G y maletín de telemedicina operado por promotor de salud local conectado a médicos rotarios.',
    budgetUsd: 6200,
    beneficiaries: 450,
    executionWeeks: 8,
    replicationSteps: [
      'Selección y aval de promotor comunitario residente en el recinto.',
      'Instalación de respaldo solar fotovoltaico de 600W para garantizar operación de equipos diagnósticos.',
      'Turnero digital rotario: 8 médicos socios de clubes donan 2 horas mensuales de teleconsulta.',
      'Convenio con farmacia solidaria local para dispensación de medicamentos crónicos.',
    ],
    learnedLesson:
      'Entrenar a jóvenes de Interact/Rotaract de la provincia como soporte técnico remoto aseguró que el dispensario nunca deje de operar por fallos de configuración.',
  },
];

export const ROUTE_MONTHS: RouteMonth[] = [
  {
    month: 1,
    title: 'Mes 1 · Quito, Valles e Imbabura',
    region: 'Sierra Norte · Base Inicial',
    baseCities: 'Quito · Cumbayá · Otavalo · Ibarra',
    summary:
      'Base inicial. 2 salidas locales + 2 fines de semana de producción y ajuste de sistemas.',
    kilometers: 1200,
    elevationRange: '2.200 – 3.400 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 1,
    keyFocus: [
      'Lanzamiento oficial con el Club Rotario Quito Intercultural y calibración técnica de la Citroën Jumpy.',
      'Documentación de 2 proyectos emblemáticos en Pichincha e Imbabura.',
      'Puesta en marcha del flujo de edición con la Delegación Digital del Distrito 4400.',
    ],
    coordinates: { x: 245, y: 125 },
  },
  {
    month: 2,
    title: 'Mes 2 · Sierra Centro',
    region: 'Corredor de los Volcanes',
    baseCities: 'Ambato · Riobamba · Latacunga · Guaranda',
    summary:
      'Conexión andina, traslado y documentación de proyectos comunitarios de altura.',
    kilometers: 1200,
    elevationRange: '2.600 – 3.850 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 2,
    keyFocus: [
      'Despliegue de autonomía overland en comunidades altoandinas de Cotopaxi, Tungurahua y Chimborazo.',
      'Grabación de formato "Manos a la Obra" en mingas de agua, riego y desarrollo económico rural.',
      'Activación de la primera ronda de Blueprints Open-Source en el portal web.',
    ],
    coordinates: { x: 235, y: 235 },
  },
  {
    month: 3,
    title: 'Mes 3 · Sierra Sur',
    region: 'Corredor Austral',
    baseCities: 'Cuenca · Loja · Machala (El Oro)',
    summary:
      'Traslado por etapas, activación con clubes australes y alianzas locales.',
    kilometers: 1200,
    elevationRange: '1.900 – 3.100 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 2,
    keyFocus: [
      'Encuentros multiprovinciales con clubes de Azuay, Cañar, Loja y conexión hacia El Oro.',
      'Sesiones en vivo del podcast "Voces del Territorio" junto a GADs, universidades y cámaras locales.',
      'Impulso a campañas de recaudación Fase 2 para proyectos consolidados del Austro.',
    ],
    coordinates: { x: 205, y: 385 },
  },
  {
    month: 4,
    title: 'Mes 4 · Costa',
    region: 'Corredor Litoral',
    baseCities: 'Guayaquil · Samborondón · Portoviejo · Manta',
    summary:
      'Cambio de ecosistema; 2 fines de semana de campo y 2 de producción audiovisual.',
    kilometers: 1200,
    elevationRange: '0 – 450 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 2,
    keyFocus: [
      'Cobertura de proyectos de salud preventiva, agua segura e inclusión educativa en Guayas y Manabí.',
      'Rueda de alianzas corporativas con empresas del litoral para apadrinamiento de proyectos.',
      'Producción de 4 micro-documentales verticales bilingües para donantes internacionales.',
    ],
    coordinates: { x: 115, y: 275 },
  },
  {
    month: 5,
    title: 'Mes 5 · Santo Domingo y Retorno a Quito',
    region: 'Transición Subtropical & Cierre de Corredor',
    baseCities: 'Santo Domingo · Quevedo · Noroccidente de Pichincha · Quito',
    summary:
      'Visitas de cierre de corredor, seguimiento de métricas (a 30 y 60 días) y evaluación.',
    kilometers: 1200,
    elevationRange: '600 – 2.850 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 1,
    keyFocus: [
      'Documentación de iniciativas agroproductivas y medioambientales en el corredor Santo Domingo–Quito.',
      'Auditoría de tracción a 30 y 60 días de los episodios publicados en los Meses 1 a 3.',
      'Sistematización de métricas de fondos recaudados en el Carril 1 (Clubes) y Carril 2 (Ruta).',
    ],
    coordinates: { x: 185, y: 175 },
  },
  {
    month: 6,
    title: 'Mes 6 (Opcional) · Amazonía',
    region: 'Corredor Amazónico & Gran Reporte Final',
    baseCities: 'Tena · Puyo · Baeza · Retorno a Base',
    Optional: true,
    summary:
      'Inmersión amazónica, visitas viables y gran reporte final del piloto.',
    kilometers: 1200,
    elevationRange: '500 – 1.800 m.s.n.m.',
    fieldWeekends: 2,
    productionWeekends: 2,
    projectSlots: 2,
    availableSlots: 2,
    keyFocus: [
      'Inmersión en proyectos de conservación, salud comunitaria y agua limpia en Napo y Pastaza.',
      'Presentación del Gran Reporte de Transparencia e Impacto del Piloto ante la Gobernación del Distrito 4400.',
      'Entrega del catálogo completo de 10–12 Blueprints Open-Source listos para escalar.',
    ],
    coordinates: { x: 315, y: 225 },
  },
];

export const WEEKEND_CADENCE = [
  {
    weekend: 'FDS 1',
    title: 'Ruta y Grabación 1',
    type: 'terreno',
    days: 'Sábado y Domingo · 100% Diurno',
    description:
      'Desplazamiento seguro hacia el Club #1 del mes, montaje del estudio móvil, entrevistas en terreno y registro cinematográfico del proyecto.',
    deliverable: 'Material RAW respaldado en doble SSD + Acta de validación en sitio',
  },
  {
    weekend: 'FDS 2',
    title: 'Edición, Validación con el Club y Publicación',
    type: 'estudio',
    days: 'Sábado y Domingo · Base de Edición',
    description:
      'Montaje narrativo del Episodio 1 (8–15 min), subtitulado ES/EN, revisión factual junto al presidente/responsable del club y activación de la Ficha de Recaudación.',
    deliverable: 'Episodio 1 Publicado + 2 Shorts + Ficha de Donación Activa',
  },
  {
    weekend: 'FDS 3',
    title: 'Ruta y Grabación 2',
    type: 'terreno',
    days: 'Sábado y Domingo · 100% Diurno',
    description:
      'Salida hacia el Club #2 del corredor mensual. Cobertura en formato Manos a la Obra, Huella Rotaria o Voces del Territorio según necesidad del club.',
    deliverable: 'Material RAW respaldado + Activación de comunidad local',
  },
  {
    weekend: 'FDS 4',
    title: 'Edición 2, Shorts, Reporte de Gastos y Planificación',
    type: 'estudio',
    days: 'Sábado y Domingo · Cierre Mensual',
    description:
      'Lanzamiento del Episodio 2, publicación del Blueprint pedagógico, corte contable auditado del mes y confirmación de agenda del mes siguiente.',
    deliverable: 'Episodio 2 + Blueprint PDF + Reporte Financiero Mensual al Centavo',
  },
];

export const TOTAL_BUDGET_USD = 9048.2;

export const BUDGET_CATEGORIES: BudgetCategory[] = [
  {
    id: 'operacion-ruta',
    title: '1. Operación en Ruta (6 Meses)',
    subtitle: '$928,00 USD al mes · Logística directa de campo y postproducción',
    totalUsd: 5568.0,
    monthlyUsd: 928.0,
    percentage: 61.54,
    colorHex: '#003B73',
    items: [
      {
        id: 'combustible',
        label: 'Combustible diésel para 7.200 km (1.200 km/mes)',
        monthlyUsd: 120,
        totalUsd: 720,
        note: 'Apadrinable por mes completo ($120 USD/mes)',
      },
      {
        id: 'conectividad',
        label: 'Conectividad móvil en ruta (65GB+ de alta velocidad)',
        monthlyUsd: 60,
        totalUsd: 360,
        note: 'Subida de respaldos y transmisiones desde terreno',
      },
      {
        id: 'mantenimiento',
        label: 'Mantenimiento preventivo de la Citroën Jumpy',
        monthlyUsd: 100,
        totalUsd: 600,
        note: 'Filtros, frenos, fluidos y chequeo pre-ruta mensual',
      },
      {
        id: 'seguros',
        label: 'Seguros y asistencia en ruta',
        monthlyUsd: 90,
        totalUsd: 540,
        note: 'Cobertura integral durante los 6 meses del piloto',
      },
      {
        id: 'alimentacion',
        label: 'Alimentación en días de campo',
        monthlyUsd: 80,
        totalUsd: 480,
        note: 'Exclusivo para los fines de semana de rodaje',
      },
      {
        id: 'pernocta',
        label: 'Pernocta segura / estacionamiento custodiado',
        monthlyUsd: 48,
        totalUsd: 288,
        note: 'Optimizado gracias a la carpa de techo overland',
      },
      {
        id: 'peajes',
        label: 'Peajes y accesos viales',
        monthlyUsd: 30,
        totalUsd: 180,
        note: 'Corredores Sierra, Costa y Amazonía',
      },
      {
        id: 'edicion',
        label: 'Apoyo de edición y postproducción audiovisual',
        monthlyUsd: 400,
        totalUsd: 2400,
        note: 'Amortizable en especie o beca mediante la Delegación Distrital',
      },
    ],
  },
  {
    id: 'preparacion-equipos',
    title: '2. Preparación, Seguridad y Equipos',
    subtitle: 'Inversión única inicial para blindar calidad técnica y seguridad',
    totalUsd: 2300.0,
    percentage: 25.42,
    colorHex: '#3B6E5C',
    items: [
      {
        id: 'puesta-punto',
        label: 'Puesta a punto mecánica y seguridad vial inicial',
        totalUsd: 600,
        note: 'Revisión integral previa al kilómetro cero',
      },
      {
        id: 'equipo-av',
        label: 'Equipo audiovisual complementario (audio/iluminación móvil)',
        totalUsd: 850,
        note: 'Micrófonos de campo, luces portátiles y soportes',
      },
      {
        id: 'almacenamiento',
        label: 'Almacenamiento y respaldos (Discos SSD rugerizados + nube)',
        totalUsd: 350,
        note: 'Protección de los 12 episodios y metraje documental',
      },
      {
        id: 'identidad',
        label: 'Identidad visual y materiales iniciales (vinilado y set)',
        totalUsd: 500,
        note: 'Branding oficial de ruta y muro de patrocinadores',
      },
    ],
  },
  {
    id: 'contingencia',
    title: '3. Reserva de Contingencia (15%)',
    subtitle: 'Fondo blindado y auditable para imprevistos en carretera',
    totalUsd: 1180.2,
    percentage: 13.04,
    colorHex: '#F59E0B',
    items: [
      {
        id: 'fondo-contingencia',
        label: 'Fondo de reserva operativa (15% sobre costos directos)',
        totalUsd: 1180.2,
        note: 'Si no se ejecuta en imprevistos, se transfiere al cierre o extensión del piloto',
      },
    ],
  },
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'combustible-mes',
    title: 'Apadrina 1 Mes de Ruta',
    subtitle: '1.200 km de combustible diésel',
    amountUsd: 120,
    unitLabel: 'USD / mes de ruta',
    badgeText: 'IMPACTO INMEDIATO · CLUBES Y SOCIOS',
    description:
      'Cubre los 1.200 km de combustible diésel de todo un mes de visitas para documentar 2 proyectos rotarios de principio a fin.',
    benefits: [
      'Mención de honor como "Padrino de Kilómetros" en los 2 episodios del mes elegido',
      'Certificado digital de trazabilidad con kilometraje y ruta cubierta',
      'Insignia oficial en el tablero de transparencia del Distrito 4400',
      'Ideal para aportes individuales de socios, clubes rotarios o pymes locales',
    ],
  },
  {
    id: 'produccion',
    title: 'Impulsa el Paquete de Producción',
    subtitle: 'Total o fraccionado ($401,67/mes o en especie)',
    amountUsd: 2410,
    unitLabel: 'USD total (o fraccionado)',
    badgeText: 'TECNOLOGÍA Y CONTENIDO · EFECTIVO O ESPECIE',
    description:
      'Financia en efectivo o en especie el equipamiento audiovisual, respaldos SSD, conectividad en ruta y edición de los 6 meses.',
    benefits: [
      'Crédito destacado "Presentado con el soporte tecnológico de..." en los 12 episodios',
      'Opción de aporte fraccionado por módulo ($350 SSD / $360 Conectividad / $850 Audio)',
      'Acepta alianzas en especie (telecomunicaciones, productoras, universidades)',
      'Acceso prioritario a material audiovisual de alta resolución para RSE',
    ],
  },
  {
    id: 'marca-van',
    title: 'Tu Marca en la Van y en Pantalla',
    subtitle: 'Patrocinio Corporativo / GADs / Alianzas Estratégicas',
    amountUsd: 1500,
    unitLabel: 'USD patrocinio sugerido',
    badgeText: 'ALTA VISIBILIDAD · EMPRESAS Y GADS',
    description:
      'Presencia física del logo en el vinilado exterior de la Citroën Jumpy y mención oficial en los créditos de los 12 episodios documentales y 24 Shorts.',
    benefits: [
      'Logo físico en el "Muro de Patrocinadores en Ruta" sobre la carrocería de la van',
      'Presencia en pantalla en 12 episodios documentales (YouTube) y 24 Reels/Shorts',
      'Entrevista o mención institucional en el set móvil "Voces del Territorio"',
      'Reporte certificado de alcance e impacto social auditable para memoria de sostenibilidad',
    ],
  },
];
