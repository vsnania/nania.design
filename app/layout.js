import Link from 'next/link';
import './globals.css';
import {Manrope} from 'next/font/google';
import WorkNavLink from '@/app/components/WorkNavLink';


// 1. Just define the font, no CSS variables needed
const bodyFont = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: 'Vincent Nania',
  description: 'Design Leadership & Product Strategy Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 2. Inject the font directly onto the body using ${bodyFont.className} */}
      <body className={`antialiased min-h-screen bg-[#F2EBE4] text-[#1c1917] selection:bg-amber-200 ${bodyFont.className}`}>
        {/* Ambient Sun Bleed — fixed so they don't expand scroll width */}
        <div className="fixed top-[-20%] right-[-10%] w-[70vw] h-[60vw] rounded-full bg-gradient-to-br from-amber-100/40 via-orange-100/20 to-transparent blur-[120px] pointer-events-none z-0" />
        <div className="fixed top-[40%] left-[-20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-sky-100/30 via-transparent to-transparent blur-[100px] pointer-events-none z-0" />

        <div className="relative flex flex-col justify-between min-h-screen py-12 px-4 md:py-20 md:px-24 isolate">

        {/* Global Navigation Header */}
        <header className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start z-10 relative pt-12 pb-3 gap-6 md:gap-0">
          <span 
            className="absolute top-0 left-0 w-32 h-[3px] bg-gradient-to-r from-amber-700 via-emerald-700 to-sky-700 bg-[length:200%_auto]" 
            style={{ animation: 'gradientFlow 4s linear infinite' }}
          />
          <div className="flex flex-col transform md:-rotate-1 origin-left">
            <Link href="/" className="text-base font-extrabold tracking-tight text-stone-900 hover:text-stone-700 transition-colors">
            Vincent Nania
          </Link>
           <span className="text-xs text-amber-900 mt-1 font-bold tracking-widest">
            Design Leader & Product Strategist
          </span>
          </div>
          
          <nav className="flex items-center gap-8 text-xs text-stone-800 tracking-tight font-semibold md:pt-1">
            <WorkNavLink className="hover:text-stone-950 transition-colors" />
            <Link href="/profile" className="hover:text-stone-950 transition-colors">profile</Link>
            <Link href="/contact" className="hover:text-stone-950 transition-colors">contact</Link>
          </nav>
        </header>

        <main className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center z-10 relative mt-0 mb-12 isolate">
          {children}
        </main>

        <footer className="w-full max-w-5xl mx-auto flex justify-between items-center pt-6 z-10 text-xs text-stone-700 ">
          <span className="font-semibold">© 2026</span>
          <div className="flex items-center gap-6">
            <span className="font-semibold hidden md:inline">bklyn // ny</span>
            <Link href="/contact" className="px-5 py-2 bg-stone-100/60 hover:bg-white text-stone-900 border border-stone-400/50 rounded-xl transition-all font-bold shadow-sm backdrop-blur-sm inline-block">
              Get in touch
            </Link>
          </div>
        </footer>
        </div>
      </body>
    </html>
  );
}