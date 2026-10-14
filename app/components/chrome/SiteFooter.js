import Link from 'next/link';
import styles from './chrome.module.css';

// compact: drop the big line (the Contact page already says it up top)
export default function SiteFooter({ compact = false }) {
  return (
    <footer className={`${styles.tokens} ${styles.contact} ${compact ? styles.compact : ''}`} id="contact">
      {!compact && <p className={styles.contactLine}>Always open to hearing about interesting work.</p>}
      <div className={styles.contactRow}>
        <a href="mailto:vincent.nania@gmail.com" className={styles.email}>vincent.nania@gmail.com</a>
        <div className={styles.contactLinks}>
          <a href="/Vincent_Nania_Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
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
