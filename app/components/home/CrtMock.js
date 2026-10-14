'use client';

import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/home.module.css';

// A lo-fi CRT set for video work. The scanlines, roll bar, and flicker live
// on the TV screen itself (that's the medium), not on the viewer.
export default function CrtMock({ src, alt, title, channel = 'CH 03' }) {
  // Deterministic for server render, then randomized before first paint.
  const [motion, setMotion] = useState({ lean: -0.8, delay: 0 });
  useLayoutEffect(() => {
    const mag = 0.3 + Math.random() * 1.2; // nearly straight: 0.3–1.5°
    setMotion({ lean: (Math.random() < 0.5 ? -1 : 1) * mag, delay: -Math.random() * 13 });
  }, []);

  return (
    <div
      className={styles.tvScene}
      style={{ '--lean': `${motion.lean.toFixed(2)}deg`, '--float-delay': `${motion.delay.toFixed(2)}s` }}
    >
      <span className={styles.tvGlow} aria-hidden="true" />
      <div className={styles.tvFloat}>
        <div className={styles.tv}>
          <div className={styles.tvBezel}>
            <div className={styles.tvScreen}>
              <Image src={src} alt={alt} fill sizes="(max-width: 900px) 80vw, 40vw" className={styles.tvImg} />
              <span className={styles.tvTitle} aria-hidden="true">{title}</span>
              <span className={styles.tvOsd} aria-hidden="true">{channel}</span>
              <span className={styles.tvLines} aria-hidden="true" />
              <span className={styles.tvRoll} aria-hidden="true" />
              <span className={styles.tvGlass} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <span className={styles.tvShadow} aria-hidden="true" />
    </div>
  );
}
