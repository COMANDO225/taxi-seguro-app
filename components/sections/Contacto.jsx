import SectionHeader from "../SectionHeader";

import styles from '../../styles/Contacto.module.css'
import GmailIcon from "../icons/GmailIcon"
import PhoneIcon from '../icons/PhoneIcon'
import WhatsAppIcon from "../icons/WhatsAppIcon";
import FacebookCircleIcon from "../icons/FacebookCircleIcon";
import Button from "../Button";

import Image from 'next/image'

const Contacto = () => {
    return (
        <section className={`section contacto ${styles.contacto}`} id="contacto">
            <div className={styles.contacto_car_auto_taxi_sponsor}>
                <Image
                    draggable={"false"}
                    width={845}
                    height={549}
                    layout={"fixed"}
                    src={'/img/carslide.png'}
                    alt=""
                />
            </div>
            <div className="wrapper">
                <SectionHeader
                    orientation={'start'}
                    subtitle={'no esperes más'}
                >
                    Contactate con <span>Nosotros</span>
                </SectionHeader>
                <p className="section_parraf text_start contacto">
                    Somos tu mejor opción, viaja <span>seguro</span>, viaja con tu taxi <span>seguro.</span>
                </p>
                <div className="section_body">
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.mailIcon}`}>
                            <GmailIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.mailInfo}`}>
                            <a href="#">taxiseguro<span>@gmail.com</span></a>
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.celIcon}`}>
                            <PhoneIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.celInfo}`}>
                            <a href="tel:+51927974418" rel='noreferrer'><span>+51 </span>927 974 418</a>
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.wspIcon}`}>
                            <WhatsAppIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.wspInfo}`}>
                            <a href="https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* consultar con usted" target={'_blank'} rel='noreferrer'><span>+51 </span>927 974 418</a>
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.fbIcon}`}>
                            <FacebookCircleIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.fbInfo}`}>
                            <span>/taxi.seguro/</span>
                        </div>
                    </div>
                    <div className={styles.contacto_button}>
                        <Button enlace={'tel:+51927974418'} notarget type={'primary'} size={'lg'}>Llámenos 24/7</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;