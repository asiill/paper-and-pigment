import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemCard = ({id, name, price, url}) => {
    return (
        <div className="shadow-[4px_8px_8px_rgba(0,0,0,0.38)] flex flex-col justify-center gap-4 p-4">
            <div className="img-wrapper">
                <Link to={`/paper-and-pigment/shop/${id}`}>
                    <img src={url} className="w-full"></img>
                </Link>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <span>{name}</span>
                <span className="text-xl">${price}</span>
            </div>
        </div>
    );
};

ItemCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
};

export default ItemCard;