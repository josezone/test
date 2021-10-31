import axios, { AxiosInstance } from 'axios';
let instance!: AxiosInstance;
export function api(BASE_URL: string): () => AxiosInstance {
    function SingletonClass() {
        return axios.create({
            baseURL: BASE_URL,
            withCredentials: true,
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }
    return () => {
        if (!instance) {
            instance = SingletonClass();
        }
        return instance;
    }

}

export default api;