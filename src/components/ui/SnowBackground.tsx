"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "@/src/app/providers";

// Split three.js out of the initial bundle; the chunk only loads when the
// snow layer actually renders (desktop viewports without reduced motion).
const PixelSnow = dynamic(() => import("./pixelSnow"), { ssr: false });

// Matches Tailwind's md breakpoint: phones get the static grid aesthetic,
// desktops get the full WebGL snowfall.
const DESKTOP_QUERY = "(min-width: 768px)";

function isDesktopViewport(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia(DESKTOP_QUERY).matches;
}

/**
 * Full-viewport pixel-snow layer (desktop only). Mounted once in the root
 * layout behind all content (fixed, negative z-index, no pointer events)
 * so it never blocks clicks or scrolling. Flake tint follows the active
 * theme and the layer unmounts entirely on mobile viewports or when the
 * user prefers reduced motion.
 */
function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SnowBackground() {
  const { theme } = useTheme();
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion);
  const [desktop, setDesktop] = useState(isDesktopViewport);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    const viewportQuery = window.matchMedia(DESKTOP_QUERY);
    const onViewportChange = (event: MediaQueryListEvent) => {
      setDesktop(event.matches);
    };
    const onToggle = () => {
      setEnabled((was) => !was);
    };
    motionQuery.addEventListener("change", onMotionChange);
    viewportQuery.addEventListener("change", onViewportChange);
    window.addEventListener("snow:toggle", onToggle);
    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      viewportQuery.removeEventListener("change", onViewportChange);
      window.removeEventListener("snow:toggle", onToggle);
    };
  }, []);

  if (reducedMotion || !enabled || !desktop) return null;

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
