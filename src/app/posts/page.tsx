import fetchPosts from "@/lib/api";
import { Post } from "@/lib/types";

export default async function PostsPage() {
  const posts: Post[] = await fetchPosts();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
