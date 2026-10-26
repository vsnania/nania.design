// Closing "see it live" panel: same surface as the homepage work panels,
// with the same dark pill button.
export default function LiveLink({ text, href, cta }) {
  return (
    <section className="mt-8 px-6 py-7 md:px-10 md:py-8 bg-[#E3E1DC] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-5">
      <div>
        <p className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-2">see it live</p>
        <p className="text-[17px] leading-[var(--lh-body)] text-[#121212] max-w-md">{text}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group shrink-0 self-start md:self-auto inline-flex items-center text-[15px] font-semibold text-[#121212] underline decoration-[1.5px] underline-offset-[5px] decoration-transparent hover:decoration-current transition-colors"
      >
        {cta}
        <span aria-hidden="true" className="arrow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
      </a>
    </section>
  );
}
