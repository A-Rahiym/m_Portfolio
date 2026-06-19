"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { PixelIcon } from "@/src/components/icons/PixelIcon";

interface NavItemProps {
  href: string;
  label: string;
  icon: string;
  active: boolean;
  onClick?: () => void;
}

export function NavItem({ href, label, icon, active, onClick }: NavItemProps) {
  const t = useTranslations();

  return (
    <Link
      href={href}
      onClick={onClick}
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
}
