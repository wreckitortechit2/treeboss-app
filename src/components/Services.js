import styles from "./Services.module.css";

const services = [
  {
    title: "Tree Removal",
    desc: "Safe removal of dead, damaged, or hazardous trees near homes and structures, with full cleanup.",
  },
  {
    title: "Trimming & Pruning",
    desc: "ISA-standard pruning that improves structure, safety, and long-term tree health.",
  },
  {
    title: "Stump Grinding",
    desc: "Stumps ground below ground level to prevent regrowth and reclaim your yard.",
  },
  {
    title: "Land Clearing",
    desc: "Brush, underbrush, and lot clearing for construction, landscaping, or property projects.",
  },
  {
    title: "Emergency & Storm Response",
    desc: "24/7 response for fallen trees, dangerous limbs, and storm damage.",
  },
  {
    title: "Commercial & Government",
    desc: "Multi-state licensed work for businesses, municipalities, and restricted-access sites.",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <p className="eyebrow">What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-sub">
          From routine maintenance to complex crane-assisted removals, we handle
          every job with safety, precision, and a clean finish.
        </p>
        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.title} className={styles.card}>
              <div className={styles.icon}>🌳</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
