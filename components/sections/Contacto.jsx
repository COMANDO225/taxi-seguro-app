import SectionHeader from "../SectionHeader";

import styles from '../../styles/Contacto.module.css'
import GmailIcon from "../icons/GmailIcon"
import PhoneIcon from '../icons/PhoneIcon'
import WhatsAppIcon from "../icons/WhatsAppIcon";
import FacebookCircleIcon from "../icons/FacebookCircleIcon";
import Button from "../Button";

import Image from 'next/image'
import BcpIcon from "../icons/BcpIcon";
import InterbankIcon from "../icons/InterbankIcon";
import BbvaIcon from "../icons/BbvaIcon";
import YapeIcon from "../icons/YapeIcon";
import MasterCardIcon from "../icons/MasterCardIcon";

const Contacto = () => {
    return (
        <>
        <section className={`section contacto ${styles.contacto}`} id="contacto">
            <div className={styles.contacto_car_auto_taxi_sponsor}>
                <Image
                    draggable={"false"}
                    width={845}
                    height={549}
                    layout={"fixed"}
                    priority
                    src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725665/taxiseguro/carslide_kdfpfi.png'}
                    alt="imagen de carro negro de seccion contacto"
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
                            <a href="mailto:somostaxiseguro@gmail.com">somostaxiseguro<span>@gmail.com</span></a>
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
                            <a href="https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro*" target={'_blank'} rel='noreferrer'><span>+51 </span>927 974 418</a>
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.fbIcon}`}>
                            <FacebookCircleIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.fbInfo}`}>
                            <a href="https://www.facebook.com/somostaxiseguro" target={'_blank'} rel='noreferrer'><span>somostaxiseguro</span></a>
                        </div>
                    </div>
                    <div className={styles.contacto_button}>
                        <Button enlace={'tel:+51927974418'} notarget type={'primary'} size={'lg'}>Llámenos 24/7</Button>
                    </div>
                </div>
            </div>
        </section>
        <div className="wrapper">
            <div className={styles.metodopago}>
                <div className={styles.metodopago_title}>
                    <h2>Metodos de pago</h2>
                </div>
                <div className={styles.metodopago_body}>
                    <div className={styles.bcp_icon}>
                        <BcpIcon height={20} />
                    </div>
                    <div className={styles.interbank_icon}>
                        <InterbankIcon height={20} />
                    </div>
                    <div className={styles.bbva_icon}>
                        <BbvaIcon height={20} fill={'#02467E'}/>
                    </div>
                    <div className={styles.visa_icon}/>
                    <div className={styles.mastercard_icon}>
                        <MasterCardIcon height={56}/>
                    </div>
                    <div className={styles.yape_icon}>
                        <YapeIcon height={35}/>
                    </div>
                    <div className={styles.plin_icon}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contacto;