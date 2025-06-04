import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, putData, postData } from '../services/DataService';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const REACT_APP_USE_MOCK = process.env.REACT_APP_USE_MOCK === "true";

    const [cartCount, setCartCount] = useState(0);

    const getCartItemsDetail = () => {
        return getData("/customer/cart");
    }

    useEffect(() => {
        getCartCount();
    }, [cartCount])

    const getCartCount = () => {

        if (REACT_APP_USE_MOCK) {
            setMockCartCount();
        }

        const data = { customer: 1 };
        const result = getData('/customer/cart/count', data);
        console.log("result.data.total_quantity: ", result.data.total_quantity);
        setCartCount(result.data.total_quantity || 0);
    }

    const addToCart = (apiData, mockData = {}) => {
        let data = apiData || {}
        if (REACT_APP_USE_MOCK) data = getMockAddToCart(mockData);

        try {
            putData("/addtocart", data);
            return "success";
        } catch (error) {
            console.error("Error adding to cart:", error);
            return "error";
        } finally {
            getCartCount();
        }
    }

    const increaseItemCount = (item) => {
        console.log("Increase item count====================: ", item);
        if (!item || !item.id) {
            console.error("Invalid item data:", item);
            return;
        }

        let data = {
            customer: 1,
            count: 1,
            cartItem: item.id
        };

        if (REACT_APP_USE_MOCK) data = changeMockItemCount(item, "+");

        postData("/customer/cart/count/quentity", data);

        getCartCount();
    }

    const decreaseItemCount = (item) => {
        if (!item || !item.id) {
            console.error("Invalid item data:", item);
            return;
        }

        let data = {
            customer: 1,
            count: 0,
            cartItem: item.id
        };

        if (REACT_APP_USE_MOCK) data = changeMockItemCount(item, "-");

        postData("/customer/cart/count/quentity", data);

        getCartCount();
    }

    const changeMockItemCount = (item, change) => {
        let sign = 0;
        if (change === "+") sign = 1;
        if (change === "-") sign = -1;
        console.log("Change mock item count: ", item, sign);
        // Change localStorage cartItems
        calcMockCartItemCount(item, sign);

        // Change localStorage cartItemDetails
        return getMockCartItemDetails();
        // return calcMockCartItemDetailsCount(item, sign);
    }


    // Function to calculate cart items count and update localStorage
    const calcMockCartItemCount = (item, sign) => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const modifiedCartItems = cartItems.map(cartItem => {
            if (cartItem.id !== item.item_details.id) {
                return cartItem;
            }

            const newQuantity = cartItem.quantity + sign;
            const itemOptionPrice = cartItem.item_options.reduce((total, option) => total + (Number(option.price) || 0), 0);
            const itemAddonPrice = cartItem.item_addons.reduce((total, addon) => total + (Number(addon.price) || 0), 0);
            const subTotalPrice = Number(cartItem.price) + itemOptionPrice + itemAddonPrice;
            
            const newPrice = cartItem.totalPrice + (sign * (subTotalPrice || 0));

            if (newQuantity <= 0) {
                return null; // Remove item if quantity is less than 0
            }

            return {
                ...cartItem,
                quantity: Math.max(0, newQuantity),
                totalPrice: Math.max(0, newPrice),
            }
        });
        console.log("ffffffffffffffffffffffffffffffffffff: ", modifiedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(modifiedCartItems.filter(item => item !== null)));

    }
    const calcMockCartItemDetailsCount = (item, sign) => {
        const cartItemDetails = JSON.parse(localStorage.getItem("cartItemDetails"));
        const modifiedCartItemsDetails = cartItemDetails.data.items.map(cartItem => {

            if (cartItem.id !== item.id) {
                if (cartItem.sub_total_quantity === 0) {
                    return null; // Remove item if quantity is 0
                }
                return cartItem;
            }

            const newQuantity = cartItem.sub_total_quantity + sign;
            const itemOptionPrice = cartItem.options.reduce((total, option) => total + (Number(option.price) || 0), 0);
            const itemAddonPrice = cartItem.addons.reduce((total, addon) => total + (Number(addon.price) || 0), 0);
            const itemPrice = Number(cartItem.item_details.price) + itemOptionPrice + itemAddonPrice;

            const newPrice = cartItem.sub_total_price + (sign * itemPrice);

            if (newQuantity < 0) {
                return null;
            }

            return {
                ...cartItem,
                sub_total_quantity: Math.max(0, newQuantity),
                sub_total_price: Math.max(0, newPrice),
            };
        });

        return modifiedCartItemsDetails.filter(item => item !== null);
    }
    // Mock data handling
    const getMockAddToCart = (mockData) => {
        let prevCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        let newCartItems = [...prevCartItems, mockData];
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        // console.log("newCartItems", newCartItems);

        setMockCartCount();

        const convertedMockCartData = convertMockCart();
        const mockCartData = {
            data: convertedMockCartData,
            status: true,
        }

        return mockCartData;
    }

    const getMockCartItemDetails = () => {
        const convertedMockCartData = convertMockCart();
        const mockCartData = {
            data: convertedMockCartData,
            status: true,
        }

        return mockCartData;
    }


    const convertMockCart = () => {
        const mockCartItems = convertMockCartItemToItemDetails();

        return {
            customer_id: 1,
            shop_id: 1,
            items: mockCartItems,
            total_price_without_discount: mockCartItems.reduce((total, item) => total + (item.sub_total_price || 0), 0),
            total_price_with_discount: mockCartItems.reduce((total, item) => total + (item.sub_total_price || 0), 0),
            total_quantity: mockCartItems.reduce((total, item) => total + (item.sub_total_quantity || 0), 0),
        };
    }

    const convertMockCartItemToItemDetails = () => {

        const mockItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return mockItems.map(item => {

            const uniqueId = new Date().getTime() + Math.random().toString(36).substring(2, 15);

            if(!item || !item.id) {
                console.error("Invalid item data:", item);
                return null;
            }
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
                })) || [] ,
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
                })) || [],
            }
        })
        .filter(item => item !== null); // Filter out any null items
    }



    const setMockCartCount = () => {
        const newCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        console.log("Set mock cart count: ", newCartItems);
        const totalCount = newCartItems.reduce((quantity, item) => quantity + item.quantity, 0);

        const mockData = {
            data: {
                cart_count: newCartItems.length,
                total_quantity: totalCount,
            }
        }
        localStorage.setItem('cartCount', JSON.stringify(mockData));
        // console.log("Get cart count: ", totalCount);
        return totalCount;
    }
    return (
        <CartContext.Provider
            value={{
                addToCart,
                getCartCount,
                getCartItemsDetail,
                cartCount,
                increaseItemCount,
                decreaseItemCount
            }}>
            {children}
        </CartContext.Provider>
    );
}