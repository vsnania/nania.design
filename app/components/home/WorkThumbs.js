import styles from './workThumbs.module.css';

// Coded project thumbnails. One system for all three:
// [brand] + [one lo-fi scene of the customer outcome]. No numbers.
// Verizon and AE show outcomes, not interfaces; UX For Equality keeps its
// phone because the recorded session was the data.

function BrandBlock({ words, className }) {
  return (
    <div className={`${styles.brand} ${className}`} aria-hidden="true">
      {words.map((w) => <span key={w}>{w}</span>)}
    </div>
  );
}

/* ---------- Verizon: one front door, every task one clear path away ---------- */
const BRANCHES = [
  { key: 'bill', d: 'M66 120 C 150 120, 172 44, 268 44', y: 44 },
  { key: 'plan', d: 'M66 120 L 268 120', y: 120 },
  { key: 'device', d: 'M66 120 C 150 120, 172 196, 268 196', y: 196 },
];
const SLOTS = [['0', '.04', '.28', '1'], ['0', '.37', '.61', '1'], ['0', '.70', '.94', '1']];

export function VerizonThumb() {
  return (
    <div className={`${styles.thumb} ${styles.vz}`} role="img" aria-label="Verizon: one front door that routes customers along a clear path to paying their bill, managing their plan, or upgrading their device">
      <img src="/home/logos/verizon.svg" alt="" className={styles.logoVz} aria-hidden="true" />
      <svg className={styles.scene} viewBox="0 0 360 240" aria-hidden="true">
        {BRANCHES.map((b, i) => (
          <path key={b.key} className={styles.branch} style={{ '--i': i }} d={b.d} />
        ))}
        {/* the hub: a small phone (the L1), paths fan out from its edge */}
        <g className={styles.hubPhone}>
          <rect x="34" y="93" width="32" height="54" rx="6" />
          <path d="M41 105 H 56 M41 112 H 51" />
        </g>

        {/* outcomes */}
        {BRANCHES.map((b, i) => (
          <g key={b.key} className={styles.outcome} style={{ '--i': i }}>
            <circle cx="300" cy={b.y} r="30" />
          </g>
        ))}
        {/* bill: a receipt with a torn edge and one big $ */}
        <g className={styles.glyph}>
          <path className={styles.receipt} d="M287 25 H 313 V 59 l-4.33 -3 l-4.33 3 l-4.33 -3 l-4.33 3 l-4.33 -3 l-4.35 3 Z" />
          <text className={styles.receiptDollar} x="300" y="48.5" textAnchor="middle">$</text>
        </g>
        {/* plan: sliders on a white control panel (stays white when lit, like the receipt) */}
        <g className={styles.glyph}>
          <rect className={styles.whiteFill} x="283" y="105" width="34" height="30" rx="4.5" />
          <path d="M289 114 H 311 M289 126 H 311" />
          <circle className={styles.whiteFill} cx="295" cy="114" r="3.7" />
          <circle className={styles.whiteFill} cx="305" cy="126" r="3.7" />
        </g>
        {/* device upgrade: one phone, an up arrow with room to breathe */}
        <g className={styles.glyph}>
          <rect className={styles.whiteFill} x="289" y="176" width="22" height="40" rx="4.5" />
          <path className={styles.upArrow} d="M300 205 V 187 M294.8 192.2 L 300 187 L 305.2 192.2" />
        </g>

        {/* checks */}
        {BRANCHES.map((b, i) => (
          <g key={b.key} className={styles.vzCheck} style={{ '--i': i }}>
            <circle cx="322" cy={b.y - 22} r="10" />
            <path d={`M317 ${b.y - 22} l3.5 3.5 l6 -7`} />
          </g>
        ))}

        {/* the customer: takes a different path each loop. Hidden by default,
            so it never flashes at the corner before the animation clock starts */}
        {BRANCHES.map((b, i) => (
          <circle key={b.key} className={styles.walker} r="6" opacity="0">
            <animateMotion dur="7.5s" repeatCount="indefinite" calcMode="linear"
              keyPoints="0;0;1;1" keyTimes={SLOTS[i].join(';')}
              path={`${b.d} L 270 ${b.y}`} />
            <animate attributeName="opacity" dur="7.5s" repeatCount="indefinite" calcMode="discrete"
              values="0;1;0" keyTimes={`0;${SLOTS[i][1]};${SLOTS[i][2]}`} />
          </circle>
        ))}
      </svg>
    </div>
  );
}

