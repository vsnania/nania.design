'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from '@/app/home.module.css';
import VinylMock from '@/app/components/home/VinylMock';
import CrtMock from '@/app/components/home/CrtMock';
import PressMock from '@/app/components/home/PressMock';

// Each "track" is a piece of creative direction. Hovering or focusing a row
// tunes the frame to that piece; the caption mimics Vince's video lower-thirds.
// `link` is an optional outbound destination, shown as a verb at the row's end.
const TRACKS = [
  {
    title: 'The Brakes',
    project: 'V. Sebastian',
    kind: 'Single cover',
    caption: [['cover', 'the brakes'], ['artist', 'v. sebastian'], ['shot on', 'kodak ektar h35 · ultramax 400']],
    src: '/home/the-brakes.jpg',
    alt: 'A pigeon mid-flap on dark pavement, shot on film',
    link: { verb: 'Listen', href: 'https://distrokid.com/hyperfollow/vsebastian/the-brakes' },
  },
  {
    title: 'Secondhand Smoke',
    project: 'V. Sebastian',
    kind: 'Debut single cover',
    caption: [['cover', 'secondhand smoke'], ['artist', 'v. sebastian'], ['role', 'art direction']],
    src: '/home/secondhand-smoke.jpg',
    alt: 'Blue-white smoke curling against a black background',
    link: { verb: 'Listen', href: 'https://distrokid.com/hyperfollow/vsebastian/secondhand-smoke?ref=release' },
  },
  {
    title: 'Live, NYC',
    project: 'V. Sebastian',
    kind: 'Performance',
    caption: [['scene', 'live in new york'], ['artist', 'v. sebastian'], ['role', 'songwriter, performer']],
    src: '/home/stage.jpg',
    alt: 'Vince singing at a microphone under purple stage light',
    link: { verb: 'Watch', href: 'https://www.instagram.com/vsebastian__/reel/Dd1dVW9xYtS/' },
  },
  {
    title: 'Tompkins Square',
    project: 'V. Sebastian',
    kind: 'On film',
    caption: [['scene', 'tompkins square park'], ['artist', 'v. sebastian'], ['shot on', 'kodak ektar h35 · ultramax 400']],
    src: '/home/tompkins.jpg',
    alt: 'Vince holding an acoustic guitar at dusk in Tompkins Square Park',
  },
  {
    title: 'Another World',
    project: 'Metacara',
    kind: 'Full-length album, 2022',
    caption: [['album', 'another world'], ['artist', 'metacara'], ['role', 'art direction, producer']],
    src: '/home/another-world.jpg',
    alt: 'Another World by Metacara as a sealed vinyl LP, floating in soft pink haze',
    mock: 'vinyl',
    space: 'pink',
    sticker: ['Metacara', 'Another World', 'Full-length LP'],
    link: { verb: 'Listen', href: 'https://distrokid.com/hyperfollow/metacara/another-world?ref=release' },
  },
  {
    title: 'Pilsen',
    project: 'Metacara',
    kind: 'Premiered on NYLON',
    caption: [['song', 'pilsen'], ['artist', 'metacara'], ['press', 'nylon premiere']],
    src: '/home/pilsen-still.jpg',
    alt: 'A NYLON premiere of the Metacara song Pilsen, shown as a floating press clipping with a still from the video',
    mock: 'press',
    press: {
      outlet: 'NYLON',
      section: 'Music',
      label: 'Premiere',
      kicker: 'Premiere',
      headline: '“Pilsen”',
      byline: 'Metacara · from the Car Talks EP',
      image: '/home/pilsen-still.jpg',
      lede: 'Our first taste of Metacara’s new Car Talks EP is one that’s sweet, yet bitter.',
      pull: '“That’s exactly what this song will do to ya.”',
    },
    link: { verb: 'Watch', href: 'https://www.youtube.com/watch?v=lkAmXZnqau8' },
  },
  {
    title: 'Epiphany Radio',
    project: 'Metacara',
    kind: 'Long-form video mix',
    caption: [['series', 'epiphany radio'], ['shot', 'around nyc, cut long-form'], ['role', 'produce · remix · curate']],
    src: '/home/epiphany-arch.jpg',
    mock: 'crt',
    screenTitle: 'Epiphany Radio',
    alt: 'Washington Square Arch against a blue sky, a still from Epiphany Radio',
    link: { verb: 'Watch', href: 'https://youtu.be/5N6CpJEDxIU' },
  },
  {
    title: 'Cherry Red',
    project: 'Metacara',
    kind: 'Photo art direction',
    caption: [['single', 'cherry red'], ['artist', 'metacara'], ['role', 'art direction, rollout strategy']],
    src: '/home/metacara-red.jpg',
    alt: 'Kyla and Vince lit in deep red against a brick wall',
    link: { verb: 'View', href: 'https://www.instagram.com/metacara/p/CUsQMu5rSH-/' },
  },
];

