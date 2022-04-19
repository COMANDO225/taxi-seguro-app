// react-scroll
import {Link as LinS} from 'react-scroll'

import Button from "./Button"

const Navigations = ({mode, children}) => {

    return (
        <div className={mode ? `nav_items ${mode}` : 'nav_items'}>
            {children}
        </div>
    );
}

export default Navigations;