"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useBlogPosts, useCategories } from "@/src/entities/blog/api";
import { BlogCard } from "@/src/widgets/blog/BlogCard";

export function BlogFeedContent() {
  const t = useTranslations("blog");
  const { data: posts, isLoading } = useBlogPosts();
  const { data: categories } = useCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? (posts ?? []).filter((p) => p.category === activeCategory)
    : (posts ?? []);

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto overflow-x-hidden h-full">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 min-w-0">
        {/* Category Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="bg-surface-elevated border-2 border-border-main p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-border-main pb-2">
              <span className="w-5 h-5 border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-label-mono text-[10px]">#</span>
              </span>
              <h2 className="font-label-mono text-label-mono tracking-widest text-primary">
                CATEGORIES
              </h2>
            </div>
            <ul className="space-y-4 font-label-mono text-label-mono text-on-surface-variant">
              <li>
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`flex items-center justify-between w-full hover:text-primary transition-colors ${
                    !activeCategory ? "text-primary" : ""
                  }`}
                >
                  <span>ALL_ARCHIVES</span>
                  <span className="text-terminal-gray">[{posts?.length ?? 0}]</span>
                </button>
              </li>
              {categories?.map((cat) => {
                const count = posts?.filter((p) => p.category === cat).length ?? 0;
                return (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between w-full hover:text-primary transition-colors ${
                        activeCategory === cat ? "text-primary" : ""
                      }`}
                    >
                      <span>{cat}</span>
                      <span className="text-terminal-gray">[{String(count).padStart(2, "0")}]</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Feed */}
        <div className="col-span-12 lg:col-span-9">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
              LATEST_LOGS
            </h2>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary animate-pulse" />
              <span className="font-label-mono text-label-mono text-terminal-gray uppercase">
                Stream: Active
              </span>
            </div>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <span className="font-label-mono text-label-mono text-terminal-gray animate-pulse">
                LOADING_LOGS...
              </span>
            </div>
          )}

          <div className="space-y-10">
            {filtered.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {filtered.length === 0 && !isLoading && (
            <p className="font-label-mono text-label-mono text-terminal-gray text-center py-20">
              NO_LOGS_FOUND
            </p>
          )}

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center border-2 border-border-main text-terminal-gray hover:border-primary hover:text-primary transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-primary bg-primary text-on-primary-container font-label-mono text-label-mono">
              01
            </button>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-border-main text-terminal-gray hover:border-primary hover:text-primary font-label-mono text-label-mono transition-all">
              02
            </button>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-border-main text-terminal-gray hover:border-primary hover:text-primary font-label-mono text-label-mono transition-all">
              03
            </button>
            <span className="text-terminal-gray">...</span>
            <button className="w-12 h-12 flex items-center justify-center border-2 border-border-main text-terminal-gray hover:border-primary hover:text-primary transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
