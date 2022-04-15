import AvionIcon from "./icons/AvionIcon";

const InfoCard = ({children, title, icon, style}) => {
    return (
        <div className={style ? `info_card ${style}` : 'info_card'}>
            <div className="info_card_svg_container">
                <div className="info_card_svg">
                    {icon}
                </div>
            </div>
            <div className="info_card_content">
                <h2 className="info_card_title">{title}</h2>
                <p className="info_card_parraf">{children}</p>
            </div>
        </div>
    );
}

InfoCard.defaultProps = {
    title: 'titulo info card',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie ante sollicitudin, bibendum risus ut, sag'
}

export default InfoCard;