/* ---------- American Eagle + Aerie: order online, in your hand today ---------- */
export function BopisThumb() {
  return (
    <div className={`${styles.thumb} ${styles.ae}`} role="img" aria-label="American Eagle and Aerie buy online, pick up in store: one click sends a bag to the store, where it's ready fast and picked up in person">
      <div className={styles.logoAe} aria-hidden="true">
        <img src="/home/logos/american-eagle.svg" alt="" />
        <img src="/home/logos/aerie.svg" alt="" />
      </div>
      <svg className={styles.scene} viewBox="0 0 360 240" aria-hidden="true">
        {/* step one: a small phone, just the tap that starts the order */}
        <g className={styles.aePhone}>
          <rect x="24" y="78" width="32" height="54" rx="6" />
          <path className={styles.aePhoneLines} d="M31 89 H 46 M31 96 H 41" />
          <rect className={styles.aeBuy} x="30" y="114" width="20" height="8" rx="4" />
        </g>
        <circle className={styles.clickRing} cx="40" cy="118" r="10" />
        <path className={styles.route} d="M60 92 C 128 40, 190 60, 236 120" />

        {/* the store: striped awning with scallops that alternate with the stripes */}
        <defs>
          <pattern id="aeStripes" patternUnits="userSpaceOnUse" x="194" y="0" width="24" height="240">
            <rect width="12" height="240" fill="#182C52" />
            <rect x="12" width="12" height="240" fill="#FBFAF6" />
          </pattern>
        </defs>
        <path className={styles.awning} d="M206 92 H 314 L 326 116 H 194 Z" />
        <path className={styles.scallops} d="M194 116 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0 a6 6 0 0 0 12 0" />
        <rect className={styles.front} x="202" y="116" width="116" height="92" />

        {/* ready fast: a quick sweep of the clock while it waits */}
        <g className={styles.clock}>
          <circle cx="330" cy="70" r="15" />
          <path className={styles.clockHand} d="M330 70 V 60" />
          <path d="M330 70 H 337" />
        </g>

        {/* the bag: click → store → in your hand */}
        <g className={styles.bagTrip}>
          <g className={styles.bag}>
            <path className={styles.bagHandle} d="M-6 -12 C -6 -22, 6 -22, 6 -12" />
            <path className={styles.bagBody} d="M-13 -12 H 13 L 15 14 H -15 Z" />
            <path className={styles.bagBand} d="M-13 -12 H 13 L 13.4 -7 H -13.4 Z" />
          </g>
          <g className={styles.bagCheck}>
            <circle cx="16" cy="-18" r="9" />
            <path d="M11.5 -18 l3 3 l5.5 -6.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

/* ---------- UX For Equality: a recorded, think-aloud session ---------- */
export function UxfeThumb() {
  return (
    <div className={`${styles.thumb} ${styles.uxfe}`} role="img" aria-label="UX For Equality: a recorded, think-aloud usability session on a phone">
      <BrandBlock words={['UX', 'FOR', 'EQUALITY']} className={styles.brandUxfe} />
      <div className={styles.session} aria-hidden="true">
        <div className={styles.miniPhone}>
          <span className={styles.rec}><i />REC</span>
          <i className={styles.mBar} style={{ '--w': '70%' }} />
          <i className={styles.mBar} style={{ '--w': '48%' }} />
          <span className={styles.mIcons}><i /><i className={styles.tapped} /><i /></span>
          <i className={styles.mBar} style={{ '--w': '62%' }} />
        </div>
        <span className={styles.bubble}><i /><i /><i /></span>
      </div>
    </div>
  );
}
