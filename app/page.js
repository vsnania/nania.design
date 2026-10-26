import Image from 'next/image';
import Link from 'next/link';
import { ViewTransition } from 'react';
import BSideTracklist from '@/app/components/home/BSideTracklist';
import { VerizonThumb, BopisThumb, UxfeThumb } from '@/app/components/home/WorkThumbs';
import SiteHeader from '@/app/components/chrome/SiteHeader';
import SiteFooter from '@/app/components/chrome/SiteFooter';
import styles from './home.module.css';

const WORK = [
  {
    href: '/my-verizon-app',
    Thumb: VerizonThumb,
    meta: [['project', 'my verizon app'], ['client', 'verizon'], ['role', 'lead experience design strategist'], ['year', '2024 – now']],
    title: 'Skim, Dip, Dive: a clearer front door for the My Verizon app',
    body: 'Redesigned the top of the app as a clear starting point for account, billing, and devices, then turned the framework into the rules teams use to decide what earns a spot there.',
    stats: [['60%', 'of app owners open it monthly'], ['4.7★', 'App Store rating']],
    hue: 'vz',
  },
  {
    href: '/ae-bopis',
    Thumb: BopisThumb,
    meta: [['project', 'buy online, pick up in-store'], ['client', 'american eagle'], ['role', 'senior ux architect'], ['year', '2022 – 2024']],
    title: '0 to 1 service design for omnichannel retail',
    body: 'Took in-store pickup from a four-store pilot to more than 1,000 stores, built on shopalongs, associate interviews, and a five-layer service blueprint.',
    stats: [['$51.4M', 'revenue'], ['84%', 'fulfillment rate']],
    hue: 'ae',
  },
  {
    href: null,
    Thumb: UxfeThumb,
    meta: [['project', 'ux for equality'], ['client', 'small businesses'], ['role', 'founder'], ['year', '2020 – 2022']],
    title: 'Free usability research for the businesses design overlooks',
    body: 'Recruited a volunteer research team, ran moderated think-aloud tests, and walked founders through findings and recommendations. A couple of times, I shipped the fixes myself.',
    stats: [],
    hue: 'uxfe',
  },
];

function LowerThird({ rows, className = '' }) {
  return (
    <dl className={`${styles.meta} ${className}`}>
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}:</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function WorkItem({ item }) {
  // One panel per project: the animation and the story share a surface,
  // and the whole panel is the tap target (the link text just says so out loud).
  const inner = (
    <>
      {/* Same name as the case study hero: the animation morphs between pages */}
      <ViewTransition name={`work-${item.hue}`} share="morph">
        <div className={`${styles.workMedia} ${styles.workMediaCoded}`}>
          <item.Thumb />
        </div>
      </ViewTransition>
      <div className={styles.workText}>
        <LowerThird rows={item.meta} />
        <div className={styles.workCopy}>
          <h3 className={styles.workTitle}>{item.title}</h3>
          <p className={styles.workBody}>{item.body}</p>
          {item.stats.length > 0 ? (
            <div className={styles.stats}>
              {item.stats.map(([n, l]) => (
                <span key={l}><b>{n}</b>{l}</span>
              ))}
            </div>
          ) : null}
          {item.href ? <span className={styles.workCta}>Read the case study</span> : null}
        </div>
      </div>
    </>
  );

  const cls = `${styles.work} ${styles[`hue_${item.hue}`]}`;
  return item.href ? (
    <Link href={item.href} transitionTypes={['case-open']} className={cls} aria-label={`${item.title}: read the case study`}>{inner}</Link>
  ) : (
    <article className={cls}>{inner}</article>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.nowLine}>lead experience design strategist at verizon</p>
          <h1 className={styles.thesis}>
            Shaping complex problems into <span className={styles.accent}>simple</span> products.
          </h1>
          <p className={styles.heroDek}>
            Design leader in New York. I lead experience strategy for the My Verizon app and work closely with the designers on my team. Off the clock, I make music and direct everything you see around it.
          </p>
          <div className={styles.heroLinks}>
            <a href="#work">Product design</a>
            <a href="#b-side">Creative direction</a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <div className={styles.portraitMedia}>
            <Image src="/home/vince-bench-wide.jpg" alt="Vincent Nania on a painted bench in front of a wall mural of a giant face, in black and white" fill priority sizes="(max-width: 900px) 92vw, 40vw" className={styles.portraitImg} />
          </div>
        </figure>
      </section>

      {/* Work */}
      <section id="work" className={styles.section} aria-labelledby="work-h">
        <div className={styles.sectionHead}>
          <h2 id="work-h" className={styles.sectionTitle}>Product design</h2>
          <p className={styles.sectionNote}>Understand the problem first. Design for the customer outcome.</p>
        </div>
        <div className={styles.workList}>
          {WORK.map((item) => <WorkItem key={item.title} item={item} />)}
        </div>
      </section>

      {/* B-side */}
      <section id="b-side" className={styles.bside} aria-labelledby="bside-h">
        <div className={styles.bsideInner}>
          <div className={styles.bsideHead}>
            <h2 id="bside-h" className={styles.bsideTitle}>Music &amp; creative direction</h2>
            <p className={styles.bsideDek}>
              Music, and the look around it. I write and record as <b>V. Sebastian</b>, and since 2014 with my wife, Kyla, as <b>Metacara</b>. I art direct the covers, the shoots, the videos, the socials, and the sites.
            </p>
            <div className={styles.bsideLinks}>
              <a href="https://linktr.ee/v.sebastian" target="_blank" rel="noreferrer">V. Sebastian<span className="arrow-sm" aria-hidden="true">↗</span></a>
              <a href="https://metacara.com" target="_blank" rel="noreferrer">Metacara<span className="arrow-sm" aria-hidden="true">↗</span></a>
            </div>
          </div>
          <BSideTracklist />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
