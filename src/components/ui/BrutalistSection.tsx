"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { shadowColors, shadowColorsLight } from "@/src/data/shadowColors";

interface BrutalistSectionProps {
  className?: string;
  children: ReactNode;
  colorIndex?: number;
}

const SHADOW_BASE =
  "absolute top-1.5 left-1.5 w-full h-full border-2 border-black opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none z-0";

export function BrutalistSection({ className, children, colorIndex }: BrutalistSectionProps) {
  const [index] = useState(
    () => colorIndex ?? Math.floor(Math.random() * 8)
  );

  return (
    <div className={`relative group ${className ?? ""}`}>
      {/* CSS picks the visible layer via [data-theme]; no JS theme read,
          so toggling themes never re-renders this subtree. */}
      <div
        className={`${SHADOW_BASE} hidden dark:block`}
        style={{ backgroundColor: shadowColors[index % shadowColors.length] }}
      />
      <div
        className={`${SHADOW_BASE} dark:hidden`}
        style={{ backgroundColor: shadowColorsLight[index % shadowColorsLight.length] }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
