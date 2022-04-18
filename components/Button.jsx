
const Button = ({notarget, children, enlace, type, size}) => {

    return (
        <a className={type ? `taxi_btn btn-${type} ${size}` : `taxi_btn ${size}` } target={notarget ? '' : '_blank'} href={enlace} rel='noreferrer'>
            {children}
        </a>
    );
}

Button.defaultProps = {
    size: 'md',
    children: 'Soy un boton',
    enlace: 'https://www.facebook.com/anderson.almeydatorres/'
}

export default Button;