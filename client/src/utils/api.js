import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export const endPoint = {
    createNewAccount: "/user/signUp",
    login: "/user/signIn",
    forgotPassword: "/user/forget",
    changePassForget: "/user/changePassForget",
    getAllMovie: '/films',
    getMovieById: '/films/',
    getAllCities: '/cities?order=id',
    getShowTimes: '/showTimesDFS'
}

export default AxiosInstance;