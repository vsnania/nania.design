export const metadata = {
  title: 'Get in touch // Vincent Nania',
  description: 'Get in touch with Vincent Nania about design leadership and product strategy.',
};

export default function ContactPage() {
  return (
    <article className="pt-14 md:pt-20 max-w-3xl mx-auto w-full flex flex-col items-start">

      <header className="mb-16 md:mb-20 text-left w-full">
        <div className="flex items-center gap-4 font-[family-name:var(--f-pixel)] text-[20px] leading-none lowercase mb-6">
          <span className="text-[#66645F]">contact</span>
        </div>
        <h1 className="text-[36px] md:text-[52px] font-semibold leading-[1.02] tracking-[-0.035em] mb-6 [text-wrap:balance]">
          Get in touch
        </h1>
        <p className="text-[18px] md:text-[21px] leading-[1.5] text-[#2A2927] max-w-xl">
          I'm always open to hearing about interesting work in design leadership and product strategy. And I'm happy to connect, collaborate, or just talk shop.
        </p>
      </header>

      <div className="flex flex-col gap-4 w-full">

        <a
          href="mailto:vincent.nania@gmail.com"
          className="group flex items-center justify-between w-full px-6 py-5 bg-[#EDEAE2] border border-[#121212]/10 rounded-[14px] hover:border-[#121212] hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-[20px] font-semibold tracking-[-0.01em] text-[#121212]">Email</span>
          <svg className="w-4 h-4 text-[#66645F] group-hover:text-[#D9481F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

        <a
          href="https://www.linkedin.com/in/vsnania/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between w-full px-6 py-5 bg-[#EDEAE2] border border-[#121212]/10 rounded-[14px] hover:border-[#121212] hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-[20px] font-semibold tracking-[-0.01em] text-[#121212]">LinkedIn</span>
          <svg className="w-4 h-4 text-[#66645F] group-hover:text-[#D9481F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

        <a
          href="/Vincent_Nania_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between w-full px-6 py-5 bg-[#EDEAE2] border border-[#121212]/10 rounded-[14px] hover:border-[#121212] hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-[20px] font-semibold tracking-[-0.01em] text-[#121212]">View Resume</span>
          <svg className="w-4 h-4 text-[#66645F] group-hover:text-[#D9481F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>

      </div>

      <div className="mt-20 pt-12 border-t border-stone-400/25 w-full">
        <a href="/" className="text-xs text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2 group">
          View my work <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>

    </article>
  );
}
