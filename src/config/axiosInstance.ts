import axios from 'axios'
import { env } from 'process'

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjBiMzkyOGVjMWM3YmU0NDAzYmIxZDU0NzY3N2NhNSIsInN1YiI6IjY2MzhlYjRkY2MyNzdjMDEyMzI0Mjc2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGjahVBPgDAfJuOM3QPv4UJhUbP6_rE5CjNCNwju3Fo`,
        Accept: 'application/json',
    },
})

export default axiosInstance
