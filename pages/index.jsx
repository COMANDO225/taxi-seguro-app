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
// import Recomendaciones from '../components/sections/Recomendaciones';

const Index = () => {
    
    // importacion dinamica Flota Component
    const Flota = dynamic(
        () => import('../components/sections/Flota'),
        {ssr:false}
    )

    const Recomendaciones = dynamic(
        () => import('../components/sections/Recomendaciones'),
        {ssr:false}
    )

    // break nosotros section title
    const nosotrosBreak = useMediaQuery('(min-width: 940px)')

    return (
        
        <Template page={'Servicios de taxi corporativo'}>
            <Navbar/>
            <WspButton/>
            <Header/>
            <Main>
                <Nosotros nosotrosBreak = {nosotrosBreak}/>
                <Servicios/>
                <Flota/>
                <Recomendaciones/>
                <Covid/>
                <Contacto/>
            </Main>
            <Footer/>
        </Template>
    );
}

export default Index;