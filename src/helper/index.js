import axiosInstance from '@/config/axiosInstance';

export const fetcher = (...args) =>
    axiosInstance(...args).then((response) => response.data);
