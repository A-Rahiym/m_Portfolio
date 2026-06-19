"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useBlogPost, useRelatedPosts } from "@/src/entities/blog/api";

interface BlogArticleContentProps {
  slug: string;
}

export function BlogArticleContent({ slug }: BlogArticleContentProps) {
  const t = useTranslations("blog");
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: related } = useRelatedPosts(slug);

  if (isLoading) {
    return (
      <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto overflow-x-hidden h-full">
        <div className="flex items-center justify-center py-40">
          <span className="font-label-mono text-label-mono text-terminal-gray animate-pulse">
            LOADING_LOG...
          </span>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto overflow-x-hidden h-full">
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <span className="font-headline-lg text-headline-lg text-terminal-gray">
            LOG_NOT_FOUND
          </span>
          <Link
            href="/blog"
            className="font-label-mono text-label-mono border-2 border-primary text-primary px-4 py-2 hover:bg-primary hover:text-on-primary-container transition-all uppercase"
          >
            BACK_TO_LOGS
          </Link>
        </div>
      </main>
    );
  }

  const sectionLabels = [
    "01_INTRODUCTION",
    "02_CORE_CONCEPTS",
    "03_DETAILED_ANALYSIS",
    "04_EXECUTION_SUMMARY",
  ];

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 pb-16 overflow-y-auto overflow-x-hidden h-full">
      <div className="max-w-[1400px] mx-auto min-w-0">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 font-label-mono text-label-mono flex-wrap">
          <span className="text-terminal-gray">LOG_ROOT</span>
          <span className="text-terminal-gray">/</span>
          <Link href="/blog" className="text-terminal-gray hover:text-primary transition-colors">
            LATEST_LOGS
          </Link>
          <span className="text-terminal-gray">/</span>
          <span className="text-primary">{post.slug.toUpperCase()}</span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 min-w-0">
          {/* Left: Article Content */}
          <article className="col-span-12 lg:col-span-8 flex flex-col gap-4 md:gap-6 lg:gap-8 min-w-0">
            {/* Header Card */}
            <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/10 pointer-events-none" />
              <h1 className="font-headline-xl text-headline-xl text-primary mb-6 leading-tight uppercase tracking-tighter break-words md:text-headline-lg">
                {post.title}
              </h1>
              {/* Metadata Tile */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 border-t-2 border-border-main pt-4 md:pt-6">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-terminal-gray uppercase">
                    Timestamp
                  </span>
                  <span className="font-label-mono text-[14px] text-on-surface">
                    {post.date}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-terminal-gray uppercase">
                    Cycle_Time
                  </span>
                  <span className="font-label-mono text-[14px] text-on-surface">
                    {post.readTime}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-terminal-gray uppercase">
                    Category
                  </span>
                  <span className="font-label-mono text-[14px] text-on-surface">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] text-terminal-gray uppercase">
                    Access_Level
                  </span>
                  <span className="font-label-mono text-[14px] text-primary">
                    PUBLIC_ROOT
                  </span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            {post.imageUrl && (
              <div className="bg-surface-elevated border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] h-48 md:h-64 lg:h-96 relative group overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.imageUrl})` }}
                />
                <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 border border-primary font-label-mono text-[10px] text-primary">
                  VISUAL_DATA_REP
                </div>
              </div>
            )}

            {/* Sections */}
            {sectionLabels.map((label, i) => (
              <section
                key={label}
                className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
              >
                <div className="h-8 border-b-2 border-border-main bg-surface-container flex items-center px-4 justify-between">
                  <span className="font-label-mono text-label-mono text-primary uppercase">
                    {label}
                  </span>
                  <span className="w-3 h-3 rounded-full bg-border-main" />
                </div>
                <div className="p-4 md:p-6 lg:p-8 font-body-md text-body-md leading-relaxed space-y-4">
                  <p>
                    {post.description}
                  </p>
                  <p>
                    This section explores the key concepts and strategies used
                    to achieve the results described. Each approach is evaluated
                    based on real-world production constraints and performance
                    benchmarks.
                  </p>
                </div>
              </section>
            ))}
          </article>

          {/* Right: Sidebar */}
          <aside className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 lg:gap-8 min-w-0">
            {/* System Metrics */}
            <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="h-10 border-b-2 border-border-main bg-primary text-on-primary-container flex items-center px-4 gap-2">
                <span className="font-label-mono text-label-mono font-bold uppercase">
                  SYSTEM_METRICS
                </span>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <span className="font-label-mono text-label-mono text-terminal-gray">
                    VIEW_COUNT
                  </span>
                  <span className="font-headline-lg text-headline-lg text-primary">
                    12,842
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-1">
                  <div className="bg-primary h-full w-[75%]" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-label-mono text-label-mono text-terminal-gray">
                    DATA_SHARES
                  </span>
                  <span className="font-headline-lg text-headline-lg text-primary">
                    431
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="h-10 border-b-2 border-border-main bg-surface-container flex items-center px-4">
                <span className="font-label-mono text-label-mono text-primary uppercase">
                  KEYWORDS_INDEX
                </span>
              </div>
              <div className="p-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 border border-border-main font-label-mono text-[10px] text-terminal-gray hover:text-primary hover:border-primary cursor-pointer"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            {related && related.length > 0 && (
              <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="h-10 border-b-2 border-border-main bg-surface-container flex items-center px-4">
                  <span className="font-label-mono text-label-mono text-primary uppercase">
                    RELATED_LOGS
                  </span>
                </div>
                <div className="p-0">
                  {related.map((r, i) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className={`block p-4 ${
                        i < related.length - 1 ? "border-b border-border-main" : ""
                      } hover:bg-surface-elevated group transition-colors`}
                    >
                      <span className="font-label-mono text-[10px] text-terminal-gray block mb-1">
                        LOG_{String(1000 + related.indexOf(r)).padStart(4, "0")}
                      </span>
                      <h4 className="font-label-mono text-[13px] text-on-surface group-hover:text-primary">
                        {r.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Subscribe Card */}
            <div className="bg-surface-elevated border-2 border-primary shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              <h3 className="font-label-mono text-label-mono text-primary mb-2 uppercase font-bold">
                SUBSCRIBE_TO_LOGS
              </h3>
              <p className="font-label-mono text-label-mono text-terminal-gray mb-4">
                Receive technical breakdowns directly to your terminal.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  className="bg-surface border-2 border-border-main font-label-mono text-label-mono px-4 py-2 focus:ring-0 focus:border-primary text-primary placeholder:text-terminal-gray/40"
                  placeholder="USER@DOMAIN.COM"
                  type="email"
                />
                <button className="bg-primary text-on-primary-container font-label-mono text-label-mono font-bold py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase">
                  INITIALIZE_CONNECTION
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
