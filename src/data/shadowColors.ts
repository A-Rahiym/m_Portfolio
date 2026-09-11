export const shadowColors = [
  "#32E6E2",
  "#5A8CFF",
  "#FF6B6B",
  "#FFD93D",
  "#C084FC",
  "#F97316",
  "#2DD4BF",
  "#FB923C",
];

export const shadowColorsLight = [
  "#2B4EFF",
  "#EA580C",
  "#E11D48",
  "#CA8A04",
  "#9333EA",
  "#0F766E",
  "#15803D",
  "#DC2626",
];

export function getShadowColor(index: number, theme: string): string {
  const palette = theme === "light" ? shadowColorsLight : shadowColors;
  return palette[index % palette.length];
}
