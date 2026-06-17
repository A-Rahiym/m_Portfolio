import { notFound } from "next/navigation";
import { projects } from "@/src/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  return {
    title: project ? `${project.title} | Abdulrahman Abdulrahim` : "Project | Abdulrahman Abdulrahim",
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 w-full">
      <section className="md:col-span-2 xl:col-span-12 bg-surface border-2 border-border-main flex flex-col">
        <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
          <span className="font-label-mono text-label-mono text-terminal-gray">
            Project / {project.title}
          </span>
        </div>
        <article className="p-8 font-body-md text-body-md text-on-surface-variant leading-relaxed">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
            {project.title}
          </h1>
          <p className="text-terminal-gray">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-primary text-on-primary-container px-6 py-3 font-label-mono text-label-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            Visit Live Site ↗
          </a>
        </article>
      </section>
      </div>
    </main>
  );
}