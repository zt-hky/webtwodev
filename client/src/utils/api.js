import axios from 'axios';
const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 5000,
    headers: {
        "Content-Type": "Application/json"
        
    }
});

export const endPoint = {
    createNewAccount:"/user/signUp",
    login:"user/signIn"
}



export default AxiosInstance;