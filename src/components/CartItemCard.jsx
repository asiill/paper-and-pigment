import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";

const CartItemCard = ({id, quantity}) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
    
    const item = itemData.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="shadow-[4px_8px_8px_rgba(0,0,0,0.38)] flex flex-col gap-6 justify-center items-center p-6 lg:flex-row">
            <img src={item.url} className="w-40 rounded-2xl"></img>
            <div className="flex flex-col">
                <span className="text-lg">{item.name}</span>
                <span className="text-xs">${item.price}</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-center items-center gap-2">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <div>{quantity}</div>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            <div className="text-2xl">${item.price*quantity}</div>
        </div>
    );
};

CartItemCard.propTypes = {
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CartItemCard;