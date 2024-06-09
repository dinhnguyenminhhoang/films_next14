import { MovieType } from '@/lib/type'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const CardMovie = ({ data }: { data: MovieType }) => {
    return (
        <Box className="w-40 min-w-40 cursor-pointer">
            <Box className="relative">
                <Image
                    blurDataURL="/img/default.jpg"
                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                    alt=""
                    width={160}
                    height={225}
                    className="h-60 w-40 rounded-md border border-border object-cover"
                />
                <Box className="absolute left-2 top-2 rounded-md bg-[rgba(255,0,0,.8)] px-2 py-1">
                    <Typography
                        variant="h6"
                        className="text-[12px] font-bold text-primary-foreground"
                    >
                        FULL HD
                    </Typography>
                </Box>
                <Box className="absolute -bottom-3 left-2 flex h-10 w-10 items-center justify-center rounded-full bg-black">
                    <Typography
                        variant="h6"
                        className="text-center text-xs font-bold text-primary-foreground"
                    >{`${Math.round((data.vote_average / 10) * 100)}%`}</Typography>
                </Box>
            </Box>
            <Typography
                variant="h6"
                className="mt-3 text-center text-[18px] font-bold"
                sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                }}
            >
                {data.original_title}
            </Typography>
        </Box>
    )
}
export default CardMovie
