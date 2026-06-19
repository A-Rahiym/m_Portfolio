import { PixelIcon } from "@/src/components/icons/PixelIcon";
import { shadowColors } from "@/src/data/shadowColors";
import type { Project } from "@/src/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const idx = project.id.length % shadowColors.length;
  const shadowColor = shadowColors[idx];

  return (
    <div className="relative group cursor-pointer">
      <div className="brutalist-card h-full flex flex-col bg-surface border-2 border-black overflow-hidden">
        <div className="h-6 bg-surface-elevated border-b-2 border-black px-3 flex items-center justify-between shrink-0">
          <span className="font-label-mono text-[12px] text-terminal-gray uppercase">
            File: {project.file}
          </span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-border-main" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
          </div>
        </div>
        <div className="p-4 md:p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start gap-3 mb-4">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="text-primary font-label-mono text-[11px] md:text-[12px] border border-primary px-2 py-0.5">
                {project.category}
              </span>
              {project.status && (
                <span className="flex items-center gap-1 font-label-mono text-[9px] md:text-[10px] text-terminal-gray bg-surface-elevated border border-border-main px-2 py-0.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-primary bg-surface-container flex items-center justify-center shrink-0">
              <PixelIcon name={project.icon} size={16} />
            </div>
          </div>
          <h3 className="font-headline-lg text-headline-lg text-white mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="font-body-md text-body-md text-terminal-gray mb-4 md:mb-6 leading-[1.8] flex-1 line-clamp-3 lg:line-clamp-none">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-border-main font-label-mono text-[12px] text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary-container px-4 py-2 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                Visit Live
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-elevated text-on-surface px-4 py-2 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                View Repo
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        className="brutalist-card-shadow opacity-0 group-hover:opacity-100"
        style={{
          backgroundColor: shadowColor,
          transition: "opacity 0.2s ease",
        } as React.CSSProperties}
      />
    </div>
  );
}
