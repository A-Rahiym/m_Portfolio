"use client";

import { useState } from "react";

interface Filter {
  id: string;
  label: string;
}

interface FilterBarProps {
  filters: Filter[];
  defaultActive?: string;
  onChange?: (id: string) => void;
}

export function FilterBar({
  filters,
  defaultActive,
  onChange,
}: FilterBarProps) {
  const [active, setActive] = useState(defaultActive || filters[0]?.id);

  return (
    <div className="flex flex-wrap gap-4">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => {
            setActive(f.id);
            onChange?.(f.id);
          }}
          className={`px-6 py-2 border-2 font-label-mono text-label-mono transition-colors ${
            active === f.id
              ? "border-primary bg-primary text-on-primary-container"
              : "border-border-main hover:border-white text-terminal-gray hover:text-white"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
