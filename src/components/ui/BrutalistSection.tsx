"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useTheme } from "@/src/app/providers";
import { getShadowColor } from "@/src/data/shadowColors";

interface BrutalistSectionProps {
  className?: string;
  children: ReactNode;
  colorIndex?: number;
}

export function BrutalistSection({ className, children, colorIndex }: BrutalistSectionProps) {
  const { theme } = useTheme();
  const [index] = useState(
    () => colorIndex ?? Math.floor(Math.random() * 8)
  );
  const color = getShadowColor(index, theme);

  return (
    <div className={`relative group ${className ?? ""}`}>
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
