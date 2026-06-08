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
      kicker="Omni-channel E-com"
      projectLabel="American Eagle & Aerie"
      kickerClassName="text-amber-800"
      projectLabelClassName="text-emerald-800"
      title="0 to 1 service design for a complex, omnichannel retail experience"
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
            American Eagle and Aerie’s legacy "Reserve, Try, Buy" program allowed customers to reserve items without upfront payment. However, the lack of financial commitment and unclear pickup logistics caused the system to buckle under its own weight. 
          </p>
          <p>
            The program faced a staggering <strong className="font-semibold text-stone-900">69% abandonment rate</strong> and resulted in over <strong className="font-semibold text-stone-900">223,000 uncollected units</strong> sitting in stockrooms. This widespread customer confusion and operational friction underscored the immediate need for a robust, reliable Buy Online Pickup In-Store (BOPIS) system.
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
            Figure 1.0: Synthesizing the "grey area." Mapping fundamental customer anxieties such as "Can someone else pick up my order?" and "Where should I go in the store?" to drive the initial UX requirements.
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
            Designing for omnichannel means holding two realities at once. I needed the digital interface to perfectly mirror the physical constraints of the stores: the stockroom logistics, the associate workflows, the moments where digital intent meets physical fulfillment. To make sense of it all, I introduced dual-track story mapping.
          </p>
          <p>
            The <strong className="font-semibold text-stone-900">Digital Browse</strong> track mapped key scenarios to craft user stories for the screen experience. The <strong className="font-semibold text-stone-900">Store Pickup</strong> track ran in parallel, identifying physical, in-store scenarios to orchestrate the actual fulfillment process for both customers and retail associates.
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
            Figure 1.1: Dual-track story mapping. The Digital Browse track (left) defines the screen-level user stories, while the Store Pickup track (right) orchestrates the physical fulfillment realities for retail associates.
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
            Figure 1.2: Comprehensive wireframes developed in response to UX challenges, focusing on content placement and layout options to set up iterative prototype testing.
          </span>
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
            With the wireframes as our blueprint, I led iterative prototype testing to stress-test and refine the solutions. But a digital prototype can only simulate so much of a physical logistics problem.
          </p>
          <div className="grid grid-cols-1 gap-6 text-sm">
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">The Pittsburgh Pilot</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">After validating the initial design, American Eagle and Aerie launched an early rollout pilot program across four stores in the Pittsburgh area.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">Continuous Optimization</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">This localized pilot let me gather live operational feedback and monitor in-store traffic flows. I used that data to push more design improvements, ultimately transforming the initial concept into a highly streamlined, customer-centric solution.</p>
            </div>
          </div>
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
            With the architecture validated by the pilot, I turned attention to the final experience. The goal was translating the raw utility of our wireframes into a checkout flow that felt effortless rather than transactional.
          </p>
          <p>
            I prioritized clarity at every digital hand-off point, making sure customers knew exactly when, where, and how to retrieve their orders without ever needing to contact support or second-guess the timeline.
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
            Figure 1.3: Mobile UI flows for Product Detail, Checkout, and the Find Another Store utility. Click to zoom.
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
            Post-launch, I established a continuous research methodology to keep the product honest. That feedback loop directly informed subsequent rollouts, including <strong className="font-semibold text-stone-900">In-Store Mode</strong> and a native integration for <strong className="font-semibold text-stone-900">Curbside Pickup</strong>.
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