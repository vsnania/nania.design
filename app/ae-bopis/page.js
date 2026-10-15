import CaseStudyPage from '@/app/components/CaseStudyPage';
import Beats from '@/app/components/Beats';
import Lessons from '@/app/components/Lessons';
import Statement from '@/app/components/Statement';
import CaseSection from '@/app/components/CaseSection';
import Figure, { Phone, Artifact } from '@/app/components/Figure';
import LiveLink from '@/app/components/LiveLink';
import { BopisThumb } from '@/app/components/home/WorkThumbs';

const AE = '#182C52';

export const metadata = {
  title: 'BOPIS: 0 to 1 Service Design // Vincent Nania',
  description: 'Leading a cross-functional initiative to design and launch Buy Online Pickup In-Store for American Eagle and Aerie across 1,000+ locations.',
};

export default function BOPISCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/my-verizon-app', label: 'My Verizon App' },
      }}
      heroName="work-ae"
      HeroThumb={BopisThumb}
      kicker="buy online, pick up in-store"
      projectLabel="american eagle"
      kickerClassName="text-[#182C52]"
      projectLabelClassName="text-[#66645F]"
      title="0 to 1 service design for omnichannel retail"
      summary="Took in-store pickup from a broken reservation program to a channel live in 1,000+ stores, by designing the digital flow and the in-store operation as one service."
      metrics={[
        { value: '$51.4M', label: 'Generated Revenue', detail: 'Picked-up dollars + attached in-store sales.' },
        { value: '84%', label: 'Fulfillment Rate', detail: 'Overall pick-up success rate.' },
        { value: '1000+', label: 'Locations Scaled', detail: 'BOPIS-enabled stores across U.S. + Canada.' },
      ]}
    >

      {/* The problem */}
      <CaseSection label="The Problem">
        <Statement
          accent={AE}
          lead="Reserve, Try, Buy buckled under its own weight."
          body={[
            "American Eagle and Aerie's legacy program let customers reserve items without paying upfront. With no financial commitment and unclear pickup logistics, most reservations never turned into sales.",
            'The fix was a real Buy Online Pickup In-Store (BOPIS) system.',
          ]}
          stats={[
            { value: '69%', label: 'abandonment rate' },
            { value: '223K+', label: 'uncollected units sitting in stockrooms' },
          ]}
        />
      </CaseSection>

      {/* What shipped: real product early, so skimmers see the outcome first */}
      <CaseSection label="What Shipped" className="mb-8">
        <Statement
          accent={AE}
          lead="Effortless, not transactional."
          body="The pickup experience gives customers clarity at every hand-off: when, where, and how to pick up their order, without contacting support or second-guessing the timeline. Here's how we got there."
        />
      </CaseSection>

      <Figure caption="Figure 1.0: Final UI for Product Detail, Checkout, and Find Another Store. Click to zoom.">
        <div className="grid grid-cols-3 gap-3 md:gap-8 items-start justify-items-center">
          <Phone src="/images/ae-bopis/BOPIS PDP 2025.png" alt="BOPIS product detail page" />
          <Phone src="/images/ae-bopis/BOPIS Checkout 2025.png" alt="BOPIS checkout screen" />
          <Phone src="/images/ae-bopis/BOPIS Find Another Store 2024.png" alt="BOPIS find another store screen" />
        </div>
      </Figure>

      {/* Leading discovery */}
      <CaseSection label="Leading Discovery" className="mb-8">
        <Beats
          accent={AE}
          intro="A new design director, brought over from product management, pulled me in first. The mandate was experience discovery."
          items={[
            {
              label: 'the questions',
              head: 'What was Reserve, Try, Buy actually telling us?',
              body: 'What needed fixing immediately, and what could the new system not afford to repeat?',
            },
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

      <Figure caption="Figure 1.1: Mapping the customer anxieties that drove the early UX requirements.">
        <Artifact multiply src="/images/ae-bopis/BOPIS Common Customer Questions.png" alt="BOPIS customer anxiety sticky-note mapping" />
      </Figure>

      {/* Dual-track mapping */}
      <CaseSection label="Dual-Track Mapping" className="mb-8">
        <Statement
          accent={AE}
          lead="Omnichannel means holding two realities at once."
          body="The digital interface had to mirror the physical constraints of the stores: stockroom logistics, associate workflows, and the moments where digital intent meets physical fulfillment. So I introduced dual-track story mapping."
          tags={{ items: ['Digital Browse: on-screen user stories', 'Store Pickup: physical fulfillment for customers and associates'] }}
        />
      </CaseSection>

      <Figure caption="Figure 1.2: Dual-track story mapping. Digital Browse (left) and Store Pickup (right).">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Artifact multiply src="/images/ae-bopis/Digital Browse Mapping.png" alt="Digital Browse story map" />
          <Artifact multiply src="/images/ae-bopis/In Store Mapping.png" alt="Store Pickup story map" />
        </div>
      </Figure>

      {/* Service blueprint */}
      <CaseSection label="The Service Blueprint" className="mb-8">
        <Statement
          accent={AE}
          lead="It didn't fail because of any single screen. It failed because the layers were never aligned."
          body="The story maps fed a full service blueprint. Customers could reserve items, but the backend systems and store operations weren't built to deliver a reliable pickup. The blueprint became our shared map for fixing all five layers at once."
          tags={{ label: 'five layers', items: ['Customer journey', 'Digital experience', 'Physical store', 'Associate workflow', 'Systems'] }}
        />
      </CaseSection>

      <Figure caption="Figure 1.3: The five-layer BOPIS service blueprint. Click to zoom.">
        <Artifact src="/images/ae-bopis/BOPIS-Service-Blueprint.png" alt="BOPIS service blueprint spanning customer, digital, store, associate, and systems layers" />
      </Figure>

      <Figure caption="Figure 1.4: Early wireframes exploring content placement ahead of prototype testing.">
        <Artifact src="/images/ae-bopis/Lofi Mosaic.png" alt="BOPIS lo-fi wireframes and checkout flows" />
      </Figure>

      {/* Prototype testing */}
      <CaseSection label="Prototype Testing">
        <Statement
          accent={AE}
          lead="Every round of testing fed the next iteration."
          body={[
            'I put working prototypes in front of customers throughout the design process, so decisions came from what they actually did.',
            'Working prototypes also brought the teams who owned the in-store experience into the process early. They could feel the full flow instead of reviewing static screens, which made alignment faster.',
          ]}
          tags={{ items: ['Test, learn, iterate', 'Real flows over static screens', 'Store teams in early'] }}
        />
      </CaseSection>

      {/* Speed over proximity */}
      <CaseSection label="Speed Over Proximity" className="mb-8">
        <Statement
          accent={AE}
          lead="Fastest pickup beat nearest store."
          body={[
            "The system defaulted customers to the closest store, but the closest store often wasn't the one that could fulfill the order fastest. I caught it in a prototype usability study I ran with my researcher: customers would happily drive a little farther to get their order in hand sooner.",
            'The finding gave our product partner the evidence to change the default with confidence. We reframed the logic from "nearest store" to "fastest available pickup," with a clear prompt to trade a few extra miles for same-day speed.',
          ]}
          stats={[
            { value: '↑', label: 'same-day pickup volume' },
            { value: '↓', label: 'fulfillment costs, by routing to stores with inventory' },
          ]}
        />
      </CaseSection>

      <Figure caption="Figure 1.5: The pickup card lets customers trade a farther store for same-day speed.">
        <Artifact className="max-w-xl mx-auto" src="/images/ae-bopis/BOPIS-Pivot.png" alt="Fastest pickup prompt offering a nearby store for same-day fulfillment" />
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
          lead="Designed to grow, not just to launch."
          body="Good service design creates the scaffolding for what comes next. Post-launch, I set up a continuous research loop to keep the product honest, and it directly shaped later rollouts."
          tags={{ label: 'what it enabled', items: ['In-Store Mode', 'Curbside Pickup'] }}
        />
      </CaseSection>

      {/* Where it fell short */}
      <CaseSection label="Where It Fell Short">
        <Statement
          accent={AE}
          lead="The one that got away: item-level fulfillment."
          body={[
            'I wanted a customer to pick up what was ready today and have the rest shipped home, all in one seamless transaction. The operational complexity meant we had to settle for ship to store on the remaining items.',
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
              { head: 'Answer the anxious questions first.', body: 'Research kept surfacing the same grey-area fears: who can pick up my order, where do I go in the store. Answering those upfront is what moved the abandonment rate.' },
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
        text="Explore the American Eagle site to see the checkout and store pickup flows live."
        href="https://www.ae.com/us/en/"
        cta="View live on AE.com"
      />

    </CaseStudyPage>
  );
}
