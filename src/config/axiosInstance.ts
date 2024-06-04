import axios from 'axios'
import { env } from 'process'

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.API_TOKEN_AUTHENTICATION}`,
        Accept: 'application/json',
    },
})

export default axiosInstance
