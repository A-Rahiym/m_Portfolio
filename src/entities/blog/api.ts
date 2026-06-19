"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import type { BlogPost } from "./types";

const PLACEHOLDER_POSTS: BlogPost[] = [
  {
    slug: "optimizing-react-performance",
    title: "Optimizing React Performance",
    description:
      "Deep dive into React memoization, code splitting, and rendering optimization strategies for large-scale applications where every millisecond counts.",
    category: "SYSTEM DESIGN",
    tags: ["react", "performance", "optimization"],
    date: "MAR_15_2025",
    readTime: "8 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    imageAlt: "React performance optimization diagram",
  },
  {
    slug: "building-with-react-native",
    title: "Building with React Native",
    description:
      "Thoughts on cross-platform mobile development with Expo, shared navigation patterns, and bridging native modules for production apps.",
    category: "MOBILE",
    tags: ["react-native", "expo", "mobile"],
    date: "FEB_28_2025",
    readTime: "6 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    imageAlt: "Mobile development workspace",
  },
  {
    slug: "accessibility-first-design",
    title: "Accessibility First Design",
    description:
      "Designing voice-first interfaces for visually impaired users. Exploring screen reader patterns, focus management, and ARIA best practices.",
    category: "DESIGN",
    tags: ["a11y", "design", "inclusive"],
    date: "JAN_10_2025",
    readTime: "5 MIN READ",
  },
  {
    slug: "fine-tuning-whisper",
    title: "Fine-Tuning Whisper for ASR",
    description:
      "A technical walkthrough of fine-tuning OpenAI's Whisper model on low-resource African languages using LoRA and the Hugging Face ecosystem.",
    category: "AI",
    tags: ["whisper", "asr", "transformers"],
    date: "DEC_05_2024",
    readTime: "10 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    imageAlt: "AI model training visualization",
  },
  {
    slug: "tailwind-css-v4-migration",
    title: "Tailwind CSS v4 Migration Guide",
    description:
      "Everything you need to know about migrating from Tailwind v3 to v4: new CSS-first config, `@theme` directive, and breaking changes.",
    category: "SYSTEM DESIGN",
    tags: ["tailwind", "css", "migration"],
    date: "NOV_20_2024",
    readTime: "7 MIN READ",
  },
  {
    slug: "react-native-reanimated",
    title: "React Native Reanimated 3",
    description:
      "Building silky-smooth animations with React Native Reanimated 3. Worklets, shared values, and gesture-driven interactions explained.",
    category: "MOBILE",
    tags: ["react-native", "animations", "reanimated"],
    date: "OCT_12_2024",
    readTime: "6 MIN READ",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    imageAlt: "Mobile app animation concept",
  },
];

const POSTS_MAP = new Map(PLACEHOLDER_POSTS.map((p) => [p.slug, p]));

function delay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchAllPosts(): Promise<BlogPost[]> {
  await delay();
  return PLACEHOLDER_POSTS;
}

async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  await delay(200);
  return POSTS_MAP.get(slug) ?? null;
}

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", "posts"],
    queryFn: fetchAllPosts,
  });
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost | null>({
    queryKey: ["blog", "post", slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });
}

export function useRelatedPosts(currentSlug: string, limit = 3) {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", "related", currentSlug],
    queryFn: async () => {
      await delay(200);
      return PLACEHOLDER_POSTS.filter((p) => p.slug !== currentSlug).slice(
        0,
        limit
      );
    },
    enabled: !!currentSlug,
  });
}

export function useCategories() {
  return useQuery<string[]>({
    queryKey: ["blog", "categories"],
    queryFn: async () => {
      await delay(100);
      return [...new Set(PLACEHOLDER_POSTS.map((p) => p.category))];
    },
  });
}

export type CreateBlogPostInput = Omit<BlogPost, "slug"> & { slug?: string };

export function useCreatePost() {
  return useMutation({
    mutationFn: async (input: CreateBlogPostInput) => {
      await delay(500);
      console.log("Created post:", input);
      return { ...input, slug: input.slug ?? input.title.toLowerCase().replace(/\s+/g, "-") };
    },
  });
}
