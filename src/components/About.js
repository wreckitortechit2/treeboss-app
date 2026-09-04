import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Who We Are</p>
          <h2 className="section-title">Tree Boss</h2>
          <p>
            Founded by Angela and Adam Fair, Tree Boss is a family-owned, locally
            operated tree service based in Doylestown, Pennsylvania. We combine
            hands-on arborist experience with a digital-first, paperless process
            so communication, scheduling, and results stay clear from first call
            to final cleanup.
          </p>
          <p>
            We treat every property with the care and respect we'd give our own —
            honest recommendations, no pressure, and no hidden costs.
          </p>
        </div>
        <div className={styles.stats}>
          <div>
            <strong>25+</strong>
            <span>Years combined experience</span>
          </div>
          <div>
            <strong>5</strong>
            <span>States licensed</span>
          </div>
          <div>
            <strong>5.0</strong>
            <span>Trustindex rating</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Emergency response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
