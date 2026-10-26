'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './chrome.module.css';

const NAV = [
  { href: '/', label: 'home' },
  { href: '/profile', label: 'about' },
  { href: '/contact', label: 'contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className={`${styles.tokens} ${styles.topbar}`} style={{ viewTransitionName: 'site-header' }}>
      <Link href="/" className={styles.wordmark}>Vincent Nania</Link>
      <nav className={styles.nav} aria-label="Primary">
        {NAV.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
