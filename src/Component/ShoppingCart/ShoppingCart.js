import React, {useRef} from 'react'
import Button from '@material-ui/core/Button';
import "./ShoppingCart.css";

const ShoppingCart =(props) =>{
     const item= useRef(null);
     const quantity = useRef("1");
     const price = useRef(null);
    const checkValidity=()=>{
        let isValid = false;
        if(item.current.value !== null && price.current.value !== null){
            return isValid = true;
        }
        else{
            alert("Please Fill The Details Properly");
        }
        return isValid
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        let valid = checkValidity()
        if(valid){
            props.submit(item.current.value,quantity.current.value,price.current.value);
             item.current.value= null;
             quantity.current.value ="1";
             price.current.value =null; 
        }
    }

    let form = (
        <form className="ShoppingCart">
             <label>Item :</label>
             <input type="text" placeholder="Product Name" ref={item}/>
             <label>Quantity :</label>
             <select ref={quantity}>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
             </select>
             <label>Price :</label>
             <input type="number" placeholder="Product Price" ref={price}/>
             <Button variant="outlined" color="primary" onClick = {submitHandler}>Submit</Button>
         </form>
     )
    return(
        <div className="container">
        <h1>Shopping Cart</h1>
        {form}
        </div>
    )
}
export default ShoppingCart