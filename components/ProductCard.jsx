import WhatsAppIcon from "./icons/WhatsAppIcon";

const ProductCard = ({name, subtitle, description, price, enlace}) => {
    return (
        <div className="flotaCard">
            <div className="flotaCard_head">
                imagen de auto
            </div>
            <div className="flotaCard_body">
                <div className="flotaCard_body_info">
                    <h3 className="flotaCard_title">{name}</h3>
                    <h4 className="flotaCard_subtitle">{subtitle}</h4>
                    <p className="flotaCard_desc">{description}</p>
                </div>
                <div className="flotaCard_body_prices">
                    <div className="label_price">Precio de Ida (Going Price):</div>
                    
                    <div className="menu_prices">
                        <div className="flotaPrice"><span>S/.</span> {price}</div>
                        <a  className="flotaCard_btn" target={"_blank"} rel='noreferrer'
                            href={enlace}
                        >
                            <div className="wsp_icon_floatCard">
                                <WhatsAppIcon/>
                            </div>
                            <p>WhatsApp</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductCard.defaultProps = {
    name: 'nombre de producto',
    subtitle: '4 pasajeros (passengers)',
    description: 'La opción ideal, una ruta tranquila y comoda para 1 - 4 personas.',
    price: '70.00',
    enlace: 'https://www.facebook.com/anderson.almeydatorres',
    
}

export default ProductCard;