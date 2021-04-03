import React, { useEffect } from 'react';
import ShoppingCart from "../Component/ShoppingCart/ShoppingCart";
import ShoppingStatement from "../Component/ShoppingStatement/ShoppingStatement";
import { useDispatch } from "react-redux";
import * as shoppingAction from "../Store/redux/reducer";

const ShoppingApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(shoppingAction.initilizeHandler());
    }, [])
    return (
        <div>
            <ShoppingCart submit={(item, quantity, price) => { dispatch(shoppingAction.createItemHandler(item, quantity, price)) }} />
            <ShoppingStatement />
        </div>
    )
}
export default ShoppingApp;