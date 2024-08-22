import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";
import Button from "../components/Button.jsx";

const Item = () => {
    // itemId returned by useParams is of type string
    const { itemId } = useParams();
    // Use +itemId to convert itemId to a number
    const item = itemData.find(i => i.id === +itemId);

    const { getQuantity, increaseQuantity, decreaseQuantity, removeItem } = useCart();
    const quantity = getQuantity(item.id);

    return (
        <main className="flex flex-col gap-4 p-8 pb-28 md:flex-row md:items-center">
            <figure className="relative md:flex-[0_0_calc(50%-1rem)]">
                <img src={item.url} alt={item.alt} className="w-9/12 min-w-28 "></img>
                <figcaption className="absolute bottom-0 left-0 p-1 text-black text-xs">Photo by <a href={item.creditURL} target="_blank">{item.credit}</a></figcaption>
            </figure>
            <div className="flex flex-col gap-4 md:flex-[0_0_calc(50%-1rem)]">
                <div className="flex flex-col gap-4">
                    <h1>{item.name}</h1>
                    <p className="text-lg">{item.quantity}</p>
                    <p>{item.description}</p>
                    <span className="text-3xl">${item.price}</span>
                </div>
                <div className="flex flex-col">
                    {quantity === 0 ? (
                        <div className="add-item"><Button handleClick={() => increaseQuantity(item.id)} title="+ add to cart"/></div>
                    ) : <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <Button handleClick={() => decreaseQuantity(item.id)} title="-" />
                                <div><span className="quantity">{quantity}</span> in cart</div>
                                <Button handleClick={() => increaseQuantity(item.id)} title="+" />
                            </div>
                            <Button handleClick={() => removeItem(item.id)} title="Remove"/>
                        </div>
                    }
                </div>
            </div>
        </main>
    );
};

export default Item;