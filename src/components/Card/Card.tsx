import { MovieType } from '@/lib/type'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const CardCpn = ({ data }: { data: MovieType }) => {
    return (
        <Box className="] w-40 min-w-40 cursor-pointer">
            <Box className="relative">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                    alt=""
                    width={160}
                    height={225}
                    className="h-60 w-40 rounded-md border border-border object-cover"
                />
                <Box className="absolute -bottom-3 left-2 flex h-10 w-10 items-center justify-center rounded-full bg-black">
                    <Typography
                        variant="h6"
                        className="text-center text-xs font-bold text-primary-foreground"
                    >{`${Math.round((data.vote_average / 10) * 100)}%`}</Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h6" className="mt-8 text-[16px] font-bold">
                    {data.original_title}
                </Typography>
                <Typography
                    variant="h6"
                    className="mt-2 text-sm font-extralight text-slate-500"
                >
                    Đánh giá: {data.vote_average}
                </Typography>
            </Box>
        </Box>
    )
}
export default CardCpn
