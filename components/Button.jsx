
const Button = ({children, enlace, type}) => {


    return (
        <a className={type ? `taxi_btn btn-${type}` : `taxi_btn` } target={'_blank'} href={enlace} rel='noreferrer'>
            {children}
        </a>
    );
}

Button.defaultProps = {
    // type: 'transparent',
    children: 'Soy un boton',
    enlace: 'https://www.facebook.com/anderson.almeydatorres/'
}

export default Button;