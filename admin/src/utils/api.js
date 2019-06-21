import axios from "axios";
const AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 5000,
    headers: {}
});

export const endPoint = {
    singin: "/api/admin/signIn",
    forgotPassword: "/user/forget",
    changePassForget: "/user/changePassForget",
    getAllMovie: "/films",
    getMovieById: "/films/",
    getAllCities: "/cities?order=id",
    getShowTimes: "/showTimesDFS"
};

export default AxiosInstance;
