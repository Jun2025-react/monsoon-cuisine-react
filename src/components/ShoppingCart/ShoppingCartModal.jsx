import { Modal } from 'react-bootstrap';
import styles from './ShoppingCartModal.module.css'; // Assuming you have a CSS module for styles
import ShoppingCartItem from './ShoppingCartItem'; // Assuming you have a ShoppingCartItem component
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Assuming you have a CartContext for managing cart state


const ShoppingCartModal = ({ show, handleClose }) => {
    const { getCartItemsDetail } = useCart(); // Assuming you have a CartContext to manage cart state
    const [cartItems, setCartItems] = useState([]); // This should be replaced with actual cart data from context or props

    const handleFetchCartItems = () => {
        const result = getCartItemsDetail();
        if(result.status) {
            const cartItemsDetail = result.data;
            setCartItems(cartItemsDetail.items || []);
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