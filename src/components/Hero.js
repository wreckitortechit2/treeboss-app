import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Bucks County Tree Service</p>
          <h1>A Higher Standard of Tree Care</h1>
          <p className={styles.lead}>
            Woman-owned. Certified. Built on integrity. Tree removal, trimming,
            stump grinding, land clearing, and 24/7 emergency response — done
            right, with clean results every time.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn-primary">
              Get a Free Estimate
            </a>
            <a href="tel:+12678100031" className="btn btn-ghost">
              (267) 810-0031
            </a>
          </div>
          <ul className={styles.badges}>
            <li>WOSB Certified</li>
            <li>ISA Trained</li>
            <li>TCIA Affiliated</li>
            <li>BBB Accredited</li>
            <li>5.0 Rated</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
