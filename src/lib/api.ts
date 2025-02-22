import { AuthResponse, Post } from "./types";

const API_BASE_URL = "https://artistic-insights-alley-api.onrender.com/api";

export default async function fetchPost(): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
// fetch a single post by slug
export async function fetchPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
  if (!response.ok) throw new Error("Error to fetch post");
  return response.json();
}

// user login

export async function loginUser(credentials: {
  email: string;
  password: string;
}): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error("Login  failed");
  return response.json();
}

// Add a comment
export async function addComment(
  postId: string,
  name: string,
  content: string
): Promise<Comment> {
  const response = await fetch(`${API_BASE_URL}/posts/comment/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ post: postId, name, content }),
  });

  if (!response.ok) throw new Error("Failed to post comment");

  return response.json();
}
