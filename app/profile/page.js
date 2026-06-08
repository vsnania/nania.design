import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="py-16 md:py-24 max-w-3xl mx-auto tracking-tight">
      
      {/* Back Link */}
      <div className="mb-12">
        <Link href="/" className="text-xs  text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          <span className="transition-transform group-hover:-translate-x-0.5">←</span> Back to work
        </Link>
      </div>

      {/* Header Block */}
      <header className="mb-16">
        <div className="flex items-center gap-4 text-xs  font-bold uppercase tracking-[0.2em] mb-4">
          <span className="text-emerald-800">Vincent Nania</span>
          <span className="text-stone-400/60">•</span>
          <span className="text-stone-500">Profile</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-light leading-tight mb-6">
          Designing for the human on the other side
        </h1>
        <p className="text-base md:text-lg font-normal leading-relaxed text-stone-600/90">
          I’m a design leader based in Brooklyn. For the past decade I’ve worked with companies like Verizon and American Eagle, mostly trying to make complicated things feel simple. A lot of what helps me do that, I learned away from a desk.
        </p>
      </header>

      <div className="space-y-20 border-t border-stone-400/40 pt-16">
        
        {/* MUSIC SECTION: Real-time feedback */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h4 className="text-xs  uppercase text-amber-800 font-bold mb-4 tracking-wider sticky top-28">
              The Stage & Studio
            </h4>
          </div>
          <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
            <p>
              I'm a songwriter and producer, and I play gigs and open mics around NYC whenever I get the chance. Performing live is a weird, humbling thing. You get completely unfiltered feedback from a room full of people who aren't going to lie to you about it. You figure out fast what's landing and what isn't, and you adjust mid-song.
            </p>
            <p>
              Production is the quieter side of the same coin. Taking a voice memo and building it into a full arrangement means making a thousand small calls about what belongs and what doesn't. I've probably learned more about editing from music than from anything else.
            </p>

            <div className="mt-8 pt-4 space-y-4">
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md border border-stone-400/20">
                <img
                  src="/images/profile/4B6181C0-296C-4F6F-A08B-D8CE1898EE0D_1_105_c.jpeg"
                  alt="Vincent Nania performing live at an open mic"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div className="overflow-hidden rounded-xl shadow-sm">
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameBorder="0"
                  height="175"
                  className="w-full"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/us/album/secondhand-smoke/1868131513?i=1868131514&theme=light"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PHOTOGRAPHY SECTION: Intentional constraints */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <h4 className="text-xs  uppercase text-sky-800 font-bold mb-4 tracking-wider sticky top-28">
              Film Photography
            </h4>
          </div>
          <div className="md:col-span-8 space-y-4 text-base font-normal leading-relaxed text-stone-600/90">
            <p>
              I shoot on 35mm film. Partly because I love how it looks, but mostly because it forces me to slow down. You get 36 frames, maybe fewer, and there's no preview, no delete button. You have to think before you shoot, or you burn the frame.
            </p>
            <p>
              Most of my rolls end up being city stuff. Strangers on the subway, weird light on a building, something I've walked past a hundred times and finally actually noticed. It's a good reminder that paying attention is a skill you have to keep practicing.
            </p>

            {/* ANALOG PHOTO PLACEHOLDERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-4">
              
              {/* Photo Slot 1 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs  text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/000013370002.jpg" alt="Analog photography bowie" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 2 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs  text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/000091880020.jpg" alt="Analog photography tower of london" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 3 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs  text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/IMG_9599.JPG" alt="Analog photography chicago" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

              {/* Photo Slot 4 */}
              <div className="group relative aspect-[4/3] bg-stone-200/50 border border-stone-400/30 rounded-lg overflow-hidden flex flex-col items-center justify-center hover:border-stone-400/60 transition-colors">
                <span className="text-xs  text-stone-400 group-hover:text-stone-500 transition-colors">
                </span>
                  <img src="images/profile/IMG_9759.JPG" alt="Analog photography merry go round" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply" /> 
              </div>

            </div>
            <span className="block text-[10px]  text-stone-400 uppercase tracking-widest mt-3 text-center sm:text-left">
              Selected 35mm Archives
            </span>
          </div>
        </section>

      </div>

      <div className="mt-20 pt-12 border-t border-stone-400/25">
        <a href="/" className="text-xs text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          View my work <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  );
}