import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faCircleCheck,} from '@fortawesome/free-solid-svg-icons'
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

        if(!cart.includes(meal)){
            if(cart.length<4){
                setCart([...cart,meal])
             }
        }

     
   
        

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
 console.log(obj)
setCart([...obj])

}





    //price and quantity set in object
   
   
    return (
        <div>
       
            {/* <h1>{cart.strMeal}</h1> */}
           <div className='cards'>
           
         <div>
             <h2 style={{color:"red"}}>Please picked 4  items  
            <span style={{marginLeft:"10px"}}> <FontAwesomeIcon className='icon' icon={faCircleCheck} /></span></h2>
         <div className='products'>
        
        {
             products.map((product,index)=><Cart  meal={product} key={index} clickFunction={handleClick} ></Cart>)
         }
        </div>
        <div style={{backgroundColor:"white",textAlign:"start",padding:"10px 30px"}}>
            <h1>how react works</h1>
            We usually use JavaScript with HTML, CSS on the website. Now the browser creates a dome tree behind the scenes so that the user can interact with that dome. This process in the browser is called critical render path [].
            <img style={{width:"400px"}} src="https://droidxplore.com/wp-content/uploads/2021/12/DroidXplore-1.png" alt="" /> <br />
            See the processes here. In this way a DOM is created by going through each step. Then a webpage appears in front of us. But we know that JavaScript can manipulate DOM.So when you manipulate the DOM of a page that has been rendered complete with JavaScript, that webpage is completely rendered again (except for one or two of the latest browsers, most of the browsers have completely re-created the Dom Tree and rendered it) which is time consuming. And so if there is so much JavaScript on a page to manipulate DOM, that webpage will be slow. So here's the real game of React.
            <br />
            React A seam to seam creates another dom similar to this browser dom which is called virtual dom. Now this dome looks exactly like the real dome, but this virtual dome is actually a JavaScript object. React builds it in such a way that any element can be modified easily and efficiently using JavaScript with this DOM.Now here too React does another job. React creates not one but two virtual domes. But why two? Yes, this is the trick. When the user takes an action in the React app or does something we call a change in the Dome, React puts those changes in one of the two virtual Domes, and the other is in the previous version. Now comparing the new one with the previous one, seeing the reaction, exactly which specific element has been changed. According to him, React does not re-render or re-paint the whole dome but only changes what has been changed. It is easy to work quickly and the browser does not have to do any extra, unnecessary work. And so, using this technique, React can render so fast.
        <h1>Difference between State and Props</h1>
        <div className='props'>
            <div style={{textAlign:"center",fontWeight:"bold"}}>Props</div>
            <div style={{textAlign:"center",fontWeight:"bold"}}>State</div>
            <div>Props are immutable.</div>
            <div>State is mutable.</div>
            <div>Props are read-only.</div>
            <div>State changes can be asynchronous.</div>
            <div>Props allow you to pass data from one component to other components as an argument.</div>
            <div>State holds information about the components.</div>
            <div>Props can be accessed by the child component</div>
            <div>State cannot be accessed by child components.</div>
            <div>Props are used to communicate between components.</div>
            <div>States can be used for rendering dynamic changes with the component.</div>
            <div>Stateless component can have Props.</div>
            <div>Stateless components cannot have State.</div>
            <div>Props make components reusable.</div>
            <div>State cannot make components reusable.</div>
            <div>Props are external and controlled by whatever renders the component.</div>
            <div>The State is internal and controlled by the React Component itself.</div>
        </div>
        
        </div>
         </div>
           <div className='cart'>
             
               <Summary cart={cart}  chose1ForMe={chose1ForMe}  clear={ clear} remove={remove}></Summary>
           </div>
           </div>

        </div>
    );
};

export default Products;



