import CaseStudyPage from '@/app/components/CaseStudyPage';
import Beats from '@/app/components/Beats';
import Lessons from '@/app/components/Lessons';
import Statement from '@/app/components/Statement';
import CaseSection from '@/app/components/CaseSection';
import Figure, { Phone, Artifact } from '@/app/components/Figure';
import LiveLink from '@/app/components/LiveLink';
import ServiceBlueprint from '@/app/components/ServiceBlueprint';
import PickupCard from '@/app/components/PickupCard';
import { BopisThumb } from '@/app/components/home/WorkThumbs';

const AE = '#182C52';

export const metadata = {
  title: 'BOPIS: 0 to 1 Service Design // Vincent Nania',
  description: 'Designing buy online, pick up in store for American Eagle and Aerie, from a four-store pilot to 1,000+ stores.',
};

export default function BOPISCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/my-verizon-app', label: 'My Verizon App' },
      }}
      accent={AE}
      heroName="work-ae"
      HeroThumb={BopisThumb}
      kicker="buy online, pick up in-store"
      projectLabel="american eagle"
      kickerClassName="text-[#182C52]"
      projectLabelClassName="text-[#66645F]"
      title="0 to 1 service design for omnichannel retail"
      summary="Took in-store pickup from a broken reservation program to a channel live in 1,000+ stores, by designing the digital flow and the in-store operation as one service."
      metrics={[
        { value: '$51.4M', label: 'Revenue', detail: 'Picked-up dollars plus attached in-store sales.' },
        { value: '84%', label: 'Fulfillment rate', detail: 'Share of pickup orders successfully picked up.' },
        { value: '1,000+', label: 'Stores', detail: 'Pickup-enabled across the U.S. and Canada.' },
      ]}
    >

      {/* The problem */}
      <CaseSection label="The Problem">
        <Statement
          accent={AE}
          lead="Most reservations never became sales."
          body={[
            "American Eagle and Aerie's legacy program, Reserve, Try, Buy, let customers reserve items without paying upfront. With no commitment and unclear pickup logistics, reserved items piled up in stockrooms.",
            'The fix was a real Buy Online Pickup In-Store (BOPIS) system.',
          ]}
          stats={[
            { value: '69%', label: 'abandonment rate' },
            { value: '223K+', label: 'uncollected units sitting in stockrooms' },
          ]}
        />
      </CaseSection>

      {/* What shipped: real product early, so skimmers see the outcome first */}
      <CaseSection label="What Shipped" className="mb-[var(--space-group)]">
        <Statement
          accent={AE}
          lead="Customers always know when, where, and how to pick up."
          body="Pickup options at checkout, honest timing, and an update at every step, so nobody has to contact support or second-guess when their order will be ready."
        />
      </CaseSection>

      <Figure caption="Fig. 1: Product page, checkout, and find another store, as shipped.">
        <div className="grid grid-cols-3 gap-3 md:gap-8 items-start justify-items-center">
          <Phone src="/images/ae-bopis/BOPIS PDP 2025.png" alt="BOPIS product detail page" />
          <Phone src="/images/ae-bopis/BOPIS Checkout 2025.png" alt="BOPIS checkout screen" />
          <Phone src="/images/ae-bopis/BOPIS Find Another Store 2024.png" alt="BOPIS find another store screen" />
        </div>
      </Figure>

      {/* Leading discovery */}
      <CaseSection label="Leading Discovery" className="mb-[var(--space-group)]">
        <Beats
          accent={AE}
          intro="I led experience discovery, starting with one question: what was Reserve, Try, Buy telling us?"
          items={[
            {
              label: 'the research',
              head: 'Went into stores to watch real people shop.',
              body: 'I partnered with UX research, rode along on store shopalongs, and interviewed customers and store associates directly.',
            },
            {
              label: 'the pace',
              head: 'Started building before the study wrapped.',
              body: 'My designer and I ideated and prototyped in parallel with the research, taking small steps so we could deliver value sooner.',
            },
          ]}
        />
      </CaseSection>

      <Figure caption="Fig. 2: The questions customers kept asking. These became the first requirements.">
        <Artifact multiply className="max-w-[520px]" src="/images/ae-bopis/BOPIS Common Customer Questions.png" alt="BOPIS customer anxiety sticky-note mapping" />
      </Figure>

      {/* Dual-track mapping */}
      <CaseSection label="Dual-Track Mapping" className="mb-[var(--space-group)]">
        <Statement
          accent={AE}
          lead="The screens had to match what stores could actually do."
          body="Stockroom logistics, associate workflows, and the moment a digital order meets a physical store all shaped the design. So I introduced dual-track story mapping."
          tags={{ items: ['Digital Browse: on-screen user stories', 'Store Pickup: physical fulfillment for customers and associates'] }}
        />
      </CaseSection>

      <Figure caption="Fig. 3: Digital browse on the left, store pickup on the right.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Artifact multiply src="/images/ae-bopis/Digital Browse Mapping.png" alt="Digital Browse story map" />
          <Artifact multiply src="/images/ae-bopis/In Store Mapping.png" alt="Store Pickup story map" />
        </div>
      </Figure>

      {/* Service blueprint */}
      <CaseSection label="The Service Blueprint" className="mb-[var(--space-group)]">
        <Statement
          accent={AE}
          lead="Reserve, Try, Buy broke where the layers met."
          body="The story maps fed a five-layer service blueprint. Customers could reserve items, but the backend systems and store operations weren't built to deliver a reliable pickup. The blueprint became our shared map for fixing all five layers at once."
        />
      </CaseSection>

      <Figure bleed caption="Fig. 4: The BOPIS service blueprint, from browsing online to picking up in store.">
        <ServiceBlueprint />
      </Figure>

      <Figure caption="Fig. 5: Early wireframes, before the first round of testing.">
        <Artifact src="/images/ae-bopis/Lofi Mosaic.png" alt="BOPIS lo-fi wireframes and checkout flows" />
      </Figure>

      {/* Prototype testing, and the finding it produced */}
      <CaseSection label="Prototype Testing" className="mb-[var(--space-group)]">
        <Statement
          accent={AE}
          lead="Fastest pickup beat nearest store."
          body={[
            'I put working prototypes in front of customers throughout the design, and brought the store teams in early so they could feel the full flow. One usability study I ran with my researcher changed the core logic.',
            "The system defaulted customers to the closest store, but the closest store often wasn't the one that could fulfill the order fastest. Customers would happily drive a little farther to get their order in hand sooner.",
            'The finding gave our product partner the evidence to change the default with confidence. We reframed the logic from "nearest store" to "fastest available pickup," with a clear prompt to trade a few extra miles for same-day speed.',
          ]}
        />
      </CaseSection>

      <Figure caption="Fig. 6: The pickup card, where it shows up in checkout.">
        <PickupCard />
      </Figure>

      {/* Pilot & scale */}
      <CaseSection label="Pilot & Scale">
        <Beats
          accent={AE}
          intro="A prototype can only simulate so much of a physical logistics problem, and the holidays were coming. So we shipped something real, learned from it, and built on it."
          items={[
            {
              label: 'pilot',
              head: 'Went live in four Pittsburgh stores.',
              body: 'With the design validated through iterative prototype testing, American Eagle and Aerie launched an early rollout pilot in the Pittsburgh area.',
              result: 'Four stores went live',
            },
            {
              label: 'store associates',
              head: 'Fixed the pickup alerts associates were missing.',
              body: "Associates' pickup notifications weren't cutting through, so we drove a fix with the internal systems team.",
              result: 'Fix shipped with internal systems',
            },
            {
              label: 'customers',
              head: 'Answered the questions customers actually asked.',
              body: 'People wanted to know how long orders would be held and what happened if they never came, so we built those answers into the flow.',
              result: 'Hold times and no-shows explained in the flow',
            },
            {
              label: 'store ops',
              head: 'Every fix earned more room to run.',
              body: 'Each problem we solved built trust with store operations, and they increasingly let us move faster.',
              result: 'The path from 4 stores to 1,000+',
            },
          ]}
        />
      </CaseSection>

      {/* Post-launch */}
      <CaseSection label="Post-Launch Evolution">
        <Statement
          accent={AE}
          lead="Research kept running after launch, and it shaped what came next."
          body="After launch, I set up a continuous research loop to keep learning from real pickups."
          tags={{ label: 'what it enabled', items: ['In-Store Mode', 'Curbside Pickup'] }}
        />
      </CaseSection>

      {/* Where it fell short */}
      <CaseSection label="Where It Fell Short">
        <Statement
          accent={AE}
          lead="The one that got away: item-level fulfillment."
          body={[
            'I wanted a customer to pick up what was ready today and have the rest shipped home, all in one checkout. The operational complexity meant we had to settle for ship to store on the remaining items.',
            "It works, but it isn't the experience I was chasing. It's the first thing I'd fund if I went back.",
          ]}
        />
      </CaseSection>

      {/* TAKEAWAYS SECTION */}
      <Lessons
        accent={AE}
        groups={[
          {
            title: 'What I learned',
            items: [
              { head: 'The screen is only half the experience.', body: 'I came in thinking about flows and interfaces. I left thinking about stockrooms, associate workflows, and the moment a customer walks through the door. Omnichannel means designing all of it.' },
              { head: 'Answer the anxious questions first.', body: 'Research kept surfacing the same grey-area fears: who can pick up my order, where do I go in the store. Answering those upfront is what took pickup from 69% abandonment to an 84% fulfillment rate.' },
              { head: "A pilot catches what a prototype can't.", body: "The Pittsburgh pilot surfaced edge cases no wireframe could have predicted. I'd never skip a physical pilot again." },
            ],
          },
          {
            title: "What I'd do next",
            items: [
              { head: 'Close the loop between pickup and the digital hand-off.', body: "There's signal in the physical pickup moment that could shape the confirmation and notification flows." },
              { head: 'Understand the other 16%.', body: 'An 84% fulfillment rate is strong. Is the rest a store operations issue, a communication gap, or a digital flow setting the wrong expectation?' },
              { head: 'Make the ready-for-pickup alert smarter.', body: 'Factor in store hours, estimated wait times, and hold windows so customers always show up at the right moment.' },
            ],
          },
        ]}
      />

      <LiveLink
        text="The pickup flow is live on ae.com."
        href="https://www.ae.com/us/en/"
        cta="View live on AE.com"
      />

    </CaseStudyPage>
  );
}
