// react-scroll
import {Link as LinS} from 'react-scroll'

import Button from "./Button"

const Navigations = ({mode, menuDesactive}) => {

    


    return (
        <div className={mode ? `nav_items ${mode}` : 'nav_items'}>
            <LinS onClick={menuDesactive} to='hero' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>inicio</LinS>
            <LinS onClick={menuDesactive} to='nosotros' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>nosotros</LinS>
            <LinS onClick={menuDesactive} to='servicios' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>servicios</LinS>
            <LinS onClick={menuDesactive} to='flota' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>flota</LinS>
            <LinS onClick={menuDesactive} to='covid' spy={true} offset={-60} smooth={true} className={'enlace'} duration={380}>covid-19</LinS>
            <a className={'enlace'} href="">contacto</a>
            <div className={'center-btn'}>
                <Button enlace={'https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* quiero solicitar una reserva'} type={'primary'}>reservar</Button>
            </div>
        </div>
    );
}

export default Navigations;