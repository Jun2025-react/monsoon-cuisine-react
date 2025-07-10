import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import FoldableCard from './FoldableCard';
import { useCart } from '../../context/CartContext';
import { useCheckout } from '../../context/CheckoutContext';

const OrderPaymentCard = ({ paymentMethod, onPaymentMethodChange }) => {

    const [cartItems, setCartItems] = useState([]);
    const { getCartItemsDetail, getSubTotal } = useCart();
    const [subTotal, setSubTotal] = useState(0);
    const { method, checkoutDay, checkoutTime, instruction } = useCheckout();


    const onToggle = () => {
        const cartAPI = getCartItemsDetail();
        if (cartAPI.status) {
            setCartItems(cartAPI.data.items);
            const subtotal = cartAPI.data.items.reduce((acc, item) => acc + (item.sub_total_price || 0), 0);
            setSubTotal(subtotal.toFixed(2));
        }
    };

    const handleFetchCartItems = () => {
        const result = getCartItemsDetail();
        console.info("Fetching cart items result:", result);
        if (result.status) {
            const cartItemsDetail = result.data;
            setCartItems(cartItemsDetail.items || []);
        }
    }

    const onClickSubmit = () => {
        console.log("click Next Button = cartItem :: ", cartItems);
        console.log("click Next Button = method :: ", method ? method : "pickup");
        console.log("click Next Button = checkoutDay :: ", checkoutDay);
        console.log("click Next Button = checkoutTime :: ", checkoutTime);
        console.log("click Next Button = instruction :: ", instruction);

    }

    useEffect(() => {
        console.log("cartItem is changing");
        setSubTotal(getSubTotal());
    }, [cartItems])

    return (
        <Card className="border-0 shadow-sm" style={{ borderRadius: 12, maxWidth: 700 }}>
            <Card.Body>
                <TypographyH5>Order payment</TypographyH5>
                <hr />
                <FoldableCard
                    title="Cart Summary (5 items)"
                    onToggle={onToggle}
                    items={cartItems}
                    handleFetch={handleFetchCartItems}
                />
                {/* <div className="mb-3">
                    <p className="mb-1 fw-bold">Promotion</p>
                    <small className="text-muted">Add promo code</small>
                </div> */}

                <div className="mb-3">
                    <p className="mb-1 fw-bold">Order total</p>
                    {/* <div className="d-flex justify-content-between"><span>Subtotal</span><span>${subTotal}</span></div>
                    <div className="d-flex justify-content-between text-success"><span>Delivery Fee discount</span><span>- $9.50</span></div>
                    <div className="d-flex justify-content-between text-success"><span>Service Fee discount</span><span>- $1.25</span></div>
                    <div className="d-flex justify-content-between"><span>Fees</span><span>$5.00</span></div>
                    <div className="d-flex justify-content-between"><span>Service</span><span>$5.00</span></div>
                    <div className="d-flex justify-content-between"><span>Delivery</span><span>$9.99</span></div> */}
                    <div className="d-flex justify-content-between fw-bold mt-2"><span>Total</span><span>${subTotal}</span></div>
                </div>

                <button className="btn btn-dark w-100" onClick={onClickSubmit}>Next</button>
            </Card.Body>
        </Card>
    );
};

export default OrderPaymentCard;
