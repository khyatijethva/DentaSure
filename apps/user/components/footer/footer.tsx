import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
     <div className="container">
      <div className={styles.inner}>
        <span className={styles.logo}>DentaSure</span>
        <p className={styles.copy}>Copyright © 2026 Dentasureplus. All rights reserved.</p>
      </div>
     </div>
    </footer>
  );
}
