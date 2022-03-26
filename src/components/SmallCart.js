import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faTrash} from '@fortawesome/free-solid-svg-icons'
import './SmallCart.css'

const SmallCart = (prop) => {
    const{obj,remove}=prop
    const{name,img,id}=obj
    // console.log(obj[0])
    return (
        <div className='smallCart'>
            <img className='image' src={img} alt="" />
            <h5>{name}</h5>
            <button onClick={function(){remove(id)}}> 
             <FontAwesomeIcon className='icon' icon={faTrash} />
            </button>
        </div>
    );
};

export default SmallCart;