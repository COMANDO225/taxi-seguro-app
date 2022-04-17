// react swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// componentes
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";
import { autos } from '../../data'

// estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Flota = () => {


    return (
        <section className="section flota" id='flota'>
            <div className="wrapper">
                <SectionHeader subtitle={'presentamos'}>nuestra flota</SectionHeader>
                <p className="section_parraf">En Taxi Seguro tenemos una amplia gama de vehiculos para brindarte una buena experiencia en calidad de servicio, seguridad, protocolos de bioseguridad y más.</p>
            </div>
            <div className="section_body">
                <div className="slider_layout">

                    <Swiper
                        // className="taxiSeguro_swiper"
                        
                        loop={true}
                        slidesPerView={1}
                        centeredSlides={true}
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
                                            subtitle = {producto.subtitle}
                                            description = {producto.description}
                                            price = {producto.price}
                                            enlace = {producto.enlace}
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