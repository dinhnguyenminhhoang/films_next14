'use client'
import Spinner from '@/components/Spinner/Spinner'
import { fetcher } from '@/helper'
import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'
import useSWR, { mutate } from 'swr'
const ResuableSlide = dynamic(
    () => import('@/components/ResuableSlide/ResuableSlide'),
)
const OPTIONS = [
    ['day', 'week'],
    ['Rated', 'Popular'],
]
export default function Home() {
    const [tagetTrending, settagetTrending] = useState<string>(OPTIONS[0][0])
    const [movieMenu, setMovieMenu] = useState<string>(OPTIONS[1][0])
    const { data, error } = useSWR(
        `/3/trending/movie/${tagetTrending}?language=en-US`,
        fetcher,
    )
    const { data: datappl } = useSWR(
        `/3/movie/${movieMenu === OPTIONS[1][0] ? 'top_rated' : 'popular'}?language=en-US&page=1`,
        fetcher,
    )
    const handleToggleTreding = (period: string) => {
        if (period !== tagetTrending) {
            settagetTrending(period)
            mutate(`/3/trending/movie/${period}?language=en-US`)
        }
    }
    const handleTopMovie = (period: string) => {
        if (period !== movieMenu) {
            setMovieMenu(period)
            mutate(
                `/3/trending/movie/${period === OPTIONS[1][0] ? 'top_rated' : 'popular'}?language=en-US`,
            )
        }
    }
    return (
        <Container className="min-h-screen w-screen overflow-hidden">
            <Box className="my-10 flex flex-col gap-8">
                <Suspense fallback={<Spinner />}>
                    <ResuableSlide
                        title="Trending"
                        data={data}
                        state={tagetTrending}
                        changeState={handleToggleTreding}
                        option={OPTIONS[0]}
                    />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <ResuableSlide
                        title="Top Movie"
                        data={datappl}
                        state={movieMenu}
                        changeState={handleTopMovie}
                        option={OPTIONS[1]}
                    />
                </Suspense>
            </Box>
        </Container>
    )
}
