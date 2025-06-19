import { createContext, useContext, useEffect, useState } from 'react';
import { getData, putData, postData } from '../services/DataService';
import CONFIG from '../config';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const USE_MOCK_DATA = CONFIG.USE_MOCK_DATA;

    const [cartCount, setCartCount] = useState(0);

    const getCartItemsDetail = () => {
        return getData("/customer/cart");
    }

    useEffect(() => {
        getCartCount();
    }, [])

    const getCartCount = async () => {

        if (USE_MOCK_DATA) {
            setMockCartCount();
        }

        const data = { customer: 1 };
        const result = await getData('/customer/cart/count', data);
        // console.log("result.data.total_quantity: ", result.data.total_quantity);
        // setCartCount(result.data.total_quantity || 0);
    }

    const addToCart = async (apiData, mockData = {}) => {
        let data = apiData || {}
        if (USE_MOCK_DATA) data = getMockAddToCart(mockData);

        try {
            await putData("/addtocart", data);
            return "success";
        } catch (error) {
            console.error("Error adding to cart:", error);
            return "error";
        } finally {
            getCartCount();
        }
    }

    const increaseItemCount = (item) => {
        // console.log("Increase item count====================: ", item);
        if (!item || !item.id) {
            console.error("Invalid item data:", item);
            return;
        }

        let data = {
            customer: 1,
            count: 1,
            cartItem: item.id
        };

        if (USE_MOCK_DATA) data = changeMockItemCount(item, "+");

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

        if (USE_MOCK_DATA) data = changeMockItemCount(item, "-");

        postData("/customer/cart/count/quentity", data);

        getCartCount();
    }

    const changeMockItemCount = (item, change) => {
        const sign = change === "+" ? 1 : -1;

        const updatedCartItemDetails = calcMockCartItemDetailsCount(item, sign);
        const newCartData = {
            data: {
                customer_id: 1,
                shop_id: 1,
                items: updatedCartItemDetails,
                total_price_without_discount: updatedCartItemDetails.reduce((acc, item) => acc + (item.sub_total_price || 0), 0),
                total_price_with_discount: updatedCartItemDetails.reduce((acc, item) => acc + (item.sub_total_price || 0), 0),
                total_quantity: updatedCartItemDetails.reduce((acc, item) => acc + (item.sub_total_quantity || 0), 0),
            },
            status: true,
        };

        localStorage.setItem("cartItemDetails", JSON.stringify(newCartData));
        return newCartData;
    };

    const calcMockCartItemDetailsCount = (item, sign) => {
        const cartData = JSON.parse(localStorage.getItem("cartItemDetails")) || { data: { items: [] } };

        const updatedItems = cartData.data.items.map(cartItem => {
            if (cartItem.id !== item.id) return cartItem;

            const newQuantity = cartItem.sub_total_quantity + sign;
            if (newQuantity < 1) return null;

            const optionPrice = cartItem.options.reduce((total, o) => total + Number(o.options_details.price || 0), 0);
            const addonPrice = cartItem.addons.reduce((total, a) => total + Number(a.addon_details.price || 0), 0);
            const basePrice = Number(cartItem.item_details.price || 0);
            const unitPrice = basePrice + optionPrice + addonPrice;
            const newPrice = cartItem.sub_total_price + (sign * unitPrice);

            return {
                ...cartItem,
                sub_total_quantity: newQuantity,
                sub_total_price: Math.max(0, newPrice),
            };
        }).filter(Boolean); // Remove nulls (i.e., removed items)

        return updatedItems;
    };

    // Mock data handling
    const getMockAddToCart = (mockData) => {
        const prevDetails = JSON.parse(localStorage.getItem('cartItemDetails')) || { data: { items: [] } };
        const existingItems = prevDetails.data.items || [];

        const newItem = convertCartItemToDetail(mockData);
        const updatedItems = [...existingItems, newItem];

        const newData = {
            data: {
                customer_id: 1,
                shop_id: 1,
                items: updatedItems,
                total_price_without_discount: updatedItems.reduce((t, i) => t + (i.sub_total_price || 0), 0),
                total_price_with_discount: updatedItems.reduce((t, i) => t + (i.sub_total_price || 0), 0),
                total_quantity: updatedItems.reduce((t, i) => t + (i.sub_total_quantity || 0), 0),
            },
            status: true,
        };

        return newData;
    };

    const convertCartItemToDetail = (item) => {
        const uniqueId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

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
                    ...addon,
                    option_status: "Available",
                    item_id: item.id,
                }
            })),
            options: item.item_options.map(option => ({
                id: `${option.id}_${uniqueId}`,
                cart_item_id: item.id,
                sub_total_price: option.sub_total_price,
                sub_total_quantity: option.sub_total_quantity,
                options_details: {
                    ...option,
                    option_status: "Available",
                    item_id: item.id,
                }
            })),
        };
    };

    const setMockCartCount = () => {
        const cartData = JSON.parse(localStorage.getItem('cartItemDetails')) || { data: { items: [] } };
        const totalQuantity = cartData.data.items.reduce((acc, item) => acc + (item.sub_total_quantity || 0), 0);

        const mockCount = {
            data: {
                cart_count: cartData.data.items.length,
                total_quantity: totalQuantity,
            }
        };

        localStorage.setItem('cartCount', JSON.stringify(mockCount));
        setCartCount(totalQuantity);
        return totalQuantity;
    };

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