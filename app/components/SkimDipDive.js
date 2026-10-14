import { VT323 } from 'next/font/google';
import styles from './skimDipDive.module.css';

const pixel = VT323({ subsets: ['latin'], weight: '400', variable: '--f-pixel-sdd' });

// A lo-fi diagram of the Skim, Dip, Dive framework. It's about information
// density, not device: three identical frames, sparse → moderate → dense.
// A slow autoplay loop walks focus through them (no hover needed).
export default function SkimDipDive({ className = '' }) {
  return (
    <div className={`${styles.frame} ${pixel.variable} ${className}`}>
    <div className={styles.sdd} role="img" aria-label="Skim, Dip, Dive: the same frame at three levels of information density, from a sparse glanceable summary, to contextual detail, to dense task completion that branches into tasks">
      <div className={styles.sddRow} aria-hidden="true">
        <figure className={`${styles.sddCol} ${styles.sddSkim}`}>
          <div className={styles.sddPanel}>
            <i className={styles.sddBlock} style={{ '--w': '78%' }} />
            <span className={styles.sddPill} />
            <i className={styles.sddBlock} style={{ '--w': '56%' }} />
          </div>
          <figcaption className={styles.sddLabel}><b>skim</b><span>L1 harmony</span></figcaption>
        </figure>

        <svg className={`${styles.sddArrow} ${styles.sddArrow1}`} viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6h21" />
          <path d="M17 1.5 22 6l-5 4.5" />
        </svg>

        <figure className={`${styles.sddCol} ${styles.sddDip}`}>
          <div className={styles.sddPanel}>
            <i className={styles.sddHead} />
            {['72%', '58%', '66%', '50%'].map((w) => (
              <span key={w} className={styles.sddRowItem}>
                <i className={styles.sddBar} style={{ '--w': w }} />
                <b className={styles.sddChevron} />
              </span>
            ))}
          </div>
          <figcaption className={styles.sddLabel}><b>dip</b><span>contextual drill</span></figcaption>
        </figure>

        <svg className={`${styles.sddArrow} ${styles.sddArrow2}`} viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 6h21" />
          <path d="M17 1.5 22 6l-5 4.5" />
        </svg>

        <figure className={`${styles.sddCol} ${styles.sddDive}`}>
          <div className={`${styles.sddPanel} ${styles.sddDense}`}>
            <span className={styles.sddChart}>
              {[38, 62, 48, 80, 66, 54, 92].map((h, i) => (
                <i key={i} style={{ '--h': `${h}%`, '--d': i }} />
              ))}
            </span>
            <span className={styles.sddGrid}>
              {Array.from({ length: 6 }, (_, i) => <i key={i} />)}
            </span>
            {['92%', '80%', '86%', '64%', '74%'].map((w, i) => (
              <i key={i} className={styles.sddFine} style={{ '--w': w }} />
            ))}
          </div>
          <span className={styles.sddBranches}><i /><i /><i /></span>
          <figcaption className={styles.sddLabel}><b>dive</b><span>task completion</span></figcaption>
        </figure>
      </div>
    </div>
    </div>
  );
}
