import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ToggleButton from '../Button/ToggleButton';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import PickupTime from './PickupTime';
import { useCheckout } from '../../context/CheckoutContext';
import { useAuth } from '../../context/AuthContext';

const PickupDetailCard = () => {

    const { setOrderType, checkoutDay, checkoutTime, setDeliveryInstruction, method } = useCheckout();
    const { user } = useAuth();
    console.log("user==================", user);
    const deliveryOptions = [
        { label: 'Standard', value: 'standard', enabled: true },
        { label: 'Scheduled', value: 'scheduled', enabled: true },
    ];
    
    const [methodOptions, setMethodOptions] = useState(deliveryOptions);
    const [instruction , setInstruction] = useState();
    const [toggleChanges , setToggleChanges ] = useState({
        label: "Pickup",
        address1: "Monsoon Indian Cuisine",
        address2: "8 Anzac Road, Auckland, NI 0630"
    });

    useEffect(() => {
        if (methodOptions) {
            let label = "Scheduled";
            if (checkoutDay) label += ` - ${checkoutTime} (${checkoutDay})`;
            
            setMethodOptions(methodOptions.map(opt => {
                if (opt.value === "scheduled") opt.label = label;
                return opt;
            }))
        }
    }, [checkoutDay, checkoutTime])
    
    useEffect(() => {
        if (method === 2) {
            setToggleChanges({
                label: "Delivery",
                address1: user?.address_1 || "Default Address",
                address2: user?.address_2 || "Default City, State, Zip" 
            })
        } else {
            setToggleChanges({
                label: "Pickup",
                address1: "Monsoon Indian Cuisine",
                address2: "8 Anzac Road, Auckland, NI 0630"
            })
        }
    }, [method]);

    const toggleObj = {
        left: "Pickup",
        right: "Delivery",
        active: "Pickup"
    };

    const onToggle = (value) => {
        const orderType = value === toggleObj.left ? 1 : 2;
        setOrderType(orderType);
    };
    const onValueChanged = (opt) => {
        setInstruction(opt.target.value);
        setDeliveryInstruction(opt.target.value);
    }
    

    return (
        <Card className="border-0 shadow-sm" style={{ borderRadius: 12, maxWidth: 700, maxHeight: 630 }}>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <TypographyH5>{toggleChanges.label} Details</TypographyH5>
                        <p style={{ marginBottom: 0, fontSize: 14 }}>
                            {toggleChanges.address1}<br />
                            {toggleChanges.address2}
                        </p>
                    </div>
                    <ToggleButton toggleObj={toggleObj} onToggle={onToggle} />
                </div>

                <div className="mt-4">
                    <PickupTime title={toggleChanges.label + " Time"}  options={methodOptions} />
                    <textarea
                        placeholder="Any special instructions"
                        className="form-control mt-3"
                        rows={3}
                        value={instruction}
                        style={{ resize: 'none' }}
                        onChange={onValueChanged}
                        
                    />
                </div>

                <div className="mt-4">
                    <p><strong>Payment</strong></p>
                    <div className="border rounded p-3 d-flex justify-content-between align-items-center">
                        <div>
                            <p className="mb-1">Card</p>
                            <small className="text-muted">1234 **** **** 5678</small>
                        </div>
                        <button className="btn btn-light" style={{width: 100}}>Edit</button>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}

export default PickupDetailCard;