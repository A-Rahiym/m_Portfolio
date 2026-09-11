"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  ACHIEVEMENTS,
  EXPLORER_ROUTES,
  recordVisit,
  unlock,
} from "./achievements";

/**
 * Watches navigation plus the existing window event bus and unlocks
 * achievements (persisted in localStorage). Renders the unlock toast host.
 * Mount once inside Providers; renders nothing else.
 */
export function AchievementTracker() {
  const pathname = usePathname();
  const t = useTranslations("terminal");
  const [toasts, setToasts] = useState<string[]>([]);
  const bootSeenRef = useRef(false);
  const themeEventsRef = useRef(0);

  useEffect(() => {
    const pushToast = (id: string) => {
      setToasts((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setTimeout(() => {
        setToasts((prev) => prev.filter((toastId) => toastId !== id));
      }, 4000);
    };
    const onUnlocked = (e: Event) => {
      pushToast((e as CustomEvent<string>).detail);
    };
    const tryUnlock = (id: string) => {
      if (unlock(id)) {
        window.dispatchEvent(
          new CustomEvent<string>("achievement:unlocked", { detail: id })
        );
      }
    };

    const onBootActive = () => {
      bootSeenRef.current = true;
    };
    const onBootDone = () => {
      if (bootSeenRef.current) tryUnlock("first-boot");
    };
    const onBarOpen = () => tryUnlock("operator");
    const onTheme = () => {
      themeEventsRef.current += 1;
      // The provider emits once on mount to sync state — only the
      // second and later events are real user flips.
      if (themeEventsRef.current > 1) tryUnlock("theme-flipper");
    };
    const onSnow = () => tryUnlock("blizzard-maker");
    const onEmail = () => tryUnlock("contact-made");

    window.addEventListener("boot:active", onBootActive);
    window.addEventListener("boot:done", onBootDone);
    window.addEventListener("commandbar:open", onBarOpen);
    window.addEventListener("themechange", onTheme);
    window.addEventListener("snow:toggle", onSnow);
    window.addEventListener("email:copied", onEmail);
    window.addEventListener("achievement:unlocked", onUnlocked);
    return () => {
      window.removeEventListener("boot:active", onBootActive);
      window.removeEventListener("boot:done", onBootDone);
      window.removeEventListener("commandbar:open", onBarOpen);
      window.removeEventListener("themechange", onTheme);
      window.removeEventListener("snow:toggle", onSnow);
      window.removeEventListener("email:copied", onEmail);
      window.removeEventListener("achievement:unlocked", onUnlocked);
    };
  }, []);

  useEffect(() => {
    const visited = recordVisit(pathname);
    if (
      EXPLORER_ROUTES.every((route) => visited.includes(route)) &&
      unlock("explorer")
    ) {
      window.dispatchEvent(
        new CustomEvent<string>("achievement:unlocked", { detail: "explorer" })
      );
    }
  }, [pathname]);

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-6 left-6 z-[260] flex flex-col gap-2 pointer-events-none"
    >
      {toasts.map((id) => {
        const def = ACHIEVEMENTS.find((a) => a.id === id);
        if (!def) return null;
        return (
          <div
            key={id}
            role="status"
            className="bg-surface border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-3 max-w-xs"
          >
            <p className="font-label-mono text-[10px] text-terminal-gray uppercase tracking-wider">
              {t("achUnlocked")}
            </p>
            <p className="font-label-mono text-label-mono text-primary mt-1">
              {t(def.nameKey)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
