import { useState } from 'react';
import styles from './ShoppingCartItem.module.css'; // Assuming you have a CSS module for styles
import Paragraph2 from '../Typography/Paragraphs/Paragraph2';

const ShoppingCartItem = ({ item }) => {

    const [ itemDetails, setItemDetails ] = useState(item);
    // const [ itemOptions, setItemOptions ] = useState(item.options || []);
    const [ itemAddons, setItemAddons ] = useState(item.addons || []);

    const [quantity, setQuantity] = useState(item.sub_total_quantity || 1);
    const [price, setPrice] = useState(item.sub_total_price || 0);

    const maxQuantity = 99;

    const handleAddQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
    const handleEmitQuantity = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    return (
        <div className={styles.cartItemWrapper}>
            {/* Image */}
            <img
                src={`${itemDetails.item_details.image_path || '/images/default-item.png'}`}
                alt="Logo"
                className={styles.cartItemImg}
            />

            {/* Item details */}
            <div className="flex-grow-1 ms-3 me-3">
                <div style={{ fontWeight: 'bold' }}>{itemDetails.item_details.name}</div>
                { itemAddons.length > 0 &&
                    <Paragraph2 className="text-muted">Add-ons: {itemAddons.map((addon, index) => (
                        <span key={index}>
                            {addon.addon_details.name} ({addon.sub_total_quantity}){index < itemAddons.length - 1 ? ', ' : ''}
                        </span>
                    ))}</Paragraph2>
                }
                
                {/* // the options data is not used yet, but can be used in the future
                    { itemOptions.length > 0 &&
                    <Paragraph2 className="text-muted">Add-ons: {itemOptions.map((option, index) => (
                        <span key={index}>
                            {option.options_details.name} ({options.sub_total_quantity}){index < itemOptions.length - 1 ? ', ' : ''}
                        </span>
                    ))}</Paragraph2>
                } */}
                <div style={{ fontWeight: 500 }} className="mt-2">${price}</div>
            </div>

            {/* Quantity buttons */}
            <div className="d-flex align-items-center gap-2 bg-light rounded-pill px-1 py-1 my-auto">
                <button
                    className={`btn btn-sm ${styles.smallButton}`}
                    onClick={handleEmitQuantity}
                >
                    { quantity === 1 ?
                        <i className="fas fa-trash text-secondary"></i> :
                        <i className="fas fa-minus text-secondary"></i>
                    }
                </button>
                <span className="mx-1">{quantity}</span>
                <button
                    className={`btn  btn-sm ${styles.smallButton}`}
                    onClick={handleAddQuantity}
                    disabled={quantity >= maxQuantity}
                >
                    <i className="fas fa-plus text-secondary"></i>
                </button>
            </div>
        </div>

    );
}

export default ShoppingCartItem;