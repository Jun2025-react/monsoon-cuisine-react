import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, putData } from '../services/DataService';
import { BASE_URL } from '../constants/constants';;
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const REACT_APP_USE_MOCK = process.env.REACT_APP_USE_MOCK === "true";

    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartData, setCartData] = useState({
        items: localStorageCartItems,
        totalPrice: localStorageCartItems.reduce((total, item) => total + item.totalPrice, 0),
        count: localStorageCartItems.reduce((count, item) => count + item.quantity, 0),
    });

    const getCartItemsDetail = () => {
        const cartItemsDetails = getData("/customer/cart");
        return cartItemsDetails;
    }

    useEffect(() => {
        // Fetch cart data from local storage or API
        // setMockCartData();
        getCartCount();
    }, [cartData])

    const getCartCount = () => {

        if (REACT_APP_USE_MOCK) {
            getMockCartCount();
            return;
        }

        const url = 'customer/cart/count';
        const data = { customer: 1 };

        const result = getData(url, data);
        return result.data.total_quantity || 0;

    }

    const addToCart = (apiData, mockData = {}) => {
        if (REACT_APP_USE_MOCK) {
            mockAddToCart(mockData);
            return;
        }

        try {
            const result = putData("/addtocart", apiData);
            return "success";
        } catch (error) {
            console.error("Error adding to cart:", error);
            return "error";
        }



    }

    const mockAddToCart = (mockData) => {
        // console.log("Mock Add Cart API - Data: ", mockData);
        let prevCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        let newCartItems = [...prevCartItems, mockData];
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));

        console.log("Updated cartData: ", cartData);
    }

    const getMockCartCount = () => {
        const newCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartData((prev) => ({
            items: newCartItems,
            totalPrice: newCartItems.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0),
            count: newCartItems.reduce((count, item) => count + item.quantity, 0),
        }));

        console.log("Get cart count: ", cartData);
    }
    return (
        // <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
        <CartContext.Provider value={{ cartData, mockAddToCart, addToCart, getCartCount, getCartItemsDetail }}>
            {children}
        </CartContext.Provider>
    );
}