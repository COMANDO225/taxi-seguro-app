import Header from "../components/Header";
import HeaderComponent from "../components/HeaderComponent";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import GalleryLayout from "../components/sections/GalleryLayout";
import Template from "../components/Template";
import WspButton from "../components/WspButton";
import { choferes, trabajos } from "../data";
import Image from 'next/image'


import styles from '../styles/Galleries.module.css'
import Footer from "../components/Footer";


const GaleriaPage = () => {
    return (
        <Template page={'Galeria de choferes y trabajos realizados'}>
            <Navbar/>
            <WspButton/>
            <HeaderComponent/>
            <Main>
                <GalleryLayout sectionId={'gallery_choferes'} title={'Galeria de choferes'}>
                    {
                        choferes.map((chofer, index) => (
                            <div key={chofer.id} className={styles.hola}>
                                <Image
                                    draggable={false}
                                    layout="responsive"
                                    width={'100%'}
                                    height={'100%'}
                                    objectFit="cover"
                                    src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725725/taxiseguro/choferes/${chofer.src}`}
                                    alt={`imagen de chofer N°${index+1}`}
                                />
                            </div>
                        ))
                    }
                </GalleryLayout>
                <GalleryLayout sectionId={'gallery_entregas'} title={'trabajos realizados'}>
                    {
                        trabajos.map((trabajo, index) => (
                            <div key={trabajo.id} className={styles.hola}>
                                <Image
                                    draggable={false}
                                    layout="responsive"
                                    width={'100%'}
                                    height={'100%'}
                                    objectFit="cover"
                                    src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654725683/taxiseguro/trabajos/${trabajo.src}`}
                                    alt={`imagen de trabajo N°${index+1}`}
                                />
                            </div>
                        ))
                    }
                </GalleryLayout>
            </Main>
            <Footer/>
        </Template>
    );
}

export default GaleriaPage;