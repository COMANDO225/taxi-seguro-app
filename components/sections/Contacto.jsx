import SectionHeader from "../SectionHeader";

const Contacto = () => {
    return (
        <section className="section contacto" id="contacto">
            <div className="wrapper">
                <SectionHeader
                    orientation={'start'}
                    subtitle={'no esperes más'}
                >
                    Contactate con <span>Nosotros</span>
                </SectionHeader>
                <div className="section_body">
                    programador almorzando...
                </div>
            </div>
        </section>
    );
}

export default Contacto;