import {Swiper, SwiperSlide} from "swiper/react";

import Image from 'next/image'
import { choferes } from '../data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import LoadingContainer from "./LoadingContainer";


const CarouselNosotros = () => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "var(--primary)",
                "--swiper-pagination-color": "var(--primary)",
            }}
            slidesPerView={1}
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
            modules={[ Pagination, Navigation]}
        >
            {
                choferes.map( chofer => (
                    <SwiperSlide key={chofer.id}> 
                        <div className="SliderContainer">
                            <LoadingContainer>
                                <Image
                                    priority
                                    blurDataURL="blur"
                                    layout="fill"
                                    objectFit="cover"
                                    src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725725/taxiseguro/choferes/${chofer.src}`}
                                    alt={`imagen de chofer`}
                                />
                            </LoadingContainer>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default CarouselNosotros;