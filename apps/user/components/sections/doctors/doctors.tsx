import Image from "next/image";
import styles from "./doctors.module.css";

const DOCTORS = [
  {
    id: "vivek-radia",
    name: "Dr. Vivek Radia",
    qualification: "(B.D.S, Cosmetic Dentist)",
    desc: "Dr. Radia brings years of expertise in oral surgery, delivering confident smiles through evidence-based treatments and compassionate patient-centred dentistry.",
    image: "/images/dr-vivek-radia.jpg",
    photoBg: "#EDE0D5",
  },
  {
    id: "rachna-barai",
    name: "Dr. Rachna Barai",
    qualification: "MDS — Orthodontics & Dentofacial Orthopaedics",
    desc: "Dr. Barai specialises in creating confident smiles through evidence-based orthodontic treatments and compassionate, personalised patient care.",
    image: "/images/dr-rachna-barai.jpg",
    photoBg: "#D5E8ED",
  },
];

export function DoctorsSection() {
  return (
    <section className={`${styles.ourTeam}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="title">
            Meet Our Dental <em>Experts</em>
          </h2>
          <p className="subtitle">
            Behind every successful treatment is a team dedicated to clinical excellence and compassionate care.
          </p>
        </div>

        <div className={`${styles.teamgrid} grid grid-cols-4 gap-4`}>
          {DOCTORS.map((doc) => (
            <div key={doc.id} className={styles.card}>
              <div
                className={styles.teamimage}
                style={{ background: doc.photoBg }}
              >
                <Image
                  className={styles.avatar}
                  src={doc.image}
                  alt={doc.name}
                  fill
                />
              </div>
              <div className={styles.teaminfo}>
                <h4 className={styles.name}>{doc.name}</h4>
                <span className={styles.qual}>{doc.qualification}</span>
                <p className={styles.desc}>{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
