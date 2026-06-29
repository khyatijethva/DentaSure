import type { HTMLAttributes } from "react";
import styles from "./badge.module.css";

export type BadgeVariant =
  | "default"
  | "confirmed"
  | "pending"
  | "cancelled"
  | "info"
  | "brand"
  | "terra";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
}

export function Badge({
  variant = "default",
  dot = false,
  children,
  className,
  ...props
}: BadgeProps) {
  const classes = [styles.badge, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} {...props}>
      {dot && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
