import dynamic from 'next/dynamic';

// componentes
import  Main  from '../components/Main'
import Header from '../components/Header'
import Nosotros from '../components/sections/Nosotros'
import Servicios from '../components/sections/Servicios'
import Covid from '../components/sections/Covid'
import Navbar from '../components/Navbar'
import useMediaQuery from '../hooks/useMediaQuery';
import Template from '../components/Template';
import WspButton from '../components/WspButton';
import Contacto from '../components/sections/Contacto';
import Footer from '../components/Footer';

const Index = () => {
    
    // importacion dinamica Flota Component
    const Flota = dynamic(
        () => import('../components/sections/Flota'),
        {ssr:false}
    )

    // break nosotros section title
    const nosotrosBreak = useMediaQuery('(min-width: 820px)')

    return (
        
        <Template page={'Inicio'}>
            <Navbar/>
            <WspButton/>
            <Header/>
            <Main>
                <Nosotros nosotrosBreak = {nosotrosBreak}/>
                <Servicios/>
                <Flota/>
                <Covid/>
                <Contacto/>
            </Main>
            <Footer/>
        </Template>
    );
}

export default Index;