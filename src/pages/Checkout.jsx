import { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import PickupDetailCard from '../components/Checkout/PickupDetailCard';
import OrderPaymentCard from '../components/Checkout/OrderPaymentCard';
import { CheckoutProvider } from '../context/CheckoutContext';
import ConfirmationCard from '../components/Checkout/ConfirmationCard';

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

  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <CheckoutProvider>
      <div style={{ padding: '40px', backgroundColor: '#f2f2f2', minHeight: '70vh' }}>
        {
          !isCompleted ? 
            <Row className="g-4" style={{ justifyContent: 'center', gap: 20 }}>
              {/* Left Pane */}
              <PickupDetailCard />
              {/* Right Pane */}
              <OrderPaymentCard />
            </Row>
          :
            <Row className="g-4" style={{ justifyContent: 'center', maxWidth: 800, margin: 'auto', padding: '20px' }}>
              <ConfirmationCard />
            </Row>
        }
      </div>
    </CheckoutProvider>
  );
};

export default Checkout;
