const SectionHeader = ({children, subtitle, orientation, theme}) => {



    return (
        <div className={theme ? `section_header ${theme}` : 'section_header'}>
            
            <div className={ orientation ? `section_subtitle ${orientation}` : "section_subtitle"}>
                <span className="line_l"></span>
                <h2>{subtitle}</h2>
                <span className="line_r"></span>
            </div>
            <h1 className={ orientation ? `section_title ${orientation}` : "section_title"}>
                {children}
            </h1>
        </div>
    )
}

SectionHeader.defaultProps = {
    children: 'titulo',
    subtitle: 'subtitulo'
}

export default SectionHeader;