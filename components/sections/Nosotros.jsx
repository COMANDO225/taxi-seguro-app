import CarouselNosotros from "../CarouselNosotros";
import LoadingContainer from "../LoadingContainer";
import SectionHeader from "../SectionHeader";
import Image from 'next/image'


const Nosotros = ({nosotrosBreak}) => {



    return (
        <section className="section" id="nosotros">
            <div className="wrapper">
                <div className="dual_grid">
                    <div className="nosotros_img_container">
                        <LoadingContainer>
                            <Image
                                draggable={"false"}
                                layout="fill"
                                objectFit="cover"
                                src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725599/taxiseguro/logomockup_faydtp.jpg'}
                                alt="imagen logo de taxi seguro"
                            />
                        </LoadingContainer>
                    </div>
                    <div className="nosotros_info">
                        <SectionHeader subtitle={'quienes somos'} orientation={nosotrosBreak && 'start'}>Nosotros</SectionHeader>
                        <div className="nostros_parraf">
                            <p>Somos una empresa formal dedicada y especializada en el servicio de movilidad en toda la ciudad de Lima y fuera.</p>
                            <p>Nuestros conductores y unidades están altamente calificados y certificados para brindar a nuestros clientes un servicio 
                                de excelencia y calidad, seguimos las medidas de protección y Bioseguridad, según <strong>DS N° N° 044-2020-PCM.</strong></p>
                            <p>
                                Contamos con Unidades desinfectadas, monitoreadas con GPS y todos los protocolos de bioseguridad que aseguran un viaje placentero en cada recorrido.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="conocenos_container">
                    <h2>conócenos</h2>
                    <CarouselNosotros/>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;