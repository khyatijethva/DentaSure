import { Button, Icon } from "@dentasure/ui";
import styles from "./hero.module.css";
import Image from "next/image";
const Banner = "/images/banner.jpg";


export function HeroSection() {
  return (
    <section className={`section-margin ${styles.hero}`}>
      <div className="container">
        <div className={`text-center ${styles.content}`}>
          <h1 className={styles.title}>
            Ahmedabad&apos;s <em>Trusted</em> Dental Clinic for
            <br />
            Complete Family <em>Dental Care</em>
          </h1>
          <p className="subtitle mb-8">
            Experience <strong><em>stress-free</em></strong> dental care tailored to
            your family&apos;s unique needs.
          </p>
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

        <div className={styles.imageWrap}>
          <Image
            className={styles.bannerImage}
            src={Banner}
            alt="Banner image"
            fill
            loading="lazy"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
