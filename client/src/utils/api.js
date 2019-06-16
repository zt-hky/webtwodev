import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Headers":"application/x-www-form-urlencoded",
    }
});

export const endPoint = {
    createNewAccount: "/user/signUp",
    login: "/user/signIn",
    forgotPassword: "/user/forget",
    changePassForget: "/user/changePassForget"
}



export default AxiosInstance;