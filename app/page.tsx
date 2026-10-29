'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {ArrowRight, FileText} from 'lucide-react';
import Navbar from '@/components/Navbar';
import InteractiveRouteMap from '@/components/InteractiveRouteMap';
import ConvocatoriaSection, {
  ConvocatoriaRole,
} from '@/components/ConvocatoriaSection';
import {
  COMMITMENTS,
  CONTINGENCY_USD,
  FormatId,
  GOALS,
  HERO_FACTS,
  OPERATION_BUDGET,
  OPERATION_MONTHLY_USD,
  OPERATION_TOTAL_USD,
  OUTCOMES,
  PREP_BUDGET,
  PREP_TOTAL_USD,
  PRODUCTION_FORMATS,
  PRODUCTION_PACKAGE,
  PRODUCTION_PACKAGE_USD,
  PROPOSAL_PDF_URL,
  SUBTOTAL_USD,
  SUPPORT_MODALITIES,
  TEAM,
  TOTAL_BUDGET_USD,
  VISIT_FLOW,
  formatUsd,
} from '@/lib/expedition-data';

const headingFont = {fontFamily: 'var(--font-outfit), sans-serif'};

function SectionHeader({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-mono uppercase tracking-wider text-[#3B6E5C] mb-3">
        {index}
      </p>
      <h2
        className="text-3xl md:text-4xl font-bold tracking-tight text-balance"
        style={headingFont}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base text-slate-600 leading-relaxed">{intro}</p>
      )}
    </div>
  );
}

