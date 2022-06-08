// components
import SectionHeader from "../SectionHeader"
import InfoCard from "../InfoCard"
import Image from 'next/image'
import LoadingContainer from "../LoadingContainer"
import ButtonWhatsApp from '../ButtonWhatsApp'

// icons
import AvionIcon from "../icons/AvionIcon"
import CourierIcon from '../icons/CourierIcon'
import MapsIcon from '../icons/MapsIcon'
import MatrimonialIcon from '../icons/MatrimonialIcon'
import TimeIcon from '../icons/TimeIcon'
import TaxiIcon from '../icons/TaxiIcon'

// estilos
import styles from '../../styles/Servicio.module.css'

// datos
import { tours } from "../../data"


const Servicios = () => {
    return (
        <section id="servicios">
        <div className="section bg_black servicios">
            <div className="serviciosBackground">
                <Image
                    priority
                    draggable={'false'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={'top'}
                    src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725614/taxiseguro/serviciosbg_hkhl07.jpg'}
                    alt="background seccion servicios"
                />
            </div>
            <div className="wrapper">
                <SectionHeader subtitle={'Nuestros'} theme={'black'}>Servicios</SectionHeader>
                <div className="section_body">
                    <div className={styles.servicios_grid}>
                        <InfoCard 
                            noIcon
                            icon={<TaxiIcon fill={'#fff'}/>}
                            title={'Taxi Remisse'}
                        >
                            Servicio de transporte punto a punto en todo Lima y fuera. con unidades full equipo y conductores uniformados.<span> 24 horas previa reserva</span>
                        </InfoCard>
                        <InfoCard 
                            icon={<AvionIcon fill={'#fff'}/>}
                            title={'Taxi Aeropuerto'}
                        >
                            ¿Llegas de un viaje? ¿no dispones de tiempo y necesitas recoger a un familiar o amig@? este servicio es el indicado.<span> 24 horas previa reserva</span>
                        </InfoCard>
                        <InfoCard 
                            icon={<MatrimonialIcon fill={'#fff'}/>}
                            title={'Taxi Matrimonial'}
                        >
                            Servicio de transporte para invitados a recepción matrimonial,  aniversario, eventos, bodas de oro, plata. <span> 24 horas previa reserva</span>
                        </InfoCard>
                        <InfoCard 
                            icon={<TimeIcon fill={'#fff'}/>}
                            title={'Por Hora / Full Day'}
                        >
                            Quieres ir a recrearte un rato o necesitas movilidad frecuente para tus actividades, este servicio es el adecuado nos encargaremos de tus traslados solo elige el día y el lugar.<span> 24 horas previa reserva</span>
                        </InfoCard>
                        <InfoCard 
                            icon={<CourierIcon fill={'#fff'}/>}
                            title={'Servicio de encomienda'}
                        >
                            Servicio de carga menor para envíos por todo Lima, llevamos tus documentos,
                            carga con la calidad y cuidado que siempre nos caracterizó. <span> 24 horas previa reserva</span>
                        </InfoCard>
                        <InfoCard 
                            icon={<MapsIcon fill={'#fff'}/>}
                            title={'City Tour'}
                        >
                            Te ofrecemos la mejor experiencia con el servicio de transporte turístico,
                            visita lugares hermosos, pueblos mágicos de Lima y el Perú. <span> 24 horas previa reserva</span>
                        </InfoCard>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.city_tour_section}>
            <div className={styles.city_tour_title}>
                <h2>Conoce nuestro <span>CITY TOUR</span></h2>
            </div>
            <div className={styles.section}>
                <div className="wrapper">
                    <div className={styles.city_tour_grid}>
                        {
                            tours.map(tour => (
                                <div key={tour.id} className={styles.city_tour_item}>
                                    <div className={styles.city_tour_item_img}>
                                        <LoadingContainer>
                                            <Image
                                                draggable={false}
                                                layout="fill"
                                                objectFit="cover"
                                                src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654605848/taxiseguro/tours/${tour.src}`}
                                                alt={`imagen del city tour de ${tour.nombre}`}
                                            />
                                        </LoadingContainer>
                                    </div>
                                    <div className={styles.city_tour_item_title}>
                                        <h2>{tour.nombre}</h2>
                                        <ButtonWhatsApp text={'Cotizar'}
                                            enlace={`https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* deseo cotizar el servicio de City Tour para ${tour.nombre}`}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                        <div className={styles.city_tour_item}>
                            <div className={styles.city_tour_item_img}>
                                <LoadingContainer>
                                        <Image
                                            draggable={false}
                                            layout="fill"
                                            objectFit="cover"
                                            src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654605848/taxiseguro/tours/huaral_lczgic.jpg`}
                                            alt={`imagen del city tour de Castillo de chancay`}
                                        />
                                </LoadingContainer>
                            </div>
                            <div className={styles.city_tour_item_title}>
                                <h2>Castillo de chancay</h2>
                                <ButtonWhatsApp
                                    text={''}
                                    enlace={`https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* deseo cotizar el servicio de City Tour para Castillo de Chancay`}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Servicios;