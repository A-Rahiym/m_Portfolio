"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { NavItem } from "@/src/components/layout/NavItem";
import { MobileMenu } from "@/src/components/layout/MobileMenu";
import { UserProfile } from "@/src/components/layout/UserProfile";

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
        <MobileMenu navItems={navItems} isActive={isActive} />
      </header>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col h-screen w-[280px] z-50 fixed left-0 top-0 border-r-2 border-border-main bg-surface">
        {/* Console Header */}
        <div className="p-6 border-b-2 border-border-main flex items-center gap-4">
          <div className="flex-1 min-w-0">
            <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tighter leading-tight">
              {t("site.console")}
            </div>
          </div>
          <div className="shrink-0 group">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              width={64}
              height={64}
              className="object-cover border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-grow py-6">
          {navItems.map(({ href, label, icon }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              icon={icon}
              active={isActive(href)}
            />
          ))}
        </div>

        <UserProfile />
      </nav>
    </>
  );
}
