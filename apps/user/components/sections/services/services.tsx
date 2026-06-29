import { Button, Icon } from "@dentasure/ui";
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
    <section className={`${styles.services} section-margin-bottom`}>
      <div className="container">
        <div className={styles.inner}>
          <div className="flex gap-4 flex-column justify-between">
            <div className={styles.content}>
              <h2 className="title">
                Comprehensive Care
                <br />
                Under <em>One Roof</em>
              </h2>
              <p className="subtitle">
                From routine cleanings to complete smile makeovers, we utilise
                the latest technology to ensure your treatment is efficient,
                effective, and comfortable.
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
              <Button icon={<Icon name="calendar" size={20} />} justifyContent="space-between">Book Consultation</Button>
            </div>
          </div>

          <div className={`grid grid-cols-3 gap-4 ${styles.grid}`}>
            {SERVICES.map((svc) => (
              <div key={svc.id} className={`flex gap-4 flex-column p-8 ${styles.serviceitem}`}>
                <div className={styles.iconWrap}>
                  <Icon name="dentistry" size={34} />
                </div>
                <div className={styles.cardDescription}>
                  <h4 className={styles.itemName}>{svc.name}</h4>
                  <p className={styles.itemDesc}>{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
