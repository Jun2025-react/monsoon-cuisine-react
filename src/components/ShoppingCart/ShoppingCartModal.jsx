import { Modal } from 'react-bootstrap';
import styles from './ShoppingCartModal.module.css'; // Assuming you have a CSS module for styles
import ShoppingCartItem from './ShoppingCartItem'; // Assuming you have a ShoppingCartItem component
import React, { useState, useEffect } from 'react';
import MOCK_CART_DATA from '../../constants/mock_cart_data';

const ShoppingCartModal = ({ show, handleClose }) => {

    const [cartItems, setCartItems] = useState([]); // This should be replaced with actual cart data from context or props

    const handleFetchCartItems = () => {
        // Actual API to fetch cart items
        // const url = "/v1/customer/cart";
        // const data = { user_id: 1 }; 
        
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // };
        // fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         setCartItems(data.items || []);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching cart items:', error);
        //     });        

        console.log("Fetching cart items...", MOCK_CART_DATA);
    
        if (MOCK_CART_DATA.data && MOCK_CART_DATA.data.items) {
            setCartItems(MOCK_CART_DATA.data.items);
        }
    }
    
    useEffect(() => {
        // Fetch cart items when the modal is opened
        if (show) {
            handleFetchCartItems();
        }
    }, [show, cartItems]);
    
    return (
        <Modal
            size="md"
            show={show}
            onHide={handleClose}
            dialogClassName={`${styles.customModal}`}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <h4 className="text-center mb-4">Your Shopping Cart</h4>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <ShoppingCartItem key={index} item={item} />
                        ))
                    ) : (
                        <div className="text-center text-muted">Your cart is empty.</div>
                    )
                }
            </Modal.Body>
        </Modal>
    );
}

export default ShoppingCartModal;