import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faBars} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
          <div className="nav">
          <div className='logo'>
            CAR STORE 
            </div>
            <div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#aboutus">About Us</a></li>
            </ul>
            <FontAwesomeIcon className='menu-icon' icon={faBars} />
            </div>
          </div>
        </div>
    );
};

export default Header;
