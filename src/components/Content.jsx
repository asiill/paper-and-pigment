import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from  "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Item from "../pages/Item.jsx";
import Cart from "../pages/Cart.jsx";
import Contact from "../pages/Contact.jsx";

const Content = () => {
    return (
        <>
            <Routes>
                <Route path="/paper-and-pigment/*" element={<Home />} />
                <Route path="/paper-and-pigment/shop" element={<Shop />} />
                <Route path="/paper-and-pigment/shop/:itemId" element={<Item />} />
                <Route path="/paper-and-pigment/contact" element={<Contact />} />
                <Route path="/paper-and-pigment/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default Content;