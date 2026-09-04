import EstimateForm from "./EstimateForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Get Started</p>
          <h2 className="section-title">Request a Free Estimate</h2>
          <p className={styles.lead}>
            Tell us about your trees and we'll come out, assess the property, and
            give you a clear written quote — no obligation.
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Call or text</strong> (267) 810-0031
            </li>
            <li>
              <strong>Email</strong> info@treeboss.com
            </li>
            <li>
              <strong>Visit</strong> 54 E Oakland Ave, Doylestown, PA 18901
            </li>
          </ul>
        </div>
        <div className={styles.formWrap}>
          <EstimateForm />
        </div>
      </div>
    </section>
  );
}
