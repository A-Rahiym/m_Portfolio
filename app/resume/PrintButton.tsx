"use client";

import { useTranslations } from "next-intl";

export function PrintButton() {
  const t = useTranslations("resume");
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 bg-primary text-on-primary-container px-5 py-2.5 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer no-print"
    >
      {t("print")}
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2H18V9M6 18H4C2.9 18 2 17.1 2 16V11C2 9.9 2.9 9 4 9H20C21.1 9 22 9.9 22 11V16C22 17.1 21.1 18 20 18H18M6 14H18V22H6V14Z" /></svg>
    </button>
  );
}
