import { Button } from "@dentasure/ui";
import { CalendarIcon, PhoneIcon } from "@dentasure/ui";
import styles from "./cta.module.css";

export function CtaSection() {
  return (
    <section className={`${styles.cta} section-margin`}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Experience stress-free dental care</p>
          <h2 className={styles.title}>
            Ready to Take the First Step Toward
            <br />a Healthier Smile?
          </h2>
          <p className={styles.sub}>
            Schedule your consultation today and discover personalised dental
            care designed around your needs.
          </p>
          <div className={styles.actions}>
            <Button variant="outline" icon={<PhoneIcon />} className={styles.phoneBtn}>
              +91 79845 72082
            </Button>
            <Button variant="outline" icon={<PhoneIcon />} className={styles.phoneBtn}>
              +91 79845 72082
            </Button>
            <Button icon={<CalendarIcon />} className={styles.bookBtn}>
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
