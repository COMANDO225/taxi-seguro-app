// componentes
import {Link as LinS} from 'react-scroll'
import styles from '../styles/Header.module.css'

// components
import Button from './Button'
import Image from 'next/image'

// icons
import DropIcon from './icons/DropIcon'
import InterbankIcon from './icons/InterbankIcon'
import BcpIcon from './icons/BcpIcon'
import YapeIcon from './icons/YapeIcon'
import { Swiper, SwiperSlide } from 'swiper/react'
import BbvaIcon from './icons/BbvaIcon'


const Header = () => {
    return (
        <header className={styles.header} id='hero'>
            <div className={styles.headerBackground}>
                <Image
                    title='imagen del header taxi seguro'
                    priority
                    draggable={'false'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={'left'}
                    src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725632/taxiseguro/headerbg_pgw3ve.jpg'}
                    alt="imagen del header taxi seguro"
                />
            </div>
            <div className={styles.suelo}></div>

            <div className={styles.hero_banner}>
            <h1 className='tituloinvisible'>Taxi Seguro - Servicio de taxi ejecutivo | sección de Inicio</h1>
                <div className={styles.hero_container}>
                    <h2 className={styles.hero_subtitle}>Bienvenido a tu</h2>
                    <h2 className={styles.hero_title}>Taxi <span>Seguro</span></h2>
                    <p className={styles.hero_parraf}>Brindamos el servicio de transporte más seguro y completo
                    de Lima.</p>
                    <div className={styles.hero_buttons}>
                        <Button enlace={'tel:+51927974418'} notarget type={'primary'}>+51 927 974 418</Button>
                        <LinS to='flota' spy={true} offset={-60} smooth={true} className={'taxi_btn btn-shadow'} duration={380}>ver flota</LinS>
                    </div>

                    <div className={styles.methods_pago}>
                        
                        <div className={styles.bcp_icon}>
                            <BcpIcon height={20} />
                        </div>
                        <div className={styles.interbank_icon}>
                            <InterbankIcon height={20} />
                        </div>
                        <div className={styles.interbank_icon}>
                            <BbvaIcon height={20} fill={'#02467E'}/>
                        </div>
                        <div className={styles.yape_icon}>
                            <YapeIcon height={35}/>
                        </div>
                        <div className={styles.plin_icon}/>
                    </div>
                </div>
                <div className={styles.hero_imagen}>
                    
                    <div className={styles.hero_imagen_content}>
                        <div className={styles.timeService_content}>
                            <DropIcon/>
                        </div>
                        <div className={styles.content_car_img}>
                            <Image
                                draggable={'false'}
                                priority
                                width={800}
                                height={390}
                                layout='responsive'
                                objectFit='contain'
                                src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725604/taxiseguro/toyota-corolla_bleowj.png'}
                                alt="imagen de corolla taxi seguro"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;