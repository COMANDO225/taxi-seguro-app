import styles from '../styles/Navbar.module.css'
import Navigations from './Navigations';


const Navbar = ({navbar, mostrarMenuIcon, menuIcon, menuActive, menuDesactive}) => {

    
    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar_wrapper">
                <div className={'navbar_content'}>
                    <div className={styles.logo_conatiner}>
                        <h2>Logo</h2>
                    </div>
                    {mostrarMenuIcon 
                        ?
                        <Navigations/>
                        :
                        <div className={menuIcon ? 'taxi_burger active' : 'taxi_burger'} onClick={menuActive}>
                            <div className="linea l_sup"></div>
                            <div className="linea l_cen"></div>
                            <div className="linea l_inf"></div>
                        </div>
                    }
                </div>
            </div>
            {
                menuIcon &&
                <>
                    {!mostrarMenuIcon &&
                        <Navigations 
                            mode={'column'}
                            menuDesactive = {menuDesactive}
                        />
                    }
                </>
            }
        </nav>
    );
}

export default Navbar;