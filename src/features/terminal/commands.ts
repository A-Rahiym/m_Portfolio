import type { Theme } from "@/src/app/providers";
import { ACHIEVEMENTS, getUnlocked } from "@/src/features/achievements/achievements";

export interface TerminalCommand {
  id: string;
  name: string;
  desc: string;
  keywords: string;
  run: () => string | void | Promise<string | void>;
}

interface CommandDeps {
  t: (key: string, values?: Record<string, string | number>) => string;
  navigate: (href: string) => void;
  theme: Theme;
  toggleTheme: () => void;
  email: string;
  toggleSnow: () => void;
}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
}

export function buildCommands({
  t,
  navigate,
  theme,
  toggleTheme,
  email,
  toggleSnow,
}: CommandDeps): TerminalCommand[] {
  const go = (href: string) => () => {
    navigate(href);
  };

  const setTheme = (target: Theme) => () => {
    if (theme === target) return t("themeAlready");
    toggleTheme();
    return t("themeSet");
  };

  return [
    { id: "home", name: t("cmdHome"), desc: t("cmdHomeDesc"), keywords: "root index main", run: go("/") },
    { id: "projects", name: t("cmdProjects"), desc: t("cmdProjectsDesc"), keywords: "work portfolio code", run: go("/projects") },
    { id: "blog", name: t("cmdBlog"), desc: t("cmdBlogDesc"), keywords: "writing logs articles", run: go("/blog") },
    { id: "about", name: t("cmdAbout"), desc: t("cmdAboutDesc"), keywords: "bio cv resume who", run: go("/about") },
    { id: "contact", name: t("cmdContact"), desc: t("cmdContactDesc"), keywords: "email hire message touch", run: go("/contact") },
    { id: "theme-light", name: t("cmdThemeLight"), desc: t("cmdThemeLightDesc"), keywords: "bright paper day", run: setTheme("light") },
    { id: "theme-dark", name: t("cmdThemeDark"), desc: t("cmdThemeDarkDesc"), keywords: "night terminal", run: setTheme("dark") },
    {
      id: "copy-email",
      name: t("cmdCopyEmail"),
      desc: t("cmdCopyEmailDesc"),
      keywords: "mail address clipboard",
      run: async () => {
        const ok = await copyText(email);
        if (ok) window.dispatchEvent(new CustomEvent("email:copied"));
        return ok ? t("emailCopied") : t("emailFailed");
      },
    },
    {
      id: "snow",
      name: t("cmdSnow"),
      desc: t("cmdSnowDesc"),
      keywords: "blizzard weather flakes background",
      run: () => {
        toggleSnow();
        return t("snowToggled");
      },
    },
    { id: "help", name: t("cmdHelp"), desc: t("cmdHelpDesc"), keywords: "list all commands", run: () => t("helpFeedback") },
    { id: "resume", name: t("cmdResume"), desc: t("cmdResumeDesc"), keywords: "cv print pdf download", run: go("/resume") },
    {
      id: "achievements",
      name: t("cmdAchievements"),
      desc: t("cmdAchievementsDesc"),
      keywords: "badges trophies unlocked",
      run: () => {
        const unlocked = getUnlocked();
        if (unlocked.length === 0) return t("achNone");
        const names = ACHIEVEMENTS.filter((a) => unlocked.includes(a.id))
          .map((a) => t(a.nameKey))
          .join(" · ");
        return t("achList", { count: unlocked.length, total: ACHIEVEMENTS.length, names });
      },
    },
  ];
}
