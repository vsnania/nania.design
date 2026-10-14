'use client';

import { usePathname } from 'next/navigation';
import SiteHeader from '@/app/components/chrome/SiteHeader';
import SiteFooter from '@/app/components/chrome/SiteFooter';

// The homepage draws its own full-bleed layout (with the same header and
// footer); every other page gets them here, on the same paper and gutter.
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  if (pathname === '/') return children;

  return (
    <div className="min-h-screen overflow-x-clip px-[clamp(16px,4.5vw,64px)]">
      <SiteHeader />
      <main className="w-full max-w-[1200px] mx-auto">
        {children}
      </main>
      <SiteFooter compact={pathname === '/contact'} />
    </div>
  );
}
