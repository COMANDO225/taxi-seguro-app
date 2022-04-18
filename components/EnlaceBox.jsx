const EnlaceBox = ({enlace, notarget, children}) => {
    return (
        <a href={enlace} target={notarget ? '' : '_blank'} rel="noreferrer" className='btn-box btn-primary'>
            {children}
        </a>
    )
}

export default EnlaceBox
