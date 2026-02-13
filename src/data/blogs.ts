import blogPosts from "./blogs.json";

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
}

export const BLOG_POSTS = blogPosts as BlogPost[];

export const BLOGS_BY_ID: Record<number, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((blog) => [blog.id, blog]),
) as Record<number, BlogPost>;

export const getBlogById = (id: number) => BLOGS_BY_ID[id];
