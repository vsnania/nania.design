// Glanceable replacement for paragraph-heavy sections ("text wastelands").
// Each beat reads top to bottom in one glance:
//   label (who / where)  ->  headline (the move)  ->  detail (why it worked)  ->  result
// Skimmers get the headlines and results; readers get the detail.
export default function Beats({ intro, items, accent = '#121212' }) {
  return (
    <div>
      {intro ? (
        <p className="text-[20px] md:text-[22px] leading-[1.35] font-semibold tracking-[-0.02em] text-[#121212] mb-8 [text-wrap:balance]">
          {intro}
        </p>
      ) : null}
      <ol className="border-b border-[#CFCCC5]">
        {items.map((item, i) => (
          <li key={item.label} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-7 border-t border-[#CFCCC5]">
            <span aria-hidden="true" className="font-[family-name:var(--f-pixel)] text-[20px] leading-[1.2] text-[#66645F]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="font-[family-name:var(--f-pixel)] text-[20px] leading-[1.2] lowercase mb-2" style={{ color: accent }}>
                {item.label}
              </p>
              <p className="text-[22px] md:text-[24px] leading-[1.2] font-semibold tracking-[-0.025em] text-[#121212] [text-wrap:balance]">
                {item.head}
              </p>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#2A2927]/85 max-w-[38em]">
                {item.body}
              </p>
              {item.result ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EDEAE2] border border-[#121212]/10 px-3 py-1.5 text-[14px] leading-none font-semibold text-[#121212]">
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
