
const Navigations = ({mode, children}) => {

    return (
        <div className={mode ? `nav_items ${mode}` : 'nav_items'}>
            {children}
        </div>
    );
}

export default Navigations;