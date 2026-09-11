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

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return null;

  const isLight = theme === "light";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    >
      <PixelSnow
        color={isLight ? "#7A90FF" : "#ffffff"}
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.2}
        density={0.22}
        direction={285}
        brightness={isLight ? 1.1 : 1.3}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />
    </div>
  );
}
