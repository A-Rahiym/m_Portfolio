import type { ReactNode } from "react";
import { shadowColors } from "@/src/data/shadowColors";

function getRandomColor(): string {
  return shadowColors[Math.floor(Math.random() * shadowColors.length)];
}

interface BrutalistSectionProps {
  className?: string;
  children: ReactNode;
}

export function BrutalistSection({ className, children }: BrutalistSectionProps) {
  const color = getRandomColor();

  return (
    <div className={`relative group ${className}`}>
      <div
        className="absolute top-1.5 left-1.5 w-full h-full border-2 border-black opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none z-0"
        style={{ backgroundColor: color }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
