import {useState, useEffect} from 'react';
import styles from '../styles/Navbar.module.css'
import useMediaQuery from '../hooks/useMediaQuery';
import Navigations from './Navigations';


const Navbar = ({setBreakSm, setBreakMd, setBreakLg, setBreakXl, setNosotrosBreak}) => {

    const [burger, setBurger] = useState(false);

    const mostrarBurger = useMediaQuery('(min-width: 780px)')

    const breakSm = useMediaQuery('(min-width: 640px)')
    const breakMd = useMediaQuery('(min-width: 780px)')
    const breakLg = useMediaQuery('(min-width: 1024px)')
    const breakXl = useMediaQuery('(min-width: 1280px)')
    const nosotrosBreak = useMediaQuery('(min-width: 820px)')


    useEffect(() => {
        setBreakSm(breakSm)
        setBreakMd(breakMd)
        setNosotrosBreak(nosotrosBreak)
    }, [setBreakSm,breakSm,setBreakMd,breakMd, setNosotrosBreak, nosotrosBreak]);





    // activar la hamburguesa
    const activeBurger = () => {
        setBurger(!burger)
    }

    return (
        <nav className={'navbar'}>
            <div className={'navbar_content'}>
                <div className={styles.logo_conatiner}>
                    <h2>Logo</h2>
                </div>
                {mostrarBurger ?
                    <Navigations/>
                    :
                    <div className={styles.burger_container}>
                        <div className={burger ? 'taxi_burger active' : 'taxi_burger'} onClick={activeBurger}>
                            <div className="linea l_sup"></div>
                            <div className="linea l_cen"></div>
                            <div className="linea l_inf"></div>
                        </div>
                    </div>
                }
            </div>
            {
                burger &&
                <>
                    {!mostrarBurger &&
                        <Navigations mode={'column'}/>
                    }
                </>
            }
        </nav>
    );
}

export default Navbar;