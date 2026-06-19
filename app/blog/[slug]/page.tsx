import { notFound } from "next/navigation";

const slugs = [
  "optimizing-react-performance",
  "building-with-react-native",
  "accessibility-first-design",
  "fine-tuning-whisper",
  "tailwind-css-v4-migration",
  "react-native-reanimated",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | Abdulrahman Abdulrahim`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!slugs.includes(slug)) {
    notFound();
  }

  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto overflow-x-hidden h-full">
      <div className="max-w-[1400px] mx-auto min-w-0">
        <div className="flex items-center gap-2 mb-8 font-label-mono text-label-mono flex-wrap">
          <span className="text-terminal-gray">LOG_ROOT</span>
          <span className="text-terminal-gray">/</span>
          <a href="/blog" className="text-terminal-gray hover:text-primary transition-colors">
            LATEST_LOGS
          </a>
          <span className="text-terminal-gray">/</span>
          <span className="text-primary">{slug.toUpperCase()}</span>
        </div>

        <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 flex flex-col items-center justify-center text-center gap-6">
          <div className="w-16 h-16 border-2 border-primary bg-surface-container flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">COMING SOON</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            This article is being written. Check back soon for the full post.
          </p>
          <a
            href="/blog"
            className="font-label-mono text-label-mono border-2 border-primary text-primary px-4 py-2 hover:bg-primary hover:text-on-primary-container transition-all uppercase mt-2"
          >
            BACK_TO_LOGS
          </a>
        </div>
      </div>
    </main>
  );
}
