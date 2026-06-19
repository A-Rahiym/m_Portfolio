import { projectsDescription } from "@/src/data/projects";
import { ProjectGrid } from "@/src/components/ui/ProjectGrid";

export default async function ProjectsPage() {
  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto h-full">
      <div className="mb-8 md:mb-12">
        <div className="bg-surface border-2 border-border-main flex items-center px-4 md:px-8 py-4 md:py-6 mb-6 md:mb-10">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-primary text-on-primary-container px-2 py-0.5 font-label-mono text-[10px]">PROJECTS</span>
                <span className="font-label-mono text-[10px] text-terminal-gray">v1.0</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary">Projects</h1>
              <p className="font-label-mono text-label-mono line-height-5 text-terminal-gray">{projectsDescription}</p>
            </div>
          </div>
        </div>
        <ProjectGrid />
      </div>
    </main>
  );
}