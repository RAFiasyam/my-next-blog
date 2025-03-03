import Link from "next/link";
import { api } from "../../../utils/api";


const PostDetail = async ({ params }) => {
    const { id } = params;

    try {
        const response = await api.get(`/posts/${id}`);
        const post = response.data;

        return (
            <div className="max-w-2xl mx-auto mt-10">
                <Link href={"/"} className="text-blue-600 hover:underline">
                    Go back
                </Link>
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p className="mt-4 text-gray-600">{post.body}</p>
            </div>
        );
    } catch (error) {
        return console.error("Error loading post: ", error);
    }
};

export default PostDetail;