import styles from "./mission.module.css";

export function MissionSection() {
  return (
    <section className={`${styles.mission} section-margin`}>
      <div className="container">
        <p className={styles.eyebrow}>
          <span className={styles.arrow}>→</span>
          Modern Dentistry Built Around Patient Comfort
        </p>
        <blockquote className={styles.quote}>
          Our mission is <em>simple</em>: deliver outstanding dental care in a
          welcoming environment where <em>every</em> patient feels{" "}
          <em>informed</em>, <em>respected</em>, and <em>confident</em> in their
          treatment decisions.
        </blockquote>
      </div>
    </section>
  );
}
