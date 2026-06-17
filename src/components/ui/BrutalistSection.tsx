import type { ReactNode } from "react";

const shadowColors = [
  "#32E6E2",
  "#5A8CFF",
  "#FF6B6B",
  "#FFD93D",
  "#C084FC",
  "#F97316",
  "#2DD4BF",
  "#FB923C",
];

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
        className="absolute top-1.5 left-1.5 w-full h-full border-2 border-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"
        style={{ backgroundColor: color }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
