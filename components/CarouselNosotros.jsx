import {Swiper, SwiperSlide} from "swiper/react";

import Image from 'next/image'
import { choferes } from '../data'

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Lazy, Pagination, Navigation } from "swiper";
import LoadingContainer from "./LoadingContainer";


const CarouselNosotros = () => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "var(--primary)",
                "--swiper-pagination-color": "var(--primary)",
            }}
            lazy={true}
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
            modules={[Lazy, Pagination, Navigation]}
        >
            {
                choferes.map( chofer => (
                    <SwiperSlide key={chofer.id}> 
                        <div className="SliderContainer">
                            <LoadingContainer>
                                <Image
                                    blurDataURL="blur"
                                    layout="fill"
                                    objectFit="cover"
                                    src={chofer.src}
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