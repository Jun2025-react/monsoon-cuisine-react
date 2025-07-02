import { useState } from 'react';
import { Row, Card } from 'react-bootstrap';
import ToggleButton from '../components/Button/ToggleButton';
import TypographyH5 from '../components/Typography/Headings/TypographyH5';
import SelectButtons from '../components/Checkout/SelectButtons';

const Checkout = () => {
  const toggleObj = {
    left: "Pickup",
    right: "Delivery",
    active: "Pickup"
  };

  const onToggle = (value) => {
    console.log("Toggle value:", value);
  };

  const deliveryOptions = [
    { label: 'Standard', value: 'standard', enabled: false },
    { label: 'Scheduled', value: 'scheduled', enabled: true },
  ];
  const [selectedOption, setSelectedOption] = useState('pickup');

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selected option:", value);
  }

  return (
    <div style={{ padding: '40px', backgroundColor: '#f2f2f2', minHeight: '100vh' }}>
          <Row className="g-4" style={{ justifyContent: 'center', gap: 20 }}>
            {/* Left Pane */}
              <Card className="border-0 shadow-sm" style={{ borderRadius: 12 , maxWidth: 700}}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <TypographyH5>Pickup Details</TypographyH5>
                      <p style={{ marginBottom: 0, fontSize: 14 }}>
                        Monsoon Indian Cuisine<br />
                        8 Anzac Road, Auckland, NI 0630
                      </p>
                    </div>
                    <ToggleButton toggleObj={toggleObj} onToggle={onToggle} />
                  </div>

                  <div className="mt-4">
                    <SelectButtons title="Pickup time" options={deliveryOptions} onSelect={handleSelect} />
                    <textarea
                      placeholder="Any special instructions"
                      className="form-control mt-3"
                      rows={3}
                      style={{ resize: 'none' }}
                    />
                  </div>

                  <div className="mt-4">
                    <p><strong>Payment</strong></p>
                    <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                      <div>
                        <p className="mb-1">Uber Cash: $0.00</p>
                        <small className="text-muted">+ jun ---0531</small>
                      </div>
                      <button className="btn btn-light">Edit</button>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            {/* Right Pane */}
              <Card className="border-0 shadow-sm" style={{ borderRadius: 12, maxWidth: 700}}>
                <Card.Body>
                  <TypographyH5>Order payment</TypographyH5>

                  <hr />
                  <div className="mb-2">
                    <p className="mb-1 fw-bold">Cart summary (5 items)</p>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 fw-bold">Promotion</p>
                    <small className="text-muted">Add promo code</small>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 fw-bold">Order total</p>
                    <div className="d-flex justify-content-between"><span>Subtotal</span><span>$109.96</span></div>
                    <div className="d-flex justify-content-between text-success"><span>Delivery Fee discount</span><span>- $9.50</span></div>
                    <div className="d-flex justify-content-between text-success"><span>Service Fee discount</span><span>- $1.25</span></div>
                    <div className="d-flex justify-content-between"><span>Fees</span><span>$5.00</span></div>
                    <div className="d-flex justify-content-between"><span>Service</span><span>$5.00</span></div>
                    <div className="d-flex justify-content-between"><span>Delivery</span><span>$9.99</span></div>
                    <div className="d-flex justify-content-between fw-bold mt-2"><span>Total</span><span>$114.20</span></div>
                  </div>

                  <button className="btn btn-dark w-100">Next</button>
                </Card.Body>
              </Card>
          </Row>
    </div>
  );
};

export default Checkout;
