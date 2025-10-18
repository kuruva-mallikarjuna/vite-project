import './fullimage.css'
import {useContext} from "react";
import {ShopContext} from "../../App.jsx";


export default function Fullimage({val,back}) {

const {cartItems,setCartItems}=useContext(ShopContext);
function add(props){
    setCartItems([...cartItems,props]);

}


return(
    <div className='card'>
    
  <img src={val.image}/> 
  <div className='h1'>
  <h1>{val.name}</h1> <br></br>
  <h1> &#8377;{val.price}.00</h1>
      <button onClick={()=>add(val)}>add to cart</button>{" "}
      <button onClick={()=> back(null)} className='back'>back</button>

  </div>

  </div>


)

}