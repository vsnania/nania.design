import styles from './serviceBlueprint.module.css';

// The BOPIS service blueprint. Static on purpose: it should read top to
// bottom without anything moving. Frontstage lanes above the line of
// visibility, backstage below. The customer's question at each moment rides
// the route; every other lane holds plain-words tags where that layer shows up.
// Navy tags are where Reserve, Try, Buy broke.

const STEPS = ['browse', 'pick a store', 'checkout', 'wait', 'travel', 'pickup'];
const ASKS = ['Is it near me?', 'Can I get it today?', 'Okay, now what?', 'When will it be ready?', 'Will it be ready when I get there?', 'Where do I go?'];

// tags: [first moment, last moment, text, broke?] (moments are 1–6)
const LANES = [
  {
    key: 'digital',
    row: 3,
    label: 'digital',
    sub: 'what they see',
    tags: [[1, 1, 'Store availability'], [2, 2, 'Pickup today or tomorrow'], [3, 3, 'Pickup at checkout'], [4, 5, 'Order updates by text and email']],
  },
  {
    key: 'store',
    row: 4,
    label: 'store',
    sub: 'the physical space',
    tags: [[5, 5, 'Pickup signage', true], [6, 6, 'Pickup counter']],
  },
  {
    key: 'associate',
    row: 6,
    label: 'associate',
    sub: 'behind the counter',
    tags: [[4, 4, 'Order hits the queue'], [5, 5, 'Pick and stage'], [6, 6, 'Hand off at peak', true]],
  },
  {
    key: 'systems',
    row: 7,
    label: 'systems',
    sub: 'underneath it all',
    tags: [[1, 1, 'Stock accuracy', true], [2, 2, 'Route to a store'], [3, 3, 'Hold rules'], [4, 5, 'Notifications'], [6, 6, 'Close the order']],
  },
];

const at = (row, col) => ({ gridRow: row, gridColumn: col });

export default function ServiceBlueprint() {
  return (
    <div className={styles.wrap}>
      <div
        className={styles.bp}
        role="img"
        aria-label="Service blueprint for buy online, pick up in store. Six moments from browse to pickup, with the customer's question at each one, and what the digital experience, the store, associates, and systems each do. Reserve, Try, Buy broke at stock accuracy, pickup signage, and the handoff at peak."
      >
        {/* the six moments */}
        {STEPS.map((s, i) => (
          <span key={s} className={styles.step} style={at(1, i + 2)} aria-hidden="true">
            <b>{String(i + 1).padStart(2, '0')}</b> {s}
          </span>
        ))}

        {/* customer: their question at each moment, on the route */}
        <span className={styles.laneLabel} style={at(2, 1)} aria-hidden="true">
          <b>customer</b>
          <i>what they wonder</i>
        </span>
        <div className={styles.route} style={at(2, '2 / -1')} aria-hidden="true">
          {ASKS.map((q) => (
            <span key={q} className={styles.stop}>
              <span className={styles.bubble}>{q}</span>
              <i className={styles.dot} />
            </span>
          ))}
        </div>

        {/* line of visibility: what the customer sees above, what they don't below */}
        <span className={styles.visibility} style={at(5, '1 / -1')} aria-hidden="true">
          <span>line of visibility</span>
          <span>frontstage above, backstage below</span>
        </span>

        {LANES.map((lane) => (
          <div key={lane.key} className={styles.lane} aria-hidden="true">
            <span className={styles.laneLabel} style={at(lane.row, 1)}>
              <b>{lane.label}</b>
              <i>{lane.sub}</i>
            </span>
            <span className={styles.track} style={at(lane.row, '2 / -1')} />
            {lane.tags.map(([a, b, text, broke]) => (
              <span
                key={text}
                className={`${styles.tag} ${broke ? styles.broke : ''} ${b > a ? styles.span : ''}`}
                style={at(lane.row, `${a + 1} / ${b + 2}`)}
              >
                {text}
              </span>
            ))}
          </div>
        ))}

        <p className={styles.legend} style={at(8, '2 / -1')} aria-hidden="true">
          <span className={styles.legendKey} />
          where Reserve, Try, Buy broke
        </p>
      </div>
    </div>
  );
}
