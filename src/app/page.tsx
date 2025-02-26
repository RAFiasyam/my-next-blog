'use client'

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

interface Post {
  id: number;
  title: string;
}

export default function Home() {
  const [page, setPage] = useState(1)
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-semibold">List Blog Posts</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col gap-5">
          {posts.map((post : Post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read more →
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-row justify-between gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className=""
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
