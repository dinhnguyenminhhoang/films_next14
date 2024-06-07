'use client'
import { fetcher } from '@/helper'
import { cn } from '@/lib/utils'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import useSWR, { mutate } from 'swr'
import Slideshow from '../SlideCard/SlideCard'
const Trending = () => {
    const [tagetTrending, settagetTrending] = useState<string>('day')
    const { data, error } = useSWR(
        `/3/trending/movie/${tagetTrending}?language=en-US`,
        fetcher,
    )
    const handleToggle = (period: string) => {
        if (period !== tagetTrending) {
            settagetTrending(period)
            mutate(`/3/trending/movie/${period}?language=en-US`)
        }
    }
    return (
        <Box className="background-img">
            <Box className="ml-4 flex items-center gap-4">
                <Typography variant="h5" fontWeight={'bold'}>
                    Trending
                </Typography>
                <Box className="slider-container relative flex items-center overflow-hidden rounded-full border border-primary">
                    <Box
                        className="slider-indicator rounded-full bg-primary text-primary-foreground"
                        style={{
                            transform:
                                tagetTrending === 'day'
                                    ? 'translateX(0)'
                                    : 'translateX(100%)',
                            width: '50%',
                        }}
                    />
                    <Typography
                        component={'button'}
                        onClick={() => handleToggle('day')}
                        variant="h6"
                        className={cn(
                            'relative z-10 min-w-20 cursor-pointer rounded-full px-4 py-2 text-sm',
                            tagetTrending === 'day'
                                ? 'text-primary-foreground'
                                : 'text-primary transition-all duration-75 ease-in-out',
                        )}
                    >
                        Today
                    </Typography>
                    <Typography
                        component={'button'}
                        onClick={() => handleToggle('week')}
                        variant="h6"
                        className={cn(
                            'relative z-10 min-w-20 cursor-pointer rounded-full px-4 py-2 text-sm',
                            tagetTrending === 'week'
                                ? 'text-primary-foreground'
                                : 'text-primary transition-all duration-75 ease-in-out',
                        )}
                    >
                        This Week
                    </Typography>
                </Box>
            </Box>
            <Slideshow movies={data?.results} />
        </Box>
    )
}

export default Trending
