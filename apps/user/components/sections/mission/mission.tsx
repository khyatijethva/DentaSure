import styles from "./mission.module.css";

export function MissionSection() {
  return (
    <section className={`${styles.mission} section-margin`}>
      <div className="container">
        <p className={styles.preTitle}>
          Modern Dentistry Built Around Patient Comfort
        </p>
        <h1 className={styles.title}>
          Our mission is <em>simple</em>: deliver outstanding dental care in a
          welcoming environment <span>where every patient feels{" "}
          <em>informed</em>, <em>respected</em>, and <em>confident</em></span> in their
          treatment decisions.
        </h1>
      </div>
    </section>
  );
}
