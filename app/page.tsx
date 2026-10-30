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
  CONTINGENCY_USD,
  FORMAT_IDS,
  FormatId,
  OPERATION_BUDGET,
  OPERATION_MONTHLY_USD,
  OPERATION_TOTAL_USD,
  PREP_BUDGET,
  PREP_TOTAL_USD,
  PRODUCTION_PACKAGE,
  PRODUCTION_PACKAGE_USD,
  PROPOSAL_PDF_URL,
  SUBTOTAL_USD,
  TEAM_NAMES,
  TOTAL_BUDGET_USD,
} from '@/lib/expedition-data';
import {useLang} from '@/lib/i18n/context';

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
  const {t, formatUsd} = useLang();
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
              alt={t.hero.imageAlt}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-[#0A2540]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
          </div>

          <div className="relative max-w-[1120px] w-full mx-auto px-4 sm:px-6 pt-16 pb-12 md:pt-24">
            <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B] mb-4">
              {t.hero.eyebrow}
            </p>
            <h1
              className="font-bold tracking-tight leading-[1.05] text-balance max-w-3xl"
              style={{...headingFont, fontSize: 'clamp(2.4rem, 5vw, 4.25rem)'}}
            >
              {t.hero.title}
            </h1>
            <p className="mt-5 text-base md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {t.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goToConvocatoria('club')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#FF8A00] text-[#0A2540] font-bold text-sm transition-colors cursor-pointer"
              >
                {t.hero.ctaApply}
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={PROPOSAL_PDF_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 font-semibold text-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                {t.hero.ctaPdf}
              </a>
            </div>
          </div>

          <div className="relative border-t border-white/15 bg-[#0A2540]/80 backdrop-blur-sm">
            <dl className="max-w-[1120px] mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.hero.facts.map((f) => (
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
              index={t.proposal.index}
              title={t.proposal.title}
              intro={t.proposal.intro}
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.proposal.outcomes.map((o) => (
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
                  alt={t.proposal.emblemAlt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="md:col-span-9 text-base text-slate-700 leading-relaxed">
                {t.proposal.vanBefore}
                <strong>{t.proposal.vanStrong}</strong>
                {t.proposal.vanMiddle}
                <strong>{t.proposal.vanStrong2}</strong>
                {t.proposal.vanAfter}
              </p>
            </div>
          </div>
        </section>

        {/* 02 · FORMATOS */}
        <section id="formatos" className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index={t.formats.index}
              title={t.formats.title}
              intro={t.formats.intro}
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
              {FORMAT_IDS.map((f) => {
                const text = t.formats.items[f.id];
                return (
                  <article
                    key={f.id}
                    className="flex flex-col rounded-2xl bg-white border border-slate-200 p-6"
                  >
                    <p className="text-xs font-mono text-[#F59E0B] font-semibold">
                      {t.formats.formatLabel} {f.index}
                    </p>
                    <h3 className="mt-2 text-xl font-bold" style={headingFont}>
                      {text.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#3B6E5C]">{text.stage}</p>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-1">
                      {text.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => goToConvocatoria('club', f.id)}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#003B73] hover:underline underline-offset-4 cursor-pointer self-start"
                    >
                      {t.formats.apply}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </article>
                );
              })}
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold" style={headingFont}>
                  {t.formats.flowTitle}
                </h3>
                <ol className="mt-5 space-y-3">
                  {t.formats.flow.map((step, i) => (
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
                    {t.formats.editorialTitle}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {t.formats.editorialText}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={headingFont}>
                    {t.formats.participationTitle}
                  </h3>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {t.formats.participationText}
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
              index={t.budget.index}
              title={t.budget.title(formatUsd(TOTAL_BUDGET_USD, 2))}
              intro={t.budget.intro}
            />

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <h3 className="text-lg font-bold" style={headingFont}>
                  {t.budget.operationTitle}
                </h3>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[520px] text-sm text-left">
                    <thead>
                      <tr className="border-b border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-500">
                        <th className="py-3 pr-4 font-medium">{t.budget.itemCol}</th>
                        <th className="py-3 pr-4 font-medium text-right">{t.budget.monthCol}</th>
                        <th className="py-3 font-medium text-right">{t.budget.sixMonthsCol}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OPERATION_BUDGET.map((l, i) => (
                        <tr key={i} className="border-b border-slate-200 align-top">
                          <td className="py-3 pr-4">
                            <p className="font-medium text-[#0A2540]">
                              {t.budget.operation[i].label}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {t.budget.operation[i].basis}
                            </p>
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
                        <td className="py-3 pr-4">{t.budget.operationTotal}</td>
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
                  {t.budget.prepTitle}
                </h3>
                <table className="mt-4 w-full text-sm text-left">
                  <tbody>
                    {PREP_BUDGET.map((l, i) => (
                      <tr key={i} className="border-b border-slate-200">
                        <td className="py-3 pr-4">{t.budget.prep[i]}</td>
                        <td className="py-3 text-right font-mono tabular-nums">
                          {formatUsd(l.totalUsd)}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-semibold">
                      <td className="py-3 pr-4">{t.budget.prepTotal}</td>
                      <td className="py-3 text-right font-mono tabular-nums">
                        {formatUsd(PREP_TOTAL_USD)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  {t.budget.prepNote}
                </p>
              </div>

              <aside className="lg:col-span-4 space-y-6">
                <div className="rounded-2xl bg-[#0A2540] text-white p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#F59E0B]">
                    {t.budget.scenarioTitle}
                  </p>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    {[
                      [t.budget.cumulativeOperation, OPERATION_TOTAL_USD],
                      [t.budget.prepAndEquipment, PREP_TOTAL_USD],
                      [t.budget.subtotal, SUBTOTAL_USD],
                      [t.budget.contingency, CONTINGENCY_USD],
                    ].map(([label, value]) => (
                      <div key={label as string} className="flex justify-between gap-4">
                        <dt className="text-slate-300">{label}</dt>
                        <dd className="font-mono tabular-nums">
                          {formatUsd(value as number, 2)}
                        </dd>
                      </div>
                    ))}
                    <div className="flex justify-between gap-4 pt-3 mt-3 border-t border-white/15 text-base font-bold">
                      <dt>{t.budget.estimatedTotal}</dt>
                      <dd className="font-mono tabular-nums text-[#F59E0B]">
                        {formatUsd(TOTAL_BUDGET_USD, 2)}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-white border border-slate-200 p-6">
                  <h3 className="text-base font-bold" style={headingFont}>
                    {t.budget.packageTitle(formatUsd(PRODUCTION_PACKAGE_USD))}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {PRODUCTION_PACKAGE.map((l, i) => (
                      <li key={i} className="flex justify-between gap-4">
                        <span>{t.budget.package[i]}</span>
                        <span className="font-mono tabular-nums">
                          {formatUsd(l.totalUsd)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    {t.budget.packageNote}
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.budget.inKindNote}
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* 05 · APOYOS Y METAS */}
        <section id="apoyos" className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <SectionHeader
              index={t.support.index}
              title={t.support.title}
              intro={t.support.intro}
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {t.support.modalities.map((m) => (
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
                <strong>{t.support.incentivesLabel}</strong>
                {t.support.incentivesText}
              </p>
              <button
                type="button"
                onClick={() => goToConvocatoria('aliado')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#003B73] hover:bg-[#0A2540] text-white text-sm font-semibold transition-colors shrink-0 cursor-pointer self-start md:self-auto"
              >
                {t.support.offerSupport}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <h3 className="mt-16 text-xl font-bold" style={headingFont}>
              {t.support.goalsTitle}
            </h3>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-500">
                    <th className="py-3 pr-4 font-medium">{t.support.indicatorCol}</th>
                    <th className="py-3 pr-4 font-medium">{t.support.targetCol}</th>
                    <th className="py-3 font-medium">{t.support.verificationCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.support.goals.map((g) => (
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
              {t.support.goalsNote}
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
            {t.footer.careTitle}
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.footer.commitments.map((c) => (
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
                {TEAM_NAMES.map((name, i) => (
                  <li key={name} className="text-xs text-slate-300">
                    <strong className="text-white">{name}</strong> · {t.footer.team[i]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 text-xs text-slate-400 leading-relaxed space-y-3">
              <p>{t.footer.disclaimer}</p>
              <a
                href={PROPOSAL_PDF_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white underline underline-offset-4"
              >
                <FileText className="w-3.5 h-3.5" />
                {t.footer.pdfLink}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
