"use client";

import { useState } from "react";
import { Button } from "@dentasure/ui";
import { CalendarIcon, PhoneIcon, ChevronDownIcon, ArrowRightIcon } from "@dentasure/ui";
import styles from "./why-trust.module.css";

const TRUST_ITEMS = [
  {
    id: "preventative",
    title: "Preventative & Family Dentistry",
    desc: "From routine checkups to complete smile makeovers, we utilise the latest technology to ensure your treatment is efficient, effective, and comfortable for the whole family.",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with professional cosmetic treatments including veneers, whitening, and smile designing. Achieve the confident, radiant smile you've always deserved — tailored entirely to you.",
  },
  {
    id: "restorative",
    title: "Restorative Treatments",
    desc: "Don't let a damaged or missing tooth hold you back. We restore function and beauty with natural-looking crowns, bridges, and permanent dental implants built to last.",
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    desc: "Toothache? Sudden dental emergencies don't wait, and neither do we. Get priority same-day emergency dental care designed around your urgent needs.",
  },
];

export function WhyTrustSection() {
  const [open, setOpen] = useState<string>("cosmetic");

  return (
    <section className={`${styles.section} section-margin`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Why Patients <em>Trust</em> Our Clinic
            </h2>
            <p className={styles.desc}>
              From routine cleanings to complete smile makeovers, we utilise the
              latest technology to ensure your treatment is efficient, effective,
              and comfortable.
            </p>
            <div className={styles.actions}>
              <Button variant="outline" icon={<PhoneIcon />}>
                +91 79845 72082
              </Button>
              <Button icon={<CalendarIcon />}>Book Consultation</Button>
            </div>
            <div
              className={styles.clinicImage}
              aria-label="DentaSure clinic interior"
            />
          </div>

          <div className={styles.accordion}>
            {TRUST_ITEMS.map((item) => {
              const isOpen = open === item.id;
              return (
                <div
                  key={item.id}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    className={styles.trigger}
                    onClick={() => setOpen(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span
                      className={styles.chevron}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDownIcon size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.body}>
                      <p>{item.desc}</p>
                      <button className={styles.learnMore}>
                        Learn more <ArrowRightIcon size={14} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
