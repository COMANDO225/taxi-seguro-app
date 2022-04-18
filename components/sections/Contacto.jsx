import SectionHeader from "../SectionHeader";

import styles from '../../styles/Contacto.module.css'
import GmailIcon from "../icons/GmailIcon"
import PhoneIcon from '../icons/PhoneIcon'
import WhatsAppIcon from "../icons/WhatsAppIcon";
import FacebookCircleIcon from "../icons/FacebookCircleIcon";
import Button from "../Button";


const Contacto = () => {
    return (
        <section className="section contacto" id="contacto">
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
                            taxiseguro<span>@gmail.com</span>
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.celIcon}`}>
                            <PhoneIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.celInfo}`}>
                            <span>+51 </span>916 019 563
                        </div>
                    </div>
                    <div className={styles.contact_item}>
                        <div className={`${styles.contacto_icon} ${styles.wspIcon}`}>
                            <WhatsAppIcon/>
                        </div>
                        <div className={`${styles.contacto_info} ${styles.wspInfo}`}>
                            <a href=""><span>+51 </span>916 019 563</a>
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
                        <Button enlace={'tel:+51916019563'} notarget type={'primary'} size={'lg'}>Llámenos 24/7</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacto;