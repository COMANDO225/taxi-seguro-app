import ButtonWhatsApp from "./ButtonWhatsApp"
import Image from 'next/image'

const ProductCard = ({name, img, subtitle, description, price, dolarprice}) => {
    return (
        <div className="flotaCard">
            <div className="flotaCard_head">
                <div className="flotar_card_img_container">
                    <div className="flotar_card_img">
                        <Image
                            draggable={false}
                            layout="fill"
                            objectFit="contain"
                            src={`https://res.cloudinary.com/dro4ur0kq/image/upload/v1654605936/taxiseguro/flota/${img}`}
                            alt={`imagen de ${name}`}
                        />
                    </div>
                </div>
            </div>
            <div className="flotaCard_body">
                <div className="flotaCard_body_info">
                    <h3 className="flotaCard_title">{name}</h3>
                    <h4 className="flotaCard_subtitle">{subtitle}</h4>
                    <p className="flotaCard_desc">{description}</p>
                </div>
                <div className="flotaCard_body_prices">
                    <div className="label_price">Desde:</div>
                    
                    <div className="menu_prices">
                        <div className="flotaPrice"><span>$</span> {dolarprice ? dolarprice.toFixed(2) : '--.--'}</div>
                        <ButtonWhatsApp
                            enlace={`https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* deseo reservar el ${name}`}
                        />
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
}

export default ProductCard;