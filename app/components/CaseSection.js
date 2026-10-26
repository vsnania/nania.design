// One case study section: a single column, label above the text, so text
// and figures share one left edge. Text stays at a readable measure. The
// label takes the project color (set once on CaseStudyPage).
export default function CaseSection({ label, children, className = 'mb-[var(--space-section)]' }) {
  return (
    <section className={className}>
      <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[var(--accent,#66645F)] mb-5">
        {label}
      </h3>
      <div className="max-w-[640px]">{children}</div>
    </section>
  );
}
