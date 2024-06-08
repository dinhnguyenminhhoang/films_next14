'use client'
import { fetcher } from '@/helper'
import { cn } from '@/lib/utils'
import { Box, Typography } from '@mui/material'
import { useState, memo } from 'react'
import useSWR, { mutate } from 'swr'
import Slideshow from '../SlideCard/SlideCard'
import CardCpn from '../Card/Card'
interface ResuableSlideProp {
    title: string
    data: any
    state: string
    changeState: (value: string) => void
    option: string[]
}
const ResuableSlide: React.FC<ResuableSlideProp> = ({
    title,
    data,
    state,
    changeState,
    option,
}) => {
    return (
        <Box className="background-img">
            <Box className="ml-4 flex items-center gap-4">
                <Typography variant="h5" fontWeight={'bold'}>
                    {title}
                </Typography>
                <Box className="slider-container relative flex items-center overflow-hidden rounded-full border border-primary">
                    <Box
                        className="slider-indicator rounded-full bg-primary text-primary-foreground"
                        style={{
                            transform:
                                state === option[0]
                                    ? 'translateX(0)'
                                    : 'translateX(100%)',
                            width: '50%',
                        }}
                    />
                    <Typography
                        component={'button'}
                        onClick={() => changeState(option[0])}
                        variant="h6"
                        className={cn(
                            'relative z-10 min-w-20 cursor-pointer rounded-full px-4 py-2 text-sm',
                            state === option[0]
                                ? 'text-primary-foreground'
                                : 'text-primary transition-all duration-75 ease-in-out',
                        )}
                    >
                        {option[0]}
                    </Typography>
                    <Typography
                        component={'button'}
                        onClick={() => changeState(option[1])}
                        variant="h6"
                        className={cn(
                            'relative z-10 min-w-20 cursor-pointer rounded-full px-4 py-2 text-sm',
                            state === option[1]
                                ? 'text-primary-foreground'
                                : 'text-primary transition-all duration-75 ease-in-out',
                        )}
                    >
                        {option[1]}
                    </Typography>
                </Box>
            </Box>
            <Slideshow data={data?.results} SlideItem={CardCpn} />
        </Box>
    )
}

export default memo(ResuableSlide)
