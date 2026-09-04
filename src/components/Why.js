import styles from "./Why.module.css";

const reasons = [
  {
    title: "Woman-Owned & WOSB Certified",
    desc: "Certified through the U.S. Small Business Administration, with the highest federal clearances for government and restricted-access work.",
  },
  {
    title: "Certified & Insured",
    desc: "ISA-trained arborists, TCIA-affiliated, fully insured liability and workers' comp on every job.",
  },
  {
    title: "Transparent Pricing",
    desc: "Free estimates with a written quote — no hidden costs, no pressure to cut what doesn't need cutting.",
  },
  {
    title: "Clean Results",
    desc: "We remove all debris and leave your property ready to use after every job.",
  },
];

export default function Why() {
  return (
    <section className={styles.section} id="why">
      <div className="container">
        <p className="eyebrow">Why Tree Boss</p>
        <h2 className="section-title">Built on Integrity</h2>
        <div className={styles.grid}>
          {reasons.map((r) => (
            <article key={r.title} className={styles.card}>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
