export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content?: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  imageUrl?: string;
  imageAlt?: string;
}
