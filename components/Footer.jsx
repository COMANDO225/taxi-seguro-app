// estilos css
import styles from '../styles/Footer.module.css'

// componentes
import Link from 'next/link'
import { useRouter } from 'next/router'
import {Link as LinS} from 'react-scroll'
import EnlaceBox from './EnlaceBox';
import AlmeydaBar from './AlmeydaBar'

// icons
import ChevronIcon from './icons/ChevronIcon';
import FacebookCircleIcon from './icons/FacebookCircleIcon';
import GmailIcon from './icons/GmailIcon';
import MessengerIcon from './icons/MessengerIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import CheckIcon from './icons/CheckIcon';
import LogoTaxi from './icons/LogoTaxi';

const Footer = () => {
    let obtenerYear = new Date();
    let yearActual = obtenerYear.getFullYear()

    const router = useRouter()

    return (
        <>
            <footer className={styles.footer}>
                <div className="wrapper">
                    <div className={styles.footer_grid}>
                        <div className={styles.footer_about}>
                            <h2 className={styles.footer_title}>Taxi Seguro</h2>
                            <p>Somos una empresa formal dedicada y especializada en el servicio de movilidad en toda la ciudad de Lima y fuera.</p>
                            <div className={styles.buttons_group}>
                                <EnlaceBox enlace={'https://www.facebook.com/somostaxiseguro'}>
                                    <FacebookCircleIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox enlace={'https://www.facebook.com/messages/t/108028615268747'}>
                                    <MessengerIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox enlace={'https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* quiero solicitar una reserva'}>
                                    <WhatsAppIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox enlace={'mailto:somostaxiseguro@gmail.com'}>
                                    <GmailIcon fill={'#fff'}/>
                                </EnlaceBox>
                            </div>
                        </div>
                        <div className={styles.footer_links}>
                            <h2>Enlaces</h2>
                            <ul className={styles.enlaces}>
                                {router.pathname === '/' ?
                                    <>
                                    <li className={styles.enlace}>
                                        <LinS to='hero' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Inicio
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='nosotros' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Nosotros
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='servicios' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Servicios
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='flota' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Flota
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='covid' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Covid-19
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='contacto' spy={true} offset={-60} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Contacto
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <Link href={'/galeria'} passHref>
                                            <a className={styles.link} style={{color: 'currentcolor'}}>
                                                <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                                Galeria
                                            </a>
                                        </Link>
                                    </li>
                                    </>
                                    :

                                    <>
                                    <li className={styles.enlace}>
                                        <Link href={'/'} passHref>
                                            <a className={styles.link} style={{color: 'currentcolor'}}>
                                                <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                                Inicio
                                            </a>
                                        </Link>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='gallery_choferes' spy={true} offset={-40} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Choferes
                                        </LinS>
                                    </li>
                                    <li className={styles.enlace}>
                                        <LinS to='gallery_entregas' spy={true} offset={-40} smooth={true} className={styles.link} duration={380}>
                                            <ChevronIcon width={16} height={16} fill={'var(--primary)'}/>
                                            Trabajos Realizados
                                        </LinS>
                                    </li>
                                    </>
                                }
                            </ul>
                        </div>
                        <div className={styles.footer_contact}>
                            <h2>Te Ofrecemos</h2>
                            <div className={styles.enlaces}>
                                <div className={styles.valores}>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        Seguridad
                                    </div>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        Calidad
                                    </div>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        Rapidez
                                    </div>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        Puntualidad
                                    </div>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        El mejor precio
                                    </div>
                                    <div className={styles.link}>
                                        <CheckIcon width={16} height={16} fill={'var(--primary)'}/>
                                        Salubridad
                                    </div>
                                </div>
                                <div className={styles.logoImage}>
                                    <LogoTaxi
                                        width={150}
                                        fill={'var(--primary'}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
            <AlmeydaBar/>
            <div className={styles.taco}>
                <div className={styles.taco_content}>
                    <p><span>Taxi Seguro </span> {yearActual} © • All Rights Reserved</p>
                    <p className={styles.version}>v 1.0.0</p>
                </div>
            </div>
        </>
    );
}

export default Footer;