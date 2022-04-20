// components
import SectionHeader from "../SectionHeader"
import InfoCard from "../InfoCard"

// icons
import TaxiIcon from '../icons/TaxiIcon'

const Covid = () => {
    return (
        <>
            <hr  className="hr_lg"/>
            <section className="section covid" id="covid">
                <div className="wrapper">
                    <SectionHeader subtitle={'covid 19'}>Protocolos <span>Bioseguridad</span></SectionHeader>
                        <p className="section_parraf">Tú eres nuestra prioridad es por eso que para esta situación nos hemos adecuado exitosamente a las normas de medida sanitaria para la prevención de covid - 19.</p>
                        <div className="section_body">
                            <div className="covid_layout">
                                <div className="shield_container"></div>
                                <div className="covid_img covid1"></div>
                                <div className="covid_img duplicate"></div>
                                <div className="covid_img blur"></div>
                                <div className="covid_img blur2"></div>
                            </div>
                            <div className="section_dual_grid">
                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/conductor.png'}
                                    title={'1. Protocolos del conductor'}
                                >
                                    El conductor se tomará la temperatura y lo reportará antes de iniciar la jornada, el conductor se desinfectará con alcohol y se colocará los epp de bioseguridad (tapabocas, mica facial).
                                </InfoCard>
                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/jornada.png'}
                                    title={'2. Inicio de jornada'}
                                >
                                    Desinfección de todos los componentes y limpieza total de la unidad, interior y exterior. El conductor activará el UV CAR antes de abordar a la unidad y repetirá el proceso en cada prestación de servicio.
                                </InfoCard>
                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/inicioservicio.png'}
                                    title={'3. Prestación de servicio'}
                                >
                                    Se tomará la temperatura y se brindará alcohol en gel al pasajero antes de abordar a la unidad, conductor como pasajero permanecerán con sus epps de bioseguridad dentro de la unidad.
                                </InfoCard>
                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/pasajero.png'}
                                    title={'4. Protocolos del pasajero'}
                                >
                                    El pasajero deberá compenetrarse con los protocolos que se designó para el servicio por su seguridad, así como evitar el intercambio de objetos y consumo de alimentos dentro de la unidad.
                                </InfoCard>

                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/pago.png'}
                                    title={'5. Metodo de pago'}
                                >
                                    El conductor recomendará y fomentará la modalidad de pago que no implique contacto, como son pagos por aplicaciones bancarias como Yape, plin y parecidos.
                                </InfoCard>
                                <InfoCard 
                                    style={'card'}
                                    img={'/img/covid/finservicio.png'}
                                    title={'6. Al finalizar el servicio'}
                                >
                                    El pasajero se aplicará con el alcohol en gel que lleva cada una de nuestras unidades, el conductor se desinfectara y procederá a cumplir el paso número 2 al finalizar cada servicio.
                                </InfoCard>
                            </div>
                        </div>
                    </div>
                </section>
            <hr  className="hr_lg"/>
        </>
    );
}

export default Covid;