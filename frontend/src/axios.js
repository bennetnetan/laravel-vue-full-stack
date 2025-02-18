import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
    // Use the environment variable if available, otherwise fallback to http://localhost:8000
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true,
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            router.push({ name: 'login' });
        }
        return Promise.reject(error);
    }
);

export default axiosClient;