import type {Dict} from './es';

export const en: Dict = {
  meta: {
    title: 'Kilómetros con Propósito · Ecuador Pilot Phase',
  },

  nav: {
    links: [
      {href: '#propuesta', label: 'Proposal'},
      {href: '#formatos', label: 'Formats'},
      {href: '#ruta', label: 'Route'},
      {href: '#presupuesto', label: 'Budget'},
      {href: '#apoyos', label: 'Support & goals'},
    ],
    apply: 'Submit a project',
    langGroup: 'Language',
    langOption: {es: 'Español', en: 'English'},
  },

  hero: {
    eyebrow: 'Pilot phase · Ecuador · District 4400',
    title: 'Kilómetros con Propósito',
    intro:
      'An audiovisual initiative that will travel across Ecuador for six months, on weekends only, documenting projects, testimonials and stories that show how Rotary transforms lives.',
    imageAlt:
      'Soledad Hernández next to the Citroën Jumpy van in the Ecuadorian Andes',
    ctaApply: 'Submit a project',
    ctaPdf: 'View the proposal (PDF)',
    facts: [
      {value: '6 months', label: 'Saturdays and Sundays only'},
      {value: '10 to 12', label: 'Documented projects'},
      {value: '12 + 24', label: 'Episodes and short videos'},
      {value: '1,200 km', label: 'Maximum budgeted per month'},
    ],
  },

  proposal: {
    index: '01 · The proposal',
    title: 'Turning every service story into an opportunity to get involved.',
    intro:
      'Through YouTube and social media, the documented experiences become stories that can inspire, build trust, attract volunteers, secure donations and open new partnerships.',
    outcomes: [
      {
        audience: 'For District 4400',
        text: 'Stronger positioning, institutional visibility and recognition of the impact of its clubs across Ecuador.',
      },
      {
        audience: 'For Rotary clubs',
        text: 'An audiovisual tool to share their projects, show results and attract new partners, resources and volunteers.',
      },
      {
        audience: 'For society',
        text: 'To learn what Rotary is, what it does, and how and why it does it, discovering concrete ways to join initiatives that transform communities.',
      },
    ],
    emblemAlt: 'Kilómetros con Propósito emblem',
    vanBefore: 'The journey is made in a ',
    vanStrong: 'Citroën Jumpy van adapted for overland travel',
    vanMiddle:
      ', a mobile base for travel and audiovisual production. Ecuador is the ',
    vanStrong2: 'pilot phase',
    vanAfter:
      ' of a project with international reach, which will only be formulated after the pilot is evaluated.',
  },

  formats: {
    index: '02 · How we document',
    title: 'Three formats according to each project’s stage.',
    intro:
      'Each episode closes with a lesson learned —how can this project be replicated in another club?— which is stored on the website as a repository for future initiatives.',
    formatLabel: 'FORMAT',
    apply: 'Apply with this format',
    items: {
      'manos-a-la-obra': {
        name: 'Hands-On Action',
        stage: 'In execution / active planning',
        description:
          'The van’s arrival coincides with a live milestone: a community work day (minga), a supply delivery or a medical brigade. The audience sees and experiences the action in real time.',
      },
      'huella-rotaria': {
        name: 'Rotary Footprint',
        stage: 'Completed projects / post-execution',
        description:
          'A visually striking mini-documentary to measure results, audit the project’s sustainability and activate permanent crowdfunding to finance its Phase 2 or scale-up.',
      },
      'voces-del-territorio': {
        name: 'Voices of the Territory',
        stage: 'Podcast / live interview',
        description:
          'A mobile set next to the van to talk, live or recorded, with beneficiaries, community leaders, local authorities and club members about the challenges and solutions on the ground.',
      },
    },
    flowTitle: 'Workflow per visit',
    flow: [
      'Coordinate the visit and agree on scope, schedules, permits and the people to be interviewed.',
      'Collect interviews, images and evidence, respecting the project’s day-to-day operation.',
      'Edit a story that explains the problem, the response, the results and how to get involved.',
      'Send sensitive data and clips to the project lead for factual and permissions review.',
      'Publish, deliver materials and review the contacts generated at 30 and 60 days.',
    ],
    editorialTitle: 'Editorial format',
    editorialText:
      'Main episodes of 8 to 15 minutes featuring the voices of those involved and a specific call to action. Short videos of 30 to 90 seconds that lead to the episode and to the project’s contact. Subtitles in Spanish and, when resources allow, in English.',
    participationTitle: 'From visibility to participation',
    participationText:
      'The website will have permanent payment gateways linked to project profiles: a video from month 1 can keep raising funds in month 6 and beyond. Donations to projects go directly to official mechanisms verified by those in charge, separate from contributions to the journey. No tax benefits or fundraising amounts are promised.',
  },

  route: {
    index: '03 · Route and calendar',
    title: 'Quito as the initial base, four weekends per month.',
    intro:
      'The cities are preliminary options, not confirmed visits. A fifth weekend, when there is one, is kept as a reserve for rescheduling or rest.',
    mapLabel: 'Map of the proposed route across mainland Ecuador',
    equator: 'EQUATOR LINE 0°',
    regions: {coast: 'COAST', andes: 'ANDES', amazon: 'AMAZON'},
    legendMain: 'Months 1 to 5',
    legendOptional: 'Month 6 optional',
    tabsLabel: 'Route months',
    month: 'Month',
    optionalShort: 'opt.',
    optionalLong: 'optional',
    possibleBase: 'Possible base:',
    monthNodeLabel: (n: number, zone: string) => `Month ${n}: ${zone}`,
    kmNote:
      'Up to 1,200 km per month are budgeted, subject to the actual route. The route involves changing base between regions; distant visits are reduced or rescheduled if they do not fit in two days.',
    months: [
      {
        zone: 'Quito and valleys; Imbabura',
        base: 'Quito',
        weekendUse:
          'Two local trips and two weekends of production and coordination.',
      },
      {
        zone: 'Central highlands',
        base: 'Ambato or Riobamba',
        weekendUse:
          'Travel and first visit in one weekend; a second nearby trip and two weekends of production.',
      },
      {
        zone: 'Southern highlands',
        base: 'Cuenca',
        weekendUse:
          'Travel in stages and nearby visits. Loja or El Oro only if they fit without overloading the driving.',
      },
      {
        zone: 'Coast',
        base: 'To be decided between Guayaquil and Manabí',
        weekendUse:
          'Choose one priority corridor; two weekends of fieldwork and two of production.',
      },
      {
        zone: 'Santo Domingo and Quito',
        base: 'Santo Domingo; return to Quito',
        weekendUse:
          'Final visits, return in stages, follow-up and report if the pilot closes at five months.',
      },
      {
        zone: 'Amazon (optional)',
        base: 'Tena or Puyo; return to Quito',
        weekendUse:
          'Choose an Amazon area, make feasible visits and reserve time for closing.',
      },
    ],
    distributionTitle: 'Reference monthly schedule',
    weekendCol: 'Weekend',
    saturdayCol: 'Saturday',
    sundayCol: 'Sunday',
    weekendPlan: [
      {
        saturday: 'Daytime travel and visit or interviews.',
        sunday:
          'Finish recording and return to base or set up the next one.',
      },
      {
        saturday: 'Backups and editing of the first episode.',
        sunday:
          'Review if available, publication and coordination of the next visit.',
      },
      {
        saturday: 'Second trip and documentation.',
        sunday: 'Complete the visit and travel to base.',
      },
      {
        saturday: 'Editing of the second episode and short pieces.',
        sunday:
          'Publication, follow-up, expenses and planning for the following month.',
      },
    ],
    distributionNote:
      'Driving and producing at the same time will not be required. If an authorization or review is missing, publication moves to the next weekend.',
  },

  budget: {
    index: '04 · Preliminary budget',
    title: (amount: string) => `USD ${amount} for six months.`,
    intro:
      'Reference for one person in mainland Ecuador, four weekends per month and eight days of activity. It assumes the van is available and already adapted. These are not quotes or supplier commitments.',
    operationTitle: 'Estimated operation',
    itemCol: 'Item',
    monthCol: 'Month',
    sixMonthsCol: '6 months',
    operation: [
      {
        label: 'Diesel fuel',
        basis: '1,200 km × 10 L/100 km; buffer over the USD 98.59 calculation.',
      },
      {
        label: 'Meals',
        basis: '8 days × USD 10. Meals on project days only.',
      },
      {
        label: 'Overnight stays and parking',
        basis: '4 nights × USD 12 on field trips.',
      },
      {
        label: 'Connectivity',
        basis: '65 GB plan at USD 45.99 plus USD 14.01 for top-ups.',
      },
      {
        label: 'Routine maintenance',
        basis: 'Oil, filters and wear; no major repairs. To be quoted.',
      },
      {
        label: 'Insurance and assistance',
        basis: 'Vehicle and personal protection. To be quoted.',
      },
      {
        label: 'Partial editing support',
        basis: 'Own estimate; scope of service to be quoted.',
      },
      {
        label: 'Tolls and minor logistics',
        basis: 'Tolls, water, laundry and consumables. Own estimate.',
      },
    ],
    operationTotal: 'Total operation',
    prepTitle: 'Preparation and equipment',
    prep: [
      'Initial inspection and safety items',
      'Complementary audiovisual equipment',
      'Storage and backups',
      'Channel identity and initial materials',
    ],
    prepTotal: 'Initial total',
    prepNote:
      'Own provisions pending quotes; equipment already available will be deducted. Does not include major repairs or a new adaptation of the van.',
    scenarioTitle: '6-month scenario · USD',
    cumulativeOperation: 'Cumulative operation',
    prepAndEquipment: 'Preparation and equipment',
    subtotal: 'Subtotal',
    contingency: 'Contingency 15%',
    estimatedTotal: 'Estimated total',
    packageTitle: (amount: string) => `Production package · USD ${amount}`,
    package: [
      'Complementary equipment',
      'Backups',
      'Initial materials',
      'Editing',
      'Connectivity',
    ],
    packageNote:
      'A support option that is part of the total above and is not added to it. It can be partially funded or covered in kind.',
    inKindNote:
      'In-kind support is deducted from the cash need without being counted twice. Own funding, sponsorships and institutional contributions are yet to be defined. YouTube revenue is not included as a source for the pilot.',
  },

  support: {
    index: '05 · Support and goals',
    title: 'What is requested and how it will be measured.',
    intro:
      'We request the District’s institutional endorsement, outreach to clubs and their projects, and the possibility of managing in-kind support, outreach and sponsorship, without committing the District’s financial resources.',
    modalities: [
      {
        name: 'Institutional endorsement',
        request:
          'A letter recognizing the service purpose and authorizing the scope of the endorsement, valid for the pilot phase.',
      },
      {
        name: 'Coordination',
        request:
          'Appointment of a liaison and introduction to clubs to receive proposals and coordinate visits.',
      },
      {
        name: 'Outreach',
        request:
          'Share relevant episodes and calls for projects on district and participating club channels.',
      },
      {
        name: 'In-kind support',
        request:
          'Local contacts, safe parking places, connectivity or equipment, depending on availability.',
      },
      {
        name: 'Optional financial support',
        request:
          'Help identify sponsors or consider a contribution to the production package, with an agreement and accountability.',
      },
    ],
    incentivesLabel: 'Incentives for donors and partners:',
    incentivesText:
      ' prominent mentions in the episode credits or the company or club logo on the van’s exterior wrap. No sponsorship influences testimonials or impact claims.',
    offerSupport: 'Offer support',
    goalsTitle: 'Deliverables and follow-up goals',
    indicatorCol: 'Indicator',
    targetCol: 'Initial target',
    verificationCol: 'How it is verified',
    goals: [
      {
        indicator: 'Documented projects',
        target: '10 in 5 months; 12 in 6 months',
        verification: 'Project form, authorizations and published content.',
      },
      {
        indicator: 'Episodes and short videos',
        target: '10 and 20 in 5 months; 12 and 24 in 6 months',
        verification: 'Publication log.',
      },
      {
        indicator: 'Material for participants',
        target: 'One package per project',
        verification: 'Links and files delivered.',
      },
      {
        indicator: 'Participation contacts',
        target: '30 qualified contacts',
        verification: 'Concrete interest referred with consent; no duplicates.',
      },
      {
        indicator: 'Follow-up actions',
        target: '6 confirmed',
        verification:
          'The club or group confirms volunteering, a donation or membership progress.',
      },
      {
        indicator: 'Exchange between organizations',
        target: '2 meetings',
        verification: 'Record of participants and agreements.',
      },
      {
        indicator: 'Accountability',
        target: 'Monthly and final',
        verification: 'Report on activity, expenses and results.',
      },
    ],
    goalsNote:
      'These goals are proposals, not guarantees. Audience goals will be set after the first month, using a baseline. No result will be attributed to the channel that the organization cannot confirm.',
  },

  convocatoria: {
    index: '06 · Call for projects',
    title: 'Register your project or join as a partner.',
    intro:
      'Projects are not excluded because of their current status: initiatives in planning, active execution or post-execution are selected, rotating formats to give more clubs an opportunity.',
    intro2:
      'The form collects location, responsible organization, problem addressed, participating population, available evidence and needs. The final selection is coordinated with the district.',
    tabClub: 'Submit a project',
    tabAlly: 'Offer support',
    // Valores enviados al formulario (siempre en español); aquí solo se muestran.
    typeClub: 'Club project',
    typeAlly: 'Partner / support',
    subjectClub: 'Kilómetros con Propósito · New project application',
    subjectAlly: 'Kilómetros con Propósito · New partner',
    phases: ['Planning', 'Active execution', 'Post-execution'],
    needs: ['Volunteers', 'Donations', 'New members', 'Partnerships'],
    allyTypes: ['Company', 'Institution', 'Rotary club or group', 'Individual'],
    select: 'Select',
    organization: 'Responsible club or organization *',
    location: 'Location (city, province) *',
    projectName: 'Project name *',
    phase: 'Project stage *',
    interestFormat: 'Format of interest',
    teamSuggests: 'Let the team suggest one',
    problem: 'Problem it addresses *',
    population: 'Participating population',
    evidence: 'Available evidence',
    evidencePlaceholder: 'Photos, reports, testimonials…',
    projectNeeds: 'What does the project need?',
    entity: 'Organization or name *',
    allyType: 'Type of partner *',
    supportMode: 'Type of support *',
    message: 'Message',
    messagePlaceholder: 'Tell us what you would like to contribute',
    contactPerson: 'Contact person *',
    email: 'Email *',
    phone: 'Phone / WhatsApp',
    consent:
      'I agree that this data will be used only to coordinate this call for projects.',
    errorNoId:
      'The form is not connected yet. NEXT_PUBLIC_FORMSPREE_ID is missing.',
    errorSend:
      'We could not send the form. Please try again in a few minutes.',
    successTitle: 'We received your submission.',
    successText: 'We will contact you to coordinate the next steps.',
    sendAnother: 'Submit another one',
    submitClub: 'Submit application',
    submitAlly: 'Submit',
  },

  footer: {
    careTitle: 'Care for people',
    commitments: [
      {
        title: 'Consent and protection',
        text: 'Informed consent for every recording; for minors, authorization from the legal guardian and accompaniment by those responsible.',
      },
      {
        title: 'Dignity of communities',
        text: 'No images that exploit situations of vulnerability, and an agreed channel for corrections.',
      },
      {
        title: 'Safety and continuity',
        text: 'Daytime driving, authorized overnight stops and rescheduling in case of insecurity, bad weather or vehicle breakdowns.',
      },
      {
        title: 'Transparency',
        text: 'Donations to projects and production funds are recorded and reported separately. No sponsorship influences testimonials.',
      },
    ],
    team: [
      'Project promoter and coordinator',
      'Chair of the Public Image Committee, Intercultural Rotary Club · District 4400',
      'Vice President, Rotaract Club of Pamplona',
    ],
    disclaimer:
      'The initiative is coordinated by its proposer and is not presented as an official Rotary program without the corresponding authorization. The channel has its own identity and accurately explains the endorsements received; the use of names, logos or emblems is agreed with their owners.',
    pdfLink: 'Full proposal (PDF in Spanish, version of October 26, 2026)',
  },
};
