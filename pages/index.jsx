import {useState, useEffect} from 'react'
import dynamic from 'next/dynamic';

// componentes
import  Main  from '../components/Main'
import Head from 'next/head'
import Header from '../components/Header'
import Nosotros from '../components/sections/Nosotros'
import Servicios from '../components/sections/Servicios'
import Covid from '../components/sections/Covid'
import Navbar from '../components/Navbar'
import useMediaQuery from '../hooks/useMediaQuery';
import Template from '../components/Template';
import WspButton from '../components/WspButton';

const Index = () => {
    
    // importacion dinamica Flota Component
    const Flota = dynamic(
        () => import('../components/sections/Flota'),
        {ssr:false}
    )

    // break nosotros section title
    const nosotrosBreak = useMediaQuery('(min-width: 820px)')

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
        <Template>
            <Navbar
                navbar = {navbar}
                mostrarMenuIcon = {mostrarMenuIcon}
                menuIcon = {menuIcon}
                menuActive = {menuActive}
                menuDesactive = {menuDesactive}
            />
            <WspButton/>
            <Header/>
            {
                menuIcon ?
                <div className="overlay_app" onClick={menuDesactive}></div>
                : null
            }
            <Main>
                <Nosotros nosotrosBreak = {nosotrosBreak}/>
                <Servicios/>
                <Flota/>
                <Covid/>
            </Main>
        </Template>
    );
}

export default Index;