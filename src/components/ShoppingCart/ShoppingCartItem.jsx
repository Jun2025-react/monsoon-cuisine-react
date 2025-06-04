import { useState } from 'react';
import styles from './ShoppingCartItem.module.css'; // Assuming you have a CSS module for styles
import Paragraph2 from '../Typography/Paragraphs/Paragraph2';
import { useCart } from '../../context/CartContext';

const ShoppingCartItem = ({ item, handleFetchCartItems }) => {

    const { increaseItemCount, decreaseItemCount } = useCart();

    const maxQuantity = 99;
    const handleAddQuantity = (theItem) => {
        increaseItemCount(theItem);
        handleFetchCartItems();
    }
    const handleEmitQuantity = (theItem) => {
        decreaseItemCount(theItem);
        handleFetchCartItems();
    }

    const itemDetails = item.item_details || {};
    const itemOptions = item.options || [];
    const itemAddons = item.addons || [];
    const quantity = item.sub_total_quantity || 1;
    const price = item.sub_total_price || 0;

    return (
        <div className={styles.cartItemWrapper}>
            {/* Image */}
            <img
                src={`${itemDetails.image_path || '/images/default-item.png'}`}
                alt="Logo"
                className={styles.cartItemImg}
            />

            {/* Item details */}
            <div className="flex-grow-1 ms-3 me-3">
                <div style={{ fontWeight: 'bold' }}>{itemDetails.name}</div>
                {itemAddons.length > 0 &&
                    <Paragraph2 className="text-muted">Add-ons: {itemAddons.map((addon, index) => (
                        <span key={index}>
                            {addon.addon_details.name} {index < itemAddons.length - 1 ? ', ' : ''}
                        </span>
                    ))}</Paragraph2>
                }

                {itemOptions.length > 0 &&
                    <Paragraph2 className="text-muted">Options: {itemOptions.map((option, index) => (
                        <span key={index}>
                            {option.options_details.name} {index < itemOptions.length - 1 ? ', ' : ''}
                        </span>
                    ))}</Paragraph2>
                }
                <div style={{ fontWeight: 500 }} className="mt-2">${price}</div>
            </div>

            {/* Quantity buttons */}
            <div className={`d-flex align-items-center gap-2 bg-light rounded-pill px-1 py-1 my-auto ${styles.buttonArea}`}>
                <button
                    className={`btn btn-sm ${styles.smallButton}`}
                    onClick={() => {handleEmitQuantity(item)}}
                >
                    {quantity === 1 ?
                        <i className="fas fa-trash text-secondary"></i> :
                        <i className="fas fa-minus text-secondary"></i>
                    }
                </button>
                <span className="mx-1">{quantity}</span>
                <button
                    className={`btn  btn-sm ${styles.smallButton}`}
                    onClick={()=>{handleAddQuantity(item)}}
                    disabled={quantity >= maxQuantity}
                >
                    <i className="fas fa-plus text-secondary"></i>
                </button>
            </div>
        </div>

    );
}

export default ShoppingCartItem;