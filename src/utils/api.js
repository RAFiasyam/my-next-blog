import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2";
const ACCESS_TOKEN = 'f8e648bf1098f921ec15dc670462850c666f0d9885fb37eee07fefded1344523';

const USER_ID = 7740615;

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const fetchPosts = async () => {
    const response = await api.get(`/posts?user_id=${USER_ID}`);
    return response.data;
};

export const createPost = async (newPost) => {
    try {
        if (newPost.body.length > 255) {
            console.warn("Konten terlalu panjang, dipotong ke 255 karakter.");
            newPost.body = newPost.body.substring(0, 255);
        }
        const response = await api.post("/posts", newPost);
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error.response?.data || error.message);
        throw error;
    }
};

export const updatePost = async (id, updatedPost) => {
    const response = await api.put(`/posts/${id}`, updatedPost);
    return response.data;
}

export const deletePost = async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
}