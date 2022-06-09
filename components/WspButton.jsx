import WhatsaAppIconFill from "./icons/WhatsaAppIconFill";

const WspButton = () => {
    return (
        <a 
            href="https://api.whatsapp.com/send?phone=51916019563&text=Hola *Taxi Seguro* necesito una movilidad" rel="noreferrer"
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