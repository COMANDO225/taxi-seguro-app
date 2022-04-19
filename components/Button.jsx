import Link from 'next/link'


const Button = ({redirect, notarget, children, enlace, type, size}) => {

    return (
            !redirect?
            <>
                <a className={type ? `taxi_btn btn-${type} ${size}` : `taxi_btn ${size}` } target={notarget ? '' : '_blank'} href={enlace} rel='noreferrer'>
                    {children}
                </a>
            </>
            : 
            <>
                <Link href={redirect}>
                    <a className={type ? `taxi_btn btn-${type} ${size}` : `taxi_btn ${size}` } target={notarget ? '' : '_blank'} href={redirect} rel='noreferrer'>
                        {children}
                    </a>
                </Link>
            </>
    );
}

Button.defaultProps = {
    size: 'md',
    children: 'Soy un boton',
    enlace: 'https://www.facebook.com/anderson.almeydatorres/'
}

export default Button;