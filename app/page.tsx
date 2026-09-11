import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrutalistSection } from "@/src/components/ui/BrutalistSection";
import { projects } from "@/src/data/projects";

export default async function HomePage() {
  const t = await getTranslations("home");
  const recentProjects = projects.slice(0, 3);
  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:grid-rows-4 gap-6 w-full h-full">
        {/* Profile */}
        <BrutalistSection className="md:col-span-2 xl:col-span-8 xl:row-span-2">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 justify-between shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("identityManifest")}</span>
              <div className="flex gap-1"><div className="w-2 h-2 bg-primary" /></div>
            </div>
            <div className="flex flex-1 min-h-0 overflow-hidden">
              <div className="flex flex-col justify-center p-6 gap-5 flex-1 min-w-0">
                <h1 className="font-headline-lg text-headline-lg text-primary">{t("heroTagline")}</h1>
                <p className="font-body-md text-body-md max-w-xl text-on-surface-variant leading-relaxed">{t("heroDescription")}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                   href="https://drive.google.com/file/d/1O6veygwvw6tW21_Tsc0uUv4GnD8YGYKQ/view?usp=sharing"
                   target="_blank" 
                   className="inline-flex items-center gap-2 bg-primary text-on-primary-container px-5 py-2.5 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    Resume
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-surface-elevated text-on-surface px-5 py-2.5 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    {t("portfolioZip")}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                  </Link>
                </div>
              </div>

            </div>
          </section>
        </BrutalistSection>

        {/* Currently */}
        <BrutalistSection className="md:col-span-2 xl:col-span-4 xl:row-span-2">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("currentlyTitle")}</span>
            </div>
            <div className="flex flex-col justify-center p-5 gap-4 flex-1 min-h-0 overflow-y-auto custom-scroll">
              <div className="border-l-4 border-primary pl-4">
                <p className="font-label-mono text-[10px] text-terminal-gray uppercase tracking-wider">{t("currentlyBuilding")}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">{t("currentlyBuildingDesc")}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-label-mono text-[10px] text-terminal-gray uppercase tracking-wider">{t("currentlyLearning")}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">{t("currentlyLearningDesc")}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-label-mono text-[10px] text-terminal-gray uppercase tracking-wider">{t("currentlyReading")}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">{t("currentlyReadingDesc")}</p>
              </div>
            </div>
          </section>
        </BrutalistSection>

        {/* Recent Work */}
        <BrutalistSection className="md:col-span-2 xl:col-span-6 xl:row-span-2">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 justify-between shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("recentWork")}</span>
              <Link href="/projects" className="font-label-mono text-[10px] text-primary hover:underline uppercase tracking-wider">
                {t("viewAll")} →
              </Link>
            </div>
            <div className="flex flex-col gap-3 p-4 flex-1 min-h-0 overflow-y-auto custom-scroll">
              {recentProjects.map((project) => (
                <article key={project.id} className="border border-border-main bg-surface-container-lowest hover:border-primary transition-colors">
                  <div className="flex items-center justify-between gap-2 px-3 pt-2.5">
                    <span className="text-primary font-label-mono text-[10px] border border-primary px-2 py-0.5 uppercase">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="flex items-center gap-1 font-label-mono text-[9px] text-terminal-gray uppercase">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="px-3 py-2">
                    <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-2 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2 px-3 pb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 border border-border-main font-label-mono text-[9px] text-terminal-gray">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={project.url ?? project.repo ?? "/projects"}
                      target={project.url || project.repo ? "_blank" : undefined}
                      rel={project.url || project.repo ? "noopener noreferrer" : undefined}
                      aria-label={`Open ${project.title}`}
                      className="inline-flex items-center justify-center w-7 h-7 shrink-0 border-2 border-black bg-primary text-on-primary-container shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </BrutalistSection>

        {/* Blog */}
        <BrutalistSection className="md:col-span-1 xl:col-span-3 xl:row-span-2">
          <section className="bg-surface-container-lowest border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("terminalBlog")}</span>
            </div>
            <div className="p-6 font-label-mono text-label-mono text-primary flex flex-col items-center justify-center flex-1 min-h-0 gap-4">
              <span className="text-terminal-gray text-[11px]">LOADING_LATEST_LOGS...</span>
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "300ms" }} />
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "600ms" }} />
              </div>
              <span className="text-primary text-[10px] mt-2 border border-primary px-3 py-1">COMING SOON</span>
            </div>
          </section>
        </BrutalistSection>

        {/* Proficiency */}
        <BrutalistSection className="md:col-span-1 xl:col-span-3 xl:row-span-2">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("proficiencyTitle")}</span>
            </div>
            <div className="p-3 flex flex-col gap-3 flex-1 min-h-0 overflow-y-auto custom-scroll">
              {(t.raw("proficiencyGroups") as { label: string; skills: string[] }[]).map((group) => (
                <div key={group.label}>
                  <p className="font-label-mono text-[9px] text-terminal-gray uppercase tracking-wider mb-1.5">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 border border-border-main font-label-mono text-[10px] text-primary bg-surface-container hover:bg-primary hover:text-on-primary-container hover:border-primary transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </BrutalistSection>
      </div>
    </main>
  );
}
