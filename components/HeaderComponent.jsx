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
                    src={'https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725632/taxiseguro/headerbg_pgw3ve.jpg'}
                    alt="imagen del header taxi seguro"
                />
            </div>
            <h1 className='tituloinvisible'>Taxi Seguro - Servicio de taxi ejecutivo | sección de Galeria de fotos</h1>
            <h2 className={styles.hero_title}>Nuestra <span>Galeria</span></h2>
        </header>
    );
}

export default HeaderComponent;