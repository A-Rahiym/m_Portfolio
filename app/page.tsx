import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrutalistSection } from "@/src/components/ui/BrutalistSection";
import { SnakeGame } from "@/src/features/game/SnakeGame";

export default async function HomePage() {
  const t = await getTranslations("home");
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
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-on-primary-container px-5 py-2.5 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    {t("requestSession")}
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

        {/* Snake Game */}
        <BrutalistSection className="hidden md:block md:col-span-2 xl:col-span-6 xl:row-span-2">
          <section className="bg-black border-2 border-border-main flex flex-col h-full overflow-hidden">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 z-10 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">Snake Game</span>
            </div>
            <SnakeGame />
          </section>
        </BrutalistSection>

        {/* Blog */}
        <BrutalistSection className="md:col-span-1 xl:col-span-3 xl:row-span-2">
          <section className="bg-black border-2 border-border-main flex flex-col h-full overflow-hidden">
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
            <div className="p-3 flex flex-col justify-center flex-1 min-h-0 overflow-y-auto custom-scroll">
              <div className="flex flex-wrap gap-1.5">
                {t.raw("proficiencySkills").map((skill: string) => (
                  <span key={skill} className="px-2 py-1 border border-border-main font-label-mono text-[10px] text-primary bg-surface-container hover:bg-primary hover:text-on-primary-container hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </BrutalistSection>
      </div>
    </main>
  );
}
