import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
    }
});

export const endPoint = {
    createNewAccount: "/user/signUp",
    login: "/user/signIn",
    forgotPassword: "/user/forget",
    changePassForget: "/user/changePassForget",
    getAllMovie: '/films',
    getMovieById: '/films/',
    getAllCities: '/cities'
}

export default AxiosInstance;