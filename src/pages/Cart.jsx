import React from "react";
import CartItemCard from "../components/CartItemCard";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
    const { cartQuantity, items } = useCart();
    return (
        <section id="cart">
            {cartQuantity > 0 && 
                <div className="cart-items grid gap-12">
                    {items.map(item => {
                        return (
                            <CartItemCard key={item.id} {...item}/>
                        )
                    })} 
                </div>
            }
            {cartQuantity === 0 && 
                    <p className="text-4xl text-center">Your basket is empty</p>
            }
        </section>
    )
};

export default Cart;