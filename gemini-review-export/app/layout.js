import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Vincent Nania — Portfolio',
  description: 'Design Leadership & Product Strategy Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#e7e3df] text-[#1c1917] flex flex-col justify-between py-12 px-8 md:py-20 md:px-24 font-sans antialiased selection:bg-amber-200 relative overflow-x-hidden isolate">
        
        {/* Ambient Sun Bleed (The Glow) */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[60vw] rounded-full bg-gradient-to-br from-amber-100/40 via-orange-100/20 to-transparent blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[40%] left-[-20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-sky-100/30 via-transparent to-transparent blur-[100px] pointer-events-none z-0" />

        {/* Global Navigation Header (Asymmetric Layout alignment) */}
        {/* MODIFIED: Changed pb-6 to pb-3 to lift the baseline up closer to the grid content */}
        <header className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start z-10 relative pt-12 pb-3 border-b border-stone-400/40 gap-6 md:gap-0">
          
          {/* Guardian Accent Line — Flowing Fluid Loop */}
          <span 
            className="absolute top-0 left-0 w-32 h-[3px] bg-gradient-to-r from-amber-700 via-emerald-700 to-sky-700 bg-[length:200%_auto]" 
            style={{ animation: 'gradientFlow 16s linear infinite' }}
          />
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes gradientFlow {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}} />
          
          {/* Asymmetric Branding Cluster */}
          <div className="flex flex-col transform md:-rotate-1 origin-left">
            <Link href="/" className="text-base font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors uppercase">
              Vincent Nania
            </Link>
            <span className="text-xs text-amber-900 font-mono mt-1 font-bold uppercase tracking-widest">
              Design Leadership // Product Strategy
            </span>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-8 text-xs text-stone-800 font-mono tracking-tight font-semibold md:pt-1">
            <Link href="/" className="hover:text-stone-950 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-800 hover:after:w-full after:transition-all">
              work
            </Link>
            <Link href="/profile" className="hover:text-stone-950 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-800 hover:after:w-full after:transition-all">
              profile
            </Link>
            <button className="text-stone-800 hover:text-stone-950 transition-colors text-left font-semibold">
              contact
            </button>
          </nav>
        </header>

        {/* Dynamic Page Content Injector */}
        {/* MODIFIED: Changed my-12 to mt-4 mb-12 to collapse the huge top gap right below the rule border */}
        <main className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center z-10 relative mt-4 mb-12 isolate">
          {children}
        </main>

        {/* Global Bottom Footer */}
        <footer className="w-full max-w-5xl mx-auto flex justify-between items-center border-t border-stone-400/40 pt-6 z-10 text-xs text-stone-700 font-mono">
          <span className="font-semibold">© 2026</span>
          <div className="flex items-center gap-6">
            <span className="font-semibold hidden md:inline">bklyn // ny</span>
            <button className="px-5 py-2 bg-stone-100/60 hover:bg-white text-stone-900 border border-stone-400/50 rounded-xl transition-all font-bold shadow-sm backdrop-blur-sm">
              Get in touch
            </button>
          </div>
        </footer>

      </body>
    </html>
  );
}