import React from "react";
import CartItemCard from "../components/CartItemCard";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";
import Button from "../components/Button.jsx";

const Cart = () => {
    const { cartQuantity, items } = useCart();
    return (
        <main className="p-8 pb-28">
            {cartQuantity > 0 &&
                <div className="flex flex-col gap-20 md:grid md:grid-cols-3">
                    <div className="flex flex-col gap-12 w-fit md:col-span-2">
                        {items.map(item => {
                            return (
                                <CartItemCard key={item.id} {...item}/>
                            )
                        })} 
                    </div>
                    <div className="flex flex-col gap-4 w-fit md:col-span-1">
                        <div className="flex justify-between gap-2 text-xl">
                            <div>Taxes</div>
                            <div>$0</div>
                        </div>
                        <div className="flex justify-between gap-2 text-xl">
                            <div>Shipping</div>
                            <div>$0</div>
                        </div>
                        <div className="flex justify-between gap-2 text-2xl">
                            <div>Total</div>
                            <div>
                                ${items.reduce((total, cartItem) => {
                                    const item = itemData.find(i => i.id === cartItem.id);
                                    return (total + (item?.price || 0) * cartItem.quantity);
                                }, 0)
                                }
                            </div>
                        </div>
                        <Button title="Checkout" />
                    </div>
                </div>
            }
            {cartQuantity === 0 && 
                    <p className="text-4xl text-center">Your basket is empty</p>
            }
        </main>
    )
};

export default Cart;