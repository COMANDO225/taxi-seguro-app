import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import SectionHeader from "../SectionHeader";
import Image from 'next/image'


import styles from '../../styles/components/Recomendaciones.module.css';

// estilos swiper
import 'swiper/css'
import 'swiper/css/pagination'
import StarIcon from "../icons/StarIcon";

import { clientes } from "../../data";
import { useEffect, useRef, useState } from "react";

const Recomendaciones = () => {

    const myRef = useRef()
    const [visible, setVisible] = useState()

    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         const entry = entries[0]
    //         setVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myRef.current);
    // }, [])

    const changeNombre = (nombre) => {
        // obtener primera letra de varias palabras
        let nombreArray = nombre.split(' ');
        let nombrePrimeraLetra = nombreArray[0].charAt(0);
        return nombrePrimeraLetra;
    }

    const CounterItem = ({maxnum, initialvalue, text, sign, delay}) => {
        const [counter, setCounter] = useState(maxnum - initialvalue);

        useEffect(() => {
            setInterval(handleCounter, delay ? delay : 10);
        }, [delay])
        const handleCounter = () => {
            setCounter(counter => counter + 1)
        }
        
        if(counter > maxnum){
            setCounter(maxnum)
        }
        return (
            <div className={styles.counter_item}>
                <div className={styles.counter_item_number}>
                    <h2>{counter} {sign}</h2>
                </div>
                <div className={styles.counter_item_text}>
                    <h3>{text}</h3>
                </div>
            </div>
        )
    }




    return (
        <>
        <section ref={myRef} className={styles.counterSection}>
            <div className={styles.bgsection}>
                <Image
                    layout="fill"
                    objectFit="cover"
                    objectPosition={'center'}
                    src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725591/taxiseguro/lightstreet_ek4ytb.jpg'}
                    alt="imagen de calles de la ciudad"
                />
            </div>
            <div className="wrapper">
                <p>{visible ? 'si' : 'no'}</p>
                <div className={styles.counter_container}>
                    <CounterItem maxnum={1200} sign={'+'} initialvalue={174} text={`Viajes Exitosos`}/>
                    <CounterItem maxnum={3000} sign={'+'} initialvalue={180} text={'Clientes Satisfechos'}/>
                    <CounterItem maxnum={500} initialvalue={180} sign={'+'} text={'recomendaciones'}/>
                    <CounterItem maxnum={100} delay={20}  sign={'%'} initialvalue={100} text={'Servicio Seguro'}/>
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className="wrapper">
                <SectionHeader subtitle={'nuestros clientes'}>Nos <span>Recomiendan</span></SectionHeader>
                <div className="slider_layout">
                    <Swiper
                        className={styles.recomendSwiper}
                        loop
                        style={{
                            "--swiper-pagination-color": "var(--primary)",
                        }}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            660: {
                                slidesPerView: 2,
                            },
                            1300: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {clientes.map(cliente => (
                            <SwiperSlide key={cliente.id}>
                                <div className={styles.slide}>
                                    <div className={styles.recomend_item}>
                                        <div className={styles.imagen_container}>
                                            {changeNombre(cliente.nombre)}
                                            {/* <Image
                                                draggable={false}
                                                layout="responsive"
                                                width={'100%'}
                                                height={'100%'}
                                                objectFit="cover"
                                                src={cliente.imagen}
                                                alt={`imagen de cliente ${cliente.nombre}`}
                                            /> */}
                                        </div>
                                        <div className={styles.item_title}>
                                            <h2>{cliente.nombre}</h2>
                                        </div>
                                        <div className={styles.item_info}>
                                            <p className={styles.desc}>“{cliente.description}”</p>
                                            <div className={styles.stars_container}>
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    );
}

export default Recomendaciones;