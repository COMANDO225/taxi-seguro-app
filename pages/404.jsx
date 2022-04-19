import Navbar from "../components/Navbar";

import styles from '../styles/NotFoundPage.module.css'
import Template from "../components/Template";
import Image from 'next/image'
import AlmeydaBar from "../components/AlmeydaBar";


const NotFoundPage = () => {
    return (
        <Template page={'No encontrado'}>
            <div className={styles.notFound}>
                <Navbar navNull/>
                <div className={styles.notInfo}>
                    <h3>Oops...</h3>
                    <h1>pagina no encontrada</h1>
                    <h2>Parece que te perdiste</h2>
                    <p>No te preocupes, estamos aquí para llevarte a tu destino</p>
                </div>
                <div className={styles.notfound_img}>
                    <Image
                        layout="responsive"
                        width={350}
                        height={200}
                        objectFit="contain"
                        src={'/img/notfoundimg.png'}
                        alt="pagina no encontrada"
                    />
                </div>
                <div className={styles.bar}>
                    <AlmeydaBar/>
                </div>
            </div>
        </Template>
    );
}

export default NotFoundPage;