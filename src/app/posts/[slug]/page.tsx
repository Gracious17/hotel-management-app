import { fetchPostBySlug } from "@/lib/api";
import { Post } from "@/lib/types";

interface PageProps {
  params: { slug: string };
}

export default async function PostDetail({ params }: PageProps) {
  const post: Post = await fetchPostBySlug(params.slug);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.content}</p>
      <p className="text-sm text-gray-500">Author: {post.author}</p>
    </div>
  );
}
