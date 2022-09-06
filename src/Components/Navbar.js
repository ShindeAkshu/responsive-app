import React from 'react';
import {useState} from 'react';
import {link} from 'react-router-dom';

function Navbar() {
    const[click,setClick]=useState(false);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <link to="/" className='navbar-logo'>
                    Travels <i className="fab fa-typo3"></i>

                </link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className= {click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                   

                </ul>

            </div>
        </nav>
    ) 

       
        
        
    
}

export default Navbar