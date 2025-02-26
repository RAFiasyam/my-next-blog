import React from "react";

const getPost = async (id: string) => {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${id}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    return response.json();
};

const BlogDetail = async ({ params }: { params: { id: string } }) => {
    const {id} = await params;
    const post = await getPost(params.id);

    return (
        <div className="min-h-screen p-8 pb-20">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-4">{post.body}</p>
        </div>
    );
};

export default BlogDetail;