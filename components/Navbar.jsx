import {useState , useEffect} from 'react';
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'

// react-scroll
import {Link as LinS} from 'react-scroll'

import Button from "./Button"
import LogoTaxi from '../components/icons/LogoTaxi'
import Link from 'next/link'
import useMediaQuery from '../hooks/useMediaQuery';
import Navigations from './Navigations';

const Navbar = () => {

    const router = useRouter();

    //* ========== Navbar Estados ========== *//
    // estado del navbar
    const [navbar, setNavbar] = useState(false)
    // monstrar el icono de menu del navbar
    const mostrarMenuIcon = useMediaQuery('(min-width: 940px)')
    // Estado del menu del navbar
    const [menuIcon, setMenuIcon] = useState(false);
    // activar el menu
    const menuActive = () => {
        setMenuIcon(!menuIcon)
    }
    useEffect(() => {
        mostrarMenuIcon && setMenuIcon(false)
    }, [mostrarMenuIcon , setMenuIcon])
    useEffect(() => {
        menuIcon 
        ? 
        document.body.style.overflow = 'hidden' 
        : 
        document.body.removeAttribute('style')
    }, [menuIcon])


    const menuDesactive = () => {
        setMenuIcon(false)
    }

    // cambiar estado del nav segun el scroll
    const changeBackground = () => {
        window.scrollY > 0 ? setNavbar(true) : setNavbar(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    },[])

    
    return (
        <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar_wrapper">
                <div className={'navbar_content'}>
                    <div className={styles.logo_container}>
                        <Link href="/">
                            <a className={styles.taxiLogo}>
                                <LogoTaxi
                                    fill={navbar ? '#000' : '#fff'}
                                    width = {100}
                                    height = {40}
                                />
                            </a>
                        </Link>
                    </div>
                    <>
                        {router.pathname === '/' ?
                            <>
                                {
                                mostrarMenuIcon 
                                ?
                                <Navigations>
                                    <LinS onClick={menuDesactive} to='hero' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>inicio</LinS>
                                    <LinS onClick={menuDesactive} to='nosotros' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>nosotros</LinS>
                                    <LinS onClick={menuDesactive} to='servicios' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>servicios</LinS>
                                    <LinS onClick={menuDesactive} to='flota' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>flota</LinS>
                                    <LinS onClick={menuDesactive} to='covid' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>covid-19</LinS>
                                    <LinS onClick={menuDesactive} to='contacto' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>contacto</LinS>
                                    <Link href="/galeria">
                                        <a onClick={menuDesactive} className={'enlace'}>Galeria</a>
                                    </Link>
                                    <div style={{marginLeft: '1rem'}} className={'center-btn'}>
                                        <Button enlace={'https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
                                    </div>
                                </Navigations>
                                :
                                <div className={menuIcon ? 'taxi_burger active' : 'taxi_burger'} onClick={menuActive}>
                                    <div className="linea l_sup"></div>
                                    <div className="linea l_cen"></div>
                                    <div className="linea l_inf"></div>
                                </div>
                                }
                            </>
                            :
                            <>
                                {mostrarMenuIcon 
                                ?
                                <Navigations>
                                    <Link href="/">
                                        <a onClick={menuDesactive} className={'enlace'}>inicio</a>
                                    </Link>
                                    <LinS onClick={menuDesactive} to='gallery_choferes' spy={true} offset={-40} smooth={true} className={'enlace'} duration={380}>conductores</LinS>
                                    <LinS onClick={menuDesactive} to='gallery_entregas' spy={true} offset={-40} smooth={true} className={'enlace'} duration={380}>trabajos</LinS>
                                    <div style={{marginLeft: '1rem'}} className={'center-btn'}>
                                        <Button enlace={'https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
                                    </div>
                                </Navigations>
                                :
                                <div className={menuIcon ? 'taxi_burger active' : 'taxi_burger'} onClick={menuActive}>
                                    <div className="linea l_sup"></div>
                                    <div className="linea l_cen"></div>
                                    <div className="linea l_inf"></div>
                                </div>
                                }
                            </>
                        }
                    </>
                </div>
            </div>
            {
                menuIcon &&
                <>
                    {router.pathname === '/' ?
                        <Navigations mode={'column'} menuDesactive = {menuDesactive}>
                            <LinS onClick={menuDesactive} to='hero' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>inicio</LinS>
                            <LinS onClick={menuDesactive} to='nosotros' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>nosotros</LinS>
                            <LinS onClick={menuDesactive} to='servicios' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>servicios</LinS>
                            <LinS onClick={menuDesactive} to='flota' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>flota</LinS>
                            <LinS onClick={menuDesactive} to='covid' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>covid-19</LinS>
                            <LinS onClick={menuDesactive} to='contacto' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>contacto</LinS>
                            <Link href="/galeria">
                                <a onClick={menuDesactive} className={'enlace'}>Galeria</a>
                            </Link>
                            <div className={'center-btn'}>
                                <Button enlace={'https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
                            </div>
                        </Navigations>
                        :
                        <Navigations mode={'column'} menuDesactive = {menuDesactive}>
                            <Link href="/">
                                <a onClick={menuDesactive} className={'enlace'}>inicio</a>
                            </Link>
                            <LinS onClick={menuDesactive} to='gallery_choferes' spy={true} offset={-40} smooth={true} className={'enlace'} duration={380}>Conductores</LinS>
                            <LinS onClick={menuDesactive} to='gallery_entregas' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>trabajos</LinS>
                            <div className={'center-btn'}>
                                <Button enlace={'https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
                            </div>
                        </Navigations>
                    }
                </>
            }
        </nav>
        {
            menuIcon ?
            <div className="overlay_app" onClick={menuDesactive}></div>
            : null
        }
        </>
        
    );
}

Navbar.defaultProps = {
    
}

export default Navbar;