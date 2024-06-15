import React from "react";

const Footer = () => {
    return (
        <footer className="flex justify-between fixed left-0 bottom-0 py-4 px-4 w-full text-xs text-white bg-black">
            <div className="self-end">&copy; 2024 Paper and Pigment</div>
            <div className="self-end">Image credits: <a href="https://www.pexels.com/">https://www.pexels.com/</a></div>
        </footer>
    );
};

export default Footer;