import styles from "./doctors.module.css";

const DOCTORS = [
  {
    id: "vivek-radia",
    name: "Dr. Vivek Radia",
    qualification: "MDS — Oral & Maxillofacial Surgery",
    desc: "Dr. Radia brings years of expertise in oral surgery, delivering confident smiles through evidence-based treatments and compassionate patient-centred dentistry.",
    initials: "VR",
    photoBg: "#EDE0D5",
    avatarBg: "var(--jt-dark-exact)",
  },
  {
    id: "rachna-barai",
    name: "Dr. Rachna Barai",
    qualification: "MDS — Orthodontics & Dentofacial Orthopaedics",
    desc: "Dr. Barai specialises in creating confident smiles through evidence-based orthodontic treatments and compassionate, personalised patient care.",
    initials: "RB",
    photoBg: "#D5E8ED",
    avatarBg: "oklch(from var(--jt-dark-base) calc(l + 0.26) c h)",
  },
];

export function DoctorsSection() {
  return (
    <section className={`${styles.doctors} section-margin`}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>
            Meet Our Dental <em>Experts</em>
          </h2>
          <p className={styles.sub}>
            Behind every successful treatment is a team dedicated to clinical
            excellence and compassionate care.
          </p>
        </div>

        <div className={styles.grid}>
          {DOCTORS.map((doc) => (
            <div key={doc.id} className={styles.card}>
              <div
                className={styles.photo}
                style={{ background: doc.photoBg }}
              >
                <div
                  className={styles.avatar}
                  style={{ background: doc.avatarBg }}
                >
                  {doc.initials}
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.divider} />
                <h3 className={styles.name}>{doc.name}</h3>
                <p className={styles.qual}>{doc.qualification}</p>
                <p className={styles.desc}>{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
