import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";

const Item = () => {
    // itemId returned by useParams is of type string
    const { itemId } = useParams();
    // Use +itemId to convert itemId to a number
    const item = itemData.find(i => i.id === +itemId);

    const { getQuantity, increaseQuantity, decreaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(item.id);

    return (
        <section className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
            <div className="flex-[0_0_calc(50%-1rem)]">
                <img src={item.url} className="w-9/12 min-w-28 rounded-2xl"></img>
            </div>
            <div className="flex-[0_0_calc(50%-1rem)] flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <span className="text-xl">${item.price}</span>
                </div>
                <div className="flex flex-col">
                    {quantity === 0 ? (
                        <div className="add-item"><button onClick={() => increaseQuantity(item.id)}>+ add to cart</button></div>
                    ) : <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-4">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <div><span className="quantity">{quantity}</span> in cart</div>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Item;