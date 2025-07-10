import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ToggleButton from '../Button/ToggleButton';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import PickupTime from './PickupTime';
import { useCheckout } from '../../context/CheckoutContext';

const PickupDetailCard = () => {

    const { setOrderMethod, checkoutDay, checkoutTime, setDeliveryInstruction } = useCheckout();

    const deliveryOptions = [
        { label: 'Standard', value: 'standard', enabled: true },
        { label: 'Scheduled', value: 'scheduled', enabled: true },
    ];
    
    const [methodOptions, setMethodOptions] = useState(deliveryOptions);
    const [instruction , setInstruction] = useState();
    
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
    
    const toggleObj = {
        left: "Pickup",
        right: "Delivery",
        active: "Pickup"
    };

    const onToggle = (value) => {
        setOrderMethod(value);
    };
    const onValueChanged = (opt) => {
        setInstruction(opt.target.value);
        setDeliveryInstruction(opt.target.value);
    }
    

    return (
        <Card className="border-0 shadow-sm" style={{ borderRadius: 12, maxWidth: 700 }}>
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
                    <PickupTime title="Pickup time" options={methodOptions} />
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
                            <p className="mb-1">Uber Cash: $0.00</p>
                            <small className="text-muted">+ jun ---0531</small>
                        </div>
                        <button className="btn btn-light">Edit</button>
                    </div>
                </div>
            </Card.Body>
        </Card>

    )
}

export default PickupDetailCard;