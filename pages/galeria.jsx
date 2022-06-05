import Header from "../components/Header";
import HeaderComponent from "../components/HeaderComponent";
import Navbar from "../components/Navbar";
import Template from "../components/Template";
import WspButton from "../components/WspButton";

const GaleriaPage = () => {
    return (
        <Template page={'Galeria'}>
            <Navbar/>
            <WspButton/>
            <HeaderComponent/>
        </Template>
    );
}

export default GaleriaPage;