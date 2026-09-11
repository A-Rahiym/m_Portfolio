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

  // Without an explicit color the icon inherits the surrounding text color
  // (solid falls back to currentColor), which the theme utilities already
  // flip via [data-theme] — so icons never need a JS theme read and this
  // component stays server-renderable.
  return (
    <PxlKitIcon
      icon={iconData}
      size={size}
      className={className}
      appearance="solid"
      {...(color ? { color } : {})}
    />
  );
}
