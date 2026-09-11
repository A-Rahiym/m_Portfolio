"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function dispatchBootEvent(name: "boot:active" | "boot:done") {
  window.dispatchEvent(new CustomEvent(name));
}

const DISSOLVE_CELLS = 48;
const DISSOLVE_COLS = 8;
const DISSOLVE_ROWS = 6;
const DISSOLVE_DURATION_MS = 780;

/**
 * Full-screen terminal boot overlay. Plays on every visit (typed status
 * lines plus progress bar), then exits with a staggered pixel-block
 * dissolve on any key or click. Renders nothing when the user prefers
 * reduced motion. Coordinates with the command bar via boot:active /
 * boot:done window events (done fires once the dissolve completes).
 */
export function BootSequence() {
  const t = useTranslations("terminal");
  // Reduced-motion users (and SSR) skip the theater entirely.
  const [dismissed, setDismissed] = useState<boolean>(() => prefersReducedMotion());
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(0);

  const lines = useMemo(
    () => t.raw("bootLines") as string[],
    [t]
  );
  const total = useMemo(
    () => lines.reduce((sum, line) => sum + line.length, 0),
    [lines]
  );
  const complete = progress >= total;

  // Deterministic pseudo-shuffle so the dissolve reads as an organic
  // crumble without impure random calls during render.
  const cellDelays = useMemo(
    () =>
      Array.from(
        { length: DISSOLVE_CELLS },
        (_, i) => ((i * 37) % DISSOLVE_CELLS) * 10
      ),
    []
  );

  useEffect(() => {
    if (dismissed) {
      dispatchBootEvent("boot:done");
      return;
    }
    dispatchBootEvent("boot:active");
    const finish = () => {
      if (!leaving) setLeaving(true);
    };
    window.addEventListener("keydown", finish);
    window.addEventListener("click", finish);
    return () => {
      window.removeEventListener("keydown", finish);
      window.removeEventListener("click", finish);
    };
  }, [dismissed, leaving]);

  useEffect(() => {
    if (!leaving || dismissed) return;
    const id = setTimeout(() => {
      setDismissed(true);
    }, DISSOLVE_DURATION_MS);
    return () => clearTimeout(id);
  }, [leaving, dismissed]);

  useEffect(() => {
    if (dismissed || leaving || complete) return;
    const id = setTimeout(() => {
      setProgress((p) => Math.min(total, p + 3));
    }, 14);
    return () => clearTimeout(id);
  }, [dismissed, leaving, complete, progress, total]);

  if (dismissed) return null;

  const bar = total === 0 ? 100 : Math.round((progress / total) * 100);
  // revealed[i] = chars of line i shown so far; currentIdx gets the cursor.
  const revealed: number[] = [];
  {
    let remaining = progress;
    for (const line of lines) {
      const shown = Math.max(0, Math.min(line.length, remaining));
      revealed.push(shown);
      remaining -= line.length;
    }
  }
  const currentIdx = complete
    ? -1
    : revealed.findIndex((shown, i) => shown < lines[i].length);

  return (
    <div
      className="fixed inset-0 z-[300] bg-bg flex items-center justify-center p-6 cursor-pointer"
      aria-hidden="true"
    >
      {leaving && (
        <div
          className="absolute inset-0 grid"
          style={{
            gridTemplateColumns: `repeat(${DISSOLVE_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${DISSOLVE_ROWS}, minmax(0, 1fr))`,
          }}
        >
          {cellDelays.map((delay, i) => (
            <div
              key={i}
              className="bg-bg animate-pixel-block-out"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      )}
      <div className={`w-[min(92vw,34rem)] border-2 border-black bg-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden ${leaving ? "opacity-0" : ""}`}>
        <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4">
          <span className="font-label-mono text-label-mono text-terminal-gray">
            {t("bootTitleBar")}
          </span>
        </div>
        <div className="p-6 flex flex-col gap-2 min-h-56">
          {lines.map((line, i) => (
            <p
              key={i}
              className="font-label-mono text-label-mono text-primary break-words"
            >
              <span className="text-terminal-gray mr-2">&gt;</span>
              {line.slice(0, revealed[i])}
              {i === currentIdx && <span className="animate-pulse">▊</span>}
            </p>
          ))}
          <div className="mt-4 h-3 border-2 border-border-main bg-surface-container-lowest">
            <div className="h-full bg-primary transition-[width]" style={{ width: `${bar}%` }} />
          </div>
          {complete && (
            <p className="mt-4 font-label-mono text-label-mono text-on-surface animate-pulse text-center">
              {t("bootEnter")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
