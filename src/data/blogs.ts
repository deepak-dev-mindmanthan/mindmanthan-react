import blogPosts from "./blogs.json";
import { CONTENT_CONFIG } from "../config/contentConfig";

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  author?: string;
  date: string;
  excerpt: string;
  content: string;
}

export const BLOG_POSTS = (blogPosts as BlogPost[]).map((blog) => ({
  ...blog,
  author: blog.author?.trim() || CONTENT_CONFIG.company.blogAuthor,
}));

export const BLOGS_BY_ID: Record<number, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((blog) => [blog.id, blog]),
) as Record<number, BlogPost>;

export const getBlogById = (id: number) => BLOGS_BY_ID[id];

