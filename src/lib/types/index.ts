export interface Category {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  post: string;
  name: string;
  content: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: Category;
  image_url: string;
  created_at: string;
  slug: string;
  comments: Comment[];
}

export interface AuthResponse {
  access: string;
  refresh: string;
}
