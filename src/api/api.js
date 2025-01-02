import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:5000/api/v1/",
    baseURL: "https://pet-adoption-backend-9znb.onrender.com/api/v1/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;