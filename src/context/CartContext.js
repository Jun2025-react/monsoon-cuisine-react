import React, { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';;

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const localStorageCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const [cartData, setCartData] = useState({
        items: localStorageCartItems,
        totalPrice: localStorageCartItems.reduce((total, item) => total + item.totalPrice, 0),
        count: localStorageCartItems.reduce((count, item) => count + item.quantity, 0),
    });

    useEffect(() => {
        // Fetch cart data from local storage or API
        // setMockCartData();

    }, [cartData])

    const setMockCartData = () => {
        setCartData(() => ({
            items: JSON.parse(localStorage.getItem('cartItems')) || [],
            totalPrice: (JSON.parse(localStorage.getItem('cartItems')) || []).reduce((total, item) => total + item.totalPrice, 0),
            count: (JSON.parse(localStorage.getItem('cartItems')) || []).length,
        }));
    }

    const getCartCount = () => {
        const url = `${BASE_URL}/cart/count`;
        const data = { user_id: 1 };
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };


        // Mock API call to fetch cart count
        console.log("Add Cart API - Request Options: ", requestOptions);


        // Real API call to fetch cart count
        // fetch(url, requestOptions)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setCartData({ ...prev, count : data.count);
        //     })
        //     .catch((error) => {
        //         console.error('Error fetching cart count:', error);
        //     });
    }

    const addToCart = (apiData) => {
        const url = `${BASE_URL}/addCart`;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(apiData)
        };
        console.log("Request Data", requestOptions);
        // fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }
    const mockAddToCart = (mockData) => {
        // console.log("Mock Add Cart API - Data: ", mockData);
        let prevCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        let newCartItems = [...prevCartItems, mockData];
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        // console.log("New Cart Items: ", newCartItems);
    
        // setMockCartData();
        setCartData((prev) => ({
            items: newCartItems,
            totalPrice: newCartItems.reduce((totalPrice, item) => totalPrice + item.totalPrice, 0),
            count: newCartItems.reduce((count, item) => count + item.quantity, 0),
        }));
        console.log("Updated cartData: ", cartData); 
    }

    return (
        // <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
        <CartContext.Provider value={{ cartData, mockAddToCart, addToCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
}