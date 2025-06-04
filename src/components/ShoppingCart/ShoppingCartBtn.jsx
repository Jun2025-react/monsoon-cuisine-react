import React, { useState } from 'react';
import ShoppingCartModal from './ShoppingCartModal';

const ShoppingCartBtn = ({ cartCount }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        if (!cartCount) return;
        setShow(true);
    }
    return (
        <>
            <div className="position-relative btn" onClick={handleShow}>
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                    <span className="visually-hidden">Added Items</span>
                </span>}
            </div>
            <ShoppingCartModal show={show} handleClose={handleClose} />
        </>
    );
}

export default ShoppingCartBtn;