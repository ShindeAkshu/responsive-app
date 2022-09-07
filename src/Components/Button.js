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
      const checkButtonStyle = STYLES.includes (buttonStyle) ? buttonStyle : STYLES[0]
    };