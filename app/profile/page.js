import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="py-16 md:py-24 max-w-3xl mx-auto tracking-tight">
      
      {/* Back Link */}
      <div className="mb-12">
        <Link href="/" className="text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> Back to work
        </Link>
      </div>

      {/* Header Block */}
      <header className="mb-16">
        <div className="flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
          <span className="text-emerald-800">Vincent Nania</span>
          <span className="text-stone-400/60">•</span>
          <span className="text-stone-500">Profile</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light leading-tight mb-6">
          Designing for the human on the other side.
        </h1>
        <p className="text-base md:text-lg font-normal leading-relaxed text-stone-600/90">
          I'm a design leader based in Brooklyn. I believe the best digital systems are deeply informed by the physical world. For me, human-centered design isn't just a corporate framework. It’s a philosophy of intentionality and feedback that I practice constantly, both on stage and behind the lens.
        </p>
      </header>

      <div className="space-y-20 border-t border-stone-400/40 pt-16">
        
        {/* MUSIC SECTION: Real-time feedback */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-amber-800 font-bold mb-4 tracking-wider sticky top-28">
              // The Stage & Studio
            </h4>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
            <p>
              I am a songwriter and producer, and I regularly play gigs and open mics around NYC. To me, playing live music is the ultimate, unfiltered exercise in experience design. 
            </p>
            <p>
              When you are on stage, you are entirely beholden to the human element. You have to read the room, sense where the friction is, and iterate on your delivery in real-time so that the connection feels effortless to the audience. 
            </p>
            <p>
              That exact same mindset applies to production. Taking a song from a raw concept to a fully produced track is an exercise in complex architecture. Arranging disparate layers of sound so they serve the emotional core of the piece, without ever overwhelming the listener. 
            </p>
          </div>
        </section>

        {/* PHOTOGRAPHY SECTION: Intentional constraints */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase text-sky-800 font-bold mb-4 tracking-wider sticky top-28">
              // Film Photography
            </h4>
          </div>
          <div className="md:col-span-8 space-y-4 text-sm md:text-base font-normal leading-relaxed text-stone-600/90">
            <p>
              In a digital world dominated by infinite scrolling, rapid prototyping, and immediate "undo" buttons, I shoot analog photography to force myself back into a space of rigid intentionality.
            </p>
            <p>
              Shooting on film requires you to embrace constraints. You have limited exposures. You must commit to your framing, understand the environmental limitations of your light, and focus entirely on the subject in front of you before you act. That deliberate, constraint-driven empathy is exactly how I approach problem solving.
            </p>

            {/* ANALOG PHOTO PLACEHOLDERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-4">
              
              {/* Photo Slot 1 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/000013370002.jpg" alt="Analog photography bowie" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 2 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/000091880020.jpg" alt="Analog photography tower of london" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 3 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/IMG_9599.JPG" alt="Analog photography chicago" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 4 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs font-mono text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/IMG_9759.JPG" alt="Analog photography merry go round" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

            </div>
            <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest mt-3 text-center sm:text-left">
              Selected 35mm Archives
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}