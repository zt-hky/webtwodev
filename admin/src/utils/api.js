import axios from "axios";

var token = localStorage.getItem("token");

const AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 5000,
    headers: { Authorization: token }
});

export const endPoint = {
    singin: "/api/admin/signIn",
    cites: "/api/cities"
};

export default AxiosInstance;
