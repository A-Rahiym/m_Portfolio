"use client";

import { useState } from "react";
import { projects, projectFilters, type Project } from "@/src/data/projects";
import { ProjectCard } from "@/src/components/ui/ProjectCard";

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered: Project[] =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type.includes(activeFilter as "web" | "mobile" | "ai"));

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {projectFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-4 py-2 font-label-mono text-label-mono border-2 border-black transition-all ${
              activeFilter === f.id
                ? "bg-primary text-on-primary-container shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                : "bg-surface text-terminal-gray hover:bg-surface-elevated"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
