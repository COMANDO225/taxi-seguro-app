// components
import SectionHeader from "../SectionHeader"
import InfoCard from "../InfoCard"

// icons
import AvionIcon from "../icons/AvionIcon"
import CourierIcon from '../icons/CourierIcon'
import MapsIcon from '../icons/MapsIcon'
import MatrimonialIcon from '../icons/MatrimonialIcon'
import TimeIcon from '../icons/TimeIcon'
import TaxiIcon from '../icons/TaxiIcon'

const Covid = () => {
    return (
        <section className="section covid">
            <div className="wrapper">
                <SectionHeader subtitle={'covid 19'}>protocolos <span>bioseguridad</span></SectionHeader>
                <p className="section_parraf">Tú eres nuestra prioridad es por eso que para esta situación nos hemos adecuado exitosamente a las normas de medida sanitaria para la prevención de covid - 19.</p>
                <div className="section_body">
                    <div className="covid_layout">
                        <div className="shield_container"></div>
                        <div className="covid_img"></div>
                        <div className="covid_img duplicate"></div>
                        <div className="covid_img blur"></div>
                        <div className="covid_img blur2"></div>
                    </div>
                    <div className="servicios_grid">

                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'taxi remisse'}
                        />
                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'taxi aeropuerto'}
                        />
                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'taxi matrimonial'}
                        />
                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'por hora / full day'}
                        />
                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'servicio de encomienda'}
                        />
                        <InfoCard 
                            style={'card'}
                            icon={<TaxiIcon fill={'var(--primary'}/>}
                            title={'city tour'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Covid;