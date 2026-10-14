'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/home.module.css';

// Each album gets its own "space" behind it, tuned to the cover.
const SPACES = {
  pink: {
    '--space-a': '#FFE3EC', '--space-b': '#F9BED1', '--space-c': '#EE8DAE', '--space-d': '#E06F97',
    '--haze-a': 'rgba(255, 246, 240, .75)', '--haze-b': 'rgba(255, 196, 160, .55)',
    '--shadow-c': 'rgba(150, 40, 80, .32)', '--lift-c': 'rgba(124, 28, 64, .38)',
    '--edge-1': '#E9D4DA', '--edge-2': '#DCC2C9', '--edge-3': '#CFB1B9',
  },
  dusk: {
    '--space-a': '#EEF2F3', '--space-b': '#C9D5DB', '--space-c': '#9AAEB9', '--space-d': '#73899A',
    '--haze-a': 'rgba(248, 250, 252, .7)', '--haze-b': 'rgba(255, 198, 168, .5)',
    '--shadow-c': 'rgba(28, 44, 60, .38)', '--lift-c': 'rgba(20, 34, 48, .45)',
    '--edge-1': '#D9DEE2', '--edge-2': '#C7CED4', '--edge-3': '#B4BDC5',
  },
};

// A random lean every time the LP appears: 4–11°, either direction.
function randomLean() {
  const mag = 4 + Math.random() * 7;
  return (Math.random() < 0.5 ? -1 : 1) * mag;
}

// A sealed LP floating in its own hazy space. Pure CSS/DOM: the sleeve
// drifts, the shadow follows, and the record tilts toward the cursor.
export default function VinylMock({ src, alt, sticker, space = 'pink' }) {
  const sceneRef = useRef(null);
  // Deterministic for server render, then randomized before first paint.
  const [motion, setMotion] = useState({ lean: -7, delay: 0 });

  useLayoutEffect(() => {
    setMotion({ lean: randomLean(), delay: -Math.random() * 11 });
  }, []);

  function onMove(e) {
    const el = sceneRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${(50 + x * 60).toFixed(1)}%`);
  }
  function onLeave() {
    const el = sceneRef.current;
    if (!el) return;
    el.style.setProperty('--ry', '-8deg');
    el.style.setProperty('--rx', '6deg');
    el.style.setProperty('--gx', '30%');
  }

  const sceneStyle = {
    ...SPACES[space],
    '--lean': `${motion.lean.toFixed(2)}deg`,
    '--float-delay': `${motion.delay.toFixed(2)}s`,
  };

  return (
    <div ref={sceneRef} className={styles.vinylScene} style={sceneStyle} onMouseMove={onMove} onMouseLeave={onLeave}>
      <span className={styles.haze} aria-hidden="true" />
      <span className={`${styles.haze} ${styles.haze2}`} aria-hidden="true" />
      <div className={styles.vinylFloat}>
        <div className={styles.vinylTilt}>
          <div className={styles.sleeve}>
            <Image src={src} alt={alt} fill sizes="(max-width: 900px) 60vw, 28vw" className={styles.sleeveArt} />
            <span className={styles.shrink} aria-hidden="true" />
            <span className={styles.wrapEdge} aria-hidden="true" />
            {sticker && (
              <span className={styles.hype} aria-hidden="true">
                {sticker.map((line) => <span key={line}>{line}</span>)}
              </span>
            )}
          </div>
        </div>
      </div>
      <span className={styles.vinylShadow} aria-hidden="true" />
    </div>
  );
}
