import type { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: styles.primary ?? "",
  secondary: styles.secondary ?? "",
  outline: styles.outline ?? "",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [styles.btn, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
