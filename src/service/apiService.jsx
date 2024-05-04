import axios from 'axios';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => config, (error) => Promise.reject(error)
);
