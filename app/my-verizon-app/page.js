import CaseStudyPage from '@/app/components/CaseStudyPage';
import SkimDipDive from '@/app/components/SkimDipDive';
import Beats from '@/app/components/Beats';
import Lessons from '@/app/components/Lessons';
import Statement from '@/app/components/Statement';
import CaseSection from '@/app/components/CaseSection';
import Figure, { Phone } from '@/app/components/Figure';
import LiveLink from '@/app/components/LiveLink';
import { VerizonThumb } from '@/app/components/home/WorkThumbs';

const VZ = '#C8102E';

export const metadata = {
  title: 'Skim, Dip, Dive // Vincent Nania',
  description: 'Redesigning the top of the My Verizon app with the Skim, Dip, Dive framework, and turning it into the rules teams design by. 60% of app owners open it every month.',
};

export default function VerizonCaseStudy() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/', label: 'Back to work' },
        next: { href: '/ae-bopis', label: 'American Eagle BOPIS' },
      }}
      accent={VZ}
      heroName="work-vz"
      HeroThumb={VerizonThumb}
      kicker="my verizon app"
      projectLabel="verizon"
      kickerClassName="text-[#C8102E]"
      projectLabelClassName="text-[#66645F]"
      title="Skim, Dip, Dive: a clearer front door for the My Verizon app"
      summary="I redesigned the top of the My Verizon app as a clear starting point for billing, plans, and devices, then turned the framework behind it into the rules teams design by. 60% of app owners open it every month."
      metrics={[
        { value: '60%', label: 'Monthly engagement', detail: 'Share of app owners who open the app each month.' },
        { value: '4.7★', label: 'iOS App Store rating', detail: 'And 4.8 on Google Play.' },
        { value: '10M+', label: 'Ecosystem impressions', detail: 'Views of the entry points into the wider Verizon ecosystem.' },
      ]}
    >

      {/* The problem */}
      <CaseSection label="The Problem" className="mb-[var(--space-group)]">
        <Statement
          accent={VZ}
          lead="The app needed a hierarchy, not more features."
          body="My Verizon handled everything from billing to connected home, and it had become an aggregation point for competing internal priorities. Each team surfaced its work at the top layer, with no one governing the whole."
          tags={{ label: 'the result', items: ['Buried paths', 'Suppressed revenue discovery', 'Spiked support contacts'] }}
        />
      </CaseSection>

      <Figure caption="Fig. 1: Before. Promos crowding the Discover tab, and the account as one long, flat list.">
        <div className="grid grid-cols-2 gap-4 md:gap-8 items-start justify-items-center">
          <Phone src="/images/verizon/MVA-before-discover.png" alt="Legacy My Verizon Discover tab crowded with promotions" />
          <Phone src="/images/verizon/vz-before-account-masked.png" alt="Legacy My Verizon Account tab as a flat list" />
        </div>
      </Figure>

      {/* What shipped: real product early, like the AE case study */}
      <CaseSection label="What Shipped" className="mb-[var(--space-group)]">
        <Statement
          accent={VZ}
          lead="One clear starting point on every tab."
          body="The Skim layer gives the Me, Mobile, and Home tabs the same scannable structure, with a clear path into everything else."
        />
      </CaseSection>

      <Figure bleed caption="Fig. 2: Me, Mobile, and Home as they look today. I contributed to the AI answer bar up top.">
        <div className="grid grid-cols-3 gap-3 md:gap-8 items-start justify-items-center">
          <Phone max={280} src="/images/verizon/vz-me-tab.png" alt="My Verizon Me tab" />
          <Phone max={280} src="/images/verizon/vz-mobile-tab-masked.png" alt="My Verizon Mobile tab" />
          <Phone max={280} src="/images/verizon/vz-home-tab-masked.png" alt="My Verizon Home tab" />
        </div>
      </Figure>

      {/* Mapping the opportunity */}
      <CaseSection label="Mapping the Opportunity" className="mb-[var(--space-group)]">
        <Statement
          accent={VZ}
          lead="Six themes became the rubric for design decisions."
          body="Before I could fix the L1, I had to define what was actually broken. Workshop outputs, historical research, stakeholder interviews, and customer feedback resolved into six recurring themes, and Skim, Dip, Dive had to answer to all of them."
        />
      </CaseSection>

      <ol className="mb-[var(--space-section)] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-[840px]">
        {[
          'Navigation complexity & structure',
          'Lack of centralized information',
          'Account & plan management',
          'Usability issues & dead ends',
          'Visual & interaction overload',
          'Service & feature clarity',
        ].map((theme, i) => (
          <li key={theme} className="flex items-baseline gap-4">
            <span className="font-[family-name:var(--f-pixel)] text-[20px] leading-none" style={{ color: VZ }}>{String(i + 1).padStart(2, '0')}</span>
            <span className="text-[17px] leading-[var(--lh-small)] font-semibold tracking-[-0.01em] text-[#121212]">{theme}</span>
          </li>
        ))}
      </ol>

      {/* Governance model */}
      <CaseSection label="Governance Model" className="mb-[var(--space-group)]">
        <Beats
          accent={VZ}
          intro="Skim, Dip, Dive lets customers move through a dense product one layer at a time. A framework only matters if teams use it, so I turned it into rules every team could apply."
          items={[
            {
              label: 'the proof',
              head: 'Mapped the entire legacy app and website against it.',
              body: 'Screen by screen, pressure-testing the framework against every edge case we had.',
              result: 'The evidence that sold it to product and business',
            },
            {
              label: 'the rules',
              head: 'Turned a design pattern into a governance tool.',
              body: 'Clear rules for what belongs at the Skim layer versus the Dive level gave teams a straight answer when a new feature request came in.',
              result: 'Harder to bloat the L1 for any one priority',
            },
          ]}
        />
      </CaseSection>

      {/* Framework diagram: animated Skim, Dip, Dive (density, not device) */}
      <section className="mb-[var(--space-section)]">
        <SkimDipDive className="bg-[#E3E1DC] rounded-[2px]" />
      </section>

      {/* Rules in practice */}
      <CaseSection label="Rules in Practice" className="mb-[var(--space-group)]">
        <Beats
          accent={VZ}
          intro="Two requests tested the rules early. Both times, the framework made the call."
          items={[
            {
              label: 'the offers team',
              head: 'Kept promotions out of the shortcuts.',
              body: 'The Offers team wanted Add a Line in the L1 shortcuts. Shortcuts exist to get customers where they need to go, and the moment they become ad space the layer stops earning trust. The framework answered it: shortcuts are navigation, offers live where customers shop.',
              result: 'The precedent protected L1 from the next dozen requests',
            },
            {
              label: 'the mobile tab',
              head: 'Let a prototype make the argument.',
              body: "Stakeholders wanted every usage subtitle to be tappable, but each tap led to the same destination because the L2 that would justify them didn't exist yet. A working prototype let them feel the dead end in about thirty seconds.",
              result: 'We shipped the honest version',
            },
          ]}
        />
      </CaseSection>

      <Figure caption="Fig. 3: One tap in. Device details on Mobile, internet details on Home.">
        <div className="grid grid-cols-2 gap-4 md:gap-8 items-start justify-items-center">
          <Phone src="/images/verizon/vz-dip-masked.png" alt="My Verizon device details on the Mobile tab, one tap in" />
          <Phone src="/images/verizon/vz-dive-masked.png" alt="My Verizon internet details on the Home tab, one tap in" />
        </div>
      </Figure>

      {/* Alignment */}
      <CaseSection label="Alignment">
        <Beats
          accent={VZ}
          intro="I worked with product, the design system team, and engineering in parallel."
          items={[
            {
              label: 'product management',
              head: 'Translated UX into the growth metrics PMs already owned.',
              body: 'The conversation moved from "whose feature gets surfaced" to shared outcomes everyone could get behind.',
              result: 'One set of outcomes across product teams',
            },
            {
              label: 'design system',
              head: 'Built it twice to show the difference.',
              body: 'One version with out-of-box components and one lightly customized. Seeing them side by side made the case.',
              result: 'Custom patterns joined the global library',
            },
            {
              label: 'engineering',
              head: 'Worked through the layout with engineering early.',
              body: 'We found frontend approaches that supported the new layout model without taking on performance debt. Some of the best final decisions came out of those conversations.',
              result: 'New layout, no performance debt',
            },
          ]}
        />
      </CaseSection>

      {/* Where it fell short */}
      <CaseSection label="Where It Fell Short">
        <Statement
          accent={VZ}
          lead="Skim, Dip, Dive set the standard. The layers below still have to earn it."
          body="The L1 came out tight, but we never had the capacity to rework L2 with the same rigor. Some of that layer still carries redundancies that teams are working through today."
        />
      </CaseSection>

      {/* TAKEAWAYS SECTION */}
      <Lessons
        accent={VZ}
        groups={[
          {
            title: 'What I learned',
            items: [
              { head: 'Reducing noise at the top is a growth lever.', body: 'Every time we cleared L1 clutter, completion rates went up downstream.' },
              { head: 'A shared framework is a negotiation tool.', body: 'With Skim, Dip, Dive on the table, prioritization conversations finally had an anchor.' },
              { head: 'Keeping the L1 simple is ongoing work.', body: 'Keeping the system from eroding after launch took as much work as designing it.' },
            ],
          },
          {
            title: "What I'd do next",
            items: [
              { head: 'Let behavior decide what earns the L1.', body: 'Go deeper on which features earn their spot based on what customers do, not just what teams ask for.' },
              { head: 'Personalize without breaking the hierarchy.', body: "Showing different things based on what's going on in someone's account feels like the right next layer." },
            ],
          },
        ]}
      />

      <LiveLink
        text="The My Verizon app is live on iOS and Android."
        href="https://apps.apple.com/us/app/my-verizon/id416023011"
        cta="View on the App Store"
      />

    </CaseStudyPage>
  );
}
