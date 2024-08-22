import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";
import Button from "../components/Button.jsx";

const CartItemCard = ({id, quantity}) => {
    const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
    
    const item = itemData.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className="flex flex-col items-center justify-center gap-6 shadow-lg p-6 lg:flex-row">
            <img src={item.url} className="w-40"></img>
            <div className="flex flex-col">
                <span className="text-lg">{item.name}</span>
                <span className="text-xs">${item.price}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                    <Button handleClick={() => decreaseQuantity(item.id)} title="-" />
                    <div>{quantity}</div>
                    <Button handleClick={() => increaseQuantity(item.id)} title="+" />
                </div>
                <Button handleClick={() => removeItem(item.id)} title="Remove" />
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