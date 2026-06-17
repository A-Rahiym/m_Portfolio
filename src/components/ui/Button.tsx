import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 font-label-mono text-label-mono border-2 border-black transition-colors press-down cursor-pointer";

  const variants = {
    primary: "bg-primary-container text-on-primary-container hover:bg-white",
    outline:
      "bg-surface border-2 border-primary text-primary hover:bg-primary hover:text-surface",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
