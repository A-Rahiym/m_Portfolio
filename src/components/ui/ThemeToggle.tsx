"use client";

import { useTheme } from "@/src/app/providers";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`inline-flex items-center gap-2 bg-surface-elevated text-on-surface px-3 py-2 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer ${className}`}
    >
      {isLight ? (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 5H21V19H3V5ZM5 7V17H19V7H5ZM7 9H9V11H7V9ZM11 9H17V11H11V9ZM7 13H13V15H7V13Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V4M12 20V22M4 12H2M22 12H20M5 5L6.5 6.5M17.5 17.5L19 19M19 5L17.5 6.5M6.5 17.5L5 19M8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12ZM10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      <span>{isLight ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
