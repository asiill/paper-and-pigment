import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 fixed left-0 bottom-0 p-4 w-full text-xs text-white bg-black md:flex-row md:justify-between">
            <div>&copy; 2024 Paper and Pigment</div>
            <div>Image credits: <a href="https://www.pexels.com/" target="_blank">https://www.pexels.com/</a></div>
        </footer>
    );
};

export default Footer;