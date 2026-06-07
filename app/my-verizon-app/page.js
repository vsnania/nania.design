'use client';

import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';

export default function VerizonCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/ae-bopis', label: 'Next' },
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
          <h3 className="text-xs font-mono uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            // The Problem
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The legacy My Verizon application suffered from its own breadth of options. As an incredibly dense product handling everything from billing to connected home device management, it had gradually become an aggregation point for competing internal business priorities. 
          </p>
          <p>
            With no centralized hierarchy governing the Level 1 (L1) experience, new features were constantly surfaced at the top layer. This rapid feature bloat obscured intuitive user paths, suppressed core digital revenue discovery, and significantly amplified customer contact center drivers.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 1: RECONFIGURED L1 ENTRY (SKIM LAYER) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-[250px] aspect-[9/19] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
            <ZoomableImage 
              src="/images/verizon/MVA Screen 2.png" 
              alt="My Verizon App L1 Dashboard"
              className="h-full w-full object-cover object-top block"
            />
          </div>
          <span className="text-xs font-mono text-stone-500 italic text-center max-w-md mt-4">
            Figure 1.0: Reconfigured L1 dashboard balancing top-level utility states, account actions, and billing transparency inside an intentional scanning layout.
          </span>
        </div>
      </section>

      {/* Act II: The Information Processing Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs font-mono uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            // Governance Model
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            To address this, we introduced the <strong className="font-semibold text-stone-900">"Skim, Dip, Dive"</strong> architecture. Instead of treating the home dashboard as a final destination, we repositioned it as an information processing strategy. This allowed customers to digest the sheer breadth of the product one intentional step at a time.
          </p>
          <p>
            Beyond a clean interaction loop, the framework served a vital operational purpose: <strong className="font-semibold text-stone-900">product governance</strong>. By codifying strict boundaries for what constituted a "Skim" element versus a "Dive" flow, we provided cross-functional teams with a clear, objective framework to evaluate and slot new features without degrading the baseline L1 clarity.
          </p>
        </div>
      </section>

      {/* Framework Blueprint Visualization diagram */}
      <section className="mb-12">
        <div className="w-full py-12 bg-stone-400/30 border border-stone-400/50 rounded-2xl flex items-center justify-center gap-6 md:gap-12 font-mono text-xs text-stone-700 shadow-inner px-4">
          <div className="px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center min-w-[90px]">
            <span className="block font-bold">Skim</span>
            <span className="text-[10px] text-stone-500 font-semibold mt-0.5 block">L1 Harmony</span>
          </div>
          <span className="font-bold text-stone-400">→</span>
          <div className="px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center min-w-[90px]">
            <span className="block font-bold">Dip</span>
            <span className="text-[10px] text-stone-500 font-semibold mt-0.5 block">Contextual Drill</span>
          </div>
          <span className="font-bold text-stone-400">→</span>
          <div className="px-5 py-3 bg-stone-100 border border-stone-400/40 rounded-xl shadow-sm text-center min-w-[90px]">
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
            <div className="w-full max-w-[250px] aspect-[9/19] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/verizon/IMG_4843.PNG" 
                alt="Verizon Device Detail Flow (Dip Layer)"
                className="h-full w-full object-cover object-top block"
              />
            </div>
            
            {/* Right Phone: Dive View */}
            <div className="w-full max-w-[250px] aspect-[9/19] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/verizon/IMG_4845.PNG" 
                alt="Verizon Usage Metrics Utilization Chart (Dive Layer)"
                className="h-full w-full object-cover object-top block"
              />
            </div>

          </div>
          <span className="text-xs font-mono text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.1: Vertical navigation patterns translating standard links into high-context components. Inquire actions (Dip) map details instantly to granular, sub-tier tracking states (Dive).
          </span>
        </div>
      </section>

      {/* Act III: Cross-Functional Alignment */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="text-xs font-mono uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            // Alignment
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-sm md:text-base font-normal leading-relaxed mb-6 text-stone-600/90">
            True design leadership means delivering complex systems inside rigid organizational realities. Executing Project Pathfinder required careful, strategic diplomacy across three pillars:
          </p>
          <div className="grid grid-cols-1 gap-6 text-sm">
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Product Management</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">Navigated historical, feature-dense product roadmaps by translating UX improvements directly into shared growth metrics, shifting the collaborative focus from feature volume to structural clarity.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Design System Stewardship</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">Collaborated with global system maintainers to advocate for contextual patterns, validating specific system departures where localized nuance was required to enhance scannability.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1">Engineering Partnership</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">Partnered deeply with engineering teams to explore structural frontend solutions that stepped outside conventional layout boundaries, keeping performance lightweight and fluid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-12">
        <div>
          <h4 className="text-xs font-mono uppercase text-amber-700 font-bold mb-4 tracking-wider">// Key Takeaways</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>• Hierarchy is a growth lever: Reducing top-level noise consistently maximizes downstream completion.</li>
            <li>• Shared models reduce friction: Frameworks unify cross-functional teams and dramatically eliminate competing priorities.</li>
            <li>• Simplicity requires protection: Without active governance structures, interface complexity inevitably sneaks back over time.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-mono uppercase text-emerald-700 font-bold mb-4 tracking-wider">// Strategic Horizon</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>1. Monitor ongoing behavioral data streams to iteratively refine features appearing on L1 based on user intent models.</li>
            <li>2. Evolve the modular layout to better support personalized, contextual user situations without fracturing the core visual clarity.</li>
            <li>3. Propagate the skim-dip-dive framework across complementary platforms to lock down absolute ecosystem consistency.</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & DEPLOYMENT */}
      <section className="mt-8 p-8 md:p-10 border border-stone-400/30 bg-stone-100/50 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider font-mono">See the experience in action</h4>
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