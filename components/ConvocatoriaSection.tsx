'use client';

import React, {useEffect, useState} from 'react';
import {
  CheckCircle2,
  Send,
  Building2,
  Users,
  Compass,
  AlertCircle,
} from 'lucide-react';

export type ConvocatoriaRole = 'club' | 'sponsor' | 'volunteer';

interface ConvocatoriaSectionProps {
  activeRole: ConvocatoriaRole;
  onRoleChange: (role: ConvocatoriaRole) => void;
  prefilledFormat?:
    | 'manos-a-la-obra'
    | 'huella-rotaria'
    | 'voces-del-territorio';
  prefilledMonth?: number;
  prefilledCities?: string;
  prefilledSponsorTier?: string;
}

interface SubmissionRecord {
  id: string;
  role: ConvocatoriaRole;
  organizationOrName: string;
  city: string;
  summary: string;
  badge: string;
  timestamp: string;
}

const INITIAL_SUBMISSIONS: SubmissionRecord[] = [
  {
    id: 'sub-1',
    role: 'club',
    organizationOrName: 'Club Rotario Quito Intercultural',
    city: 'Quito, Pichincha (Mes 1)',
    summary:
      'Proyecto de Agua Segura y Biofiltración en Comunidades Altoandinas',
    badge: 'Formato 1: Manos a la Obra',
    timestamp: 'Club Impulsor del Piloto',
  },
  {
    id: 'sub-2',
    role: 'volunteer',
    organizationOrName: 'Célula Digital Rotaract Distrito 4400',
    city: 'Quito / Cuenca / Guayaquil',
    summary: 'Edición de Reels/Shorts, subtitulado bilingüe y tráfico digital',
    badge: 'Delegación Distrital',
    timestamp: 'Equipo Activo',
  },
];

const PROJECT_NEEDS_OPTIONS = [
  'Donaciones económicas',
  'Voluntarios en terreno',
  'Difusión nacional',
  'Alianzas con Alcaldía o Empresa privada',
];

