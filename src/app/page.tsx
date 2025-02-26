import Link from "next/link";
import React from "react";
import { getPosts } from "@/lib/api";

interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}


export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">List Blog posts</h1>
      <div className="flex flex-col gap-5">
        {posts.map((post: Post) => (
          <div key={post.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
