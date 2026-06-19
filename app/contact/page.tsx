import { getTranslations } from "next-intl/server";
import { PixelIcon } from "@/src/components/icons/PixelIcon";
import { BrutalistSection } from "@/src/components/ui/BrutalistSection";

export default async function ContactPage() {
  const t = await getTranslations("contact");
  const home = await getTranslations("home");

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 w-full">
      {/* Header */}
      <section className="md:col-span-2 xl:col-span-12 bg-surface border-2 border-border-main p-8">
        <h1 className="font-headline-xl text-headline-xl text-primary">{t("title")}</h1>
        <div className="flex items-center gap-4 mt-2">
          <span className="h-1 w-12 bg-primary" />
          <p className="font-label-mono text-label-mono text-terminal-gray">{t("protocol")}</p>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl leading-relaxed">{t("description")}</p>
      </section>

      {/* Contact Form */}
      <BrutalistSection className="md:col-span-2 xl:col-span-8">
      <section className="bg-surface border-2 border-border-main flex flex-col h-full">
        <div className="h-8 bg-surface-container-high border-b-2 border-border-main flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none"><path d="M2 4H22V20H2V4ZM4 6V18H20V6H4ZM6 8H8V10H6V8ZM9 11H11V13H9V11ZM6 14H8V16H6V14ZM12 14H18V16H12V14Z" fill="currentColor"/></svg>
            <span className="font-label-mono text-label-mono text-on-surface">{t("formTitle")}</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-border-main" />
            <div className="w-3 h-3 bg-border-main" />
            <div className="w-3 h-3 bg-primary" />
          </div>
        </div>
        <form className="p-8 space-y-6 flex-1 flex flex-col" action={`mailto:${home("contactEmail")}`} method="GET" encType="text/plain">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label-mono text-label-mono text-primary block">{t("nameLabel")}</label>
              <input className="w-full bg-surface-container-lowest border-2 border-border-main p-3 font-label-mono text-label-mono text-on-surface focus:border-primary outline-none transition-colors placeholder:text-terminal-gray" placeholder={t("namePlaceholder")} type="text" name="name" />
            </div>
            <div className="space-y-2">
              <label className="font-label-mono text-label-mono text-primary block">{t("emailLabel")}</label>
              <input className="w-full bg-surface-container-lowest border-2 border-border-main p-3 font-label-mono text-label-mono text-on-surface focus:border-primary outline-none transition-colors placeholder:text-terminal-gray" placeholder={t("emailPlaceholder")} type="email" name="email" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-label-mono text-label-mono text-primary block">{t("subjectLabel")}</label>
            <input className="w-full bg-surface-container-lowest border-2 border-border-main p-3 font-label-mono text-label-mono text-on-surface focus:border-primary outline-none transition-colors placeholder:text-terminal-gray" placeholder={t("subjectPlaceholder")} type="text" name="subject" />
          </div>
          <div className="space-y-2 flex-1 flex flex-col">
            <label className="font-label-mono text-label-mono text-primary block">{t("messageLabel")}</label>
            <textarea className="w-full bg-surface-container-lowest border-2 border-border-main p-3 font-label-mono text-label-mono text-on-surface focus:border-primary outline-none transition-colors placeholder:text-terminal-gray resize-none flex-1" placeholder={t("messagePlaceholder")} name="body" rows={6} />
          </div>
          <div>
            <button className="group relative inline-flex items-center gap-3 bg-primary text-on-primary-container px-8 py-4 font-label-mono text-label-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all" type="submit">
              {t("submitText")}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M2 2L22 12L2 22V14L14 12L2 10V2Z" fill="currentColor"/></svg>
            </button>
          </div>
        </form>
        <div className="bg-black p-4 font-label-mono text-[10px] text-primary border-t-2 border-border-main shrink-0">
          <div className="flex flex-col gap-1">
            <p className="opacity-80">&gt; Message ready to send</p>
            <p className="opacity-80">&gt; I'll respond within 24 hours</p>
            <p className="">&gt; Thanks for reaching out</p>
          </div>
        </div>
      </section>
      </BrutalistSection>

      {/* Sidebar - Status & Socials */}
      <BrutalistSection className="md:col-span-2 xl:col-span-4">
      <section className="bg-surface border-2 border-border-main flex flex-col h-full">
        {/* Status Card */}
        <div>
          <div className="h-8 bg-surface-container-high border-b-2 border-border-main flex items-center px-4">
            <span className="font-label-mono text-label-mono text-on-surface">{t("statusTitle")}</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("nodeId")}</span>
              <span className="font-label-mono text-label-mono text-primary">{t("nodeIdValue")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("latency")}</span>
              <span className="font-label-mono text-label-mono text-primary">{t("latencyValue")}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-label-mono text-label-mono text-terminal-gray">{t("availability")}</span>
              <span className="font-label-mono text-label-mono text-primary">{t("availabilityValue")}</span>
            </div>
            <div className="pt-2">
              <div className="w-full h-2 bg-surface-container-lowest border border-border-main">
                <div className="w-3/4 h-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="border-t-2 border-border-main p-6">
          <h4 className="font-label-mono text-label-mono text-terminal-gray mb-4 uppercase">Connect</h4>
          <div className="grid grid-cols-2 gap-3">
            <a className="bg-surface-elevated border-2 border-border-main p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-on-primary-container hover:border-black transition-all press-down" href="https://github.com/A-Rahiym" target="_blank" rel="noopener noreferrer">
              <PixelIcon name="github" size={24} />
              <span className="font-label-mono text-[10px]">GitHub</span>
            </a>
            <a className="bg-surface-elevated border-2 border-border-main p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-on-primary-container hover:border-black transition-all press-down" href="https://www.linkedin.com/in/a-rahiym" target="_blank" rel="noopener noreferrer">
              <PixelIcon name="linkedin" size={24} />
              <span className="font-label-mono text-[10px]">LinkedIn</span>
            </a>
            <a className="bg-surface-elevated border-2 border-border-main p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-on-primary-container hover:border-black transition-all press-down" href={`mailto:${home("contactEmail")}`}>
              <PixelIcon name="contact" size={24} />
              <span className="font-label-mono text-[10px]">Email</span>
            </a>
            <a className="bg-surface-elevated border-2 border-border-main p-4 flex flex-col items-center gap-2 hover:bg-primary hover:text-on-primary-container hover:border-black transition-all press-down" href="https://github.com/A-Rahiym" target="_blank" rel="noopener noreferrer">
              <PixelIcon name="external" size={24} />
              <span className="font-label-mono text-[10px]">Dev.to</span>
            </a>
          </div>
        </div>
        {/* Terminal */}
        <div className="mt-auto border-t-2 border-border-main bg-black p-4 font-label-mono text-[10px] text-primary flex-1 flex items-end">
          <div className="flex flex-col gap-1">
            <p>&gt; Message logged</p>
            <p>&gt; Status: open to work</p>
            <p>&gt; Let's build something</p>
          </div>
        </div>
      </section>
      </BrutalistSection>
      </div>
    </main>
  );
}
