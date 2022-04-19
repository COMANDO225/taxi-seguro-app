// estilos css
import styles from '../styles/Footer.module.css'

// componentes
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

    return (
        <>
            <footer className={styles.footer}>
                <div className="wrapper">
                    <div className={styles.footer_grid}>
                        <div className={styles.footer_about}>
                            <h1 className={styles.footer_title}>Taxi Seguro</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolor? Ad voluptatem libero ducimus eligendi fugit ipsam dignissimos explicabo.</p>
                            <div className={styles.buttons_group}>
                                <EnlaceBox>
                                    <FacebookCircleIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox>
                                    <MessengerIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox>
                                    <WhatsAppIcon fill={'#fff'}/>
                                </EnlaceBox>
                                <EnlaceBox>
                                    <GmailIcon fill={'#fff'}/>
                                </EnlaceBox>
                            </div>
                        </div>
                        <div className={styles.footer_links}>
                            <h1>Enlaces</h1>
                            <ul className={styles.enlaces}>
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
                            </ul>
                        </div>
                        <div className={styles.footer_contact}>
                            <h1>Te Ofrecemos</h1>
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
                    <p className={styles.version}>v 0.9.1</p>
                </div>
            </div>
        </>
    );
}

export default Footer;