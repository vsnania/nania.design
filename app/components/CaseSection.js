// One case study section: pixel-font label in the left column (sticky on
// desktop), content in the right. Every narrative section uses this, so the
// label style and grid live in one place.
export default function CaseSection({ label, children, className = 'mb-16' }) {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 ${className}`}>
      <div className="md:col-span-4">
        <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] md:sticky md:top-28">
          {label}
        </h3>
      </div>
      <div className="md:col-span-8">{children}</div>
    </section>
  );
}
