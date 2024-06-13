import { createContext, useState, useContext } from "react";

const CartContext = createContext({});

const useCart = () => {
    return useContext(CartContext);
}

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const getQuantity = (id) => {
        return items.find(item => item.id === id)?.quantity || 0;
    };

    const increaseQuantity = (id) => {
        setItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                });
            }
        });
    };

    const decreaseQuantity = (id) => {
        setItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity ===1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                });
            }
        });
    };

    const removeItem = (id) => {
        setItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        });
    };

    const cartQuantity = items.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    return (
        <CartContext.Provider value={{
            getQuantity, increaseQuantity, decreaseQuantity, removeItem, items, cartQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
};

export { useCart, CartProvider };