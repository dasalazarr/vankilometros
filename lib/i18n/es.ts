// Diccionario en español: fuente del tipo `Dict`. Las listas con números
// asociados (presupuesto, ruta) mantienen el mismo orden que en
// `lib/expedition-data.ts`.

export const es = {
  meta: {
    title: 'Kilómetros con Propósito · Fase piloto Ecuador',
  },

  nav: {
    links: [
      {href: '#propuesta', label: 'Propuesta'},
      {href: '#formatos', label: 'Formatos'},
      {href: '#ruta', label: 'Ruta'},
      {href: '#presupuesto', label: 'Presupuesto'},
      {href: '#apoyos', label: 'Apoyos y metas'},
    ],
    apply: 'Postular proyecto',
    langGroup: 'Idioma',
    langOption: {es: 'Español', en: 'English'},
  },

  hero: {
    eyebrow: 'Fase piloto · Ecuador · Distrito 4400',
    title: 'Kilómetros con Propósito',
    intro:
      'Una iniciativa audiovisual que recorrerá el Ecuador durante seis meses, exclusivamente los sábados y domingos, documentando proyectos, testimonios e historias que demuestran cómo el Rotarismo transforma vidas.',
    imageAlt:
      'Soledad Hernández junto a la van Citroën Jumpy en los Andes ecuatorianos',
    ctaApply: 'Postular un proyecto',
    ctaPdf: 'Ver la propuesta (PDF)',
    facts: [
      {value: '6 meses', label: 'Solo sábados y domingos'},
      {value: '10 a 12', label: 'Proyectos documentados'},
      {value: '12 + 24', label: 'Episodios y videos cortos'},
      {value: '1.200 km', label: 'Máximo presupuestado por mes'},
    ],
  },

  proposal: {
    index: '01 · La propuesta',
    title: 'Convertir cada historia de servicio en una oportunidad para sumar.',
    intro:
      'A través de YouTube y redes sociales, las experiencias documentadas se convierten en historias capaces de inspirar, generar confianza, atraer voluntarios, conseguir donaciones y abrir nuevas alianzas.',
    outcomes: [
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
    ],
    emblemAlt: 'Emblema de Kilómetros con Propósito',
    vanBefore: 'El recorrido se realiza en una ',
    vanStrong: 'van Citroën Jumpy adaptada para viajes overland',
    vanMiddle:
      ', base móvil de desplazamiento y producción audiovisual. Ecuador es la ',
    vanStrong2: 'fase piloto',
    vanAfter:
      ' de un proyecto con proyección internacional, que solo se formulará después de evaluar el piloto.',
  },

  formats: {
    index: '02 · Cómo documentamos',
    title: 'Tres formatos según la fase de cada proyecto.',
    intro:
      'Cada episodio cierra con una lección aprendida —¿cómo replicar este proyecto en otro club?— que se guarda en la web como repositorio para futuras iniciativas.',
    formatLabel: 'FORMATO',
    apply: 'Postular con este formato',
    items: {
      'manos-a-la-obra': {
        name: 'Manos a la Obra',
        stage: 'En ejecución / planificación activa',
        description:
          'La llegada de la van coincide con un hito en vivo: una minga comunitaria, una entrega de insumos o una brigada médica. La audiencia ve y experimenta la acción en tiempo real.',
      },
      'huella-rotaria': {
        name: 'Huella Rotaria',
        stage: 'Proyectos ejecutados / post-ejecución',
        description:
          'Mini-documental de alto impacto visual para medir resultados, auditar la sostenibilidad del proyecto y activar un crowdfunding permanente para financiar su Fase 2 o escalamiento.',
      },
      'voces-del-territorio': {
        name: 'Voces del Territorio',
        stage: 'Podcast / entrevista en vivo',
        description:
          'Un set móvil junto a la van para conversar, en vivo o grabado, con beneficiarios, líderes comunitarios, autoridades locales y socios del club sobre la problemática y las soluciones en el territorio.',
      },
    },
    flowTitle: 'Flujo de trabajo por visita',
    flow: [
      'Coordinar la visita y acordar alcance, horarios, permisos y personas entrevistadas.',
      'Recoger entrevistas, imágenes y evidencias, respetando el funcionamiento del proyecto.',
      'Editar una historia que explique el problema, la respuesta, los resultados y la forma de participar.',
      'Remitir datos y fragmentos sensibles al responsable para validación factual y de permisos.',
      'Publicar, entregar materiales y revisar los contactos generados a los 30 y 60 días.',
    ],
    editorialTitle: 'Formato editorial',
    editorialText:
      'Episodios principales de 8 a 15 minutos con las voces de quienes participan y un llamado a la acción específico. Videos cortos de 30 a 90 segundos que llevan al episodio y al contacto del proyecto. Subtítulos en español y, cuando los recursos lo permitan, en inglés.',
    participationTitle: 'De la visibilidad a la participación',
    participationText:
      'La web tendrá pasarelas de pago permanentes conectadas a perfiles por proyecto: un video del mes 1 puede seguir recaudando en el mes 6 y después. Las donaciones a proyectos van directo a mecanismos oficiales verificados por sus responsables, separadas de los aportes para el recorrido. No se prometen beneficios tributarios ni montos de recaudación.',
  },

  route: {
    index: '03 · Ruta y calendario',
    title: 'Quito como base inicial, cuatro fines de semana al mes.',
    intro:
      'Las ciudades son opciones preliminares, no visitas confirmadas. Un quinto fin de semana, cuando exista, queda como reserva para reprogramaciones o descanso.',
    mapLabel: 'Mapa de la ruta propuesta por Ecuador continental',
    equator: 'LÍNEA EQUINOCCIAL 0°',
    regions: {coast: 'COSTA', andes: 'SIERRA', amazon: 'AMAZONÍA'},
    legendMain: 'Meses 1 a 5',
    legendOptional: 'Mes 6 opcional',
    tabsLabel: 'Meses de la ruta',
    month: 'Mes',
    optionalShort: 'opc.',
    optionalLong: 'opcional',
    possibleBase: 'Base posible:',
    monthNodeLabel: (n: number, zone: string) => `Mes ${n}: ${zone}`,
    kmNote:
      'Se presupuestan hasta 1.200 km mensuales, sujetos a la ruta efectiva. La ruta supone cambiar de base entre regiones; las visitas lejanas se reducen o reprograman si no caben en dos días.',
    months: [
      {
        zone: 'Quito y valles; Imbabura',
        base: 'Quito',
        weekendUse:
          'Dos salidas locales y dos fines de semana de producción y coordinación.',
      },
      {
        zone: 'Sierra centro',
        base: 'Ambato o Riobamba',
        weekendUse:
          'Traslado y primera visita en un fin de semana; segunda salida cercana y dos fines de semana de producción.',
      },
      {
        zone: 'Sierra sur',
        base: 'Cuenca',
        weekendUse:
          'Traslado por etapas y visitas cercanas. Loja o El Oro solo si caben sin sobrecargar la conducción.',
      },
      {
        zone: 'Costa',
        base: 'Por definir entre Guayaquil y Manabí',
        weekendUse:
          'Elegir un corredor prioritario; dos fines de semana de campo y dos de producción.',
      },
      {
        zone: 'Santo Domingo y Quito',
        base: 'Santo Domingo; retorno a Quito',
        weekendUse:
          'Visitas finales, retorno por etapas, seguimiento e informe si se cierra a los cinco meses.',
      },
      {
        zone: 'Amazonía (opcional)',
        base: 'Tena o Puyo; retorno a Quito',
        weekendUse:
          'Elegir una zona amazónica, realizar visitas viables y reservar tiempo para el cierre.',
      },
    ],
    distributionTitle: 'Distribución mensual de referencia',
    weekendCol: 'Fin de semana',
    saturdayCol: 'Sábado',
    sundayCol: 'Domingo',
    weekendPlan: [
      {
        saturday: 'Traslado diurno y visita o entrevistas.',
        sunday:
          'Completar grabación y volver a la base o establecer la siguiente.',
      },
      {
        saturday: 'Respaldos y edición del primer episodio.',
        sunday:
          'Validación disponible, publicación y coordinación de la próxima visita.',
      },
      {
        saturday: 'Segunda salida y documentación.',
        sunday: 'Completar la visita y traslado a la base.',
      },
      {
        saturday: 'Edición del segundo episodio y piezas cortas.',
        sunday:
          'Publicación, seguimiento, gastos y planificación del siguiente mes.',
      },
    ],
    distributionNote:
      'No se exigirá conducir y producir al mismo tiempo. Si falta una autorización o validación, la publicación pasa al siguiente fin de semana.',
  },

  budget: {
    index: '04 · Presupuesto preliminar',
    title: (amount: string) => `USD ${amount} para seis meses.`,
    intro:
      'Referencia para una persona en Ecuador continental, cuatro fines de semana por mes y ocho días de actividad. Supone la van disponible y adaptada. No son cotizaciones ni compromisos de proveedores.',
    operationTitle: 'Operación estimada',
    itemCol: 'Rubro',
    monthCol: 'Mes',
    sixMonthsCol: '6 meses',
    operation: [
      {
        label: 'Combustible diésel',
        basis: '1.200 km × 10 L/100 km; reserva sobre el cálculo de USD 98,59.',
      },
      {
        label: 'Alimentación',
        basis: '8 días × USD 10. Solo alimentación en días del proyecto.',
      },
      {
        label: 'Pernocta y estacionamiento',
        basis: '4 noches × USD 12 en salidas de campo.',
      },
      {
        label: 'Conectividad',
        basis: 'Plan de 65 GB de USD 45,99 más USD 14,01 para recargas.',
      },
      {
        label: 'Mantenimiento ordinario',
        basis: 'Aceite, filtros y desgaste; sin reparación mayor. Por cotizar.',
      },
      {
        label: 'Seguros y asistencia',
        basis: 'Vehículo y protección personal. Por cotizar.',
      },
      {
        label: 'Apoyo parcial de edición',
        basis: 'Estimación propia; alcance del servicio por cotizar.',
      },
      {
        label: 'Peajes y logística menor',
        basis: 'Peajes, agua, lavandería y consumibles. Estimación propia.',
      },
    ],
    operationTotal: 'Total de operación',
    prepTitle: 'Preparación y equipo',
    prep: [
      'Revisión inicial y elementos de seguridad',
      'Equipo audiovisual complementario',
      'Almacenamiento y respaldos',
      'Identidad del canal y materiales iniciales',
    ],
    prepTotal: 'Total inicial',
    prepNote:
      'Provisiones propias pendientes de cotización; se descontarán los equipos ya disponibles. No incluye reparaciones mayores ni una nueva adaptación de la van.',
    scenarioTitle: 'Escenario 6 meses · USD',
    cumulativeOperation: 'Operación acumulada',
    prepAndEquipment: 'Preparación y equipo',
    subtotal: 'Subtotal',
    contingency: 'Contingencia 15 %',
    estimatedTotal: 'Total estimado',
    packageTitle: (amount: string) => `Paquete de producción · USD ${amount}`,
    package: [
      'Equipo complementario',
      'Respaldos',
      'Materiales iniciales',
      'Edición',
      'Conectividad',
    ],
    packageNote:
      'Opción de apoyo que forma parte del total anterior y no se suma a él. Puede financiarse parcialmente o cubrirse en especie.',
    inKindNote:
      'Los apoyos en especie se descuentan de la necesidad de efectivo sin contarlos dos veces. Financiación propia, patrocinios y aportes institucionales están por definir. Los ingresos de YouTube no se incluyen como fuente del piloto.',
  },

  support: {
    index: '05 · Apoyos y metas',
    title: 'Lo que se solicita y cómo se medirá.',
    intro:
      'Se solicita el aval institucional del Distrito, el acercamiento con los clubes y sus proyectos, y la posibilidad de gestionar apoyos en especie, difusión y patrocinio, sin comprometer recursos económicos del Distrito.',
    modalities: [
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
    ],
    incentivesLabel: 'Incentivos para donantes y aliados:',
    incentivesText:
      ' menciones destacadas en los créditos de los episodios o el logotipo de la empresa o del club en el vinilado exterior de la van. Ningún patrocinio condiciona testimonios ni afirmaciones de impacto.',
    offerSupport: 'Ofrecer apoyo',
    goalsTitle: 'Entregables y metas de seguimiento',
    indicatorCol: 'Indicador',
    targetCol: 'Meta inicial',
    verificationCol: 'Cómo se verifica',
    goals: [
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
        verification:
          'Interés concreto remitido con consentimiento; sin duplicados.',
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
    ],
    goalsNote:
      'Estas metas son propuestas, no garantías. Las metas de audiencia se fijarán después del primer mes, con una línea base. No se atribuirá al canal un resultado que la organización no pueda confirmar.',
  },

  convocatoria: {
    index: '06 · Convocatoria',
    title: 'Inscribe tu proyecto o súmate como aliado.',
    intro:
      'No se excluyen proyectos por su estado actual: se seleccionan iniciativas en planificación, ejecución activa o post-ejecución, rotando formatos para dar oportunidad a más clubes.',
    intro2:
      'La ficha recoge ubicación, organización responsable, problema atendido, población participante, evidencias disponibles y necesidades. La selección final se coordina con el distrito.',
    tabClub: 'Postular un proyecto',
    tabAlly: 'Ofrecer apoyo',
    // Valores enviados al formulario (siempre en español).
    typeClub: 'Proyecto de club',
    typeAlly: 'Aliado / apoyo',
    subjectClub: 'Kilómetros con Propósito · Nueva postulación de proyecto',
    subjectAlly: 'Kilómetros con Propósito · Nuevo aliado',
    phases: ['Planificación', 'Ejecución activa', 'Post-ejecución'],
    needs: ['Voluntariado', 'Donaciones', 'Nuevos socios', 'Alianzas'],
    allyTypes: ['Empresa', 'Institución', 'Club o grupo rotario', 'Persona'],
    select: 'Selecciona',
    organization: 'Club u organización responsable *',
    location: 'Ubicación (ciudad, provincia) *',
    projectName: 'Nombre del proyecto *',
    phase: 'Fase del proyecto *',
    interestFormat: 'Formato de interés',
    teamSuggests: 'Que lo sugiera el equipo',
    problem: 'Problema que atiende *',
    population: 'Población participante',
    evidence: 'Evidencias disponibles',
    evidencePlaceholder: 'Fotos, informes, testimonios…',
    projectNeeds: '¿Qué necesita el proyecto?',
    entity: 'Entidad o nombre *',
    allyType: 'Tipo de aliado *',
    supportMode: 'Modalidad de apoyo *',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntanos qué te gustaría aportar',
    contactPerson: 'Persona de contacto *',
    email: 'Correo electrónico *',
    phone: 'Teléfono / WhatsApp',
    consent:
      'Acepto que estos datos se usen únicamente para coordinar esta convocatoria.',
    errorNoId:
      'El formulario aún no está conectado. Falta configurar NEXT_PUBLIC_FORMSPREE_ID.',
    errorSend:
      'No pudimos enviar el formulario. Inténtalo de nuevo en unos minutos.',
    successTitle: 'Recibimos tu registro.',
    successText: 'Te contactaremos para coordinar los siguientes pasos.',
    sendAnother: 'Enviar otro registro',
    submitClub: 'Enviar postulación',
    submitAlly: 'Enviar',
  },

  footer: {
    careTitle: 'Cuidado de las personas',
    commitments: [
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
    ],
    team: [
      'Promotora y coordinadora del proyecto',
      'Presidente del Comité de Imagen Pública, Club Rotario Intercultural · Distrito 4400',
      'Vicepresidente, Club Rotaract de Pamplona',
    ],
    disclaimer:
      'La iniciativa es coordinada por su proponente y no se presenta como un programa oficial de Rotary sin la autorización correspondiente. El canal tiene identidad propia y explica con precisión los respaldos recibidos; el uso de nombres, logotipos o distintivos se acuerda con sus titulares.',
    pdfLink: 'Propuesta completa (PDF, versión 26 de octubre de 2026)',
  },
};

export type Dict = typeof es;
