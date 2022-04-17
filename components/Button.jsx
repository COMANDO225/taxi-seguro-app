
const Button = ({notarget, children, enlace, type}) => {

    return (
        <a className={type ? `taxi_btn btn-${type}` : `taxi_btn` } target={notarget ? '' : '_blank'} href={enlace} rel='noreferrer'>
            {children}
        </a>
    );
}

Button.defaultProps = {
    children: 'Soy un boton',
    enlace: 'https://www.facebook.com/anderson.almeydatorres/'
}

export default Button;