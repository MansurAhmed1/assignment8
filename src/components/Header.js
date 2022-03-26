import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
          <div className="nav">
          <div className='logo'>
                Honda Store
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#aboutus">About Us</a></li>
            </ul>
          </div>
        </div>
    );
};

export default Header;