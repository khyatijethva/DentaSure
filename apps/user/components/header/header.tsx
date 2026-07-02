"use client";

import { useEffect, useState } from "react";
import { Button, Icon } from "@dentasure/ui";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
const MainLogo = "/images/logo.svg";

const NAV_LINKS = [
  { label: "Services", href: "/home" },
  { label: "About Us", href: "/home" },
  { label: "Contact Us", href: "/home" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <div className="container">
        <div className={`grid grid-cols-3 ${styles.headerWrapper}`}>
          {/* Left — nav links (desktop) */}
          <nav className={styles.navLinks}>
            <ul className="flex items-center gap-6 justify-start">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Center — logo */}
          <div className={styles.logo}>
            <Link href="/home" className={styles.logoLink}>
              <Image
                src={MainLogo}
                width={250}
                height={80}
                alt="Main Logo"
                loading="lazy"
                priority={false}
              />
            </Link>
          </div>

          {/* Right — CTA buttons + hamburger */}
          <nav className={`flex gap-2 items-center justify-end ${styles.navButtons}`}>
            <span className={styles.desktopCta}>
              <Button variant="outline" icon={<Icon name="phone" size={20} />}>
                +91 79845 72082
              </Button>
            </span>
            <span className={styles.desktopCta}>
              <Button
                variant="primary"
                icon={<Icon name="calendar" size={20} />}
                justifyContent="space-between"
              >
                Book Consultation
              </Button>
            </span>

            {/* Hamburger — mobile only */}
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
              <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <div className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}>
        <div className="container">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileCta}>
            <Button
              variant="outline"
              icon={<Icon name="phone" size={18} />}
              className="full-width"
            >
              +91 79845 72082
            </Button>
            <Button
              icon={<Icon name="calendar" size={18} />}
              justifyContent="space-between"
              className="full-width"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
