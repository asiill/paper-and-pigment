import React from "react";
import CartItemCard from "../components/CartItemCard";
import { useCart } from "../context/CartContext.jsx";
import itemData from "../assets/itemData.jsx";

const Cart = () => {
    const { cartQuantity, items } = useCart();
    return (
        <section id="cart">
            {cartQuantity > 0 &&
                <div className="flex flex-col gap-8">
                    <div className="cart-items grid gap-12">
                        {items.map(item => {
                            return (
                                <CartItemCard key={item.id} {...item}/>
                            )
                        })} 
                    </div>
                    <div className="border border-solid border-neutral-900"></div>
                    <div className="flex flex-col gap-2 md:flex-row md:justify-around">
                        <div className="flex gap-2 text-2xl">
                            <div>Total:</div>
                            <div>
                                ${items.reduce((total, cartItem) => {
                                    const item = itemData.find(i => i.id === cartItem.id);
                                    return (total + (item?.price || 0) * cartItem.quantity);
                                }, 0)
                                }
                            </div>
                        </div>
                        <button className="max-w-80">Checkout</button>
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