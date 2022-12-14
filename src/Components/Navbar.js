import React from 'react';
import {useState} from 'react';
import {link} from 'react-router-dom';

function Navbar() {
    const[click,setClick]=useState(false);
    const[button,setButton] =useState(true);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window,innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize',showButton)
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
                    <li className='nav-item'>
                        <link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </link>
                    </li>
                    <li className='nav-item'>
                        <link to='/product' className='nav-links' onClick={closeMobileMenu}>
                            Product
                        </link>
                    </li>
                   
                </ul>
                {button && <Button buttonStyle='btn--outline'></Button>}

            </div>
        </nav>
    ) 

       
        
        
    
}

export default Navbar