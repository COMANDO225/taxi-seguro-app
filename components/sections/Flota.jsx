// react swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// componentes
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { autos } from '../../data'

// estilos swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper";




const Flota = () => {


    return (
        <section className="section flota" id='flota'>
            <div className="wrapper">
                <SectionHeader subtitle={'presentamos'}>Nuestra Flota</SectionHeader>
                <p className="section_parraf">En Taxi Seguro tenemos una amplia gama de vehículos para brindarte una buena experiencia en calidad de servicio, seguridad, protocolos de bioseguridad y más.</p>
            </div>
            <div className="section_body">
                <div className="slider_layout">
                    <Swiper
                        className='flotaSwiper'
                        style={{
                            "--swiper-pagination-color": "var(--primary)",
                        }}
                        loop={true}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            820: {
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                            1830: {
                                slidesPerView: 5,
                            },
                            2400: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        {
                            autos.map( producto => (
                                <SwiperSlide key={producto.id}>
                                    <div className="card_container">
                                        <ProductCard
                                            name={producto.name}
                                            img = {producto.img}
                                            subtitle = {producto.subtitle}
                                            description = {producto.description}
                                            price = {producto.price}
                                            dolarprice={producto.dolarprice}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    
                </div>
            </div>
        </section>
    );
}

export default Flota;