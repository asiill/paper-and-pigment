import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import cartImg from "../assets/icons/cart.svg";

const Header = () => {
    const { cartQuantity } = useCart();
    return (
        <header className="flex flex-col gap-8 p-8 text-white bg-[#1C2625] md:pb-0 md:grid md:grid-cols-2 md:grid-rows-2">
            <div className="md:col-span-1 md:row-span-1">
                <Link to="/paper-and-pigment/">
                    <div>
                        <span className="text-3xl italic">Paper & Pigment</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:col-span-1 md:row-span-1 md:justify-self-end">
                <Link to="/paper-and-pigment/shop">
                    Shop
                </Link>
                <Link to="/paper-and-pigment/contact">
                    Contact
                </Link>
                <Link to="/paper-and-pigment/cart">
                    <div className="flex gap-2">
                        <span>
                            <img className="w-5 h-5 min-w-5" src={cartImg} title="basket"></img>
                        </span>
                        <span className="cart-quantity">{cartQuantity}</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                <Link to="/paper-and-pigment/shop">
                    Paint
                </Link>
                <Link to="/paper-and-pigment/shop">
                    Brushes
                </Link>
                <Link to="/paper-and-pigment/shop">
                    Drawing
                </Link>
                <Link to="/paper-and-pigment/shop">
                    Surfaces
                </Link>
            </div>
        </header>
    );
};

export default Header;