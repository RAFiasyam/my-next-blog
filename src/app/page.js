'use client';

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../utils/api";
import { Card, Spin } from "antd";

export default function Home() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Spin size="large" className="flex justify-center mt-10" />;
  if (error) return <p className="text-red-500">Error loading posts</p>;

  return (
    <div className="grid gap-4 m-20">
      <h1 className="text-2xl font-bold">Lists Blog</h1>
      {posts?.map((post) => (
        <Card key={post.id} title={post.title} className="shadow-md">
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  )
}
