import React from 'react';
import {useState} from 'react';

function Navbar() {
    const[navitems,setNavItems] = useState();
    return(
        <nav>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </nav>
        
        
    )
}

export default Navbar