import { Modal } from 'react-bootstrap';
import styles from './ShoppingCartModal.module.css'; // Assuming you have a CSS module for styles
import ShoppingCartItem from './ShoppingCartItem'; // Assuming you have a ShoppingCartItem component
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext'; // Assuming you have a CartContext for managing cart state
import ShoppingCartLists from '../ShoppingCart/ShoppingCartLists';

const ShoppingCartModal = ({ show, handleClose }) => {
    const { getCartItemsDetail, getSubTotal } = useCart();
    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);

    const handleFetchCartItems = () => {
        const result = getCartItemsDetail();
        if (result.status) {
            const cartItemsDetail = result.data;
            setCartItems(cartItemsDetail.items || []);
        }
    }

    useEffect(() => {
        if (show) {
            handleFetchCartItems();
            setSubTotal(getSubTotal());
        }
    }, [show]);

    useEffect(() => {
        setSubTotal(getSubTotal());
    }, [cartItems])

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
                        <ShoppingCartLists handleFetch={handleFetchCartItems} items={cartItems} />
                    </div>
                    <div className={`d-flex ${styles.subTotalPrice}`}>
                        <div className="col-6 text-start">
                            Subtotal
                        </div>
                        <div className="col-6 text-end">
                            ${subTotal}
                        </div>
                    </div>
                </Modal.Body>
                <div className={`${styles.modalFooter} m-4`}>
                    <button className="btn btn-dark w-100 py-3" onClick={() => { window.location.href = "/checkout" }}>Checkout</button>
                </div>
            </div>
        </Modal >
    );
}

export default ShoppingCartModal;