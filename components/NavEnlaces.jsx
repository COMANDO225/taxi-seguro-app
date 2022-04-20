import {Link as LinkS} from 'react-scroll'
import Button from './Button';


const NavEnlaces = () => {
    return (
        <>
            <LinkS onClick={menuDesactive} to='hero' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>inicio</LinkS>
            <LinkS onClick={menuDesactive} to='nosotros' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>nosotros</LinkS>
            <LinkS onClick={menuDesactive} to='servicios' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>servicios</LinkS>
            <LinkS onClick={menuDesactive} to='flota' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>flota</LinkS>
            <LinkS onClick={menuDesactive} to='covid' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>covid-19</LinkS>
            <LinkS onClick={menuDesactive} to='contacto' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>contacto</LinkS>
            <div className={'center-btn'}>
                <Button enlace={'https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
            </div>
        </>
    );
}

export default NavEnlaces;