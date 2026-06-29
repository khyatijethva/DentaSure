import type { HTMLAttributes } from "react";
import styles from "./card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card({ title, className, children, ...props }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}
