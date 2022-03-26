import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
         
import './Cart.css'

const Cart = (prop) => {
    const{meal, clickFunction}=prop
    const{name,img,price}=meal
   
    return (
        
<div className='card'>
<div className="card-image">
  <img src={img} alt="" />

</div>
<div className="card-info">

  <h3 className='product-name'>Name:{name}  </h3>
  
  <p className='product-price'>Price:{price}$</p>
</div>
<button onClick={function(){clickFunction(meal)}} ><span style={{marginRight:"10px"}}>Add to Cart</span>
<FontAwesomeIcon icon={faShoppingCart} />
</button>
</div>
    );
};

export default Cart;


