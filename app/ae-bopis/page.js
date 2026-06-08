'use client';

import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';

export default function BOPISCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/my-verizon-app', label: 'Previous' },
        next: { href: '/conversational-ux', label: 'Next' },
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
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
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
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Designing for omnichannel means wrangling multiple realities at once. We had to ensure the digital interface perfectly mirrored the physical constraints of the stores. To make sense of this, we utilized dual-track story maps.
          </p>
          <p>
            The <strong className="font-semibold text-stone-900">Digital Browse</strong> track mapped key scenarios to craft user stories for the screen experience. Simultaneously, the <strong className="font-semibold text-stone-900">Store Pickup</strong> track identified physical, in-store scenarios to orchestrate the actual fulfillment process for both customers and retail associates.
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
          <p className="text-sm md:text-base font-normal leading-relaxed mb-6 text-stone-600/90">
            With the wireframes acting as our blueprint, we conducted iterative prototype testing to learn and refine the solutions. However, a digital prototype can only simulate so much of a physical logistics problem.
          </p>
          <div className="grid grid-cols-1 gap-6 text-sm">
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">The Pittsburgh Pilot</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">After validating the initial design, American Eagle and Aerie launched an early rollout pilot program across four stores in the Pittsburgh area.</p>
            </div>
            <div className="p-5 bg-stone-100/90 border border-stone-400/40 rounded-xl shadow-sm">
              <span className="font-bold block mb-1 text-stone-900">Continuous Optimization</span>
              <p className="font-normal text-stone-600/90 leading-relaxed">This localized pilot allowed us to gather live operational feedback and monitor in-store traffic flows. We used this data to push more design improvements, ultimately transforming the initial concept into a highly streamlined, customer-centric solution.</p>
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
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            With the underlying architecture validated by the pilot, we focused on the final coat of paint. The production UI translated the raw utility of our wireframes into a seamless, high-fidelity checkout flow. 
          </p>
          <p>
            The resulting screens prioritized absolute clarity across the digital hand-off, ensuring customers knew exactly when, where, and how to retrieve their orders without having to contact customer support or second-guess the fulfillment timeline.
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
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Shipping the initial BOPIS experience was a massive milestone, but it was only the foundation. A successfully architected service design is inherently built to evolve.
          </p>
          <p>
            The robust omnichannel framework we established enabled the organization to rapidly scale and introduce adjacent features. Post-launch, we established a continuous research methodology that directly informed subsequent rollouts, including <strong className="font-semibold text-stone-900">In-Store Mode</strong> and a seamless integration for <strong className="font-semibold text-stone-900">Curbside Pickup</strong>.
          </p>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-12">
        <div>
          <h4 className="text-xs uppercase text-amber-700 font-bold mb-4 tracking-wider">Key Takeaways</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>• Orchestration over interface: A successful omni-channel experience requires designing the physical store operations just as rigorously as the digital screens.</li>
            <li>• Making sense of the grey: Bridging digital intent with physical fulfillment requires answering complex customer anxieties upfront before they result in abandoned orders.</li>
            <li>• Pilot to scale: Validating assumptions in four physical stores allowed us to troubleshoot edge cases before rolling out to over 1,000 locations.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase text-emerald-700 font-bold mb-4 tracking-wider">Strategic Horizon</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>1. Continue integrating behavioral data from physical pickups to iteratively refine the digital hand-off.</li>
            <li>2. Expand the digital browse mapping to continuously improve the streamlined, customer-centric in-store pickup solution.</li>
            <li>3. Leverage the successful 84% pickup rate to introduce complementary cross-selling features within the pickup confirmation loop.</li>
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