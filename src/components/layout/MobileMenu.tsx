"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { NavItem } from "@/src/components/layout/NavItem";
import { UserProfile } from "@/src/components/layout/UserProfile";

interface MobileMenuProps {
  navItems: readonly { href: string; label: string; icon: string }[];
  isActive: (href: string) => boolean;
}

export function MobileMenu({ navItems, isActive }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-primary p-2"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4H22V20H2V4ZM4 6V18H20V6H4ZM6 8H8V10H6V8ZM9 11H11V13H9V11ZM6 14H8V16H6V14ZM12 14H18V16H12V14Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-70"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-70 bg-surface border-r-2 border-border-main z-[80] flex flex-col">
            <div className="px-4 py-5 border-b-2 border-border-main flex items-center gap-3 relative">
              <div className="flex-1 min-w-0">
                <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter leading-tight">
                  {t("site.console")}
                </div>
              </div>
              <div className="shrink-0 group">
                <Image
                  src="/avatar.jpg"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="object-cover border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary p-1 shrink-0"
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="grow py-6">
              {navItems.map(({ href, label, icon }) => (
                <NavItem
                  key={href}
                  href={href}
                  label={label}
                  icon={icon}
                  active={isActive(href)}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
            <UserProfile />
          </div>
        </>
      )}
    </>
  );
}
