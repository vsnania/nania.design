'use client';

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/home.module.css';

// A floating press clipping: newsprint paper and masthead rules, but a
// blog-style read (big headline, video still, pull quote, fading columns).
export default function PressMock({ press }) {
  // Deterministic for server render, then randomized before first paint.
  const [motion, setMotion] = useState({ lean: 3, delay: 0 });
  useLayoutEffect(() => {
    const mag = 2 + Math.random() * 4;
    setMotion({ lean: (Math.random() < 0.5 ? -1 : 1) * mag, delay: -Math.random() * 12 });
  }, []);

  return (
    <div
      className={styles.pressScene}
      style={{ '--lean': `${motion.lean.toFixed(2)}deg`, '--float-delay': `${motion.delay.toFixed(2)}s` }}
    >
      <span className={styles.haze} aria-hidden="true" />
      <div className={styles.pressFloat}>
        <article className={styles.sheet} aria-hidden="true">
          <div className={styles.sheetInner}>
          <header className={styles.sheetMast}>
            <span>{press.section}</span>
            <strong>{press.outlet}</strong>
            <span>{press.label}</span>
          </header>
          <p className={styles.sheetKicker}>{press.kicker}</p>
          <h4 className={styles.sheetHeadline}>{press.headline}</h4>
          <p className={styles.sheetByline}>{press.byline}</p>
          <div className={styles.sheetHero}>
            <Image src={press.image} alt="" fill sizes="(max-width: 900px) 60vw, 26vw" className={styles.sheetImg} />
            <span className={styles.sheetPlay} />
          </div>
          <div className={styles.sheetCols}>
            <p className={styles.sheetLede}>{press.lede}</p>
            <div>
              <blockquote className={styles.sheetPull}>{press.pull}</blockquote>
              <span className={styles.sheetLines}>
                <i /><i /><i /><i /><i />
              </span>
            </div>
          </div>
          </div>
        </article>
      </div>
      <span className={styles.vinylShadow} aria-hidden="true" />
    </div>
  );
}
