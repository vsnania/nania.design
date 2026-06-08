import Image from 'next/image';
import Link from 'next/link';
import ShardCluster from '@/app/components/ShardCluster';
import BackToTop from '@/app/components/BackToTop';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen pt-4 pb-20 lg:pb-28 tracking-tight z-10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start relative z-10">

        {/* LEFT COLUMN: Narrative Hook */}
        <div className="lg:col-span-5 flex flex-col md:flex-wrap gap-8 lg:sticky lg:-top-12 items-start">

          {/* 1. Image */}
          <div className="order-1 w-full aspect-[4/3] bg-stone-400/20 border border-stone-400/40 rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative shadow-sm backdrop-blur-[2px] shrink-0 md:mt-20">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-sky-500/10 opacity-60 z-10" />
            <Image
              src="/homepage/0f70a5d8-7cd2-45a2-8345-4e3d5aff38ce.jpeg"
              alt="Vincent Nania, Design Leader"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* 2. Headline */}
          <div className="order-2 w-full pt-2 md:mb-4">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight leading-snug max-w-md">
              I turn complexity into clarity, and ideas into products that people enjoy using.
            </h1>
          </div>

          {/* 3. Shards */}
          <div className="order-3 w-full">
            <ShardCluster />
          </div>

        </div>

        {/* RIGHT COLUMN: Featured Work */}
        <div className="lg:col-span-7 pt-2 lg:pt-7">
          <h2 id="featured-work" className="section-label mb-8">Featured Work</h2>

          <div className="flex flex-col gap-8">

            {/* 1. Verizon */}
            <Link href="/my-verizon-app" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-amber-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px] uppercase tracking-wider text-stone-700 font-medium">
                    My Verizon App
                  </span>
                  <span className="text-stone-400 text-[10px]">2026</span>
                  <span className="ml-auto text-amber-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-amber-900 transition-colors">
                  Skim, Dip, Dive: Leading the My Verizon app transformation
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  Redesigning core interfaces into a lightweight pathfinder system for high-value user flows.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <Image
                  src="/homepage/verizon-thumbnail.png"
                  alt="My Verizon App case study preview"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

            {/* 2. American Eagle */}
            <Link href="/ae-bopis" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-emerald-600/70 hover:border-l-emerald-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px] uppercase tracking-wider text-stone-700 font-medium">
                    Omni-channel E-com
                  </span>
                  <span className="text-stone-400 text-[10px]">2024</span>
                  <span className="ml-auto text-emerald-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-emerald-900 transition-colors">
                  0 to 1 service design for a complex, omnichannel retail experience
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  Led a major cross-functional initiative to develop and launch a new in-store pickup channel for American Eagle and Aerie.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <Image
                  src="/homepage/ae-thumbnail.png"
                  alt="American Eagle BOPIS case study preview"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

            {/* 3. Conversational UX */}
            <Link href="/conversational-ux" className="group flex flex-col justify-between p-6 bg-stone-100/95 border border-stone-400/25 border-l-4 border-l-sky-600/70 hover:border-l-sky-600 rounded-2xl hover:border-stone-400/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-950/5 transition-all duration-300 cursor-pointer relative z-10 shadow-sm">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-stone-200/60 px-3 py-1 rounded-md text-[10px] uppercase tracking-wider text-stone-700 font-medium">
                    Conversational UX
                  </span>
                  <span className="text-stone-400 text-[10px]">2023</span>
                  <span className="ml-auto text-sky-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-[11px] tracking-wider">VIEW STUDY →</span>
                </div>
                <h3 className="text-xl font-medium leading-snug group-hover:text-sky-900 transition-colors">
                  Conversational UX on a zero-dollar budget
                </h3>
                <p className="text-sm text-stone-600/90 mt-3 font-normal leading-relaxed max-w-xl">
                  How a scrappy, interactive FAQ proved the value of conversational design and secured funding for a fully scaled automated support ecosystem.
                </p>
              </div>
              <div className="w-full mt-6 flex justify-center bg-stone-200/50 rounded-tr-xl rounded-bl-xl border border-stone-400/15 overflow-hidden">
                <Image
                  src="/homepage/conversational-ux-thumbnail.png"
                  alt="Conversational UX case study preview"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Link>

          </div>

          <div className="mt-16 pt-10 border-t border-stone-400/25">
            <BackToTop className="text-xs text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group" />
          </div>
        </div>
      </div>
    </div>
  );
}
