import './globals.css';
import { Familjen_Grotesk, IBM_Plex_Mono, VT323, Newsreader } from 'next/font/google';
import SiteChrome from '@/app/components/SiteChrome';

// One type system for every page (set up for the "signal from noise" homepage)
const display = Familjen_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-display' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--f-mono' });
const pixel = VT323({ subsets: ['latin'], weight: '400', variable: '--f-pixel' });
const serif = Newsreader({ subsets: ['latin'], weight: ['400', '600'], style: ['normal', 'italic'], variable: '--f-serif' });

export const metadata = {
  title: 'Vincent Nania',
  description: 'Design Leadership & Product Strategy Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${pixel.variable} ${serif.variable}`}>
      <body className="antialiased min-h-screen bg-[#EEEDE9] text-[#121212] selection:bg-[#D9481F]/20">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
