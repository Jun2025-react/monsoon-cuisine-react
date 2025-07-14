import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import FoldableCard from './FoldableCard';
import { useCart } from '../../context/CartContext';
import { useCheckout } from '../../context/CheckoutContext';
import { useAuth } from '../../context/AuthContext';
import { checkout } from '../../services/CheckoutService'; // Assuming you have a checkout service to handle order submission


const OrderPaymentCard = ({ paymentMethod, onPaymentMethodChange }) => {

    const [cartItems, setCartItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    const { getCartItemsDetail, getSubTotal } = useCart();
    const { method, checkoutDay, checkoutTime, instruction } = useCheckout();
    const { user } = useAuth();

    const onToggle = async () => {
        const cartAPI = await getCartItemsDetail();
        if (cartAPI?.status) {
            setCartItems(cartAPI.data.items);
            const subtotal = cartAPI.data.items.reduce((acc, item) => acc + (item.sub_total_price || 0), 0);
            setSubTotal(subtotal.toFixed(2));
        }
    };

    const handleFetchCartItems = async () => {
        const result = await getCartItemsDetail();
        console.info("Fetching cart items result:", result);
        if (result?.status) {
            const data = result.data;
            settingCart(data);
        }
    }

    const onClickSubmit = async () => {

        console.log("user :: ", user);
        // const userId = 50; // 🔁 Replace with real user ID from session/auth
        // const cardId = 1;  // 🔁 Replace or get from actual selected card
        // const addressId = 1; // 🔁 Replace with actual delivery address if needed
        const orderType = method;

        const payload = {
            user: user.id,
            // card_id: cardId,
            order_type: orderType ? orderType : 1, // 1 for pickup, 2 for delivery
            // address_id: addressId,
            cooking_instruction: "",
            delivery_instruction: instruction? instruction : "",
            schedule_date: checkoutDay ? checkoutDay : new Date().toISOString().split('T')[0],
            schedule_time: checkoutTime ? checkoutTime : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        const response = await checkout(payload);
        console.log("Order payload:", payload);
        console.log("Order response:", response);

    }

    useEffect(() => {
        const fetchCart = async () => {
            const result = await getCartItemsDetail();
            if (result?.status !== false) {
                settingCart(result.data);
            }
        };

        fetchCart();
    }, []);

    const settingCart = (data) => {
        setSubTotal(getSubTotal());
        setCartItems(data.items || []);
        setCartItemCount(data.items.length);
    }

    return (
        <Card className="border-0 shadow-sm" style={{ borderRadius: 12, maxWidth: 700 }}>
            <Card.Body>
                <TypographyH5>Order payment</TypographyH5>
                <hr />
                <FoldableCard
                    title={`Cart Summary (${cartItemCount} items)`}
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
