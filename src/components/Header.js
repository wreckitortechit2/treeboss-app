import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="#" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>TB</span>
          <span className={styles.logoText}>Tree Boss</span>
        </Link>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href="tel:+12678100031" className={`btn btn-primary ${styles.cta}`}>
            Call Now
          </a>
        </nav>
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
