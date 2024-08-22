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
            <div className="flex flex-col gap-4 md:items-center md:flex-row md:justify-between md:col-span-2 row-span-2">
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
                <div className="flex items-center rounded-md w-fit">
                    <input
                        className="text-black p-1 focus:outline-none"
                        type="search"
                        placeholder="..."
                    />
                    <button>
                        <svg className="w-[32px] h-[32px] bg-[#8C6577]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;