import Button from "./Button";

const Navigations = ({mode}) => {
    return (
        <div className={mode ? `nav_items ${mode}` : 'nav_items'}>
            <a className={'enlace active'} href="">inicio</a>
            <a className={'enlace'} href="">nosotros</a>
            <a className={'enlace'} href="">servicios</a>
            <a className={'enlace'} href="">flota</a>
            <a className={'enlace'} href="">covid-19</a>
            <a className={'enlace'} href="">contacto</a>
            <Button type={'primary'}>reservar</Button>
        </div>
    );
}

export default Navigations;