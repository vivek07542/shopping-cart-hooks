import React, { useRef, useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
    const [textForm, setTextForm] = useState(false);
    const editedText = useRef("");
   
    const blurEvent = () => {
        if (editedText.current.value !== "") {
            props.itemTextHandler(props.id, editedText.current.value);
            resetState();
        }
    }
    const resetState = () => {
        setTextForm(false);
    }
    return (
        <div className="ShoppingItem">
            {!textForm ? <p onDoubleClick={()=>setTextForm(true)}> Item :<span>{props.item}</span></p>
                : <div
                    onBlur={blurEvent}>
                    <textarea ref={editedText} defaultValue={props.item} />
                </div>
            }
            <div className="QuantityDiv">
                <Button variant="outlined" color="primary" onClick={() => props.editQuantityHandler(props.id, props.quantity, "add")}><AddIcon /></Button>
                <p>Quantity : <span>{props.quantity}</span></p>
                <Button variant="outlined" color="primary" onClick={() => props.editQuantityHandler(props.id, props.quantity, "subract")}><RemoveIcon /></Button>
                <Button variant="outlined" color="primary" onClick={() => props.deleteItemHandler(props.id)}><DeleteIcon /></Button>
            </div>
            <p>Amount :<span>{props.quantity * props.price}</span> </p>
        </div>
    )
}

export default ShoppingItem;