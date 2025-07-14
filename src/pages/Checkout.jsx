import { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import PickupDetailCard from '../components/Checkout/PickupDetailCard';
import OrderPaymentCard from '../components/Checkout/OrderPaymentCard';
import { CheckoutProvider } from '../context/CheckoutContext';

const Checkout = () => {
  // checkoutOptions
  // pickup or delivery 
  // pickup time
  // payment method
  // delivery address
  // delivery instructions
  // delivery fee
  // service fee
  const dateObj = new Date();
  const date_day = dateObj.getDate();
  const time = dateObj.getTime();

  const pickupInfo = {
    method: 'pickup',
    day: date_day,
    time: time
  }

  const [pickupState, setPickupState] = useState(pickupInfo);

  return (
    <CheckoutProvider>
      <div style={{ padding: '40px', backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
        <Row className="g-4" style={{ justifyContent: 'center', gap: 20 }}>
          {/* Left Pane */}
          <PickupDetailCard />
          {/* Right Pane */}
          <OrderPaymentCard />
        </Row>
      </div>
    </CheckoutProvider>
  );
};

export default Checkout;
