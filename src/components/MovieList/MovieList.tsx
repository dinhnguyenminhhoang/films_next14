'use client'
import { fetcher } from '@/helper'
import { MovieType } from '@/lib/type'
import { Box, Grid, Typography } from '@mui/material'
import useSWR from 'swr'
import CardMovie from '../Card/CardMovie'
import Spinner from '../Spinner/Spinner'
import PaginationList from '../Pagination/PaginationList'
import { useState } from 'react'

const MovieList = () => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const { data, error } = useSWR(
        `/3/movie/upcoming?language=en-US&page=${currentPage}`,
        fetcher,
    )
    return (
        <Box>
            <Typography variant="h5" className="my-4 ml-4 font-bold">
                Phim mới
            </Typography>
            <Grid container spacing={2}>
                {data && data.results.length > 0 ? (
                    data.results.map((movie: MovieType) => (
                        <Grid item xs={2} key={movie.id}>
                            <CardMovie data={movie} />
                        </Grid>
                    ))
                ) : (
                    <Spinner />
                )}
            </Grid>
            {data ? (
                <PaginationList
                    totalPage={data?.total_pages as number}
                    page={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : (
                <Spinner />
            )}
        </Box>
    )
}
export default MovieList
