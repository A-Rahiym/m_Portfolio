"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingContactButton() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-on-primary-container px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all font-label-mono text-label-mono uppercase"
    >
      Get in Touch
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
  );
}
