import Link from "next/link";
import React from "react";

const getPost = async (id: string) => {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    return response.json();
};

const BlogDetail = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const post = await getPost(id);

    return (
        <div className="min-h-screen p-8">
            <Link href='/' className="mb-4"> ← Back</Link>
            <div className="pt-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <p className="pt-2">{post.body}</p>
            </div>
        </div>
    );
};

export default BlogDetail;