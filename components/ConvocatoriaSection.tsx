'use client';

import React, {useState} from 'react';
import {ArrowRight, CheckCircle2, AlertCircle, Loader2} from 'lucide-react';
import {
  FormatId,
  PRODUCTION_FORMATS,
  SUPPORT_MODALITIES,
} from '@/lib/expedition-data';

export type ConvocatoriaRole = 'club' | 'aliado';

interface ConvocatoriaSectionProps {
  activeRole: ConvocatoriaRole;
  onRoleChange: (role: ConvocatoriaRole) => void;
  prefilledFormat?: FormatId;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const PROJECT_PHASES = ['Planificación', 'Ejecución activa', 'Post-ejecución'];
const PROJECT_NEEDS = [
  'Voluntariado',
  'Donaciones',
  'Nuevos socios',
  'Alianzas',
];
const ALLY_TYPES = [
  'Empresa',
  'Institución',
  'Club o grupo rotario',
  'Persona',
];

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#003B73]/30 focus:border-[#003B73]';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1.5';

function Field({
  label,
  children,
  className = '',
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className={labelClass}>{label}</span>
      {children}
    </label>
  );
}

export default function ConvocatoriaSection({
  activeRole,
  onRoleChange,
  prefilledFormat,
}: ConvocatoriaSectionProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [format, setFormat] = useState<string>(prefilledFormat ?? '');

  // Sincroniza con props sin efectos: https://react.dev/learn/you-might-not-need-an-effect
  const [prevPrefill, setPrevPrefill] = useState(prefilledFormat);
  if (prefilledFormat !== prevPrefill) {
    setPrevPrefill(prefilledFormat);
    setFormat(prefilledFormat ?? '');
  }

  const [prevRole, setPrevRole] = useState(activeRole);
  if (activeRole !== prevRole) {
    setPrevRole(activeRole);
    setStatus('idle');
    setErrorMessage(null);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!FORMSPREE_ID) {
      setStatus('error');
      setErrorMessage(
        'El formulario aún no está conectado. Falta configurar NEXT_PUBLIC_FORMSPREE_ID.'
      );
      return;
    }

    setStatus('sending');
    setErrorMessage(null);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: {Accept: 'application/json'},
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setFormat('');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage(
        'No pudimos enviar el formulario. Inténtalo de nuevo en unos minutos.'
      );
    }
  };

  const tabs: {id: ConvocatoriaRole; label: string}[] = [
    {id: 'club', label: 'Postular un proyecto'},
    {id: 'aliado', label: 'Ofrecer apoyo'},
  ];

  return (
    <section id="convocatoria" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
            06 · Convocatoria
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-balance"
            style={{fontFamily: 'var(--font-outfit), sans-serif'}}
          >
            Inscribe tu proyecto o súmate como aliado.
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            No se excluyen proyectos por su estado actual: se seleccionan
            iniciativas en planificación, ejecución activa o post-ejecución,
            rotando formatos para dar oportunidad a más clubes.
          </p>
          <p className="mt-4 text-sm text-slate-500 leading-relaxed">
            La ficha recoge ubicación, organización responsable, problema
            atendido, población participante, evidencias disponibles y
            necesidades. La selección final se coordina con el distrito.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div
            className="inline-flex rounded-lg border border-slate-300 bg-white p-1"
            role="tablist"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={activeRole === t.id}
                onClick={() => onRoleChange(t.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer ${
                  activeRole === t.id
                    ? 'bg-[#003B73] text-white'
                    : 'text-slate-600 hover:text-[#0A2540]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {status === 'success' ? (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-8">
              <CheckCircle2 className="w-8 h-8 text-[#3B6E5C]" />
              <h3 className="mt-3 text-xl font-bold">Recibimos tu registro.</h3>
              <p className="mt-2 text-sm text-slate-600">
                Te contactaremos para coordinar los siguientes pasos.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-5 text-sm font-semibold text-[#003B73] underline underline-offset-4 cursor-pointer"
              >
                Enviar otro registro
              </button>
            </div>
          ) : (
            <form
              key={activeRole}
              onSubmit={handleSubmit}
              className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <input
                type="hidden"
                name="tipo"
                value={activeRole === 'club' ? 'Proyecto de club' : 'Aliado / apoyo'}
              />
              <input
                type="hidden"
                name="_subject"
                value={
                  activeRole === 'club'
                    ? 'Kilómetros con Propósito · Nueva postulación de proyecto'
                    : 'Kilómetros con Propósito · Nuevo aliado'
                }
              />

              {activeRole === 'club' ? (
                <>
                  <Field label="Club u organización responsable *">
                    <input name="organizacion" required className={inputClass} />
                  </Field>
                  <Field label="Ubicación (ciudad, provincia) *">
                    <input name="ubicacion" required className={inputClass} />
                  </Field>
                  <Field label="Nombre del proyecto *" className="sm:col-span-2">
                    <input name="proyecto" required className={inputClass} />
                  </Field>
                  <Field label="Fase del proyecto *">
                    <select name="fase" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Selecciona
                      </option>
                      {PROJECT_PHASES.map((p) => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Formato de interés">
                    <select
                      name="formato"
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Que lo sugiera el equipo</option>
                      {PRODUCTION_FORMATS.map((f) => (
                        <option key={f.id} value={f.id}>
                          {f.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Problema que atiende *" className="sm:col-span-2">
                    <textarea name="problema" required rows={3} className={inputClass} />
                  </Field>
                  <Field label="Población participante">
                    <input name="poblacion" className={inputClass} />
                  </Field>
                  <Field label="Evidencias disponibles">
                    <input
                      name="evidencias"
                      placeholder="Fotos, informes, testimonios…"
                      className={inputClass}
                    />
                  </Field>
                  <fieldset className="sm:col-span-2">
                    <legend className={labelClass}>¿Qué necesita el proyecto?</legend>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      {PROJECT_NEEDS.map((n) => (
                        <label key={n} className="flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="necesidades"
                            value={n}
                            className="w-4 h-4 accent-[#003B73]"
                          />
                          {n}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </>
              ) : (
                <>
                  <Field label="Entidad o nombre *">
                    <input name="entidad" required className={inputClass} />
                  </Field>
                  <Field label="Tipo de aliado *">
                    <select name="tipo_aliado" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Selecciona
                      </option>
                      {ALLY_TYPES.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Modalidad de apoyo *" className="sm:col-span-2">
                    <select name="modalidad" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Selecciona
                      </option>
                      {SUPPORT_MODALITIES.map((m) => (
                        <option key={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Mensaje" className="sm:col-span-2">
                    <textarea
                      name="mensaje"
                      rows={3}
                      placeholder="Cuéntanos qué te gustaría aportar"
                      className={inputClass}
                    />
                  </Field>
                </>
              )}

              <Field label="Persona de contacto *">
                <input name="contacto" required className={inputClass} />
              </Field>
              <Field label="Correo electrónico *">
                <input type="email" name="email" required className={inputClass} />
              </Field>
              <Field label="Teléfono / WhatsApp">
                <input type="tel" name="telefono" className={inputClass} />
              </Field>

              <label className="sm:col-span-2 flex items-start gap-2.5 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="consentimiento"
                  value="si"
                  required
                  className="mt-0.5 w-4 h-4 accent-[#003B73] shrink-0"
                />
                Acepto que estos datos se usen únicamente para coordinar esta
                convocatoria.
              </label>

              {status === 'error' && errorMessage && (
                <p
                  role="alert"
                  className="sm:col-span-2 flex items-start gap-2 text-sm text-red-700"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {errorMessage}
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F59E0B] hover:bg-[#FF8A00] disabled:opacity-60 text-[#0A2540] font-bold text-sm transition-colors cursor-pointer"
                >
                  {status === 'sending' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                  {activeRole === 'club' ? 'Enviar postulación' : 'Enviar'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
