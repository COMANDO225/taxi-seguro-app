import styles from '../styles/HeaderComponent.module.css'
import Image from 'next/image'


const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerBackground}>
                <Image
                    priority
                    draggable={'false'}
                    layout='fill'
                    objectFit='cover'
                    objectPosition={'left'}
                    src={'/img/headerbg.jpg'}
                    alt="imagen del header taxi seguro"
                />
            </div>
            <h1 className={styles.hero_title}>Taxi <span>Seguro</span></h1>
        </header>
    );
}

export default HeaderComponent;