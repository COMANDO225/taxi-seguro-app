
// componentes
import styles from '../styles/Header.module.css'
import Button from './Button';
import Image from 'next/image'
import DropIcon from './icons/DropIcon';
import {Link as LinS} from 'react-scroll'

const Header = () => {
    return (
        <header className={styles.header} id='hero'>
            <div className={styles.suelo}></div>

            <div className={styles.hero_banner}>
                <div className={styles.hero_container}>
                    <h2 className={styles.hero_subtitle}>Bienvenido a tu</h2>
                    <h1 className={styles.hero_title}>Taxi <span>Seguro</span></h1>
                    <p className={styles.hero_parraf}>Brindamos el servicio de transporte más seguro y completo
                    de Lima.</p>
                    <div className={styles.hero_buttons}>
                        <Button type={'primary'}>916 019 563</Button>
                        <LinS to='flota' spy={true} offset={-60} smooth={true} className={'taxi_btn btn-shadow'} duration={380}>ver flota</LinS>
                    </div>
                </div>
                <div className={styles.hero_imagen}>
                    
                    <div className={styles.hero_imagen_content}>
                        <div className={styles.timeService_content}>
                            <DropIcon/>
                        </div>
                        <Image
                            draggable={'false'}
                            priority={'low'}
                            width={800}
                            height={390}
                            layout='responsive'
                            objectFit='contain'
                            src={'/img/Corolla-negro.png'}
                            alt="imagen de corolla taxi seguro"
                        />
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;