export default function BSideTracklist() {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);
  const track = TRACKS[active];

  // Selection is click or keyboard only (no hover), so the frame stays put
  // while you scan. Arrow keys move through the list like a tracklist;
  // only the selected row is in the tab order (roving tabindex).
  function onListKey(e) {
    const last = TRACKS.length - 1;
    const moves = {
      ArrowDown: active === last ? 0 : active + 1,
      ArrowRight: active === last ? 0 : active + 1,
      ArrowUp: active === 0 ? last : active - 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in moves)) return;
    e.preventDefault();
    const next = moves[e.key];
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <div className={styles.bsideGrid}>
      <figure className={styles.nowShowing}>
        <div className={styles.frame}>
          {track.mock === 'vinyl' ? (
            <VinylMock key={track.src} src={track.src} alt={track.alt} sticker={track.sticker} space={track.space} />
          ) : track.mock === 'press' ? (
            <PressMock key={track.src} press={track.press} />
          ) : track.mock === 'crt' ? (
            <CrtMock key={track.src} src={track.src} alt={track.alt} title={track.screenTitle} />
          ) : (
            <Image
              key={track.src}
              src={track.src}
              alt={track.alt}
              fill
              sizes="(max-width: 900px) 92vw, 44vw"
              className={styles.frameImg}
            />
          )}
          {/* Lo-fi tune-in plays once per switch, then the asset shows clean. */}
          <span className={styles.frameStatic} key={`static-${active}`} aria-hidden="true" />
          {track.link && (
            <a
              key={`link-${active}`}
              className={styles.frameLink}
              href={track.link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${track.link.verb} ${track.title} (opens in a new tab)`}
            >
              <span className={styles.frameLinkLabel} aria-hidden="true">{track.link.verb}</span>
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 4h6v6" />
                <path d="M20 4 11 13" />
                <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
              </svg>
            </a>
          )}
          <figcaption className={styles.lowerThird} aria-live="polite">
            {track.caption.map(([k, v]) => (
              <span key={k}><b>{k}:</b><em>{v}</em></span>
            ))}
          </figcaption>
        </div>
      </figure>

      <div className={styles.tracklistWrap}>
        <ol className={styles.tracklist} aria-label="Creative direction work" onKeyDown={onListKey}>
          {TRACKS.map((t, i) => (
            <li key={t.title} className={styles.trackRow}>
              <button
                ref={(el) => { buttons.current[i] = el; }}
                type="button"
                className={`${styles.track} ${i === active ? styles.trackActive : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                tabIndex={i === active ? 0 : -1}
              >
                <span className={styles.trackNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.trackTitle}>{t.title}</span>
                <span className={styles.trackMeta}>{t.project} · {t.kind}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.trackHint} aria-hidden="true">Click a track, or use ↑ ↓ to flip through</p>
      </div>
    </div>
  );
}
