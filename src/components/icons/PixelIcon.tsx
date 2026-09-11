"use client";

import { PxlKitIcon } from "@pxlkit/core";
import { useTheme } from "@/src/app/providers";
import { themePrimary } from "@/src/data/themeColors";
import { iconMap } from "./data";

interface PixelIconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export function PixelIcon({ name, size = 24, className, color }: PixelIconProps) {
  const { theme } = useTheme();
  const iconData = iconMap[name];

  if (!iconData) {
    console.warn(`PixelIcon: unknown icon "${name}"`);
    return null;
  }

  // Explicit prop wins; otherwise follow the active theme so icons
  // never get stuck on the baked-in palette colors.
  const resolved = color ?? themePrimary[theme];
  // Multi-tone artwork (e.g. the `user` icon) keeps its shading via
  // tint; single-color glyphs flatten to the resolved color.
  const appearance =
    Object.keys(iconData.palette).length > 1 ? ("tinted" as const) : ("solid" as const);

  return (
    <PxlKitIcon
      icon={iconData}
      size={size}
      className={className}
      appearance={appearance}
      color={resolved}
    />
  );
}
