import { getTranslations } from "next-intl/server";
import { Button } from "@/src/components/ui/Button";
import { BrutalistSection } from "@/src/components/ui/BrutalistSection";
import { ContactSheet } from "@/src/components/ui/ContactSheet";
import { SnakeGame } from "@/src/features/game/SnakeGame";

export default async function HomePage() {
  const t = await getTranslations("home");
  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 xl:grid-rows-6 gap-6 w-full h-full">
        {/* Profile */}
        <BrutalistSection className="md:col-span-2 xl:col-span-8 xl:row-span-3">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 justify-between shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("identityManifest")}</span>
              <div className="flex gap-1"><div className="w-2 h-2 bg-primary" /></div>
            </div>
            <div className="flex flex-col justify-center p-6 gap-4 flex-1">
              <h1 className="font-headline-lg text-headline-lg text-primary">{t("heroTagline")}</h1>
              <p className="font-body-md text-body-md max-w-xl text-on-surface-variant leading-relaxed">{t("heroDescription")}</p>
              <div className="flex gap-4 pt-2">
                <Button variant="primary">{t("requestSession")}</Button>
                <Button variant="outline">{t("portfolioZip")}</Button>
              </div>
            </div>
          </section>
        </BrutalistSection>

        {/* Currently */}
        <BrutalistSection className="md:col-span-2 xl:col-span-4 xl:row-span-3">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("currentlyTitle")}</span>
            </div>
            <div className="flex flex-col justify-center p-6 gap-5 flex-1">
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
        <BrutalistSection className="hidden md:block md:col-span-2 xl:col-span-6 xl:row-span-3">
          <section className="bg-black border-2 border-border-main flex flex-col h-full">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 z-10 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">Snake Game</span>
            </div>
            <SnakeGame />
          </section>
        </BrutalistSection>

        {/* Blog */}
        <BrutalistSection className="md:col-span-1 xl:col-span-3 xl:row-span-2">
          <section className="bg-black border-2 border-border-main flex flex-col h-full">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("terminalBlog")}</span>
            </div>
            <div className="p-6 font-label-mono text-label-mono text-primary flex flex-col justify-center flex-1">
              <div className="mb-4">
                <span className="text-white">{t("terminalPrompt")}</span> {t("terminalCommand")}
                <div className="mt-4 flex flex-col gap-4">
                  <div className="group cursor-pointer">
                    <p className="text-on-primary-container bg-primary px-2 w-fit mb-1">{t("blogPost1")}</p>
                    <p className="text-[10px] text-terminal-gray">{t("blogPost1Desc")}</p>
                  </div>
                  <div className="group cursor-pointer opacity-70 hover:opacity-100">
                    <p className="text-primary mb-1">&gt; {t("blogPost2")}</p>
                    <p className="text-[10px] text-terminal-gray">{t("blogPost2Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </BrutalistSection>

        {/* Proficiency */}
        <BrutalistSection className="md:col-span-1 xl:col-span-3 xl:row-span-2">
          <section className="bg-surface border-2 border-border-main flex flex-col h-full">
            <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("proficiencyTitle")}</span>
            </div>
            <div className="p-4 flex flex-col justify-center flex-1">
              <div className="flex flex-wrap gap-2">
                {t.raw("proficiencySkills").map((skill: string) => (
                  <span key={skill} className="px-3 py-1.5 border border-border-main font-label-mono text-[11px] text-primary bg-surface-container hover:bg-primary hover:text-on-primary-container hover:border-primary transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </BrutalistSection>

        {/* Contact */}
        <BrutalistSection className="md:col-span-2 xl:col-span-6 xl:row-span-1">
          <section className="bg-surface border-2 border-primary flex h-full">
            <ContactSheet heading={t("contactHeading")} email={t("contactEmail")} />
          </section>
        </BrutalistSection>
      </div>
    </main>
  );
}