export const metadata = {
  title: 'Get in touch // Vincent Nania',
  description: 'Get in touch for design leadership and product strategy opportunities.',
};

export default function ContactPage() {
  return (
    <article className="py-16 md:py-24 max-w-3xl mx-auto tracking-tight w-full flex flex-col items-start">

      <header className="mb-16 md:mb-20 text-left w-full">
        <div className="flex items-center justify-start gap-4 text-xs font-bold uppercase tracking-[0.2em] mb-6">
          <span className="text-amber-800">Contact</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light leading-tight mb-6">
          Get in touch
        </h1>
        <p className="text-base font-normal leading-relaxed text-stone-600/90 max-w-xl">
          Currently open for new opportunities in design leadership and product strategy.
          I'm always happy to connect, collaborate, or just talk shop.
        </p>
      </header>

      <div className="flex flex-col gap-4 w-full">

        <a
          href="mailto:vincent.nania@gmail.com"
          className="group flex items-center justify-between w-full px-5 py-4 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-amber-600/70 rounded-2xl hover:border-stone-400/40 hover:border-l-amber-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/5 transition-all duration-300"
        >
          <span className="text-lg font-medium text-stone-900">Email</span>
          <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

        <a
          href="https://www.linkedin.com/in/vsnania/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between w-full px-5 py-4 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-sky-600/70 rounded-2xl hover:border-stone-400/40 hover:border-l-sky-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/5 transition-all duration-300"
        >
          <span className="text-lg font-medium text-stone-900">LinkedIn</span>
          <svg className="w-4 h-4 text-stone-400 group-hover:text-sky-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

        <a
          href="/Vincent_Nania_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between w-full px-5 py-4 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-emerald-600/70 rounded-2xl hover:border-stone-400/40 hover:border-l-emerald-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/5 transition-all duration-300"
        >
          <span className="text-lg font-medium text-stone-900">View Resume</span>
          <svg className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

      </div>

      <div className="mt-20 pt-12 border-t border-stone-400/25 w-full">
        <a href="/" className="text-xs text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          View my work <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>

    </article>
  );
}
