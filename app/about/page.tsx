import { getTranslations } from "next-intl/server";
import { PixelIcon } from "@/src/components/icons/PixelIcon";
import { BrutalistSection } from "@/src/components/ui/BrutalistSection";

export default async function AboutPage() {
  const t = await getTranslations("about");

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 w-full">

      <BrutalistSection className="md:col-span-2 xl:col-span-12">
        <section className="bg-surface border-2 border-border-main flex items-center px-8 py-6 h-full">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-primary bg-surface-container flex items-center justify-center overflow-hidden">
              <PixelIcon name="user" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-primary text-on-primary-container px-2 py-0.5 font-label-mono text-[10px]">{t("bioData")}</span>
                <span className="font-label-mono text-[10px] text-terminal-gray">{t("encrypted")}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary">{t("title")}</h1>
              <p className="font-label-mono text-label-mono text-terminal-gray">{t("description")}</p>
            </div>
          </div>
        </section>
      </BrutalistSection>

      <BrutalistSection className="md:col-span-2 xl:col-span-8">
        <section className="bg-surface border-2 border-border-main flex flex-col h-full">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">IDENTITY_MANIFEST.EXE</span>
          </div>
          <div className="p-8 flex flex-col gap-6 flex-1">
            <div>
              <h2 className="font-headline-xl text-headline-xl text-primary mb-2">{t("role")}</h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl">{t("bioText")}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 border border-border-main px-4 py-2 bg-surface-elevated">
                <span className="w-2 h-2 bg-primary" />
                <span className="font-label-mono text-[10px] text-primary">{t("location")}</span>
              </div>
              <div className="flex items-center gap-2 border border-border-main px-4 py-2 bg-surface-elevated">
                <PixelIcon name="external" size={12} className="text-primary" />
                <span className="font-label-mono text-[10px] text-white">{t("stack")}</span>
              </div>
            </div>
          </div>
        </section>
      </BrutalistSection>

      <BrutalistSection className="md:col-span-2 xl:col-span-4">
        <section className="bg-surface border-2 border-border-main flex flex-col h-full">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">SYS_STATUS</span>
          </div>
          <div className="p-6 flex flex-col gap-6 flex-1 justify-center">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-label-mono text-[10px] text-terminal-gray">STATUS</p>
              <p className="font-label-mono text-label-mono text-primary">{t("status")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-label-mono text-[10px] text-terminal-gray">LOCATION</p>
              <p className="font-label-mono text-label-mono text-white">{t("location")}</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-label-mono text-[10px] text-terminal-gray">STACK</p>
              <p className="font-label-mono text-label-mono text-white">{t("stack")}</p>
            </div>
          </div>
        </section>
      </BrutalistSection>

      <BrutalistSection className="md:col-span-2 xl:col-span-12">
        <section className="bg-surface border-2 border-border-main flex flex-col h-full">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">CORE_COMPETENCIES</span>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
            <div className="bg-surface-elevated border-2 border-border-main p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-border-main">
                <PixelIcon name="projects" size={16} className="text-primary" />
                <span className="font-label-mono text-[10px] text-terminal-gray">MODULE_01</span>
              </div>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-3">{t("compFrontendTitle")}</h4>
              <p className="text-body-md text-sm text-on-surface-variant">{t("compFrontendDesc")}</p>
            </div>
            <div className="bg-surface-elevated border-2 border-border-main p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-border-main">
                <PixelIcon name="projects" size={16} className="text-primary" />
                <span className="font-label-mono text-[10px] text-terminal-gray">MODULE_02</span>
              </div>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-3">{t("compAiTitle")}</h4>
              <p className="text-body-md text-sm text-on-surface-variant">{t("compAiDesc")}</p>
            </div>
            <div className="bg-surface-elevated border-2 border-border-main p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-border-main">
                <PixelIcon name="about" size={16} className="text-primary" />
                <span className="font-label-mono text-[10px] text-terminal-gray">MODULE_03</span>
              </div>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-3">{t("compDesignTitle")}</h4>
              <p className="text-body-md text-sm text-on-surface-variant">{t("compDesignDesc")}</p>
            </div>
            <div className="bg-surface-elevated border-2 border-border-main p-6 hover:border-primary transition-colors">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-border-main">
                <PixelIcon name="home" size={16} className="text-primary" />
                <span className="font-label-mono text-[10px] text-terminal-gray">MODULE_04</span>
              </div>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-3">{t("compArchTitle")}</h4>
              <p className="text-body-md text-sm text-on-surface-variant">{t("compArchDesc")}</p>
            </div>
          </div>
        </section>
      </BrutalistSection>

      <BrutalistSection className="md:col-span-2 xl:col-span-8">
        <section className="bg-surface border-2 border-border-main flex flex-col h-full">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">PROFESSIONAL_MANIFEST</span>
          </div>
          <div className="p-6 flex flex-col gap-6 flex-1">
            <div className="bg-surface-elevated border-2 border-border-main p-6 relative">
              <div className="absolute top-4 right-4">
                <span className="font-label-mono text-[10px] text-primary bg-black border border-primary px-3 py-1">PRESENT</span>
              </div>
              <div className="mb-4">
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white">{t("role1Title")}</h4>
                <p className="font-label-mono text-[10px] text-terminal-gray mt-1">{t("role1Subtitle")}</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role1Acc1")}</span>
                </li>
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role1Acc2")}</span>
                </li>
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role1Acc3")}</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-elevated border-2 border-border-main p-6">
              <div className="mb-4">
                <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-white">{t("role2Title")}</h4>
                <p className="font-label-mono text-[10px] text-terminal-gray mt-1">{t("role2Subtitle")}</p>
              </div>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role2Acc1")}</span>
                </li>
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role2Acc2")}</span>
                </li>
                <li className="flex gap-3 text-body-md text-sm text-on-surface-variant">
                  <span className="text-primary font-bold shrink-0">&gt;&gt;</span>
                  <span>{t("role2Acc3")}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </BrutalistSection>

      <BrutalistSection className="md:col-span-2 xl:col-span-4">
        <section className="bg-surface border-2 border-border-main flex flex-col h-full">
          <div className="h-6 bg-surface-container-high border-b-2 border-border-main flex items-center px-4 shrink-0">
            <span className="font-label-mono text-label-mono text-terminal-gray">EDUCATION_&_CREDENTIALS</span>
          </div>
          <div className="p-6 flex flex-col gap-6 flex-1 overflow-y-auto">
            <div className="bg-black border-2 border-primary p-6">
              <h4 className="font-label-mono text-[10px] text-primary uppercase">{t("educationDegree")}</h4>
              <p className="font-headline-lg-mobile text-headline-lg-mobile text-white mt-2">{t("educationSchool")}</p>
              <p className="font-label-mono text-[10px] text-terminal-gray mt-1">{t("educationYear")}</p>
              <p className="text-body-md text-sm text-terminal-gray mt-3">{t("educationDesc")}</p>
            </div>
            <div className="bg-surface-elevated border-2 border-border-main p-6">
              <h4 className="font-label-mono text-[10px] text-terminal-gray mb-4 uppercase">{t("certifications")}</h4>
              <div className="flex flex-col gap-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-white font-bold text-sm">{t("cert1")}</p>
                  <p className="font-label-mono text-[8px] text-terminal-gray mt-0.5">{t("cert1Issuer")}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-white font-bold text-sm">{t("cert2")}</p>
                  <p className="font-label-mono text-[8px] text-terminal-gray mt-0.5">{t("cert2Issuer")}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-white font-bold text-sm">{t("cert3")}</p>
                  <p className="font-label-mono text-[8px] text-terminal-gray mt-0.5">{t("cert3Issuer")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BrutalistSection>

      </div>
    </main>
  );
}
