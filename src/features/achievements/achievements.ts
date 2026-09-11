"use client";

export interface AchievementDef {
  id: string;
  nameKey: string;
  descKey: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  { id: "first-boot", nameKey: "achFirstBoot", descKey: "achFirstBootDesc" },
  { id: "operator", nameKey: "achOperator", descKey: "achOperatorDesc" },
  { id: "explorer", nameKey: "achExplorer", descKey: "achExplorerDesc" },
  { id: "theme-flipper", nameKey: "achThemeFlipper", descKey: "achThemeFlipperDesc" },
  { id: "blizzard-maker", nameKey: "achBlizzardMaker", descKey: "achBlizzardMakerDesc" },
  { id: "contact-made", nameKey: "achContactMade", descKey: "achContactMadeDesc" },
];

const STORAGE_KEY = "achievements";
const VISITED_KEY = "achievements:visited";

function readList(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

function writeList(key: string, values: string[]) {
  try {
    window.localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // Storage unavailable (private mode) — achievements simply don't persist.
  }
}

export function getUnlocked(): string[] {
  if (typeof window === "undefined") return [];
  return readList(STORAGE_KEY);
}

/** Unlocks id. Returns true if this was a fresh unlock. */
export function unlock(id: string): boolean {
  const unlocked = readList(STORAGE_KEY);
  if (unlocked.includes(id)) return false;
  writeList(STORAGE_KEY, [...unlocked, id]);
  return true;
}

/** Records a visited pathname. Returns the full visited set. */
export function recordVisit(pathname: string): string[] {
  const visited = readList(VISITED_KEY);
  if (!visited.includes(pathname)) {
    const next = [...visited, pathname];
    writeList(VISITED_KEY, next);
    return next;
  }
  return visited;
}

export const EXPLORER_ROUTES = ["/", "/projects", "/blog", "/about", "/contact"];
