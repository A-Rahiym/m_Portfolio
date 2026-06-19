import { PixelIcon } from "@/src/components/icons/PixelIcon";

export default function BlogPage() {
  return (
    <main className="grow md:ml-70 mt-16 md:mt-0 p-4 md:p-8 overflow-y-auto overflow-x-hidden h-full">
      <div className="max-w-6xl mx-auto min-w-0">
        <div className="bg-surface border-2 border-border-main flex items-center px-8 py-6 mb-10">
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-primary text-on-primary-container px-2 py-0.5 font-label-mono text-[10px]">BLOG</span>
                <span className="font-label-mono text-[10px] text-terminal-gray">v1.0</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary">Blog</h1>
              <p className="font-label-mono text-label-mono text-terminal-gray">Notes on frontend engineering, mobile development, and accessibility.</p>
            </div>
          </div>
        </div>

        <div className="bg-surface border-2 border-border-main shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-12 flex flex-col items-center justify-center text-center gap-6">
          <div className="w-16 h-16 border-2 border-primary bg-surface-container flex items-center justify-center">
            <PixelIcon name="blog" size={32} color="#32E6E2" />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">COMING SOON</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Blog posts are being drafted. Check back for articles on frontend engineering, mobile development, and AI.
          </p>
          <div className="flex gap-2 mt-2">
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full animation-delay-200" />
            <span className="w-2 h-2 bg-primary animate-pulse rounded-full animation-delay-400" />
          </div>
        </div>
      </div>
    </main>
  );
}
