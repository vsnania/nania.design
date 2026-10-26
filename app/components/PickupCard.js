import styles from './pickupCard.module.css';

// The "speed over proximity" pickup card, shown where it lives: a lo-fi
// checkout screen in the same language as the Skim, Dip, Dive diagram. The
// real card breaks out of the phone so it reads as the spotlight, and the two
// outcomes annotate the parts of the card that caused them.
export default function PickupCard() {
  return (
    <div className={styles.stage}>
      <div className={styles.scene}>
        {/* detail-less checkout around the card */}
        <div className={styles.phone} aria-hidden="true">
          <span className={styles.status}><i /><i /><i /></span>
          <span className={styles.head} />
          <span className={styles.item}>
            <i className={styles.thumb} />
            <span className={styles.lines}><i style={{ '--w': '72%' }} /><i style={{ '--w': '46%' }} /></span>
          </span>
          <span className={styles.label} />
          <span className={styles.toggle}><i /><i className={styles.on} /></span>
          <span className={styles.cardSlot} />
          <span className={styles.lines}><i style={{ '--w': '88%' }} /><i style={{ '--w': '64%' }} /></span>
          <span className={styles.cta} />
        </div>

        {/* the real card, lifted out of the screen */}
        <figure className={styles.card}>
          <img
            src="/images/ae-bopis/pickup-card.png"
            alt="Pickup card: 1 item will be ready today within 2 hours at Ross Park Mall, 10 miles away, with a link to get the order faster at a nearby store"
            className={styles.cardImg}
          />
          <span className={styles.glow} aria-hidden="true" />
          <span className={styles.tap} aria-hidden="true" />
        </figure>

        {/* outcomes, pinned to what caused them */}
        <ol className={styles.notes}>
          <li className={styles.note} style={{ '--y': '41%' }}>
            <span className={styles.pin}>01</span>
            <p className={styles.what}>Routed to the store that can fill it fastest</p>
            <p className={styles.moved}>↳ more same-day pickups</p>
          </li>
          <li className={styles.note} style={{ '--y': '76%' }}>
            <span className={styles.pin}>02</span>
            <p className={styles.what}>A few extra miles, traded for same-day speed</p>
            <p className={styles.moved}>↳ lower fulfillment costs, with orders going where the stock is</p>
          </li>
        </ol>
      </div>
    </div>
  );
}
