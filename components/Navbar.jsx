import {useState , useEffect} from 'react';
import styles from '../styles/Navbar.module.css'

// react-scroll
import {Link as LinS} from 'react-scroll'

import Button from "./Button"
import LogoTaxi from '../components/icons/LogoTaxi'
import Link from 'next/link'
import useMediaQuery from '../hooks/useMediaQuery';
import Navigations from './Navigations';

const Navbar = ({navNull}) => {

    //* ========== Navbar Estados ========== *//
    // estado del navbar
    const [navbar, setNavbar] = useState(false);
    // monstrar el icono de menu del navbar
    const mostrarMenuIcon = useMediaQuery('(min-width: 820px)')
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
                                {
                                    navNull?
                                    <LogoTaxi
                                        fill={'var(--primary'}
                                        width = {100}
                                        height = {40}
                                    />
                                    :
                                    <LogoTaxi
                                        fill={navbar ? '#000' : '#fff'}
                                        width = {100}
                                        height = {40}
                                    />
                                }
                            </a>
                        </Link>
                    </div>
                    <>
                        {!navNull ? 
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
                                    <div className={'center-btn'}>
                                        <Button enlace={'https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
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
                            <Button redirect={'/'} notarget type={'shadow'}>Regresar</Button>
                        }
                    </>
                </div>
            </div>
            {
                menuIcon &&
                <>
                    {!mostrarMenuIcon &&
                        <Navigations mode={'column'} menuDesactive = {menuDesactive}>
                            <LinS onClick={menuDesactive} to='hero' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>inicio</LinS>
                            <LinS onClick={menuDesactive} to='nosotros' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>nosotros</LinS>
                            <LinS onClick={menuDesactive} to='servicios' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>servicios</LinS>
                            <LinS onClick={menuDesactive} to='flota' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>flota</LinS>
                            <LinS onClick={menuDesactive} to='covid' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>covid-19</LinS>
                            <LinS onClick={menuDesactive} to='contacto' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>contacto</LinS>
                            <div className={'center-btn'}>
                                <Button enlace={'https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
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