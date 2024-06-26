import React from "react";
import CartItemCard from "../components/CartItemCard";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";

const Cart = () => {
    const { cartQuantity, items } = useCart();
    return (
        <section id="cart">
            {cartQuantity > 0 &&
                <div className="flex flex-col justfy-center gap-20 lg:grid lg:grid-cols-3">
                    <div className="flex flex-col gap-12 w-full bg-neutral-900 lg:col-span-2">
                        {items.map(item => {
                            return (
                                <CartItemCard key={item.id} {...item}/>
                            )
                        })} 
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:col-span-1">
                        <div className="flex justify-between gap-2 xl">
                            <div>Taxes</div>
                            <div>$0</div>
                        </div>
                        <div className="flex justify-between gap-2 xl">
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
                        <button className="w-full">Checkout</button>
                    </div>
                </div>
            }
            {cartQuantity === 0 && 
                    <p className="text-4xl text-center">Your basket is empty</p>
            }
        </section>
    )
};

export default Cart;