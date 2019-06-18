import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
    }
});

export const endPoint = {
    login: "/admin/signIn",
   
}

export default AxiosInstance;