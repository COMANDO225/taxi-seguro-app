import WhatsAppIcon from "./icons/WhatsAppIcon";
import styles from '../styles/components/ButtonWhatsApp.module.css'

const ButtonWhatsApp = ({text, enlace}) => {
    return (
        <a  className={styles.btn_whatsapp} target={"_blank"} rel='noreferrer' href={enlace}>
            <div className={styles.icon_whatsapp}>
                <WhatsAppIcon/>
            </div>
            {text!=='' &&
                <p>{text}</p>
            }
        </a>

    );
}

ButtonWhatsApp.defaultProps = {
    text: 'WhatsApp',
    enlace: 'https://www.facebook.com/anderson.almeydatorres'
}

export default ButtonWhatsApp;