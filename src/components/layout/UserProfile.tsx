"use client";

import { useTranslations } from "next-intl";

export function UserProfile() {
  const t = useTranslations();

  return (
    <div className="p-8 border-t-2 border-border-main flex items-center gap-4">
      <div className="w-10 h-10 border-2 border-primary bg-surface-container flex items-center justify-center overflow-hidden">
        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-label-mono text-label-mono font-bold text-on-surface">
          {t("home.userLabel")}
        </span>
        <span className="font-label-mono text-label-mono text-primary text-[10px]">
          {t("home.authStatus")}
        </span>
      </div>
    </div>
  );
}
