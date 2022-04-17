import {Swiper, SwiperSlide} from "swiper/react";

import Image from 'next/image'
import { choferes } from '../data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const CarouselNosotros = () => {
    return (
        <Swiper
            slidesPerView={1}
            // slidesPerGroup={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            breakpoints={{
                650: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1100: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                }
            }}
            className={'nosotrosSwiper'}
            modules={[Pagination, Navigation]}
        >
            {
                choferes.map( chofer => (
                    <SwiperSlide key={chofer.id}> 
                        <div className="SliderContainer">
                            <Image
                                blurDataURL="blur"
                                layout="fill"
                                objectFit="cover"
                                src={chofer.src}
                                alt={`imagen de chofer`}
                            />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default CarouselNosotros;