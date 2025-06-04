import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, putData } from '../services/DataService';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const REACT_APP_USE_MOCK = process.env.REACT_APP_USE_MOCK === "true";

    const [cartCount, setCartCount] = useState(0);

    const getCartItemsDetail = () => {

        if (REACT_APP_USE_MOCK) {
            const mockCartData = JSON.parse(localStorage.getItem('mockCartData')) || {};
            if (mockCartData) {
                return mockCartData;
            }
        }

        const cartItemsDetails = getData("/customer/cart");
        return cartItemsDetails;
    }

    useEffect(() => {
        getCartCount();
    }, [cartCount])

    const getCartCount = () => {

        if (REACT_APP_USE_MOCK) {
            getMockCartCount();
            return;
        }

        const url = 'customer/cart/count';
        const data = { customer: 1 };

        const result = getData(url, data);

        setCartCount(result.data.total_quantity || 0);
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
        let prevCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        let newCartItems = [...prevCartItems, mockData];
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        console.log("newCartItems", newCartItems);

        getMockCartCount();

        const convertedMockCartData = convertMockCart(newCartItems);
        const mockCartData = {
            data: convertedMockCartData,
            status: true,
        }

        localStorage.setItem('mockCartData', JSON.stringify(mockCartData));
        console.log("Mock cart data updated:", mockCartData);
    }

    const convertMockCartItems = (mockItems = []) => {
        return mockItems.map(item => {

            const uniqueId = new Date().getTime() + Math.random().toString(36).substring(2, 15);
            console.log("Item :: ", item)
            return {
                id: `${item.id}_${uniqueId}`,
                item_details: {
                    id: item.id,
                    shop_id: 1,
                    name: item.name,
                    description: item.description,
                    unit_of_measurement_id: item.unit_of_measurement_id,
                    price: item.price,
                    item_status: "available",
                    image_path: item.image_path,
                    menu_category_id: item.item_category_id,
                },
                sub_total_price: item.totalPrice,
                sub_total_quantity: item.quantity,
                addons: item.item_addons.map(addon => ({
                    id: `${addon.id}_${uniqueId}`,
                    cart_item_id: item.id,
                    sub_total_price: addon.sub_total_price,
                    sub_total_quantity: addon.sub_total_quantity,
                    addon_details: {
                        id: addon.id,
                        label: addon.label,
                        name: addon.name,
                        price: addon.price,
                        option_status: "Available",
                        image_path: addon.image_path,
                        item_id: item.id,
                        created_at: addon.created_at,
                        updated_at: addon.updated_at,
                    }
                })),
                options: item.item_options.map(option => ({
                    id: `${option.id}_${uniqueId}`,
                    cart_item_id: item.id,
                    sub_total_price: option.sub_total_price,
                    sub_total_quantity: option.sub_total_quantity,
                    options_details: {
                        id: option.id,
                        label: option.label,
                        name: option.name,
                        price: option.price,
                        option_status: "Available",
                        image_path: option.image_path,
                        item_id: item.id,
                        created_at: option.created_at,
                        updated_at: option.updated_at,
                    }
                }))
            }
        });
    }

    const convertMockCart = (mockItems = []) => {
        return {
            customer_id: 1,
            shop_id: 1,
            items: convertMockCartItems(mockItems),
            total_price_without_discount: mockItems.reduce((total, item) => total + (item.price * item.quantity), 0),
            total_quantity: mockItems.reduce((total, item) => total + item.quantity, 0)
        };
    }

    const getMockCartCount = () => {
        const newCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        setCartCount(newCartItems.reduce((count, item) => count + item.quantity, 0));
        console.log("Get cart count: ", newCartItems.reduce((count, item) => count + item.quantity, 0));
    }
    return (
        <CartContext.Provider value={{ addToCart, getCartCount, getCartItemsDetail, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}