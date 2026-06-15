import Link from 'next/link';
import MetricCounter from '@/app/components/MetricCounter';

export default function CaseStudyPage({
  backHref = '/',
  backLabel = 'Back to work',
  heroScreenshot,
  heroScreenshotAlt = '',
  heroGlowClassName = 'bg-amber-400/20',
  heroKickerClassName = 'text-amber-400',
  kicker = '',
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
      <div className="mb-8">
        <a href={backHref} className="text-xs  text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> {backLabel}
        </a>
      </div>

      {heroScreenshot ? (
        <div
          className="mb-12 -mx-4 md:mx-0 relative overflow-hidden rounded-none md:rounded-2xl bg-stone-900 md:border md:border-stone-700/40 flex flex-col items-center md:items-start md:justify-center min-h-[460px] md:min-h-[440px]"
          style={{ perspective: '1500px' }}
        >
          <div className={`absolute bottom-[8%] right-1/2 translate-x-1/2 md:right-[8%] md:translate-x-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[90px] ${heroGlowClassName}`} />

          <div className="relative z-10 w-full md:max-w-[58%] flex flex-col gap-4 md:gap-5 px-8 pt-12 md:p-14">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]">
              <span className={heroKickerClassName}>{kicker}</span>
              {projectLabel ? (
                <>
                  <span className="text-stone-600">•</span>
                  <span className="text-stone-400">{projectLabel}</span>
                </>
              ) : null}
            </div>
            <h1 className="text-white text-3xl md:text-[2.3rem] font-light leading-[1.1]">{title}</h1>
          </div>

          <div
            className="relative md:absolute z-20 w-[200px] md:w-[185px] mt-8 -mb-16 md:mt-0 md:mb-0 md:right-[4%] md:bottom-[-8%]"
            style={{ transform: 'rotateY(-24deg) rotateX(7deg) rotateZ(3deg)' }}
          >
            <div className="rounded-[2rem] bg-stone-950 p-[7px] shadow-2xl shadow-black/70 border border-stone-700/50">
              <div className="overflow-hidden rounded-[1.6rem] bg-black">
                <img src={heroScreenshot} alt={heroScreenshotAlt} className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <header className="mb-16">
        {!heroScreenshot ? (
          <>
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
          </>
        ) : null}
        <p className="text-base md:text-lg font-normal leading-relaxed text-stone-600/90">{summary}</p>
      </header>

      {metrics.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-y border-stone-400/25 py-10 mb-16 text-center sm:text-left bg-stone-100/20 rounded-none">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <MetricCounter value={metric.value} />
              <p className="text-xs  mt-2 uppercase tracking-wider font-bold text-stone-500">{metric.label}</p>
              {metric.detail ? <p className="text-xs font-normal mt-1 text-stone-600/80">{metric.detail}</p> : null}
            </div>
          ))}
        </section>
      ) : null}

      <div className="space-y-16">{children}</div>

      {bottomNav ? (
        <div className="mt-24 grid grid-cols-1 gap-4 pt-12 border-t border-stone-400/25 md:grid-cols-2">
          <a href={bottomNav.previous.href} className="group flex items-center justify-center p-6 bg-stone-100/50 hover:bg-stone-100 border border-stone-400/20 rounded-xl transition-all duration-300">
            <span className="text-xs  tracking-wider uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
              ← {bottomNav.previous.label}
            </span>
          </a>
          <a href={bottomNav.next.href} className="group flex items-center justify-center p-6 bg-stone-100/50 hover:bg-stone-100 border border-stone-400/20 rounded-xl transition-all duration-300">
            <span className="text-xs  tracking-wider uppercase text-stone-500 group-hover:text-stone-900 transition-colors">
              {bottomNav.next.label} →
            </span>
          </a>
        </div>
      ) : null}
    </article>
  );
}