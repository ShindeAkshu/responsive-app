import React from 'react';
import {useState} from 'react';
import {link} from 'react-router-dom';

function Navbar() {
    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <link to="/" className='navbar-logo'>
                    Travels <i className="fab fa-typo3"></i>
                </link>

            </div>
        </nav>
    ) 

       
        
        
    
}

export default Navbar