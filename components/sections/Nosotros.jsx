import CarouselNosotros from "../CarouselNosotros";
import SectionHeader from "../SectionHeader";

const Nosotros = ({nosotrosBreak}) => {



    return (
        <section className="section" id="nosotros">
            <div className="wrapper">
                <div className="dual_grid">
                    <div className="nosotros_img_container">

                    </div>
                    <div className="nosotros_info">
                        <SectionHeader subtitle={'quienes somos'} orientation={nosotrosBreak && 'start'}>nosotros</SectionHeader>
                        <p className="nostros_parraf">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="conocenos_container">
                    <h2>conócenos</h2>
                    <CarouselNosotros/>
                </div>
            </div>
        </section>
    );
}

export default Nosotros;