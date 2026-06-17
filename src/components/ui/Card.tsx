import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  brutalist?: boolean;
}

export function Card({ children, className = "", brutalist = false }: CardProps) {
  if (brutalist) {
    return (
      <div className="relative group">
        <div
          className={`brutalist-card border-2 border-black bg-surface p-3 cursor-pointer ${className}`}
        >
          {children}
        </div>
        <div className="brutalist-card-shadow" />
      </div>
    );
  }

  return (
    <div
      className={`border-2 border-border-main p-3 ${className}`}
    >
      {children}
    </div>
  );
}
