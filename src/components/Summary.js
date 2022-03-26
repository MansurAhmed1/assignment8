import SmallCart from "./SmallCart";
import './Summery.css'


const Summary = (prop) => {
    const{cart,chose1ForMe,clear,remove}=prop;
 
    // console.log(array[(Math.random()*array.length).toFixed(0)])
   
console.log(cart)


    return (
        <div >
            <h3 style={{color:"white"}}>Selected Bike</h3>
<div className="smallParents">
{
          cart.map((obj,index)=> <SmallCart obj={obj} key={index} remove={remove}></SmallCart>)
      }
</div>
     

       

<div style={{paddingTop:"10px"}}>
<button style={{border:"none",borderRadius:"3px",padding:"5px",color:"green",margin:"5px",}} onClick={chose1ForMe}>CHOOSE 1 FOR ME</button>
<button style={{border:"none",borderRadius:"3px",padding:"5px",color:"green",marginRight:"5px"}}   onClick={clear}>CHOOSE AGAIN</button>
</div>
       </div>
    );
};

export default Summary;

