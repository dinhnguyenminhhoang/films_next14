import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import dynamic from 'next/dynamic'
const Trending = dynamic(
    () => import('@/components/ResuableSlide/ResuableSlide'),
)
export default function Home() {
    return (
        <Container className="h-screen w-screen overflow-hidden">
            <Box className="my-10 flex items-center gap-2">
                <Trending />
            </Box>
        </Container>
    )
}
