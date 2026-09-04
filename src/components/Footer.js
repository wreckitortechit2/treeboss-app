import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mark}>TB</span>
          <div>
            <strong>Tree Boss</strong>
            <p>Fair Tree Services LLC · Woman-Owned Small Business</p>
          </div>
        </div>
        <div className={styles.cols}>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Tree Removal</li>
              <li>Trimming & Pruning</li>
              <li>Stump Grinding</li>
              <li>Land Clearing</li>
              <li>Emergency Response</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>(267) 810-0031</li>
              <li>info@treeboss.com</li>
              <li>54 E Oakland Ave</li>
              <li>Doylestown, PA 18901</li>
            </ul>
          </div>
          <div>
            <h4>Areas</h4>
            <ul>
              <li>Bucks County</li>
              <li>Montgomery County</li>
              <li>Doylestown · Newtown</li>
              <li>New Hope · Richboro</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {year} Tree Boss. Licensed & insured in PA, NY, NJ, DE, MD.</p>
      </div>
    </footer>
  );
}
