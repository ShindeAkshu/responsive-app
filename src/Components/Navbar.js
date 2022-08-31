import React from 'react';
import {useState} from 'react';

function Navbar() {
    const[navitems,setNavItems] = useState();
    return(
        <nav>
            <span>Home</span>
            <span>About</span>
        </nav>
        
        
    )
}

export default Navbar