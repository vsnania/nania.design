// Closing "what I learned / what I'd do next" block, built on the same idea
// as Beats: a bold one-line headline per point, detail underneath, ruled
// rows instead of bullets. Two columns on desktop, stacked on phones.
export default function Lessons({ groups, accent = '#121212' }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 mt-20 mb-12">
      {groups.map((group) => (
        <div key={group.title}>
          <h4 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase mb-5" style={{ color: accent }}>
            {group.title}
          </h4>
          <ul className="border-b border-[#CFCCC5]">
            {group.items.map((item) => (
              <li key={item.head} className="py-5 border-t border-[#CFCCC5]">
                <p className="text-[19px] leading-[1.25] font-semibold tracking-[-0.02em] text-[#121212] [text-wrap:balance]">
                  {item.head}
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-[#2A2927]/85">
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
