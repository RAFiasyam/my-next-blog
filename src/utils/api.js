import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2";
const ACCESS_TOKEN = 'f8e648bf1098f921ec15dc670462850c666f0d9885fb37eee07fefded1344523';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
});

export const fecthPosts = async () => {
    const response = await api.get("/posts");
    return response.data;
};