export default function ConvocatoriaSection({
  activeRole,
  onRoleChange,
  prefilledFormat,
  prefilledMonth,
  prefilledCities,
  prefilledSponsorTier,
}: ConvocatoriaSectionProps) {
  // Club form state
  const [clubName, setClubName] = useState('');
  const [clubCity, setClubCity] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectProblem, setProjectProblem] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<
    'manos-a-la-obra' | 'huella-rotaria' | 'voces-del-territorio'
  >('manos-a-la-obra');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    'Donaciones económicas',
    'Difusión nacional',
  ]);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  // Sponsor form state
  const [sponsorEntity, setSponsorEntity] = useState('');
  const [sponsorCity, setSponsorCity] = useState('');
  const [sponsorPackage, setSponsorPackage] = useState('combustible-mes');
  const [sponsorModality, setSponsorModality] = useState('efectivo');
  const [sponsorContact, setSponsorContact] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [sponsorPhone, setSponsorPhone] = useState('');

  // Volunteer form state
  const [volName, setVolName] = useState('');
  const [volClubOrUni, setVolClubOrUni] = useState('');
  const [volArea, setVolArea] = useState('Edición de Reels / Shorts');
  const [volEmail, setVolEmail] = useState('');
  const [volPortfolio, setVolPortfolio] = useState('');

  // Feedback & Registry state
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastSubmitted, setLastSubmitted] = useState<SubmissionRecord | null>(
    null
  );
  const [submissions, setSubmissions] =
    useState<SubmissionRecord[]>(INITIAL_SUBMISSIONS);

  useEffect(() => {
    if (prefilledFormat) {
      setSelectedFormat(prefilledFormat);
    }
  }, [prefilledFormat]);

  useEffect(() => {
    if (prefilledMonth && prefilledCities) {
      setClubCity(`Mes ${prefilledMonth} (${prefilledCities.split('·')[0].trim()})`);
    }
  }, [prefilledMonth, prefilledCities]);

  useEffect(() => {
    if (prefilledSponsorTier) {
      setSponsorPackage(prefilledSponsorTier);
    }
  }, [prefilledSponsorTier]);

  const toggleNeed = (need: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (activeRole === 'club') {
      if (
        !clubName.trim() ||
        !clubCity.trim() ||
        !projectName.trim() ||
        !projectProblem.trim() ||
        !contactName.trim()
      ) {
        setErrorMessage(
          'Por favor completa el nombre del club, ciudad, detalles del proyecto y nombre del responsable.'
        );
        return;
      }
      if (!isValidEmail(contactEmail)) {
        setErrorMessage(
          'Por favor ingresa un correo electrónico válido para coordinar la visita.'
        );
        return;
      }
      if (contactPhone.trim().length < 7) {
        setErrorMessage(
          'Por favor ingresa un número de teléfono o WhatsApp válido.'
        );
        return;
      }

      const formatLabel =
        selectedFormat === 'manos-a-la-obra'
          ? 'Formato 1: Manos a la Obra'
          : selectedFormat === 'huella-rotaria'
          ? 'Formato 2: Huella Rotaria'
          : 'Formato 3: Voces del Territorio';

      const newRec: SubmissionRecord = {
        id: `sub-${Date.now()}`,
        role: 'club',
        organizationOrName: clubName.trim(),
        city: clubCity.trim(),
        summary: `${projectName.trim()} — Necesita: ${
          selectedNeeds.join(', ') || 'Difusión'
        }`,
        badge: formatLabel,
        timestamp: 'Postulado hoy',
      };

      setSubmissions((prev) => [newRec, ...prev]);
      setLastSubmitted(newRec);
      setProjectName('');
      setProjectProblem('');
    } else if (activeRole === 'sponsor') {
      if (!sponsorEntity.trim() || !sponsorContact.trim()) {
        setErrorMessage(
          'Por favor ingresa el nombre de la empresa/institución/padrino y la persona de contacto.'
        );
        return;
      }
      if (!isValidEmail(sponsorEmail)) {
        setErrorMessage('Por favor ingresa un correo electrónico corporativo o personal válido.');
        return;
      }

      const pkgLabel =
        sponsorPackage === 'combustible-mes'
          ? 'Padrino 1 Mes de Ruta ($120 USD)'
          : sponsorPackage === 'produccion'
          ? 'Paquete Producción ($2.410 / Fraccionado)'
          : 'Marca en la Van y Pantalla';

      const newRec: SubmissionRecord = {
        id: `sub-${Date.now()}`,
        role: 'sponsor',
        organizationOrName: sponsorEntity.trim(),
        city: sponsorCity.trim() || 'Ecuador',
        summary: `Interés en ${pkgLabel} (${
          sponsorModality === 'efectivo'
            ? 'Aporte financiero'
            : 'Alianza en especie / mixto'
        })`,
        badge: 'Aliado de Ruta',
        timestamp: 'Registrado hoy',
      };

      setSubmissions((prev) => [newRec, ...prev]);
      setLastSubmitted(newRec);
      setSponsorEntity('');
    } else {
      if (!volName.trim() || !volClubOrUni.trim()) {
        setErrorMessage(
          'Por favor ingresa tu nombre completo y tu Club Rotaract/Interact o Universidad.'
        );
        return;
      }
      if (!isValidEmail(volEmail)) {
        setErrorMessage('Por favor ingresa un correo electrónico válido.');
        return;
      }

      const newRec: SubmissionRecord = {
        id: `sub-${Date.now()}`,
        role: 'volunteer',
        organizationOrName: volName.trim(),
        city: volClubOrUni.trim(),
        summary: `Rol postulado: ${volArea}`,
        badge: 'Célula Digital / Voluntario',
        timestamp: 'Sumado hoy',
      };

      setSubmissions((prev) => [newRec, ...prev]);
      setLastSubmitted(newRec);
      setVolName('');
    }
  };

  return (
    <section
      id="convocatoria"
      className="py-20 md:py-28 bg-white text-[#0A2540] border-b border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
            <span>05. CONVOCATORIA ABIERTA · TRACCIÓN EN TIEMPO REAL</span>
            <span aria-hidden="true">·</span>
            <span>DISTRITO 4400</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A2540] text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            ¿Cómo quieres sumarte a la ruta?
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Selecciona tu perfil en un clic para postular el proyecto de tu club
            al calendario de rodaje de fin de semana, apadrinar kilómetros o
            integrarte a la célula digital del Distrito 4400.
          </p>
        </div>

        {/* 3-Role Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <button
            type="button"
            onClick={() => {
              onRoleChange('club');
              setErrorMessage(null);
              setLastSubmitted(null);
            }}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activeRole === 'club'
                ? 'bg-[#003B73] text-white border-[#003B73] shadow-md'
                : 'bg-[#F8FAFC] text-[#0A2540] border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span
                className={
                  activeRole === 'club' ? 'text-[#F59E0B]' : 'text-[#003B73]'
                }
              >
                OPCIÓN 01 · CLUBES DEL DISTRITO
              </span>
              <Compass className="w-4 h-4" />
            </div>
            <p className="text-base font-bold">
              Soy un Club Rotario / Rotaract / Interact
            </p>
            <p
              className={`text-xs mt-1 ${
                activeRole === 'club' ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              Postula un proyecto en planificación, ya ejecutado o una mesa de
              diálogo local.
            </p>
          </button>

          <button
            type="button"
            onClick={() => {
              onRoleChange('sponsor');
              setErrorMessage(null);
              setLastSubmitted(null);
            }}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activeRole === 'sponsor'
                ? 'bg-[#003B73] text-white border-[#003B73] shadow-md'
                : 'bg-[#F8FAFC] text-[#0A2540] border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span
                className={
                  activeRole === 'sponsor' ? 'text-[#F59E0B]' : 'text-[#3B6E5C]'
                }
              >
                OPCIÓN 02 · PADRINOS Y ALIADOS
              </span>
              <Building2 className="w-4 h-4" />
            </div>
            <p className="text-base font-bold">
              Soy Empresa / Institución / Donante
            </p>
            <p
              className={`text-xs mt-1 ${
                activeRole === 'sponsor' ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              Apadrina 1 mes de combustible ($120), equipamiento audiovisual o
              presencia de marca en la van.
            </p>
          </button>

          <button
            type="button"
            onClick={() => {
              onRoleChange('volunteer');
              setErrorMessage(null);
              setLastSubmitted(null);
            }}
            className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
              activeRole === 'volunteer'
                ? 'bg-[#003B73] text-white border-[#003B73] shadow-md'
                : 'bg-[#F8FAFC] text-[#0A2540] border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span
                className={
                  activeRole === 'volunteer'
                    ? 'text-[#F59E0B]'
                    : 'text-amber-700'
                }
              >
                OPCIÓN 03 · DELEGACIÓN JOVEN
              </span>
              <Users className="w-4 h-4" />
            </div>
            <p className="text-base font-bold">
              Quiero ser Voluntario / Equipo Digital
            </p>
            <p
              className={`text-xs mt-1 ${
                activeRole === 'volunteer' ? 'text-slate-200' : 'text-slate-600'
              }`}
            >
              Súmate en edición remota, subtitulado EN/ES, diseño de Blueprints
              o apoyo en terreno.
            </p>
          </button>
        </div>

        {/* Main Form + Live Traction Registry Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 7 Cols: Interactive Role Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6"
            noValidate
          >
            {activeRole === 'club' && (
              <>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#003B73]">
                    FORMULARIO DE POSTULACIÓN DE PROYECTO ROTARIO
                  </p>
                  <h3
                    className="text-xl font-bold text-[#0A2540] mt-1"
                    style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                  >
                    Agenda la visita de la Citroën Jumpy a tu Club
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="club-name"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      1. Nombre del Club (Rotario / Rotaract / Interact) *
                    </label>
                    <input
                      id="club-name"
                      type="text"
                      value={clubName}
                      onChange={(e) => setClubName(e.target.value)}
                      placeholder="Ej. Club Rotario Ambato Cosmopolita"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="club-city"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Ciudad / Provincia y Mes Sugerido *
                    </label>
                    <input
                      id="club-city"
                      type="text"
                      value={clubCity}
                      onChange={(e) => setClubCity(e.target.value)}
                      placeholder="Ej. Ambato, Tungurahua (Mes 2)"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="project-name"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      2. Nombre del Proyecto *
                    </label>
                    <input
                      id="project-name"
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder="Ej. Agua Limpia y Filtros Bioarena para 80 Familias"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project-problem"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Problema comunitario que resuelve e impacto esperado *
                    </label>
                    <textarea
                      id="project-problem"
                      rows={3}
                      value={projectProblem}
                      onChange={(e) => setProjectProblem(e.target.value)}
                      placeholder="Describe brevemente la comunidad beneficiaria, qué resuelve el proyecto y por qué es clave visibilizarlo..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>

                {/* Format Radio Selection */}
                <div>
                  <span className="block text-xs font-semibold text-[#0A2540] mb-2">
                    3. ¿En qué etapa está y qué formato te interesa? *
                  </span>
                  <div className="space-y-2.5">
                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        selectedFormat === 'manos-a-la-obra'
                          ? 'bg-white border-[#003B73] ring-1 ring-[#003B73]'
                          : 'bg-white/70 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        checked={selectedFormat === 'manos-a-la-obra'}
                        onChange={() => setSelectedFormat('manos-a-la-obra')}
                        className="mt-1 accent-[#003B73]"
                      />
                      <div className="text-xs md:text-sm">
                        <span className="font-bold text-[#0A2540]">
                          En planificación / próximo a ejecutarse ➔ Formato 1:
                          &ldquo;Manos a la Obra&rdquo; (En vivo)
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Coincidimos con una minga, entrega o brigada de fin de
                          semana para activar voluntariado y donaciones.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        selectedFormat === 'huella-rotaria'
                          ? 'bg-white border-[#003B73] ring-1 ring-[#003B73]'
                          : 'bg-white/70 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        checked={selectedFormat === 'huella-rotaria'}
                        onChange={() => setSelectedFormat('huella-rotaria')}
                        className="mt-1 accent-[#003B73]"
                      />
                      <div className="text-xs md:text-sm">
                        <span className="font-bold text-[#0A2540]">
                          Ya ejecutado con resultados ➔ Formato 2: &ldquo;Huella
                          Rotaria&rdquo; (Mini-documental + Crowdfunding Fase 2)
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Auditamos resultados reales en terreno y encendemos la
                          pasarela para escalar su Fase 2 o Subvención Global.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                        selectedFormat === 'voces-del-territorio'
                          ? 'bg-white border-[#003B73] ring-1 ring-[#003B73]'
                          : 'bg-white/70 border-slate-200 hover:bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="format"
                        checked={selectedFormat === 'voces-del-territorio'}
                        onChange={() => setSelectedFormat('voces-del-territorio')}
                        className="mt-1 accent-[#003B73]"
                      />
                      <div className="text-xs md:text-sm">
                        <span className="font-bold text-[#0A2540]">
                          Iniciativa comunitaria / debate local ➔ Formato 3:
                          &ldquo;Voces del Territorio&rdquo; (Podcast móvil)
                        </span>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Instalamos el estudio bajo el toldo de la van con
                          beneficiarios, alcaldía y líderes del club.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Needs Checkboxes */}
                <div>
                  <span className="block text-xs font-semibold text-[#0A2540] mb-2">
                    4. ¿Qué necesita hoy tu proyecto? (Selecciona todas las que
                    apliquen)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PROJECT_NEEDS_OPTIONS.map((need) => {
                      const checked = selectedNeeds.includes(need);
                      return (
                        <label
                          key={need}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                            checked
                              ? 'bg-[#003B73]/5 border-[#003B73] text-[#0A2540]'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleNeed(need)}
                            className="accent-[#003B73]"
                          />
                          <span>{need}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-2">
                  <span className="block text-xs font-semibold text-[#0A2540] mb-2">
                    5. Contacto del socio responsable para coordinar la visita de
                    fin de semana *
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Nombre y cargo"
                      aria-label="Nombre y cargo del responsable"
                      className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="correo@clubrotario.org"
                      aria-label="Correo electrónico del responsable"
                      className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                    <input
                      type="tel"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="WhatsApp (ej. 099...)"
                      aria-label="WhatsApp o teléfono del responsable"
                      className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>
              </>
            )}

            {activeRole === 'sponsor' && (
              <>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#3B6E5C]">
                    REGISTRO DE PATROCINIO Y APADRINAMIENTO DE RUTA
                  </p>
                  <h3
                    className="text-xl font-bold text-[#0A2540] mt-1"
                    style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                  >
                    Impulsa Kilómetros con Propósito como Empresa, GAD o Padrino
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sponsor-entity"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Empresa, Institución, Club o Donante *
                    </label>
                    <input
                      id="sponsor-entity"
                      type="text"
                      value={sponsorEntity}
                      onChange={(e) => setSponsorEntity(e.target.value)}
                      placeholder="Nombre de tu organización o nombre personal"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sponsor-city"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Ciudad / Corredor de Interés
                    </label>
                    <input
                      id="sponsor-city"
                      type="text"
                      value={sponsorCity}
                      onChange={(e) => setSponsorCity(e.target.value)}
                      placeholder="Ej. Quito, Cuenca, Guayaquil o Ruta Nacional"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="sponsor-pkg"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Módulo que deseas apadrinar *
                    </label>
                    <select
                      id="sponsor-pkg"
                      value={sponsorPackage}
                      onChange={(e) => setSponsorPackage(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    >
                      <option value="combustible-mes">
                        Apadrina 1 Mes de Ruta ($120 USD · 1.200 km)
                      </option>
                      <option value="produccion">
                        Impulsa Paquete de Producción ($2.410 total o fraccionado)
                      </option>
                      <option value="marca-van">
                        Tu Marca en la Van y en Pantalla ($1.500 USD sugerido)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="sponsor-modality"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Modalidad de aporte
                    </label>
                    <select
                      id="sponsor-modality"
                      value={sponsorModality}
                      onChange={(e) => setSponsorModality(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    >
                      <option value="efectivo">
                        Aporte Financiero Directo (Factura / Certificación)
                      </option>
                      <option value="especie">
                        Aporte en Especie (Equipos, Conectividad, Combustible)
                      </option>
                      <option value="mixto">Esquema Mixto / Co-inversión</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={sponsorContact}
                    onChange={(e) => setSponsorContact(e.target.value)}
                    placeholder="Persona de contacto *"
                    aria-label="Persona de contacto"
                    className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                  />
                  <input
                    type="email"
                    value={sponsorEmail}
                    onChange={(e) => setSponsorEmail(e.target.value)}
                    placeholder="Correo electrónico *"
                    aria-label="Correo electrónico"
                    className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                  />
                  <input
                    type="tel"
                    value={sponsorPhone}
                    onChange={(e) => setSponsorPhone(e.target.value)}
                    placeholder="Teléfono / WhatsApp"
                    aria-label="Teléfono o WhatsApp"
                    className="px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                  />
                </div>
              </>
            )}

            {activeRole === 'volunteer' && (
              <>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-xs font-mono uppercase tracking-wider text-amber-700">
                    CÉLULA DIGITAL DISTRITO 4400 (ROTARACT / INTERACT / VOLUNTARIOS)
                  </p>
                  <h3
                    className="text-xl font-bold text-[#0A2540] mt-1"
                    style={{fontFamily: 'var(--font-outfit), sans-serif'}}
                  >
                    Intégrate al equipo de producción remota o apoyo territorial
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vol-name"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Nombre y Apellido *
                    </label>
                    <input
                      id="vol-name"
                      type="text"
                      value={volName}
                      onChange={(e) => setVolName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="vol-club"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Club Rotaract / Interact / Universidad y Ciudad *
                    </label>
                    <input
                      id="vol-club"
                      type="text"
                      value={volClubOrUni}
                      onChange={(e) => setVolClubOrUni(e.target.value)}
                      placeholder="Ej. Rotaract Quito / Cuenca"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vol-area"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Rol en el que quieres aportar *
                    </label>
                    <select
                      id="vol-area"
                      value={volArea}
                      onChange={(e) => setVolArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    >
                      <option value="Edición de Reels / Shorts (30-90s)">
                        Edición de Reels / Shorts (30-90s)
                      </option>
                      <option value="Subtitulado Bilingüe (Español / Inglés)">
                        Subtitulado Bilingüe (Español / Inglés)
                      </option>
                      <option value="Redacción de Blueprints Open-Source">
                        Redacción de Blueprints Open-Source
                      </option>
                      <option value="Coordinación Logística en mi Ciudad">
                        Coordinación Logística en mi Ciudad
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="vol-email"
                      className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                    >
                      Correo Electrónico *
                    </label>
                    <input
                      id="vol-email"
                      type="email"
                      value={volEmail}
                      onChange={(e) => setVolEmail(e.target.value)}
                      placeholder="tu@correo.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="vol-portfolio"
                    className="block text-xs font-semibold text-[#0A2540] mb-1.5"
                  >
                    Enlace a portafolio, LinkedIn o experiencia previa (Opcional)
                  </label>
                  <input
                    id="vol-portfolio"
                    type="text"
                    value={volPortfolio}
                    onChange={(e) => setVolPortfolio(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#003B73]"
                  />
                </div>
              </>
            )}

            {errorMessage && (
              <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {lastSubmitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs md:text-sm text-emerald-950 space-y-1">
                <div className="flex items-center gap-2 font-bold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    ¡Postulación registrada en el radar del Distrito 4400!
                  </span>
                </div>
                <p>
                  Hemos registrado a{' '}
                  <strong>{lastSubmitted.organizationOrName}</strong> (
                  {lastSubmitted.city}) bajo la modalidad{' '}
                  <strong>{lastSubmitted.badge}</strong>. El equipo coordinador
                  liderado por Soledad Hernández tomará contacto para validar
                  fechas.
                </p>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                * Toda visita se coordina previamente con el Presidente del Club
                y se realiza 100% en fin de semana.
              </p>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {activeRole === 'club'
                    ? 'Enviar Postulación de mi Club'
                    : activeRole === 'sponsor'
                    ? 'Confirmar Interés de Patrocinio'
                    : 'Integrarme al Equipo Digital'}
                </span>
              </button>
            </div>
          </form>

          {/* Right 5 Cols: Live Traction Registry */}
          <div className="lg:col-span-5 bg-[#0A2540] text-white rounded-2xl p-6 md:p-8 border border-slate-800">
            <div className="pb-4 border-b border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                PULSO DE LA CONVOCatoria · EN VIVO
              </p>
              <h3
                className="text-xl font-bold text-white mt-1"
                style={{fontFamily: 'var(--font-outfit), sans-serif'}}
              >
                Registro de Interés del Piloto ({submissions.length})
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Clubes, padrinos y voluntarios que ya levantaron la mano para
                los 6 meses de ruta.
              </p>
            </div>

            <div className="mt-5 space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {submissions.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-[#F59E0B] font-semibold">
                      {item.badge}
                    </span>
                    <span className="text-slate-400">{item.timestamp}</span>
                  </div>
                  <p className="text-sm font-bold text-white">
                    {item.organizationOrName}
                  </p>
                  <p className="text-xs text-emerald-300">{item.city}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
