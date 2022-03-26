import React, {useEffect, useState} from 'react';
import './Product.css'
import Cart from './Cart';

import Summary from './Summary';




//we should to remember that every component is a function 
const Products = () => {
    const[products,setProducts]=useState([])
    useEffect(function(){
        fetch('honda.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);


    const[cart,setCart]=useState([])
    
   

    //handleclickFunction
    function handleClick(meal){
     
     
     setCart([...cart,meal])
        

    }

   console.log(cart)
   

    function chose1ForMe(){

        const obj=cart[(Math.random()*cart.length).toFixed(0)]
        if(obj!==undefined){
            setCart([obj])
        }
    


        



    }

 function clear(){

    setCart([])
 }


function remove(id){

// console.log(value.strMeal)

// //  e.target.parentNode.style.display="none"
 const obj=cart.filter(obj=>obj.id !==id)
setCart([obj])

}





    //price and quantity set in object
   
   
    return (
        <div>
       
            {/* <h1>{cart.strMeal}</h1> */}
           <div className='cards'>
           
           <div className='products'>
        
           {
                products.map((product,index)=><Cart  meal={product} key={index} clickFunction={handleClick} ></Cart>)
            }
           </div>
           <div className='cart'>
             
               <Summary cart={cart}  chose1ForMe={chose1ForMe}  clear={ clear} remove={remove}></Summary>
           </div>
           </div>

        </div>
    );
};

export default Products;



