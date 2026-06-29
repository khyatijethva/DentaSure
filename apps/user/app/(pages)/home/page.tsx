import { Button } from "@dentasure/ui";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>
              Ahmedabad's Trusted Dental Clinic for Complete Family Dental Care
            </h1>
            <p>
              Experience stress-free dental care tailored to your family's
              unique needs.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.heroButtons}>
                <Button variant="outline">+91 79845 72082</Button>
                <Button variant="outline">+91 79845 72082</Button>
              </div>
              <Button>Book Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
