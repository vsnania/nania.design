'use client';

import CaseStudyPage from '@/app/components/CaseStudyPage';
import ZoomableImage from '@/app/components/ZoomableImage';

export default function ConversationalUX() {
  return (
    <CaseStudyPage
      bottomNav={{
        previous: { href: '/ae-bopis', label: 'Previous' },
        next: { href: '/', label: 'Back to work' },
      }}
      kicker="Conversational UX"
      projectLabel="2025"
      kickerClassName="text-sky-800"
      projectLabelClassName="text-stone-500"
      title="Conversational UX on a zero-dollar budget"
      summary="How a scrappy, interactive FAQ proved the value of conversational design and secured funding for a fully scaled automated support ecosystem."
      metrics={[
        {
          value: '18%',
          label: 'Chat Volume',
          detail: 'Reduction in chat contacts'
        },
        {
          value: '8%',
          label: 'Total Volume',
          detail: 'Reduction in overall contacts'
        },
        {
          value: '$5.00',
          label: 'Cost Savings',
          detail: 'Saved per deflected chat'
        }
      ]}
    >
      {/* Act I: The Constraint */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="section-label sticky top-28" style={{ letterSpacing: 'normal' }}>The Constraint</h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            Users were drowning in a dense, static FAQ section, leading to a massive influx of easily avoidable support tickets. A conversational chatbot was the obvious goal, but we had zero budget and no engineering resources allocated for a massive platform overhaul.
          </p>
          <p>
            Instead of waiting for funding, I designed a "Trojan Horse": an interactive FAQ. E-commerce customer journeys are often highly predictable, so we did not need complex machine learning. We just needed a relentless focus on information architecture. By manually coding and mapping existing static content into a guided decision tree, we simulated a dynamic conversational experience.
          </p>
        </div>
      </section>

      {/* Wireframe Image Slot */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-[250px] aspect-[9/19] rounded-[1.5rem] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
            <ZoomableImage 
              src="/images/conversational-ux/Chatbot-prototype.png" 
              alt="Interactive FAQ Decision Tree Blueprint"
              className="h-full w-full object-cover object-top block rounded-[1.5rem]"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mt-4">
            Figure 1.0: A lightweight, decision-tree FAQ pattern that gave the team proof of value before committing to a full chatbot build.
          </span>
        </div>
      </section>

      {/* Act II: The Stakeholder Bridge */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="section-label sticky top-28" style={{ letterSpacing: 'normal' }}>The Stakeholder Bridge</h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            To align on complex behaviors like "Close Chat" triggers, I moved away from abstract discussions. I utilized this "choose your adventure" wireframe model to socialize options directly with Customer Support stakeholders.
          </p>
          <p>
            This allowed the team to visualize the decision logic and feel the flow in real-time, moving the conversation from subjective debate to objective decision-making. It was the visual catalyst we needed to gain final consensus.
          </p>
        </div>
      </section>

      {/* Stakeholder Bridge Image Slot */}
      <section className="mb-20">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-4">
          <div className="w-full rounded-xl shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
            <ZoomableImage 
              src="/images/conversational-ux/Chatbot-flow-socialization.png" 
              alt="Close Chat Choose Your Adventure Flow"
              className="w-full h-auto block mix-blend-multiply rounded-xl"
            />
          </div>
          <span className="text-xs text-stone-500 italic text-center max-w-lg mt-4">
            Figure 1.2: A "choose your adventure" wireframe model used to socialize and validate "Close Chat" logic with internal stakeholders.
          </span>
        </div>
      </section>

      {/* The Proof Quote */}
      <blockquote className="max-w-2xl mx-auto py-8 md:py-12 border-y border-stone-400/20 text-center">
        <p className="text-xl md:text-2xl font-light italic text-stone-700 leading-snug mb-4">
          “Our online FAQ has been fantastic for our site... Each chat contact costs us $5.00, so a reduction that significant is huge. And it’s seen as a shiny, cheap feature!”
        </p>
        <footer className="text-xs uppercase tracking-widest text-stone-500">
          — Director of Customer Engagement
        </footer>
      </blockquote>

      {/* Act III: The Scale */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-4">
          <h3 className="section-label sticky top-28" style={{ letterSpacing: 'normal' }}>The Scale</h3>
        </div>
        <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
          <p>
            The success of the scrappy Interactive FAQ gave us the leverage we needed. Leadership saw the value of conversational UX, and we were granted the budget to design and build a custom, fully integrated chatbot in-house.
          </p>
          <p>
            While the network of responses and options was sizing up considerably, the golden rule of the UX remained unchanged: never leave the user stranded. If the automated logic flow wasn’t enough to resolve the issue, I designed the system to ensure the path to a human agent was always seamless, highly visible, and instantly accessible.
          </p>
        </div>
      </section>

      {/* Act IV: Final UI Showcase */}
      <section className="mb-12">
        <div className="bg-stone-300/30 border border-stone-400/20 rounded-2xl p-6 md:p-12 flex flex-col items-center justify-center gap-8">
          
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            
            <div className="w-full max-w-[200px] aspect-[9/19] rounded-[1.5rem] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/conversational-ux/Chatbot-hifi-1.png" 
                alt="Final Chatbot UI View 1"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>

            <div className="w-full max-w-[200px] aspect-[9/19] rounded-[1.5rem] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/conversational-ux/Chatbot-hifi-2.png" 
                alt="Final Chatbot UI View 2"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>

            <div className="w-full max-w-[200px] aspect-[9/19] rounded-[1.5rem] shadow-2xl shadow-stone-950/20 border border-stone-400/40 bg-white">
              <ZoomableImage 
                src="/images/conversational-ux/Chatbot-hifi-3.png" 
                alt="Final Chatbot UI View 3"
                className="h-full w-full object-cover object-top block rounded-[1.5rem]"
              />
            </div>
            
          </div>

          <span className="text-xs text-stone-500 italic text-center max-w-lg">
            Figure 1.1: The eventual support assistant frame, positioned as a clear escalation path rather than a dead end.
          </span>
        </div>
      </section>

      {/* TAKEAWAYS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-12">
        <div>
          <h4 className="text-xs uppercase text-amber-700 font-bold mb-4 tracking-wider">Key Takeaways</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>• Scrappiness as strategy: Launching with minimal assets can effectively prove business value and secure long-term investment.</li>
            <li>• Visualizing logic: Using "choose your adventure" wireframes bridges the gap between technical logic and stakeholder understanding.</li>
            <li>• Human escalation is mandatory: In conversational UX, the automated logic should never become a trap; the path to a human must remain seamless.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase text-emerald-700 font-bold mb-4 tracking-wider">Strategic Horizon</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li>1. Continue leveraging conversational data to identify high-friction topics and refine automated flow logic.</li>
            <li>2. Expand the assistant's capabilities to handle more complex, personalized user scenarios without increasing customer support wait times.</li>
            <li>3. Advance the chatbot from a static logic-tree model to a more flexible, agentic architecture for proactive customer support.</li>
          </ul>
        </div>
      </section>

      {/* IMPACT & DEPLOYMENT */}
      <section className="mt-8 p-8 md:p-10 border border-stone-400/30 bg-stone-100/50 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider">See the experience in action</h4>
          <p className="text-stone-600 text-sm max-w-sm">
            Explore the automated support assistant flow designed to modernize AE’s support experience and build the foundation for the agentic future.
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