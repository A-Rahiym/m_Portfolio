"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "@/src/app/providers";
import { buildCommands } from "./commands";

export function CommandBar() {
  const router = useRouter();
  const { theme, toggle } = useTheme();
  const t = useTranslations("terminal");
  const homeT = useTranslations("home");
  const [open, setOpen] = useState(false);
  const bootActiveRef = useRef(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = () => {
    setOpen(false);
    setQuery("");
    setSelected(0);
    setFeedback(null);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    const onBootActive = () => {
      bootActiveRef.current = true;
    };
    const onBootDone = () => {
      bootActiveRef.current = false;
    };
    const onExternalOpen = () => {
      if (!bootActiveRef.current) setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!bootActiveRef.current) setOpen((wasOpen) => !wasOpen);
      }
    };
    window.addEventListener("boot:active", onBootActive);
    window.addEventListener("boot:done", onBootDone);
    window.addEventListener("commandbar:open", onExternalOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("boot:active", onBootActive);
      window.removeEventListener("boot:done", onBootDone);
      window.removeEventListener("commandbar:open", onExternalOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open ]);

  const commands = useMemo(
    () =>
      buildCommands({
        t,
        navigate: (href) => router.push(href),
        theme,
        toggleTheme: toggle,
        email: homeT("contactEmail"),
        toggleSnow: () => window.dispatchEvent(new CustomEvent("snow:toggle")),
      }),
    [t, router, theme, toggle, homeT]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.name} ${c.desc} ${c.keywords}`.toLowerCase().includes(q)
    );
  }, [commands, query]);

  const runCommand = async (index: number) => {
    const cmd = filtered[index];
    if (!cmd) return;
    const result = await cmd.run();
    if (typeof result === "string") {
      setFeedback(result);
      closeTimer.current = setTimeout(close, 900);
    } else {
      close();
    }
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => (filtered.length === 0 ? 0 : (s + 1) % filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) =>
        filtered.length === 0 ? 0 : (s - 1 + filtered.length) % filtered.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      void runCommand(selected);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[240]"
        onClick={close}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-label={t("dialogLabel")}
        className="fixed inset-x-0 top-[10%] mx-auto w-[min(92vw,36rem)] z-[250]"
      >
        <div className="bg-surface border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 justify-between shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">
              {t("titleBar")}
            </span>
            <span className="font-label-mono text-[10px] text-terminal-gray">
              CTRL+K
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-border-main">
            <span className="font-label-mono text-label-mono text-primary shrink-0">
              ~/
            </span>
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelected(0);
              }}
              onKeyDown={onInputKey}
              placeholder={t("placeholder")}
              aria-label={t("placeholder")}
              className="flex-1 min-w-0 bg-transparent outline-none font-label-mono text-label-mono text-on-surface placeholder:text-terminal-gray"
            />
          </div>
          {feedback ? (
            <div className="px-4 py-3 font-label-mono text-label-mono text-primary">
              &gt; {feedback}
            </div>
          ) : (
            <ul role="listbox" className="max-h-64 overflow-y-auto custom-scroll py-1">
              {filtered.length === 0 && (
                <li className="px-4 py-3 font-label-mono text-label-mono text-terminal-gray">
                  {t("noMatch")}
                </li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.id} role="option" aria-selected={i === selected}>
                  <button
                    onClick={() => void runCommand(i)}
                    onMouseEnter={() => setSelected(i)}
                    className={`w-full text-left px-4 py-2.5 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                      i === selected
                        ? "bg-primary text-on-primary-container"
                        : "text-on-surface"
                    }`}
                  >
                    <span className="font-label-mono text-label-mono">
                      {cmd.name}
                    </span>
                    <span
                      className={`font-label-mono text-[10px] truncate ${
                        i === selected
                          ? "text-on-primary-container opacity-80"
                          : "text-terminal-gray"
                      }`}
                    >
                      {cmd.desc}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="px-4 py-2 border-t-2 border-border-main font-label-mono text-[10px] text-terminal-gray">
            {t("footerHints")}
          </div>
        </div>
      </div>
    </>
  );
}

export function openCommandBar() {
  window.dispatchEvent(new CustomEvent("commandbar:open"));
}
