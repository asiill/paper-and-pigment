import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import cartImg from "../assets/icons/cart.svg";

const Header = () => {
    const { cartQuantity } = useCart();
    return (
        <header className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-between md:gap-0 py-4 px-16 text-white">
            <div>
                <Link to="/paper-and-pigment/">
                    <div>
                        <span className="text-3xl italic">Paper & Pigment</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8">
                <Link to="/paper-and-pigment/">
                    Home
                </Link>
                <Link to="/paper-and-pigment/shop">
                    Shop
                </Link>
                <Link to="/paper-and-pigment/contact">
                    Contact
                </Link>
                <Link to="/paper-and-pigment/cart">
                    <div className="flex gap-2">
                        <span>
                            <img className="w-5 h-5" src={cartImg} title="basket"></img>
                        </span>
                        <span className="cart-quantity">{cartQuantity}</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;