import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { PrintButton } from "./PrintButton";

interface SkillGroup {
  label: string;
  skills: string[];
}

export default async function ResumePage() {
  const t = await getTranslations("about");
  const home = await getTranslations("home");
  const resume = await getTranslations("resume");
  const groups = home.raw("proficiencyGroups") as SkillGroup[];

  const experience = [
    {
      title: t("role1Title"),
      subtitle: t("role1Subtitle"),
      points: [t("role1Acc1"), t("role1Acc2"), t("role1Acc3")],
    },
    {
      title: t("role2Title"),
      subtitle: t("role2Subtitle"),
      points: [t("role2Acc1"), t("role2Acc2"), t("role2Acc3")],
    },
  ];

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-6 overflow-y-auto h-full">
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 no-print">
          <PrintButton />
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-surface-elevated text-on-surface px-5 py-2.5 font-label-mono text-label-mono border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-primary hover:text-on-primary-container active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            ← {resume("back")}
          </Link>
        </div>

        <article className="print-clean bg-surface border-2 border-border-main p-8 md:p-10 flex flex-col gap-7">
          <header>
            <p className="font-label-mono text-[10px] text-terminal-gray uppercase tracking-widest">
              {t("location")} · {home("contactEmail")} · {t("status")}
            </p>
            <h1 className="font-headline-xl text-headline-xl text-primary mt-2">
              {home("userLabel")} — {t("role")}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
              {t("bioText")}
            </p>
          </header>

          <section>
            <h2 className="font-label-mono text-label-mono text-terminal-gray uppercase tracking-widest border-b-2 border-border-main pb-2 mb-4">
              {resume("experience")}
            </h2>
            <div className="flex flex-col gap-5">
              {experience.map((job) => (
                <div key={job.title}>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
                    {job.title}
                  </h3>
                  <p className="font-label-mono text-[10px] text-terminal-gray mt-1">
                    {job.subtitle}
                  </p>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {job.points.map((point) => (
                      <li key={point} className="font-body-md text-body-md text-sm text-on-surface-variant leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-label-mono text-label-mono text-terminal-gray uppercase tracking-widest border-b-2 border-border-main pb-2 mb-4">
              {resume("skills")}
            </h2>
            <div className="flex flex-col gap-3">
              {groups.map((group) => (
                <div key={group.label} className="flex flex-wrap gap-x-2 gap-y-1 items-baseline">
                  <span className="font-label-mono text-[10px] text-primary uppercase">
                    {group.label}:
                  </span>
                  <span className="font-body-md text-body-md text-sm text-on-surface-variant">
                    {group.skills.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-label-mono text-label-mono text-terminal-gray uppercase tracking-widest border-b-2 border-border-main pb-2 mb-4">
              {resume("education")}
            </h2>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              {t("educationDegree")} — {t("educationSchool")}
            </h3>
            <p className="font-label-mono text-[10px] text-terminal-gray mt-1">
              {t("educationYear")}
            </p>
            <p className="font-body-md text-body-md text-sm text-on-surface-variant mt-2">
              {t("educationDesc")}
            </p>
          </section>

          <section>
            <h2 className="font-label-mono text-label-mono text-terminal-gray uppercase tracking-widest border-b-2 border-border-main pb-2 mb-4">
              {t("certifications")}
            </h2>
            <ul className="flex flex-col gap-1.5 font-body-md text-body-md text-sm text-on-surface-variant">
              <li>• {t("cert1")} — {t("cert1Issuer")}</li>
              <li>• {t("cert2")} — {t("cert2Issuer")}</li>
              <li>• {t("cert3")} — {t("cert3Issuer")}</li>
              <li>• {t("award1")}</li>
              <li>• {t("award2")}</li>
              <li>• {t("award3")}</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}
