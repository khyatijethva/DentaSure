"use client";

import styles from "./testimonials.module.css";
import Image from "next/image";

const StarImage = "/images/star.svg";
const userImage = "/images/user.jpg";

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

function ReviewCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className={styles.reviewCard}>
      <p className={styles.reviewText}>&ldquo;{t.text}&rdquo;</p>
      <div className={`flex items-center gap-2 justify-between ${styles.reviewFooter}`}>
        <div className={styles.userInfo}>
          <div className={styles.name}>{t.name}</div>
          <div className={styles.date}>{t.date}</div>
        </div>
        <div className="flex items-center gap-4">
          <div className={styles.stars}>
            {Array.from({ length: 5 }).map((_, si) => (
              <Image key={si} src={StarImage} alt="" width={16} height={16} aria-hidden />
            ))}
          </div>
          <div className={styles.userImage}>
            <Image src={userImage} alt={t.name} width={48} height={48} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <div className={`${styles.testimonialsSection} border`}>
    <section className={styles.testimonials}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.title}>
            What Our <em>Patients</em> Say
          </h2>
          <p className="subtitle">
            We take pride in delivering exceptional solutions that deliver great{" "}
            <br />
            results. But don't just take our word for it.
          </p>
        </div>
      </div>

      <div className={styles.sliderOuter}>
        {/* Row 1 — scrolls left */}
        <div className={styles.testimonialWrapper}>
          {TESTIMONIALS.map((t) => <ReviewCard key={t.id} t={t} />)}
          {TESTIMONIALS.map((t) => <ReviewCard key={`dup1-${t.id}`} t={t} />)}
        </div>
        {/* Row 2 — scrolls right */}
        <div className={`${styles.testimonialWrapper} ${styles.testimonialWrapperReverse}`}>
          {TESTIMONIALS.map((t) => <ReviewCard key={`r2-${t.id}`} t={t} />)}
          {TESTIMONIALS.map((t) => <ReviewCard key={`r2-dup-${t.id}`} t={t} />)}
        </div>
      </div>
    </section>
    </div>
  );
}
