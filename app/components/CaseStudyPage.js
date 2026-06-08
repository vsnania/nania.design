import Link from 'next/link';

export default function CaseStudyPage({
  backHref = '/',
  backLabel = 'Back to work',
  kicker = 'Project Pathfinder',
  projectLabel,
  kickerClassName = 'text-stone-500',
  projectLabelClassName = 'text-stone-500',
  title,
  summary,
  metrics = [],
  children,
  takeawayGroups = [],
  bottomNav,
}) {
  return (
    <article className="py-16 md:py-24 max-w-3xl mx-auto tracking-tight">
      <div className="mb-12">
        <Link href={backHref} className="text-xs  text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> {backLabel}
        </Link>
      </div>

      <header className="mb-16">
        <div className="flex items-center gap-4 text-xs  font-bold uppercase tracking-[0.2em] mb-4">
          <span className={kickerClassName}>{kicker}</span>
          {projectLabel ? (
            <>
              <span className="text-stone-400/60">•</span>
              <span className={projectLabelClassName}>{projectLabel}</span>
            </>
          ) : null}
        </div>
        <h1 className="text-3xl md:text-4xl font-light leading-tight mb-6">{title}</h1>
        <p className="text-base md:text-lg font-normal leading-relaxed text-stone-600/90">{summary}</p>
      </header>

      {metrics.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-stone-400/25 py-10 mb-16 text-center sm:text-left bg-stone-100/20 rounded-none">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span className="text-4xl font-light">{metric.value}</span>
              <p className="text-xs  mt-2 uppercase tracking-wider font-bold text-stone-500">{metric.label}</p>
              {metric.detail ? <p className="text-xs font-normal mt-1 text-stone-600/80">{metric.detail}</p> : null}
            </div>
          ))}
        </section>
      ) : null}

      <div className="space-y-16">{children}</div>

      {bottomNav ? (
        <div className="mt-24 grid grid-cols-1 gap-4 pt-12 border-t border-stone-400/25 md:grid-cols-2">
          <Link href={bottomNav.previous.href} className="group flex items-center justify-center p-6 bg-stone-100/50 hover:bg-stone-100 border border-stone-400/20 rounded-xl transition-all duration-300">
            <span className="text-xs  tracking-wider uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
              ← {bottomNav.previous.label}
            </span>
          </Link>
          <Link href={bottomNav.next.href} className="group flex items-center justify-center p-6 bg-stone-100/50 hover:bg-stone-100 border border-stone-400/20 rounded-xl transition-all duration-300">
            <span className="text-xs  tracking-wider uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
              {bottomNav.next.label} →
            </span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}