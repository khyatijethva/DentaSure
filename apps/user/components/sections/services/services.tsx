import { Button } from "@dentasure/ui";
import { CalendarIcon, PhoneIcon, ToothIcon } from "@dentasure/ui";
import styles from "./services.module.css";

const SERVICES = [
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    desc: "Pain-free procedure to save infected teeth and prevent extraction with lasting results.",
  },
  {
    id: "crown-bridge",
    name: "Fixed Teeth (Crown, Bridge)",
    desc: "Durable, natural-looking restorations that blend seamlessly with your smile.",
  },
  {
    id: "extraction",
    name: "Extraction (Teeth Removal)",
    desc: "Safe and gentle removal with minimal discomfort and a smooth recovery.",
  },
  {
    id: "veneers",
    name: "Dental Veneers, Smile Designing",
    desc: "Ultra-thin porcelain veneers and complete smile makeovers for a perfect look.",
  },
  {
    id: "implants",
    name: "Dental Implants",
    desc: "Permanent tooth replacements that look, feel, and function like natural teeth.",
  },
  {
    id: "dentures",
    name: "Removable Teeth (Partial, Complete Dentures)",
    desc: "Custom-fitted dentures designed for comfort, function, and a natural appearance.",
  },
  {
    id: "cleaning",
    name: "Teeth Cleaning, Polishing and Bleaching",
    desc: "Professional cleaning to remove plaque, tartar, and stains for a brighter smile.",
  },
  {
    id: "pediatric",
    name: "Pediatric Dentistry",
    desc: "Gentle, friendly dental care tailored to children and teens of all ages.",
  },
  {
    id: "orthodontic",
    name: "Orthodontic Treatment",
    desc: "Braces, clear aligners, and orthodontic care for aligned, confident smiles.",
  },
];

export function ServicesSection() {
  return (
    <section className={`${styles.services}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Comprehensive Care
              <br />
              Under <em>One Roof</em>
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
          </div>

          <div className={styles.grid}>
            {SERVICES.map((svc) => (
              <div key={svc.id} className={styles.item}>
                <div className={styles.iconWrap}>
                  <ToothIcon size={20} />
                </div>
                <h3 className={styles.itemName}>{svc.name}</h3>
                <p className={styles.itemDesc}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
