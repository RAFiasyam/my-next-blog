import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2/posts";
const API_TOKEN = "f8e648bf1098f921ec15dc670462850c666f0d9885fb37eee07fefded1344523";

export const getPosts = async (page: number = 1) => {
    const response = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}&per_page=15`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
};