import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';
import SkimDipDive from '@/app/components/SkimDipDive';
import Beats from '@/app/components/Beats';
import Lessons from '@/app/components/Lessons';
import { VerizonThumb } from '@/app/components/home/WorkThumbs';

export const metadata = {
  title: 'Skim, Dip, Dive // Vincent Nania',
  description: 'How a centralized navigation framework transformed the My Verizon app into an intuitive pathfinder system, driving a 60% engagement lift.',
};

export default function VerizonCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/ae-bopis', label: 'American Eagle BOPIS' },
      }}
      HeroThumb={VerizonThumb}
      kicker="my verizon app transformation"
      projectLabel="verizon"
      kickerClassName="text-[#C8102E]"
      projectLabelClassName="text-[#66645F]"
      title="Skim, Dip, Dive: Re-architecting the L1 mobile experience"
      summary="How a centralized navigation framework transformed a dense, fragmented application into an intuitive pathfinder system. This initiative drove a 60% engagement lift while protecting long-term design governance."
      metrics={[
        { value: '60%', label: 'Monthly Engagement', detail: 'Sustained across active app users.' },
        { value: '4.7★', label: 'iOS App Store Rating', detail: 'Accompanied by 4.8 on Google Play.' },
        { value: '10M+', label: 'Ecosystem Impressions', detail: 'Spurring 1M+ unique ecosystem sub-visits.' },
      ]}
    >

      {/* Act I: The Problem */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            The Problem
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The legacy My Verizon application had become a victim of its own ambition. Handling everything from billing to connected-home management, it had turned into an aggregation point for competing internal priorities. Each team surfaced their work at the top layer, with no one governing the whole.
          </p>
          <p>
            The result was predictable. Feature bloat buried intuitive paths, suppressed revenue discovery, and spiked support contacts. The app needed a hierarchy, not more features.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 0: THE BEFORE STATE */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 rounded-[1.5rem] overflow-hidden bg-white">
              <ZoomableImage
                src="/images/verizon/MVA-before-discover.png"
                alt="Legacy My Verizon Discover tab crowded with promotions"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 rounded-[1.5rem] overflow-hidden bg-white">
              <ZoomableImage
                src="/images/verizon/MVA-before-account.png"
                alt="Legacy My Verizon Account tab as a flat list"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.0: The before state. Promotions crowding the Discover tab, and a flat, undifferentiated list standing in for the account.
          </span>
        </div>
      </section>

      {/* Act I.5: Mapping the Opportunity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            Mapping the Opportunity
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Before I could fix the L1, I had to define what was actually broken. I pulled together workshop outputs, historical research, stakeholder interviews, and customer feedback, and the noise resolved into six recurring themes.
          </p>
          <p>
            These six became the lens for every decision that followed, and the rubric the Skim, Dip, Dive framework had to answer to.
          </p>
        </div>
      </section>

      {/* Six Problem Themes grid */}
      <section className="mb-20">
        <div className="bg-stone-400/30 border border-stone-400/50 rounded-2xl shadow-inner p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {[
              { label: 'Navigation Complexity & Structure', tint: 'bg-amber-100/70 border-amber-300/40' },
              { label: 'Lack of Centralized Information', tint: 'bg-emerald-100/70 border-emerald-300/40' },
              { label: 'Account & Plan Management', tint: 'bg-sky-100/70 border-sky-300/40' },
              { label: 'Usability Issues & Dead Ends', tint: 'bg-rose-100/70 border-rose-300/40' },
              { label: 'Visual & Interaction Overload', tint: 'bg-violet-100/70 border-violet-300/40' },
              { label: 'Service & Feature Clarity', tint: 'bg-teal-100/70 border-teal-300/40' },
            ].map((theme) => (
              <div
                key={theme.label}
                className={`${theme.tint} border rounded-xl p-5 min-h-[92px] flex items-center justify-center text-center shadow-sm`}
              >
                <span className="text-sm font-semibold text-stone-700 leading-snug">{theme.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL INSERT 1: RECONFIGURED L1 ENTRY (SKIM LAYER) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 items-start justify-items-center">
            {[
              { src: "/images/verizon/vz-me-tab.png", alt: "My Verizon Me tab" },
              { src: "/images/verizon/vz-mobile-tab.png", alt: "My Verizon Mobile tab" },
              { src: "/images/verizon/vz-home-tab.png", alt: "My Verizon Home tab" },
            ].map((s, i) => (
              <div key={i} className="w-full max-w-[220px] aspect-[9/19] shadow-2xl shadow-stone-950/20 rounded-[1.5rem] overflow-hidden bg-white">
                <ZoomableImage
                  src={s.src}
                  alt={s.alt}
                  className="h-full w-full object-cover object-top block rounded-[1.5rem]"
                />
              </div>
            ))}
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.1: The Skim layer applied consistently across the Me, Mobile, and Home tabs. One scannable structure, evolved a year later with an AI answer bar and a refreshed navigation shell.
          </span>
        </div>
      </section>

      {/* Act II: The Information Processing Strategy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            Governance Model
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The answer was the <strong className="font-semibold text-stone-900">"Skim, Dip, Dive"</strong> architecture, a framework my director introduced and I helped shape in the earliest brainstorms. It reframes the home dashboard not as a final destination, but as an information processing strategy. Customers work through a dense product one intentional layer at a time.
          </p>
          <p>
            To prove it was more than a nice diagram, I mapped our <strong className="font-semibold text-stone-900">entire legacy app and website</strong> against the framework, screen by screen. That exercise pressure-tested it against every edge case we had, and it became the evidence my director and I used to sell the model to product and business stakeholders.
          </p>
          <p>
            That meant treating it as a <strong className="font-semibold text-stone-900">governance tool</strong>, not just a design pattern. I set clear rules for what belonged at the Skim layer versus the Dive level, giving teams an objective lens for new feature requests and making it harder to bloat the L1 for any one priority.
          </p>
        </div>
      </section>

      {/* Framework diagram: animated Skim, Dip, Dive (density, not device) */}
      <section className="mb-12">
        <SkimDipDive className="bg-stone-400/30 border border-stone-400/50 rounded-2xl shadow-inner" />
      </section>

      {/* Act II.5: Holding the Line */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            Holding the Line
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Governance gets tested fast. The Offers team pushed to place a promotion, <strong className="font-semibold text-stone-900">Add a Line</strong>, into the L1 shortcuts, and their product manager fought hard for it. The shortcuts existed to get customers where they needed to go. The moment they became ad space, the whole layer would stop earning trust. Instead of arguing taste, I pointed at the framework we had all signed up for. Shortcuts are navigation. Offers live where customers shop. The rules held, the promotion found a better home, and the precedent protected L1 from the next dozen requests just like it.
          </p>
          <p>
            Another test came on the Mobile tab. Stakeholders wanted every subtitle under usage to be tappable. It sounded like added utility, but every one of those taps led to the same destination, because the L2 that would justify them didn't exist yet. Rather than explain that on a slide, I built a working prototype and let stakeholders feel the dead end for themselves. Tapping four different labels and landing in the same place made the argument in about thirty seconds. We shipped the honest version.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 2: THE CONTEXTUAL DRILLDOWN (DIP & DIVE LAYERS) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-items-center">
            
            {/* Left Phone: Dip View */}
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 rounded-[1.5rem] overflow-hidden bg-white">
              <ZoomableImage 
                src="/images/verizon/IMG_4843.PNG" 
                alt="Verizon Device Detail Flow (Dip Layer)"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>
            
            {/* Right Phone: Dive View */}
            <div className="w-full max-w-[250px] aspect-[9/19] shadow-2xl shadow-stone-950/20 rounded-[1.5rem] overflow-hidden bg-white">
              <ZoomableImage 
                src="/images/verizon/IMG_4845.PNG" 
                alt="Verizon Usage Metrics Utilization Chart (Dive Layer)"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>

          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.2: The Dip and Dive layers turn standard links into high-context, drillable components.
          </span>
        </div>
      </section>

      {/* Act III: Cross-Functional Alignment */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            Alignment
          </h3>
        </div>
        <div className="md:col-span-8">
          <Beats
            accent="#C8102E"
            intro="Three fronts at once. The design was only part of the job."
            items={[
              {
                label: 'product management',
                head: 'Translated UX into the growth metrics PMs already owned.',
                body: 'The debate moved from "whose feature gets surfaced" to shared structural outcomes, which are a lot harder to argue against.',
                result: 'Shared outcomes over feature fights',
              },
              {
                label: 'design system',
                head: 'Built it twice and let the side-by-side end the debate.',
                body: 'One version with out-of-box components, limitations on full display. One lightly customized. No exceptions requested in the abstract.',
                result: 'Custom patterns joined the global library',
              },
              {
                label: 'engineering',
                head: 'Solved the layout with engineering, not after them.',
                body: 'We found frontend approaches that supported the new layout model without taking on performance debt. Some of the best final decisions came out of those conversations.',
                result: 'New layout, no performance debt',
              },
            ]}
          />
        </div>
      </section>

      {/* Act IV: Where It Fell Short */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase text-[#66645F] mb-4 sticky top-28">
            Where It Fell Short
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            I'd rather name this than pretend the framework fixed everything. The L1 came out tight, but we never had the capacity to rework L2 with the same rigor. Some of that layer still carries redundancies and design waste that teams are working through today.
          </p>
          <p>
            Skim, Dip, Dive set the standard. The layers below it still have to earn it, and that's the honest cost of shipping a framework with finite capacity.
          </p>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <Lessons
        accent="#C8102E"
        groups={[
          {
            title: 'What I learned',
            items: [
              { head: 'Reducing noise at the top is a growth lever.', body: "Every time we cleared L1 clutter, completion rates went up downstream. It wasn't subtle." },
              { head: 'A shared framework is a negotiation tool.', body: 'With Skim, Dip, Dive on the table, prioritization conversations finally had an anchor.' },
              { head: 'Simplicity needs a guardian.', body: "The hardest part wasn't designing the system. It was making sure it didn't quietly erode once we shipped it." },
            ],
          },
          {
            title: "What I'd do next",
            items: [
              { head: 'Let behavior decide what earns the L1.', body: 'Go deeper on which features earn their spot based on what customers do, not just what teams ask for.' },
              { head: 'Personalize without breaking the hierarchy.', body: 'Contextual states based on account activity feel like the right next layer.' },
              { head: 'Take Skim, Dip, Dive beyond the app.', body: "I'd love to see it become a shared mental model across the broader Verizon ecosystem." },
            ],
          },
        ]}
      />

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