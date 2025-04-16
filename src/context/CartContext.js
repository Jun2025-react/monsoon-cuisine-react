import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item) => {
        setCartItems((prevCart) => [...prevCart, item]);
        setTotalPrice((prevTotal) => prevTotal + item.price);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevCart) => prevCart.filter(item => item.id !== itemId));
        setTotalPrice((prevTotal) => prevTotal - cartItems.find(item => item.id === itemId).price);
    };

    return (
        <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}