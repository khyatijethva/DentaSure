import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "outline" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
  justifyContent?: React.CSSProperties["justifyContent"];
  fullWidth?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary ?? "",
  outline: styles.outline ?? "",
  secondary: styles.secondary ?? "",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: styles.sm ?? "",
  md: styles.md ?? "",
  lg: styles.lg ?? "",
};

export function Button({
  variant = "primary",
  size = "lg",
  icon,
  iconPosition = "right",
  iconSize,
  justifyContent = "center",
  fullWidth = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const iconStyle = iconSize
    ? ({ "--icon-size": `${iconSize}px` } as React.CSSProperties)
    : undefined;
  const classes = [
    styles.btn,
    variantClass[variant],
    sizeClass[size],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      style={justifyContent ? { justifyContent } : undefined}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon} aria-hidden="true" style={iconStyle}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon} aria-hidden="true" style={iconStyle}>{icon}</span>
      )}
    </button>
  );
}
