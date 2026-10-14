'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './chrome.module.css';

const NAV = [
  { href: '/#work', label: 'Work' },
  { href: '/#b-side', label: 'B-side' },
  { href: '/profile', label: 'Profile' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className={`${styles.tokens} ${styles.topbar}`}>
      <Link href="/" className={styles.wordmark}>Vincent Nania</Link>
      <nav className={styles.nav} aria-label="Primary">
        {NAV.map(({ href, label }) => (
          // hash links are plain anchors so they scroll in place on the homepage
          href.includes('#') ? (
            <a key={href} href={href}>{label}</a>
          ) : (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}>{label}</Link>
          )
        ))}
      </nav>
    </header>
  );
}
