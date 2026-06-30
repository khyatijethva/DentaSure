import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { Button, Icon } from "@dentasure/ui";

const NAV_LINKS = [
  { label: "Services", href: "/home" },
  { label: "About Us", href: "/home" },
  { label: "Contact Us", href: "/home" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Left — brand */}
          <div className={styles.brand}>
            <Link href="/home" aria-label="DentaSure home">
              <Image
                src="/images/logo.svg"
                width={180}
                height={58}
                alt="DentaSure logo"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className={`mt-8 ${styles.tagline}`}>
              Delivering advanced dental care with compassion, precision, and a
              commitment to creating healthy, confident smiles.
            </p>
            <ul className={`flex items-center gap-2 ${styles.social}`}>
              <li>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Follow on Instagram"
                >
                  <Icon name="instagram" size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Follow on Twitter"
                >
                  <Icon name="twitter" size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Join on Discord"
                >
                  <Icon name="discord" size={24} />
                </a>
              </li>
            </ul>
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

            <div
              className={`flex justify-center gap-2 flex-column ${styles.buttons}`}
            >
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  icon={<Icon name="phone" size={20} />}
                  className="full-width"
                >
                  +91 79845 72082
                </Button>
                <Button
                  variant="secondary"
                  icon={<Icon name="phone" size={20} />}
                  className="full-width"
                >
                  +91 79845 72082
                </Button>
              </div>
              <Button
                variant="outline"
                icon={<Icon name="calendar" size={20} />}
                justifyContent="space-between"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.copyrightsbar}>
        <div className="container">
          <div className={styles.bottominner}>
            <p className={styles.copy}>
              Copyright &copy; 2026 DentaSure Plus. All rights reserved.
            </p>
            <ul className={`${styles.navList} pb-0`}>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
