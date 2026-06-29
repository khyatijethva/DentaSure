"use client";

import { useEffect, useState } from "react";
import { Button } from "@dentasure/ui";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
const MainLogo = "/images/logo.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined}>
      <div className="container">
        <div className={`grid grid-cols-3 ${styles.headerWrapper}`}>
          <nav className={styles.navLinks}>
            <ul className="flex items-center gap-6 justify-start">
              <li>
                <Link href="/home">Services</Link>
              </li>
              <li>
                <Link href="/home">About Us</Link>
              </li>
              <li>
                <Link href="/home">Contact Us</Link>
              </li>
            </ul>
          </nav>
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
          <nav className={`flex gap-2 items-center justify-end ${styles.navButtons}`}>
            <Button variant="outline">+91 79845 72082</Button>
            <Button>Book Consultation</Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
