import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';

export const metadata = {
  title: 'Skim, Dip, Dive // Vincent Nania',
  description: 'How a centralized navigation framework transformed the My Verizon app into an elegant pathfinder system, driving a 60% engagement lift.',
};

export default function VerizonCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/ae-bopis', label: 'American Eagle BOPIS' },
      }}
      kicker="Project Pathfinder"
      projectLabel="My Verizon App"
      kickerClassName="text-amber-800"
      projectLabelClassName="text-sky-800"
      title="Skim, Dip, Dive: Re-architecting the L1 mobile experience"
      summary="How a centralized navigation framework transformed a dense, fragmented application into an elegant pathfinder system. This initiative drove a 60% engagement lift while protecting long-term design governance."
      metrics={[
        { value: '60%', label: 'Monthly Engagement', detail: 'Sustained across active app users.' },
        { value: '4.7★', label: 'iOS App Store Rating', detail: 'Accompanied by 4.8 on Google Play.' },
        { value: '10M+', label: 'Ecosystem Impressions', detail: 'Spurring 1M+ unique ecosystem sub-visits.' },
      ]}
    >

      {/* Act I: The Problem */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            The Problem
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The legacy My Verizon application had become a victim of its own ambition. As a product handling everything from billing to connected home device management, it had gradually turned into an aggregation point for competing internal priorities. Each team was surfacing their work at the top layer with no one governing the whole.
          </p>
          <p>
            The result was predictable: feature bloat that buried intuitive user paths, suppressed core revenue discovery, and drove a measurable spike in customer support contacts. The app needed a hierarchy, not more features.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 1: RECONFIGURED L1 ENTRY (SKIM LAYER) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white rounded-[1.5rem]">
            <ZoomableImage 
              src="/images/verizon/MVA Screen 2.png" 
              alt="My Verizon App L1 Dashboard"
              className="h-full w-full object-cover object-top block rounded-[1.5rem]"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-md mt-4">
            Figure 1.0: Reconfigured L1 dashboard balancing top-level utility states, account actions, and billing transparency inside an intentional scanning layout.
          </span>
        </div>
      </section>

      {/* Act II: The Information Processing Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Governance Model
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The answer was the <strong className="font-semibold text-stone-900">"Skim, Dip, Dive"</strong> architecture. The framework reframes the home dashboard not as a final destination, but as an information processing strategy. It lets customers work through a dense product one intentional layer at a time. My job was to operationalize it and make sure it actually held.
          </p>
          <p>
            That meant treating it not just as a design pattern, but as a <strong className="font-semibold text-stone-900">governance tool</strong>. I established clear rules for what belonged at the Skim layer versus the Dive level, giving cross-functional teams an objective lens for evaluating new feature requests and making it harder to justify bloating the L1 for any one team's priority.
          </p>
        </div>
      </section>

      {/* Framework Blueprint Visualization diagram */}
      <section className="mb-12">
        <div className="w-full py-12 bg-stone-400/30 border border-stone-400/50 rounded-2xl flex items-center justify-center gap-3 md:gap-12 text-xs text-stone-700 shadow-inner px-3 md:px-4">
          <div className="px-3 md:px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center">
            <span className="block font-bold">Skim</span>
            <span className="text-[10px] text-stone-500 font-semibold mt-0.5 block">L1 Harmony</span>
          </div>
          <span className="font-bold text-stone-400 shrink-0">→</span>
          <div className="px-3 md:px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center">
            <span className="block font-bold">Dip</span>
            <span className="text-[10px] text-stone-500 font-semibold mt-0.5 block">Contextual Drill</span>
          </div>
          <span className="font-bold text-stone-400 shrink-0">→</span>
          <div className="px-3 md:px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center">
            <span className="block font-bold">Dive</span>
            <span className="text-[10px] text-stone-500 font-semibold mt-0.5 block">Task Completion</span>
          </div>
        </div>
      </section>

      {/* VISUAL INSERT 2: THE CONTEXTUAL DRILLDOWN (DIP & DIVE LAYERS) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
            
            {/* Left Phone: Dip View */}
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white rounded-[1.5rem]">
              <ZoomableImage 
                src="/images/verizon/IMG_4843.PNG" 
                alt="Verizon Device Detail Flow (Dip Layer)"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>
            
            {/* Right Phone: Dive View */}
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white rounded-[1.5rem]">
              <ZoomableImage 
                src="/images/verizon/IMG_4845.PNG" 
                alt="Verizon Usage Metrics Utilization Chart (Dive Layer)"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>

          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.1: Vertical navigation patterns translating standard links into high-context components. Inquire actions (Dip) map details instantly to granular, sub-tier tracking states (Dive).
          </span>
        </div>
      </section>

      {/* Act III: Cross-Functional Alignment */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Alignment
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-base font-normal leading-relaxed mb-6 text-stone-600/90">
            Shipping this required me to work across three organizational fronts at once. The design work was only part of the job.
          </p>
          <div className="grid grid-cols-1 gap-6 text-sm">
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Product Management</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">I reframed our UX work in the language of growth metrics that product managers already owned. That translation shifted conversations away from "whose feature gets surfaced" and toward shared structural outcomes, which made it a lot harder to argue against.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Design System Stewardship</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">The framework required patterns that didn't exist in the global design system. I made the case for those departures directly with system maintainers, arguing that localized nuance was necessary where scannability was the primary goal, and got alignment on the exceptions we needed.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Engineering Partnership</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">I worked closely with engineering to find frontend solutions that could support the new layout model without taking on performance debt. Some of the best decisions in the final product came directly out of those technical conversations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-12">
        <div>
          <h4 className="text-xs uppercase text-amber-700 font-bold mb-4 tracking-wider">Key Takeaways</h4>
          <ul className="space-y-4 text-base text-stone-600">
            <li>• Reducing noise at the top is a growth lever. Every time we cleared L1 clutter, completion rates went up downstream. It wasn't subtle.</li>
            <li>• A shared framework is a negotiation tool. Having Skim, Dip, Dive on the table meant feature prioritization conversations had an anchor. That changed everything.</li>
            <li>• Simplicity needs a guardian. The hardest part of this project wasn't designing the system. It was making sure it didn't quietly erode once we shipped it.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase text-emerald-700 font-bold mb-4 tracking-wider">Strategic Horizon</h4>
          <ul className="space-y-4 text-base text-stone-600">
            <li>• I'd want to go deeper on behavioral data: which L1 features are actually earning their spot based on what users do, not just what teams ask for.</li>
            <li>• There's an opportunity to make the layout feel more personal without fracturing the core hierarchy. Contextual states based on account activity feel like the right next layer.</li>
            <li>• Skim, Dip, Dive shouldn't live only in the app. I'd love to see it become a shared mental model across the broader Verizon ecosystem.</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & DEPLOYMENT */}
      <section className="mt-8 p-8 md:p-10 border border-stone-400/30 bg-stone-100/50 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider">See the experience in action</h4>
          <p className="text-stone-600 text-sm max-w-sm">
            Explore the My Verizon app on the iOS App Store to see the core interface transformations live.
          </p>
        </div>
        <a 
          href="https://apps.apple.com/us/app/my-verizon/id416023011" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-900 border border-stone-400/50 font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
        >
          View on App Store 
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

    </CaseStudyPage>
  );
}