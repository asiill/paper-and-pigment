import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, handleClick }) => {
    return (
        <button onClick={handleClick} className="w-fit rounded-md p-2 text-md text-white text-bold bg-[#8C6577] transition-opacity hover:opacity-80">
            {title}
        </button>
    );
};

export default Button;

Button.propTypes = {
    title: PropTypes.string,
    handleClick: PropTypes.func,
};