import Link from 'next/link';
import { ViewTransition } from 'react';

export default function CaseStudyPage({
  backHref = '/',
  backLabel = 'Back to work',
  accent = '#66645F',
  HeroThumb,
  heroName,
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
    // The article is its own page-transition layer: after the hero morphs into
    // place, the rest of the case study rises in (see globals.css).
    <article className="pt-14 pb-4 md:pt-20 max-w-[1040px] mx-auto" style={{ viewTransitionName: 'case-content', '--accent': accent }}>
      {/* Own transition layer: fades in place while the content below rises */}
      <div className="mb-8" style={{ viewTransitionName: 'case-back' }}>
        <a href={backHref} className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] hover:text-[#121212] transition-colors inline-flex items-center gap-2 group">
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> {backLabel}
        </a>
      </div>

      {/* Outcome-first hero: the same coded animation as the homepage panel,
          wider than the reading column. Screens live in the body as evidence. */}
      {HeroThumb ? (
        <div className="relative left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-2*clamp(16px,4.5vw,64px)))] mb-12 md:mb-14">
          <ViewTransition name={heroName} share="morph">
            <div className="relative aspect-[16/9] min-[901px]:aspect-[3/1] overflow-hidden rounded-[2px] bg-[#E3E1DC]">
              <HeroThumb />
            </div>
          </ViewTransition>
        </div>
      ) : null}

      {heroScreenshot ? (
        <div
          className="mb-12 -mx-[clamp(16px,4.5vw,64px)] md:mx-0 relative overflow-hidden rounded-none md:rounded-[14px] bg-[#121212] flex flex-col items-center md:items-start md:justify-center min-h-[460px] md:min-h-[440px]"
          style={{ perspective: '1500px' }}
        >
          <div className={`absolute bottom-[8%] right-1/2 translate-x-1/2 md:right-[8%] md:translate-x-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[90px] ${heroGlowClassName}`} />

          <div className="relative z-10 w-full md:max-w-[58%] flex flex-col gap-4 md:gap-5 px-8 pt-12 md:p-14">
            <div className="flex flex-wrap items-center gap-x-3 font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase">
              <span className={heroKickerClassName}>{kicker}</span>
              {projectLabel ? (
                <>
                  <span className="text-stone-600">•</span>
                  <span className="text-stone-400">{projectLabel}</span>
                </>
              ) : null}
            </div>
            <h1 className="text-white text-[32px] md:text-[44px] font-semibold leading-[var(--lh-display)] tracking-[-0.03em] [text-wrap:balance]">{title}</h1>
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

      <header className="mb-16 max-w-[760px]">
        {!heroScreenshot ? (
          <>
            <div className="flex flex-wrap items-center gap-x-4 font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase mb-4">
              <span className={kickerClassName}>{kicker}</span>
              {projectLabel ? (
                <>
                  <span className="text-stone-400/60">•</span>
                  <span className={projectLabelClassName}>{projectLabel}</span>
                </>
              ) : null}
            </div>
            <h1 className="text-[36px] md:text-[52px] font-semibold leading-[var(--lh-display)] tracking-[-0.035em] mb-6 [text-wrap:balance]">{title}</h1>
          </>
        ) : null}
        <p className="text-[18px] md:text-[21px] leading-[var(--lh-body)] text-[#2A2927]">{summary}</p>
      </header>

      {metrics.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-[var(--space-section)]">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span className="text-[40px] leading-none font-semibold tracking-[-0.03em] tabular-nums">{metric.value}</span>
              <p className="text-[14px] leading-[var(--lh-small)] mt-2 font-semibold text-[#121212]">{metric.label}</p>
              {metric.detail ? <p className="text-[13px] leading-[var(--lh-small)] mt-1 text-[#55534F]">{metric.detail}</p> : null}
            </div>
          ))}
        </section>
      ) : null}

      <div>{children}</div>

      {bottomNav ? (
        <div className="mt-28 grid grid-cols-1 gap-4 md:grid-cols-2">
          <a href={bottomNav.previous.href} className="group flex items-center justify-between gap-4 px-6 py-5 bg-[#E3E1DC] rounded-[2px] hover:bg-[#DAD7D0] transition-colors duration-300">
            <span className="text-[17px] font-semibold tracking-[-0.01em] text-[#121212]">
              <span aria-hidden="true" className="text-[0.8em] mr-1.5">←</span>{bottomNav.previous.label}
            </span>
          </a>
          <a href={bottomNav.next.href} className="group flex items-center justify-between gap-4 px-6 py-5 bg-[#E3E1DC] rounded-[2px] hover:bg-[#DAD7D0] transition-colors duration-300">
            <span className="text-[17px] font-semibold tracking-[-0.01em] text-[#121212]">
              {bottomNav.next.label}<span aria-hidden="true" className="text-[0.8em] ml-1.5">→</span>
            </span>
          </a>
        </div>
      ) : null}
    </article>
  );
}