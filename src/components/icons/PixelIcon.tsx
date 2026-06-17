"use client";

import { PxlKitIcon } from "@pxlkit/core";
import { iconMap } from "./data";

interface PixelIconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export function PixelIcon({ name, size = 24, className, color }: PixelIconProps) {
  const iconData = iconMap[name];

  if (!iconData) {
    console.warn(`PixelIcon: unknown icon "${name}"`);
    return null;
  }

  return (
    <PxlKitIcon
      icon={iconData}
      size={size}
      className={className}
      {...(color ? { appearance: "solid" as const, color } : {})}
    />
  );
}