export default function HomePage() {
  const [convocatoriaRole, setConvocatoriaRole] =
    useState<ConvocatoriaRole>('club');
  const [prefilledFormat, setPrefilledFormat] = useState<FormatId | undefined>();

  const goToConvocatoria = (role: ConvocatoriaRole, format?: FormatId) => {
    setConvocatoriaRole(role);
    if (format) setPrefilledFormat(format);
    document
      .getElementById('convocatoria')
      ?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0A2540]">
      <Navbar onPostularClick={() => goToConvocatoria('club')} />

      <main className="flex-1">
        {/* HERO */}
        <section
          id="inicio"
          className="relative min-h-[82vh] flex flex-col justify-between bg-[#0A2540] text-white overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/assets/aistudio/image_8e5d8680.png"
              alt="Soledad Hernández junto a la van Citroën Jumpy en los Andes ecuatorianos"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-[#0A2540]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
          </div>

          <div className="relative max-w-[1120px] w-full mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-24">
            <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-4">
              Fase piloto · Ecuador · Distrito 4400
            </p>
            <h1
              className="font-bold tracking-tight leading-[1.05] text-balance max-w-3xl"
              style={{...headingFont, fontSize: 'clamp(2.4rem, 5vw, 4.25rem)'}}
            >
              Kilómetros con Propósito
            </h1>
            <p className="mt-5 text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Una iniciativa audiovisual que recorrerá el Ecuador durante seis
              meses, exclusivamente los sábados y domingos, documentando
              proyectos, testimonios e historias que demuestran cómo el
              Rotarismo transforma vidas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goToConvocatoria('club')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-bold text-sm transition-colors cursor-pointer"
              >
                Postular un proyecto
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={PROPOSAL_PDF_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 font-semibold text-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                Ver la propuesta (PDF)
              </a>
            </div>
          </div>

          <div className="relative border-t border-white/15 bg-[#0A2540]/80 backdrop-blur-sm">
            <dl className="max-w-[1120px] mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {HERO_FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs text-slate-300 order-2">{f.label}</dt>
                  <dd className="text-xl md:text-2xl font-bold font-mono tabular-nums text-white mt-0.5">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 01 · PROPUESTA */}
        <section id="propuesta" className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index="01 · La propuesta"
              title="Convertir cada historia de servicio en una oportunidad para sumar."
              intro="A través de YouTube y redes sociales, las experiencias documentadas se convierten en historias capaces de inspirar, generar confianza, atraer voluntarios, conseguir donaciones y abrir nuevas alianzas."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {OUTCOMES.map((o) => (
                <div key={o.audience} className="border-t-2 border-[#F59E0B] pt-5">
                  <h3 className="text-lg font-bold" style={headingFont}>
                    {o.audience}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {o.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 items-center rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 md:p-8">
              <div className="md:col-span-3 relative h-28">
                <Image
                  src="/assets/aistudio/image_29e4428b.png"
                  alt="Emblema de Kilómetros con Propósito"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="md:col-span-9 text-base text-slate-700 leading-relaxed">
                El recorrido se realiza en una{' '}
                <strong>van Citroën Jumpy adaptada para viajes overland</strong>,
                base móvil de desplazamiento y producción audiovisual. Ecuador
                es la <strong>fase piloto</strong> de un proyecto con proyección
                internacional, que solo se formulará después de evaluar el
                piloto.
              </p>
            </div>
          </div>
        </section>

        {/* 02 · FORMATOS */}
        <section id="formatos" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index="02 · Cómo documentamos"
              title="Tres formatos según la fase de cada proyecto."
              intro="Cada episodio cierra con una lección aprendida —¿cómo replicar este proyecto en otro club?— que se guarda en la web como repositorio para futuras iniciativas."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {PRODUCTION_FORMATS.map((f) => (
                <article
                  key={f.id}
                  className="flex flex-col rounded-2xl bg-white border border-slate-200 p-6"
                >
                  <p className="text-xs font-mono text-[#F59E0B] font-semibold">
                    FORMATO {f.index}
                  </p>
                  <h3 className="mt-2 text-xl font-bold" style={headingFont}>
                    {f.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#3B6E5C]">{f.stage}</p>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                    {f.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => goToConvocatoria('club', f.id)}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#003B73] hover:underline underline-offset-4 cursor-pointer self-start"
                  >
                    Postular con este formato
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold" style={headingFont}>
                  Flujo de trabajo por visita
                </h3>
                <ol className="mt-5 space-y-3">
                  {VISIT_FLOW.map((step, i) => (
                    <li key={i} className="flex gap-4 text-sm text-slate-700 leading-relaxed">
                      <span className="font-mono font-semibold text-[#003B73] shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold" style={headingFont}>
                    Formato editorial
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    Episodios principales de 8 a 15 minutos con las voces de
                    quienes participan y un llamado a la acción específico.
                    Videos cortos de 30 a 90 segundos que llevan al episodio y
                    al contacto del proyecto. Subtítulos en español y, cuando
                    los recursos lo permitan, en inglés.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={headingFont}>
                    De la visibilidad a la participación
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    La web tendrá pasarelas de pago permanentes conectadas a
                    perfiles por proyecto: un video del mes 1 puede seguir
                    recaudando en el mes 6 y después. Las donaciones a proyectos
                    van directo a mecanismos oficiales verificados por sus
                    responsables, separadas de los aportes para el recorrido.
                    No se prometen beneficios tributarios ni montos de
                    recaudación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 · RUTA */}
        <InteractiveRouteMap />

        {/* 04 · PRESUPUESTO */}
        <section id="presupuesto" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index="04 · Presupuesto preliminar"
              title={`USD ${formatUsd(TOTAL_BUDGET_USD, 2)} para seis meses.`}
              intro="Referencia para una persona en Ecuador continental, cuatro fines de semana por mes y ocho días de actividad. Supone la van disponible y adaptada. No son cotizaciones ni compromisos de proveedores."
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <h3 className="text-lg font-bold" style={headingFont}>
                  Operación estimada
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[520px] text-sm text-left">
                    <thead>
                      <tr className="border-b border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-500">
                        <th className="py-3 pr-4 font-medium">Rubro</th>
                        <th className="py-3 pr-4 font-medium text-right">Mes</th>
                        <th className="py-3 font-medium text-right">6 meses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OPERATION_BUDGET.map((l) => (
                        <tr key={l.label} className="border-b border-slate-200 align-top">
                          <td className="py-3 pr-4">
                            <p className="font-medium text-[#0A2540]">{l.label}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{l.basis}</p>
                          </td>
                          <td className="py-3 pr-4 text-right font-mono tabular-nums">
                            {formatUsd(l.monthlyUsd ?? 0)}
                          </td>
                          <td className="py-3 text-right font-mono tabular-nums">
                            {formatUsd(l.totalUsd)}
                          </td>
                        </tr>
                      ))}
                      <tr className="font-semibold">
                        <td className="py-3 pr-4">Total de operación</td>
                        <td className="py-3 pr-4 text-right font-mono tabular-nums">
                          {formatUsd(OPERATION_MONTHLY_USD)}
                        </td>
                        <td className="py-3 text-right font-mono tabular-nums">
                          {formatUsd(OPERATION_TOTAL_USD)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-12 text-lg font-bold" style={headingFont}>
                  Preparación y equipo
                </h3>
                <table className="mt-4 w-full text-sm text-left">
                  <tbody>
                    {PREP_BUDGET.map((l) => (
                      <tr key={l.label} className="border-b border-slate-200">
                        <td className="py-3 pr-4">{l.label}</td>
                        <td className="py-3 text-right font-mono tabular-nums">
                          {formatUsd(l.totalUsd)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold">
                      <td className="py-3 pr-4">Total inicial</td>
                      <td className="py-3 text-right font-mono tabular-nums">
                        {formatUsd(PREP_TOTAL_USD)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Provisiones propias pendientes de cotización; se descontarán
                  los equipos ya disponibles. No incluye reparaciones mayores ni
                  una nueva adaptación de la van.
                </p>
              </div>

              <aside className="lg:col-span-4 space-y-6">
                <div className="rounded-2xl bg-[#0A2540] text-white p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                    Escenario 6 meses · USD
                  </p>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    {[
                      ['Operación acumulada', OPERATION_TOTAL_USD],
                      ['Preparación y equipo', PREP_TOTAL_USD],
                      ['Subtotal', SUBTOTAL_USD],
                      ['Contingencia 15 %', CONTINGENCY_USD],
                    ].map(([label, value]) => (
                      <div key={label as string} className="flex justify-between gap-4">
                        <dt className="text-slate-300">{label}</dt>
                        <dd className="font-mono tabular-nums">
                          {formatUsd(value as number, 2)}
                        </dd>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 pt-3 mt-3 border-t border-white/15 text-base font-bold">
                      <dt>Total estimado</dt>
                      <dd className="font-mono tabular-nums text-[#F59E0B]">
                        {formatUsd(TOTAL_BUDGET_USD, 2)}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200 p-6">
                  <h3 className="text-base font-bold" style={headingFont}>
                    Paquete de producción · USD {formatUsd(PRODUCTION_PACKAGE_USD)}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {PRODUCTION_PACKAGE.map((l) => (
                      <li key={l.label} className="flex justify-between gap-4">
                        <span>{l.label}</span>
                        <span className="font-mono tabular-nums">
                          {formatUsd(l.totalUsd)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Opción de apoyo que forma parte del total anterior y no se
                    suma a él. Puede financiarse parcialmente o cubrirse en
                    especie.
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Los apoyos en especie se descuentan de la necesidad de
                  efectivo sin contarlos dos veces. Financiación propia,
                  patrocinios y aportes institucionales están por definir. Los
                  ingresos de YouTube no se incluyen como fuente del piloto.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* 05 · APOYOS Y METAS */}
        <section id="apoyos" className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index="05 · Apoyos y metas"
              title="Lo que se solicita y cómo se medirá."
              intro="Se solicita el aval institucional del Distrito, el acercamiento con los clubes y sus proyectos, y la posibilidad de gestionar apoyos en especie, difusión y patrocinio, sin comprometer recursos económicos del Distrito."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {SUPPORT_MODALITIES.map((m) => (
                <div key={m.name} className="border-t-2 border-[#003B73] pt-4">
                  <h3 className="text-sm font-bold">{m.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {m.request}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <p className="text-sm text-slate-700 leading-relaxed max-w-2xl">
                <strong>Incentivos para donantes y aliados:</strong> menciones
                destacadas en los créditos de los episodios o el logotipo de la
                empresa o del club en el vinilado exterior de la van. Ningún
                patrocinio condiciona testimonios ni afirmaciones de impacto.
              </p>
              <button
                type="button"
                onClick={() => goToConvocatoria('aliado')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#003B73] hover:bg-[#0A2540] text-white text-sm font-semibold transition-colors shrink-0 cursor-pointer self-start md:self-auto"
              >
                Ofrecer apoyo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <h3 className="mt-16 text-xl font-bold" style={headingFont}>
              Entregables y metas de seguimiento
            </h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-medium">Indicador</th>
                    <th className="py-3 pr-4 font-medium">Meta inicial</th>
                    <th className="py-3 font-medium">Cómo se verifica</th>
                  </tr>
                </thead>
                <tbody>
                  {GOALS.map((g) => (
                    <tr key={g.indicator} className="border-b border-slate-200 align-top">
                      <td className="py-3 pr-4 font-medium">{g.indicator}</td>
                      <td className="py-3 pr-4 font-mono text-[#003B73]">{g.target}</td>
                      <td className="py-3 text-slate-600">{g.verification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-3xl">
              Estas metas son propuestas, no garantías. Las metas de audiencia
              se fijarán después del primer mes, con una línea base. No se
              atribuirá al canal un resultado que la organización no pueda
              confirmar.
            </p>
          </div>
        </section>

        {/* 06 · CONVOCATORIA */}
        <ConvocatoriaSection
          activeRole={convocatoriaRole}
          onRoleChange={setConvocatoriaRole}
          prefilledFormat={prefilledFormat}
        />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A2540] text-white">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-16">
          <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
            Cuidado de las personas
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((c) => (
              <div key={c.title}>
                <h3 className="text-sm font-bold">{c.title}</h3>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <p className="text-lg font-bold" style={headingFont}>
                Kilómetros con Propósito
              </p>
              <ul className="mt-3 space-y-2">
                {TEAM.map((t) => (
                  <li key={t.name} className="text-xs text-slate-300">
                    <strong className="text-white">{t.name}</strong> · {t.role}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 text-xs text-slate-400 leading-relaxed space-y-3">
              <p>
                La iniciativa es coordinada por su proponente y no se presenta
                como un programa oficial de Rotary sin la autorización
                correspondiente. El canal tiene identidad propia y explica con
                precisión los respaldos recibidos; el uso de nombres, logotipos
                o distintivos se acuerda con sus titulares.
              </p>
              <a
                href={PROPOSAL_PDF_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white underline underline-offset-4"
              >
                <FileText className="w-3.5 h-3.5" />
                Propuesta completa (PDF, versión 26 de octubre de 2026)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
