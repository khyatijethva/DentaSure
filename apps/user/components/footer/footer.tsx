import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";

const NAV_LINKS = [
  { label: "Services", href: "/home" },
  { label: "About Us", href: "/home" },
  { label: "Contact Us", href: "/home" },
];

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>

          {/* Left — brand */}
          <div className={styles.brand}>
            <Link href="/home" className={styles.logoLink} aria-label="DentaSure home">
              <Image
                src="/images/logo.svg"
                width={180}
                height={58}
                alt="DentaSure logo"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className={styles.tagline}>
              Delivering trusted, compassionate dental care to families across
              Ahmedabad since 2012.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Follow on Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Follow on Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Follow on Twitter">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Right — links + CTA */}
          <div className={styles.right}>
            <nav className={styles.nav} aria-label="Footer navigation">
              <ul className={styles.navList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.cta}>
              <div className={styles.phones}>
                <a href="tel:+917984572082" className={styles.phoneBtn}>
                  +91 79845 72082
                </a>
                <a href="tel:+917984572082" className={styles.phoneBtn}>
                  +91 79845 72082
                </a>
              </div>
              <Link href="/home" className={styles.bookBtn}>
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            Copyright &copy; 2026 DentaSure Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
