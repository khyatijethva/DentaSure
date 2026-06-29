import { StarIcon } from "@dentasure/ui";
import styles from "./testimonials.module.css";

const TESTIMONIALS = [
  {
    id: 1,
    text: "The team at DentaSure made my root canal completely painless. I was nervous going in, but the staff were so warm and professional. My tooth feels great now!",
    name: "Priya Sharma",
    date: "May 12, 2026",
  },
  {
    id: 2,
    text: "I had my braces done here and the results are amazing. Dr. Barai is incredibly skilled and patient. My smile has completely transformed over two years!",
    name: "Rohan Patel",
    date: "Apr 3, 2026",
  },
  {
    id: 3,
    text: "Best dental experience in Ahmedabad. Clean, modern clinic with a very friendly team. My kids actually look forward to their checkups here — that says it all.",
    name: "Meera Joshi",
    date: "Mar 18, 2026",
  },
  {
    id: 4,
    text: "Had my teeth whitening done and couldn't be happier. The results were visible immediately. I feel so much more confident in meetings and social settings now.",
    name: "Aditya Mehta",
    date: "Feb 27, 2026",
  },
  {
    id: 5,
    text: "Dr. Radia's implant work is truly world-class. I had been struggling with a missing tooth for years and the implant now feels completely natural.",
    name: "Sunita Desai",
    date: "Jan 15, 2026",
  },
  {
    id: 6,
    text: "Extremely professional and caring. I had a dental emergency and they saw me the same day. The treatment was thorough and the follow-up was exceptional.",
    name: "Kiran Shah",
    date: "Dec 8, 2025",
  },
];

export function TestimonialsSection() {
  return (
    <section className={`${styles.testimonials} section-margin`}>
      <div className="container">
        <div className={styles.heading}>
          <h2 className={styles.title}>
            What Our <em>Patients</em> Say
          </h2>
          <p className={styles.sub}>
            We take pride in delivering exceptional results that never fall
            short of expectations. But don&apos;t take our word for it.
          </p>
        </div>
      </div>

      <div className={styles.track}>
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.openQuote}>&ldquo;</div>
            <p className={styles.text}>{t.text}</p>
            <div className={styles.footer}>
              <div className={styles.avatar}>
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </div>
              <div className={styles.meta}>
                <div className={styles.name}>{t.name}</div>
                <div className={styles.date}>{t.date}</div>
              </div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={14} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
