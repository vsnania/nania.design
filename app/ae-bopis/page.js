import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';

export const metadata = {
  title: 'BOPIS: 0 to 1 Service Design // Vincent Nania',
  description: 'Leading a cross-functional initiative to design and launch Buy Online Pickup In-Store for American Eagle and Aerie across 1,000+ locations.',
};

export default function BOPISCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/my-verizon-app', label: 'My Verizon App' },
        next: { href: '/conversational-ux', label: 'Conversational UX' },
      }}
      heroScreenshot="/images/ae-bopis/BOPIS PDP 2025.png"
      heroScreenshotAlt="American Eagle BOPIS product detail screen"
      heroGlowClassName="bg-emerald-400/20"
      heroKickerClassName="text-emerald-400"
      kicker="Omni-channel E-com"
      projectLabel="American Eagle & Aerie"
      kickerClassName="text-amber-800"
      projectLabelClassName="text-emerald-800"
      title="0 to 1 service design for omnichannel retail"
      summary="Led a major cross-functional initiative to develop and launch a new in-store pickup channel for American Eagle and Aerie, unlocking customer convenience and streamlining order fulfillment."
      metrics={[
        { value: '$51.4M', label: 'Generated Revenue', detail: 'Picked-up dollars + attached in-store sales.' },
        { value: '84%', label: 'Fulfillment Rate', detail: 'Overall pick-up success rate.' },
        { value: '1000+', label: 'Locations Scaled', detail: 'BOPIS-enabled stores across U.S. + Canada.' },
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
            American Eagle and Aerie’s legacy "Reserve, Try, Buy" program let customers reserve items without paying upfront. But with no financial commitment and unclear pickup logistics, the system buckled under its own weight.
          </p>
          <p>
            It hit a staggering <strong className="font-semibold text-stone-900">69% abandonment rate</strong> and left over <strong className="font-semibold text-stone-900">223,000 uncollected units</strong> sitting in stockrooms. The fix was a real Buy Online Pickup In-Store (BOPIS) system.
          </p>
        </div>
      </section>

      {/* Act I.5: Leading Discovery */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Leading Discovery
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            When a new design director arrived, brought over from product management, I was the first person he pulled in. The mandate was experience discovery. What was Reserve, Try, Buy actually telling us, what needed fixing immediately, and what could the new system not afford to repeat.
          </p>
          <p>
            I partnered with UX research, rode along on store shopalongs, and interviewed customers and store associates directly. And I didn't wait for a tidy findings report. I put my designer to work ideating and prototyping while the insights were still fresh.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 1: SENSE-MAKING & RESEARCH */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full rounded-xl shadow-lg border border-stone-400/40 bg-white">
            <ZoomableImage 
              src="/images/ae-bopis/BOPIS Common Customer Questions.png" 
              alt="BOPIS Customer Anxiety Post-it Mapping"
              className="w-full h-auto block mix-blend-multiply rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mt-4">
            Figure 1.0: Mapping the customer anxieties that drove the early UX requirements.
          </span>
        </div>
      </section>

      {/* Act II: Making Sense of the Grey */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Dual-Track Mapping
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Designing for omnichannel means holding two realities at once. I needed the digital interface to mirror the physical constraints of the stores: stockroom logistics, associate workflows, the moments where digital intent meets physical fulfillment. To make sense of it, I introduced dual-track story mapping.
          </p>
          <p>
            The <strong className="font-semibold text-stone-900">Digital Browse</strong> track mapped the on-screen user stories. The <strong className="font-semibold text-stone-900">Store Pickup</strong> track ran in parallel, orchestrating the physical fulfillment process for both customers and retail associates.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 2: DUAL TRACK MAPPING */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            <div className="w-full rounded-xl shadow-lg border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/ae-bopis/Digital Browse Mapping.png" 
                alt="Digital Browse Mapping"
                className="w-full h-auto block mix-blend-multiply rounded-xl"
              />
            </div>
            
            <div className="w-full rounded-xl shadow-lg border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/ae-bopis/In Store Mapping.png" 
                alt="In Store Mapping"
                className="w-full h-auto block mix-blend-multiply rounded-xl"
              />
            </div>

          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-2xl mx-auto mt-2">
            Figure 1.1: Dual-track story mapping. Digital Browse (left) and Store Pickup (right).
          </span>
        </div>
      </section>

      {/* Act II.3: The Service Blueprint */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            The Service Blueprint
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The story maps fed a full service blueprint spanning five layers: the customer journey, the digital experience, the physical store experience, the associate workflow behind the counter, and the systems underneath it all.
          </p>
          <p>
            Laying the layers side by side surfaced the core diagnosis. <strong className="font-semibold text-stone-900">Reserve, Try, Buy didn't fail because of any single screen. It failed because these layers were never aligned.</strong> Customers could reserve items, but the backend systems and store operations weren't built to deliver a reliable pickup. The blueprint became our shared map for fixing all five layers at once.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT: SERVICE BLUEPRINT */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full rounded-xl shadow-lg border border-stone-400/40 bg-white">
            <ZoomableImage
              src="/images/ae-bopis/BOPIS-Service-Blueprint.png"
              alt="BOPIS service blueprint spanning customer, digital, store, associate, and systems layers"
              className="w-full h-auto block rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mt-4">
            Figure 1.2: The five-layer BOPIS service blueprint. Click to zoom.
          </span>
        </div>
      </section>

      {/* VISUAL INSERT 3: PROTOTYPING */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="w-full rounded-xl shadow-lg border border-stone-400/40 bg-white">
            <ZoomableImage 
              src="/images/ae-bopis/Lofi Mosaic.png" 
              alt="BOPIS Lo-fi Wireframes and Checkout Flows"
              className="w-full h-auto block rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-2">
            Figure 1.3: Early wireframes exploring content placement ahead of prototype testing.
          </span>
        </div>
      </section>

      {/* Act II.5: Friction as Fuel */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Friction as Fuel
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Our first prototypes landed with hesitation, and honestly, fair enough. We had only just begun collaborating with the teams who owned the physical half of this experience. I made a deliberate choice to treat that friction as fuel rather than a fight.
          </p>
          <p>
            When we had to stand firm on a design decision, I showed the why with grace. Prototypes did the heavy lifting, letting people feel the experience instead of debating screenshots. And I kept my director informed at every step, so when a decision needed organizational weight behind it, he could escalate without missing a beat.
          </p>
        </div>
      </section>

      {/* Act III: Prototyping and Piloting */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Pilot & Scale
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-base font-normal leading-relaxed mb-6 text-stone-600/90">
            With the wireframes as our blueprint, I led iterative prototype testing to stress-test and refine the solutions. But a digital prototype can only simulate so much of a physical logistics problem, and holiday season was bearing down on us. The iterative pilot was our pressure valve. Ship something real, learn from it, build on it.
          </p>
          <div className="grid grid-cols-1 gap-6 text-sm">
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">The Pittsburgh Pilot</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">After validating the initial design, American Eagle and Aerie launched an early rollout pilot program across four stores in the Pittsburgh area.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">What the Pilot Taught Us</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">Those four stores surfaced what no prototype could. Associates' pickup notifications weren't cutting through, so we drove a fix with the internal systems team. Customers wanted to know how long orders would be held and what happened if they never came, so we built those answers into the flow. Every fix earned more trust from store ops, and they increasingly let us run.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Act III.5: The Pivot - Speed Over Proximity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Speed Over Proximity
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Early on, the system did the obvious thing. It defaulted customers to the store closest to them. That made sense on paper, but the data told a different story. The nearest store often wasn't the one that could actually fulfill the order fastest.
          </p>
          <p>
            I caught it in a prototype usability study I ran with my researcher. Our product partner was hesitant to change the logic, and reasonably so. Distance felt like the obvious default. But the finding was definitive. Customers would happily drive a little farther when it meant getting their order in hand sooner. Once she saw that, she made the change with full confidence. We reframed the logic from "nearest store" to "fastest available pickup," and surfaced a clear prompt that let customers trade a few extra miles for same-day speed.
          </p>
          <p>
            The shift paid off on both sides of the equation. Same-day pickup volume went up, and routing orders to stores with available inventory brought fulfillment costs down.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT: SPEED OVER PROXIMITY PROMPT */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-xl rounded-xl shadow-lg border border-stone-400/40 bg-white overflow-hidden">
            <ZoomableImage
              src="/images/ae-bopis/BOPIS-Pivot.png"
              alt="Fastest pickup prompt offering a nearby store for same-day fulfillment"
              className="w-full h-auto block rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mt-4">
            Figure 1.4: The pickup card lets customers trade a farther store for same-day speed.
          </span>
        </div>
      </section>

      {/* Act IV: The Final Experience */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            The Final Experience
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            With the architecture validated by the pilot, I turned to the final experience. The goal was a checkout flow that felt effortless rather than transactional.
          </p>
          <p>
            I prioritized clarity at every hand-off, so customers always knew when, where, and how to pick up their order without contacting support or second-guessing the timeline.
          </p>
        </div>
      </section>

      {/* VISUAL INSERT 4: HIGH-FIDELITY SCREENS (STATIC & ZOOMABLE) */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">
            
            {[
              { src: "/images/ae-bopis/BOPIS PDP 2025.png", alt: "BOPIS Product Detail Page" },
              { src: "/images/ae-bopis/BOPIS Checkout 2025.png", alt: "BOPIS Checkout Screen" },
              { src: "/images/ae-bopis/BOPIS Find Another Store 2024.png", alt: "BOPIS Find Another Store Screen" }
            ].map((img, i) => (
              <div 
                key={i}
                className="w-full max-w-[250px] aspect-[9/19] rounded-[1.5rem] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white"
              >
                <ZoomableImage 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover object-top block rounded-[1.5rem]"
                />
              </div>
            ))}

          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mx-auto mt-6">
            Figure 1.5: Final UI for Product Detail, Checkout, and Find Another Store. Click to zoom.
          </span>
        </div>
      </section>

      {/* Act V: Post-Launch Evolution */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Post-Launch Evolution
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Shipping the initial BOPIS experience was a major milestone, but I designed the underlying architecture to grow. A good service design doesn't just solve the immediate problem. It creates the scaffolding for what comes next.
          </p>
          <p>
            Post-launch, I set up a continuous research loop to keep the product honest. That loop directly shaped later rollouts, including <strong className="font-semibold text-stone-900">In-Store Mode</strong> and a native integration for <strong className="font-semibold text-stone-900">Curbside Pickup</strong>.
          </p>
        </div>
      </section>

      {/* Act VI: Where It Fell Short */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
        <div className="md:col-span-4">
          <h3 className="text-xs uppercase text-stone-500 font-bold mb-4 tracking-wider sticky top-28">
            Where It Fell Short
          </h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The one that got away was item-level fulfillment. I wanted a customer to pick up what was ready today and have the rest of the order shipped home, all in one seamless transaction. The operational complexity meant we had to settle for ship to store on the remaining items.
          </p>
          <p>
            It works, but it isn't the experience I was chasing. It's the first thing I'd fund if I went back.
          </p>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-12">
        <div>
          <h4 className="text-xs uppercase text-amber-700 font-bold mb-4 tracking-wider">Key Takeaways</h4>
          <ul className="space-y-4 text-base text-stone-600">
            <li>• The screen is only half the experience. I came into this project thinking about flows and interfaces. I left it thinking about stockrooms, associate workflows, and the moment a customer walks through the door. Omnichannel means designing all of it.</li>
            <li>• Answer the anxious questions first. The research kept surfacing the same grey-area fears: who can pick up my order, where do I go in the store. Addressing those upfront was what moved the abandonment rate.</li>
            <li>• Four stores taught me more than any prototype. The Pittsburgh pilot surfaced edge cases no wireframe could have predicted. I'd never skip a physical pilot again.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase text-emerald-700 font-bold mb-4 tracking-wider">Strategic Horizon</h4>
          <ul className="space-y-4 text-base text-stone-600">
            <li>• I'd want to close the loop between physical pickup data and the digital hand-off. There's signal in that moment that could meaningfully shape the confirmation and notification flows.</li>
            <li>• The 84% fulfillment rate is strong, but I'd want to understand the 16%. Is it a store operations issue, a communication gap, or something in the digital flow that's setting the wrong expectation?</li>
            <li>• The ready-for-pickup notification is doing a lot of work right now. I think there's a smarter version of it: one that factors in store hours, estimated wait times, and order hold windows so customers always show up at the right moment.</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & DEPLOYMENT */}
      <section className="mt-8 p-8 md:p-10 border border-stone-400/30 bg-stone-100/50 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider ">See the experience in action</h4>
          <p className="text-stone-600 text-sm max-w-sm">
            Explore the American Eagle site to see the checkout and store pickup flows live.
          </p>
        </div>
        <a 
          href="https://www.ae.com/us/en/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-900 border border-stone-400/50 font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
        >
          View live on AE.com 
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </section>

    </CaseStudyPage>
  );
}