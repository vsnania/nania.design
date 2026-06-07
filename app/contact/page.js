export const metadata = {
  title: 'Get in touch // Vincent Nania',
  description: 'Get in touch for design leadership and product strategy opportunities.',
};

export default function ContactPage() {
  return (
    <article className="py-16 md:py-24 max-w-3xl mx-auto tracking-tight w-full flex flex-col items-start">
      
      {/* Left-Aligned Header */}
      <header className="mb-16 md:mb-20 text-left w-full">
        <div className="flex items-center justify-start gap-4 text-xs font-mono font-bold uppercase tracking-[0.2em] mb-6">
          <span className="text-amber-800">Contact</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
          Get in touch
        </h1>
        <p className="text-lg font-normal leading-relaxed text-stone-600/90 max-w-xl">
          Currently open for new opportunities in design leadership and product strategy. 
          I'm always happy to connect, collaborate, or just talk shop.
        </p>
      </header>

      {/* The Centered LinkTree Grid */}
      <div className="flex flex-col gap-5 w-full">
        
        {/* Email Button */}
        <a 
          href="mailto:vincent.nania@gmail.com" 
          className="group relative flex items-center justify-start w-full p-6 md:p-8 bg-stone-100/40 hover:bg-white border border-stone-300/50 hover:border-amber-700/30 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/5"
        >
          <span className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            Email
          </span>
          <span className="absolute right-8 text-3xl text-stone-300 group-hover:text-amber-800 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        {/* LinkedIn Button */}
        <a 
          href="https://www.linkedin.com/in/vsnania/" 
          target="_blank" 
          rel="noreferrer" 
          className="group relative flex items-center justify-start w-full p-6 md:p-8 bg-stone-100/40 hover:bg-white border border-stone-300/50 hover:border-sky-700/30 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/5"
        >
          <span className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            LinkedIn
          </span>
          <span className="absolute right-8 text-3xl text-stone-300 group-hover:text-sky-800 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

        {/* PDF Resume Button */}
        <a 
          href="/Vincent_Nania_Resume.pdf" 
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-start w-full p-6 md:p-8 bg-stone-100/40 hover:bg-white border border-stone-300/50 hover:border-emerald-700/30 rounded-[2rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/5"
        >
          <span className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            View Resume
          </span>
          <span className="absolute right-8 text-3xl text-stone-300 group-hover:text-emerald-800 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

      </div>
    </article>
  );
}