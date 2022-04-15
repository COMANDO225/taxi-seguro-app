

// react swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// componentes
import ProductCard from "../ProductCard";
import SectionHeader from "../SectionHeader";

// estilos swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Flota = () => {




    return (
        <section className="section">
            <div className="wrapper">
                <SectionHeader subtitle={'presentamos'}>nuestra flota</SectionHeader>
                <p className="section_parraf">En Taxi Seguro tenemos una amplia gama de vehiculos para brindarte una buena experiencia en calidad de servicio, seguridad, protocolos de bioseguridad y más.</p>
            </div>
            <div className="section_body">
                <div className="slider_layout">

                    <Swiper
                        loop={true}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                    </Swiper>
                    
                </div>
            </div>
        </section>
    );
}

export default Flota;