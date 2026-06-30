import { Button } from "@dentasure/ui";
import { Icon } from "@dentasure/ui";
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
    highlight: true,
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
  return (
    <section className={`${styles.whyTrustsection} section-margin-bottom`}>
      <div className="container">
        <div className={`grid grid-cols-3 ${styles.inner}`}>
          <div className="flex gap-4 flex-column justify-between">
            <div className={styles.content}>
              <h2 className={styles.title}>
                Why Patients <em>Trust</em> Our Clinic
              </h2>
              <p className="subtitle">
                From routine cleanings to complete smile makeovers, we utilise the
                latest technology to ensure your treatment is efficient, effective,
                and comfortable.
              </p>
            </div>
            <div className={`flex justify-center gap-2 flex-column ${styles.buttons}`}>
              <div className="flex gap-2">
                <Button variant="outline" icon={<Icon name="phone" size={20} />} className="full-width">
                  +91 79845 72082
                </Button>
                <Button variant="outline" icon={<Icon name="phone" size={20} />} className="full-width">
                  +91 79845 72082
                </Button>
              </div>
              <Button icon={<Icon name="calendar" size={20} />} justifyContent="space-between">
                Book Consultation
              </Button>
            </div>
          </div>

          <div className={styles.itemList}>
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.id}
                className={styles.item}
              >
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
