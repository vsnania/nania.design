import Link from 'next/link';
import styles from './chrome.module.css';

// A calm close: just the email and links. Nothing that reads like a search.
// compact: tighter spacing on the Contact page, which already says it up top.
export default function SiteFooter({ compact = false }) {
  return (
    <footer className={`${styles.tokens} ${styles.contact} ${compact ? styles.compact : ''}`} id="contact">
      <div className={styles.contactRow}>
        <a href="mailto:vincent.nania@gmail.com" className={styles.email}>vincent.nania@gmail.com</a>
        <div className={styles.contactLinks}>
          <a href="/Vincent_Nania_Resume.pdf" target="_blank" rel="noreferrer">Resume<span className="arrow-sm" aria-hidden="true">↗</span></a>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className={styles.colophon}>
        <span>© 2026</span>
        <span>bklyn // ny</span>
      </div>
    </footer>
  );
}
