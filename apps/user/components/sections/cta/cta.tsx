import { Button, Icon } from "@dentasure/ui";
import styles from "./cta.module.css";

export function CtaSection() {
  return (
    <section className={`${styles.ctaSection} section-margin`}>
      <div className="container">
        <div className={styles.innerCanvas}>
          <div className={`flex gap-8 flex-column ${styles.innerWrapper}`}>
            <p className={styles.preTitle}>
              Experience <em>stress-free</em> dental care
            </p>
            <div className={styles.headWrap}>
              <h1 className={styles.title}>
                Ready to Take the First Step Toward
                <br />a Healthier Smile?
              </h1>
              <p className="subtitle">
                Schedule your consultation today and discover personalised
                dental care designed around your needs.
              </p>
            </div>
            <div
              className={`flex justify-center gap-2 flex-column ${styles.buttons}`}
            >
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  icon={<Icon name="phone" size={20} />}
                  className="full-width"
                >
                  +91 79845 72082
                </Button>
                <Button
                  variant="outline"
                  icon={<Icon name="phone" size={20} />}
                  className="full-width"
                >
                  +91 79845 72082
                </Button>
              </div>
              <Button
                icon={<Icon name="calendar" size={20} />}
                justifyContent="space-between"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
