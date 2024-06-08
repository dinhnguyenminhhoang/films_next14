import { MovieType } from '@/lib/type'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface SlideItemProps {
    data: MovieType
}

interface SlideshowProps {
    data: MovieType[]
    SlideItem: React.ComponentType<SlideItemProps>
}

const Slideshow = ({ data, SlideItem }: SlideshowProps) => {
    const settings = {
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
                {data?.map((item: MovieType) => (
                    <SlideItem data={item} key={item.id} />
                ))}
            </Slider>
        </Box>
    )
}

export default Slideshow
