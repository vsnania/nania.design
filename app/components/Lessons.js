// Closing "what I learned / what I'd do next" block, built on the same idea
// as Beats: a bold one-line headline per point, detail underneath, ruled
// spacing instead of bullets or rules. Two columns on desktop, stacked on phones.
export default function Lessons({ groups, accent = '#121212' }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-[var(--space-block)] mb-[var(--space-section)]">
      {groups.map((group) => (
        <div key={group.title}>
          <h4 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase mb-4" style={{ color: accent }}>
            {group.title}
          </h4>
          <ul className="grid gap-[var(--space-block)]">
            {group.items.map((item) => (
              <li key={item.head}>
                <p className="text-[19px] leading-[var(--lh-heading)] font-semibold tracking-[-0.02em] text-[#121212] [text-wrap:balance]">
                  {item.head}
                </p>
                <p className="mt-1.5 text-[16px] leading-[var(--lh-body)] text-[#2A2927]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
