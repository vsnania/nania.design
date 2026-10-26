// The lighter sibling of Beats, for short narrative sections.
// One punchy lead line carries the point; a short paragraph backs it up;
// optional stats or tags make the evidence glanceable.
//   lead   - the takeaway, in one line
//   body   - a string or an array of strings (short paragraphs)
//   stats  - [{ value, label }] big-number callouts
//   tags   - { label?, items: [] } small pills (themes, layers, launches)
export default function Statement({ lead, body, stats, tags, accent = '#121212' }) {
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];
  return (
    <div>
      <p className="text-[26px] md:text-[30px] leading-[var(--lh-heading)] font-semibold tracking-[-0.03em] text-[#121212] [text-wrap:balance]">
        {lead}
      </p>
      {paragraphs.length > 0 ? (
        <div className="mt-3 space-y-3">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[17px] leading-[var(--lh-body)] text-[#2A2927]">{p}</p>
          ))}
        </div>
      ) : null}
      {stats?.length ? (
        <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-5">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-[36px] md:text-[40px] leading-none font-semibold tracking-[-0.03em] tabular-nums" style={{ color: accent }}>
                {s.value}
              </dd>
              <dd className="mt-2 text-[14px] leading-[var(--lh-small)] text-[#55534F] max-w-[16em]">{s.label}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      {tags?.items?.length ? (
        <div className="mt-6">
          {tags.label ? (
            <p className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-3">{tags.label}</p>
          ) : null}
          <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
            {tags.items.map((t) => (
              <li key={t} className="inline-flex items-center gap-2 text-[15px] leading-[var(--lh-small)] font-medium text-[#121212]">
                <span aria-hidden="true" className="w-1.5 h-1.5" style={{ background: accent }} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
