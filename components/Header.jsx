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


const Header = () => {
    return (
        <header className={styles.header} id='hero'>
            <div className={styles.headerBackground}>
                <Image
                    priority
                    draggable={'false'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={'left'}
                    src={'/img/headerbg.jpg'}
                    alt=""
                />
            </div>
            <div className={styles.suelo}></div>

            <div className={styles.hero_banner}>
                <div className={styles.hero_container}>
                    <h2 className={styles.hero_subtitle}>Bienvenido a tu</h2>
                    <h1 className={styles.hero_title}>Taxi <span>Seguro</span></h1>
                    <p className={styles.hero_parraf}>Brindamos el servicio de transporte más seguro y completo
                    de Lima.</p>
                    <div className={styles.hero_buttons}>
                        <Button enlace={'tel:+51927974418'} notarget type={'primary'}>+51 927 974 418</Button>
                        <LinS to='flota' spy={true} offset={-60} smooth={true} className={'taxi_btn btn-shadow'} duration={380}>ver flota</LinS>
                    </div>

                    <div className={styles.methods_pago}>
                        
                        <div className={styles.bcp_icon}>
                            <BcpIcon height={25} />
                        </div>
                        <div className={styles.interbank_icon}>
                            <InterbankIcon height={25} />
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
                        <Image
                            draggable={'false'}
                            priority
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