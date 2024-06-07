import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MovieType } from '@/lib/type'
import Slider from 'react-slick'
import { Box, Container, Grid } from '@mui/material'
import CardCpn from '../Card/Card'
const Slideshow = ({ movies }: { movies: MovieType[] }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Box className="mt-4 sm:w-[1000px] md:w-[1400px]">
            <Slider {...settings}>
                {movies?.map((movie) => (
                    <CardCpn data={movie} key={movie.id} />
                ))}
            </Slider>
        </Box>
    )
}

export default Slideshow
