// Styles of Almeyda Bar
import styles from '../styles/AlmeydaBar.module.css'

// Almeyda thunder Icon
import AlmeydaIcon from "./icons/AlmeydaIcon";

const AlmeydaBar = () => {
    return (
        <a 
            href='https://www.facebook.com/anderson.almeydatorres/' 
            target={'_blank'} 
            rel="noreferrer" 
            className={styles.byAlmeyda}
        >
            <div className={styles.power}>
                <div className={styles.textStart}>Powered by</div>
                    <AlmeydaIcon/>
                <div className={styles.textEnd}>Almeyda</div>
            </div>
        </a>
    );
}

export default AlmeydaBar;