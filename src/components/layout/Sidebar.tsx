"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { PixelIcon } from "@/src/components/icons/PixelIcon";

const navItems = [
  { href: "/", label: "nav.home", icon: "home" },
  { href: "/projects", label: "nav.projects", icon: "projects" },
  { href: "/blog", label: "nav.blog", icon: "blog" },
  { href: "/about", label: "nav.about", icon: "about" },
  { href: "/contact", label: "nav.contact", icon: "contact" },
] as const;

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="flex md:hidden justify-between items-center px-4 w-full h-16 fixed top-0 z-[60] bg-surface-dim border-b-2 border-border-main">
        <span className="font-headline-lg-mobile text-headline-lg-mobile font-black text-primary">
          ROOT_ACCESS
        </span>
        <MobileMenu navItems={navItems} isActive={isActive} t={t} />
      </header>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col h-screen w-[280px] z-50 fixed left-0 top-0 border-r-2 border-border-main bg-surface">
        {/* Console Header */}
        <div className="p-8 border-b-2 border-border-main">
          <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
            {t("site.console")}
          </div>
          <div className="font-label-mono text-label-mono text-terminal-gray mt-1">
            {t("site.version")}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-grow py-6">
          {navItems.map(({ href, label, icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                 className={`flex items-center gap-4 px-8 py-4 transition-all ${
                   active
                     ? "bg-nav-active text-on-primary-container border-y-2 border-black"
                     : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                 }`}
              >
                <PixelIcon name={icon} size={24} color={active ? "#003D3D" : undefined} />
                <span className="font-label-mono text-label-mono uppercase tracking-widest">
                  {t(label)}
                </span>
              </Link>
            );
          })}
        </div>

        {/* User Profile */}
        <div className="p-8 border-t-2 border-border-main flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary bg-surface-container flex items-center justify-center overflow-hidden">
            <PixelIcon name="user" size={24} />
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
      </nav>
    </>
  );
}

function MobileMenu({
  navItems,
  isActive,
  t,
}: {
  navItems: readonly { href: string; label: string; icon: string }[];
  isActive: (href: string) => boolean;
  t: (key: string) => string;
}) {
  const [open, setOpen] = useState(false);

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
            className="fixed inset-0 bg-black/50 z-[70]"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-0 top-0 h-full w-[280px] bg-surface border-r-2 border-border-main z-[80] flex flex-col">
            <div className="p-8 border-b-2 border-border-main flex justify-between items-center">
              <div>
                <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter">
                  {t("site.console")}
                </div>
                <div className="font-label-mono text-label-mono text-terminal-gray mt-1">
                  {t("site.version")}
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-primary p-2"
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
              {navItems.map(({ href, label, icon }) => {
                const active = isActive(href);
                return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 px-8 py-4 transition-all ${
                    active
                      ? "bg-nav-active text-on-primary-container border-y-2 border-black"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                  }`}
                >
                <PixelIcon name={icon} size={24} color={active ? "#003D3D" : undefined} />
                  <span className="font-label-mono text-label-mono uppercase tracking-widest">
                    {t(label)}
                  </span>
                </Link>
              );
            })}
            </div>
            <div className="p-8 border-t-2 border-border-main flex items-center gap-4">
              <div className="w-10 h-10 border-2 border-primary bg-surface-container flex items-center justify-center overflow-hidden">
                <PixelIcon name="user" size={24} />
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
          </div>
        </>
      )}
    </>
  );
}
