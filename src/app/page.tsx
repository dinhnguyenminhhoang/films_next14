'use client'
import { fetcher } from '@/helper'
import Image from 'next/image'
import { env } from 'process'
import Container from '@mui/material/Container'
import useSWR from 'swr'
export default function Home() {
    const { data, error } = useSWR(
        '/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        fetcher,
    )
    return <Container className="h-screen w-screen bg-[#000]"></Container>
}
