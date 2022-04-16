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

const Servicios = () => {
    return (
        <section className="section bg_black" id="servicios">
            <div className="wrapper">
                <SectionHeader subtitle={'Nuestros'} theme={'black'}>Servicios</SectionHeader>
                <div className="section_body">
                    <div className="servicios_grid">

                        <InfoCard 
                            icon={<TaxiIcon fill={'#fff'}/>}
                            title={'taxi remisse'}
                        />
                        <InfoCard 
                            icon={<AvionIcon fill={'#fff'}/>}
                            title={'taxi aeropuerto'}
                        />
                        <InfoCard 
                            icon={<MatrimonialIcon fill={'#fff'}/>}
                            title={'taxi matrimonial'}
                        />
                        <InfoCard 
                            icon={<TimeIcon fill={'#fff'}/>}
                            title={'por hora / full day'}
                        />
                        <InfoCard 
                            icon={<CourierIcon fill={'#fff'}/>}
                            title={'servicio de encomienda'}
                        />
                        <InfoCard 
                            icon={<MapsIcon fill={'#fff'}/>}
                            title={'city tour'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicios;