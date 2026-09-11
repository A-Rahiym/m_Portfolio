"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/src/app/providers";
import PixelSnow from "./pixelSnow";

/**
 * Full-viewport pixel-snow layer. Mounted once in the root layout behind
 * all content (fixed, negative z-index, no pointer events) so it never
 * blocks clicks or scrolling. Flake tint follows the active theme and the
 * layer unmounts entirely when the user prefers reduced motion.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SnowBackground() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    const onToggle = () => {
      setEnabled((was) => !was);
    };
    query.addEventListener("change", onChange);
    window.addEventListener("snow:toggle", onToggle);
    return () => {
      query.removeEventListener("change", onChange);
      window.removeEventListener("snow:toggle", onToggle);
    };
  }, []);

  if (reducedMotion || !enabled) return null;

  const isLight = theme === "light";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <PixelSnow
        color={isLight ? "#2B4EFF" : "#ffffff"}
        flakeSize={isLight ? 0.025 : 0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.2}
        density={isLight ? 0.25 : 0.22}
        direction={285}
        brightness={isLight ? 2.2 : 1.3}
        depthFade={isLight ? 14 : 8}
        farPlane={isLight ? 12 : 20}
        gamma={0.4545}
        variant="square"
      />
    </div>
  );
}
