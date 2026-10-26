// Glanceable replacement for paragraph-heavy sections ("text wastelands").
// Each beat reads top to bottom in one glance:
//   label (who / where)  ->  headline (the move)  ->  detail (why it worked)  ->  result
// Skimmers get the headlines and results; readers get the detail.
export default function Beats({ intro, items, accent = '#121212' }) {
  return (
    <div>
      {intro ? (
        <p className="text-[19px] leading-[var(--lh-body)] text-[#2A2927] mb-8">
          {intro}
        </p>
      ) : null}
      <ol className="grid gap-[var(--space-block)]">
        {items.map((item, i) => (
          <li key={item.label} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3">
            <span aria-hidden="true" className="font-[family-name:var(--f-pixel)] text-[20px] leading-[var(--lh-heading)] text-[#66645F]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-[family-name:var(--f-pixel)] text-[20px] leading-[var(--lh-heading)] lowercase mb-1" style={{ color: accent }}>
                {item.label}
              </p>
              <p className="text-[22px] leading-[var(--lh-heading)] font-semibold tracking-[-0.025em] text-[#121212] [text-wrap:balance]">
                {item.head}
              </p>
              <p className="mt-2 text-[16px] leading-[var(--lh-body)] text-[#2A2927]">
                {item.body}
              </p>
              {item.result ? (
                <p className="mt-2.5 inline-flex items-start gap-2 text-[15px] leading-[var(--lh-small)] font-semibold text-[#121212]">
                  <span aria-hidden="true" style={{ color: accent }}>↳</span>
                  {item.result}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
