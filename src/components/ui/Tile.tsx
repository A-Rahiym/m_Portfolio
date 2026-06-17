import type { ReactNode } from "react";

interface TileProps {
  title: string;
  children: ReactNode;
  className?: string;
  borderColor?: string;
  headerColor?: string;
}

export function Tile({
  title,
  children,
  className = "",
  borderColor = "border-border-main",
  headerColor = "bg-surface-container-high",
}: TileProps) {
  return (
    <section
      className={`bg-surface border-2 ${borderColor} flex flex-col ${className}`}
    >
      <div
        className={`h-6 ${headerColor} border-b-2 border-border-main flex items-center px-4`}
      >
        <span className="font-label-mono text-label-mono text-terminal-gray">
          {title}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto min-h-0">{children}</div>
    </section>
  );
}
