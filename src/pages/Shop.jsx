import React from "react";
import ItemCard from "../components/ItemCard.jsx";
import itemData from "../assets/itemData.jsx";

const Shop = () => {
    //const items = itemData.map(item => <ItemCard key={item.id} {...item}/>);
    return (
        <section id="shop">
            <div className="item-list grid gap-12">
                {itemData.map(item => {
                    return (
                        <ItemCard 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            url={item.url}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Shop;