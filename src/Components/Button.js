import React from 'react';
import './Button.css';
import {Link} from'react-router-dom';

const STYLES=['btn--primary' , 'btn--outline']

const SIZES = ['btn-medium','btn-large']
 
export default Button= ({childern,
    type,
    onClick,
    butttonStyle,
    buttonSize}) =>{
      const checkButtonStyle = STYLES.includes (buttonStyle) ? buttonStyle : STYLES[0];

      const checkButtonSize = SIZES.includes (buttonSize) ? buttonSize : SIZES[0];
      return(
        <Link to='/sign-up' className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}>
          {childern}
        </button>

        <button>
          Get Started
        </button>
        </Link>
      ) 

    };