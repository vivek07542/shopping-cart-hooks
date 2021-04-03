import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ShoppingItem from "./ShoppingItem/ShoppingItem";
import * as actionType from "../../Store/redux/reducer";
import "./ShoppingStatement.css";

const ShoppingStatement = () => {
    const shoppingItem = useSelector(state => state.reducer.shoppingItem);
    const totalAmount = useSelector(state => state.reducer.totalAmount)
    const dispatch = useDispatch();

    let items = shoppingItem.map(list => {
        return (<ShoppingItem
            key={list.id}
            item={list.item}
            id={list.id}
            quantity={list.quantity}
            price={list.price}
            itemTextHandler={(id, item) => { dispatch(actionType.editItemTextHandler(id, item)) }}
            editQuantityHandler={(id, quantity, rules) => { dispatch(actionType.editQuantityHandler(id, quantity, rules)) }}
            editQuantityHandler={(id, quantity, rules) => { dispatch(actionType.editQuantityHandler(id, quantity, rules)) }}
            deleteItemHandler={(id) => { dispatch(actionType.deleteItemHandler(id)) }}
        />)
    })
    return (
        <div>
            <h1>Shopping Summary</h1>
            <div className="ShoppingStatement">
                {items}
            </div>
            <p style={{ fontWeight: 'bold' }}>Total price : {totalAmount}</p>
        </div>
    )
}

export default ShoppingStatement;