import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";

const CartItemCard = ({id, quantity}) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
    
    const item = itemData.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="cart-item-card flex flex-col gap-4 p-4 rounded-2xl bg-neutral-900">
            <div className="">
                <img src={item.url} className="w-full rounded-2xl"></img>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <span>{item.name}</span>
                        <span className="text-xs">x{quantity}</span>
                    </div>
                    <span className="text-xs">${item.price}</span>
                </div>
                <span className="text-lg">${item.price*quantity}</span>
            </div>
            <div className="flex justify-between">
                <button onClick={() => removeItem(item.id)}>Remove</button>
                <div className="flex justify-center items-center gap-2">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <div>{quantity}</div>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
            </div>
        </div>
    );
};

CartItemCard.propTypes = {
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CartItemCard;