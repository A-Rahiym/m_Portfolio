import type { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  shadowColor?: string;
}

export function BrutalistCard({
  children,
  className = "",
  shadowColor = "bg-primary",
}: BrutalistCardProps) {
  return (
    <div className="relative group">
      <div
        className={`brutalist-card ${className}`}
      >
        {children}
      </div>
      <div className={`brutalist-card-shadow ${shadowColor}`} />
    </div>
  );
}
