import { Modal } from 'react-bootstrap';
import styles from './ShoppingCartModal.module.css'; // Assuming you have a CSS module for styles
import ShoppingCartItem from './ShoppingCartItem'; // Assuming you have a ShoppingCartItem component
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Assuming you have a CartContext for managing cart state
import Paragraph2 from '../Typography/Paragraphs/Paragraph2';
import TypographyH5 from '../Typography/Headings/TypographyH5';


const ShoppingCartModal = ({ show, handleClose }) => {
    const { getCartItemsDetail } = useCart();
    const [cartItems, setCartItems] = useState([]);

    const handleFetchCartItems = () => {
        const result = getCartItemsDetail();
        console.info("Fetching cart items result:", result);
        if (result.status) {
            const cartItemsDetail = result.data;
            setCartItems(cartItemsDetail.items || []);
        }
    }

    useEffect(() => {
        // Fetch cart items when the modal is opened
        console.info("Fetching cart items...");
        if (show) {
            console.info("Modal is shown, fetching cart items...");
            console.info("Cart items before fetch:", cartItems);
            handleFetchCartItems();
        }
    }, [show]);

    return (
        <Modal
            size="md"
            show={show}
            onHide={handleClose}
            dialogClassName={`${styles.customModal}`}
            className={`${styles.overrideModalRoot}`}
        >
            <Modal.Header closeButton />
            <div className={`${styles.modalContentWrapper}`} >
                <Modal.Body>
                    <h4 className="text-center mb-4">Shopping Cart List</h4>
                    <div className={`${styles.scrollableBody}`}>
                        {
                            cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <ShoppingCartItem key={index} item={item} handleFetchCartItems={handleFetchCartItems} />
                                ))
                            ) : (
                                <div className="text-center text-muted">Your cart is empty.</div>
                            )
                        }
                    </div>
                    <div className={`d-flex ${styles.subTotalPrice}`}>
                        <div className="col-6 text-start">
                            Subtotal
                        </div>
                        <div className="col-6 text-end">
                            ${cartItems.reduce((total, item) => total + (item.sub_total_price || 0), 0).toFixed(2)}
                        </div>
                    </div>
                </Modal.Body>
                <div className={`${styles.modalFooter} m-4`}>
                    <button className="btn btn-dark w-100 py-3">Checkout</button>
                </div>
            </div>
        </Modal >
    );
}

export default ShoppingCartModal;