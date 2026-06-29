import type { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({
  label,
  hint,
  error,
  className,
  id,
  required,
  ...props
}: InputProps) {
  const inputClass = [styles.input, error && styles.inputError, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input id={id} required={required} className={inputClass} {...props} />
      {(error || hint) && (
        <span className={[styles.hint, error && styles.hintError].filter(Boolean).join(" ")}>
          {error ?? hint}
        </span>
      )}
    </div>
  );
}
