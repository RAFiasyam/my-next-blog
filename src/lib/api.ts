import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2/posts";
const API_TOKEN = "f8e648bf1098f921ec15dc670462850c666f0d9885fb37eee07fefded1344523";

export const getPosts = async () => {
    try {
        const respone = await axios.get(API_URL);
        return respone.data;
    } catch (error) {
        console.error("Error fecth post: ", error);
        return [];
    }
};