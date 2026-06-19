import Link from "next/link";
import type { BlogPost } from "@/src/entities/blog/types";

const shadowColors = [
  "#32E6E2",
  "#5A8CFF",
  "#FF6B6B",
  "#FFD93D",
  "#C084FC",
  "#F97316",
  "#2DD4BF",
  "#FB923C",
];

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const color = shadowColors[index % shadowColors.length];

  return (
    <article className="group relative press-down">
      <div
        className="absolute inset-0 -z-10 transition-all duration-200"
        style={{
          backgroundColor: color,
          transform: "translate(6px, 6px)",
        }}
      />
      <div className="bg-surface border-2 border-black p-4 md:p-6 relative overflow-hidden">
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-mono text-label-mono text-on-primary-container bg-primary px-2 py-0.5">
                {post.category}
              </span>
              <time className="font-label-mono text-label-mono text-terminal-gray">
                {post.date}
              </time>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-3 break-words">
              {post.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 break-words">
              {post.description}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Link
              href={`/blog/${post.slug}`}
              className="font-label-mono text-label-mono border-2 border-primary text-primary px-4 py-2 hover:bg-primary hover:text-on-primary-container transition-all uppercase"
            >
              Open_Thread
            </Link>
            <div className="flex gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 border border-border-main font-label-mono text-[10px] text-terminal-gray"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
