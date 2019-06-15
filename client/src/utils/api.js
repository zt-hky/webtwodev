import axios from 'axios';

class Api {
    constructor() {
        this.instane = null;
    }
    getInstance = () => {
        if (this.instane === null) {
            this.instane = axios.create({
                baseURL: 'http://localhost:5000/api',
                timeout: 5000,
                headers: {
                    "Content-Type": "Application/json"
                }
            });
        }
        return this.instane;

    }
}
export default Api;