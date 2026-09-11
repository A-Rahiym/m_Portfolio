import type { Theme } from "@/src/app/providers";

/** Mirrors --theme-primary in globals.css (dark / light). */
export const themePrimary: Record<Theme, string> = {
  dark: "#32E6E2",
  light: "#2B4EFF",
};

/** Mirrors --theme-on-primary-container (icon color on active fills). */
export const themeOnPrimary: Record<Theme, string> = {
  dark: "#003D3D",
  light: "#FFFFFF",
};
