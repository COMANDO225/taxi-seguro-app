import WhatsaAppIconFill from "./icons/WhatsaAppIconFill";

const WspButton = () => {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=51927974418&text=Hola *Taxi Seguro* necesito una movilidad al aeropuerto" rel="noreferrer"
            target={"_blank"}
            className="wspButton"
        >
            <div className="iconContainer">
                <WhatsaAppIconFill fill = {'#2DD753'}/>
            </div>
        </a>
    );
}

export default WspButton;