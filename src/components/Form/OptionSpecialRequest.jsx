import React, { useState, useEffect } from 'react';
import OptionTextArea from './OptionTextArea';
import styles from './OptionSpecialRequest.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { usePresentOption } from '../../context/PresentOptionContext';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import Card from 'react-bootstrap/Card';
import { BASE_URL } from '../../constants/constants';

const OptionSpecialRequest = (props) => {
    let intPrice = Number(props.item.price) || 0;

    const [special, setSpecial] = useState("");
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(intPrice || 0);
    const [totalPrice, setTotalPrice] = useState(intPrice || 0);
    const { selectedOptions, getAdditionalPrice } = usePresentOption();

    // useEffect(() => {
    //     setPrice(intPrice);
    //     calcTotalPrice(count);

    // }, [props.price, selectedOptions, totalPrice, count, intPrice]);
    useEffect(() => {
        setPrice(intPrice);
        const additionalPrice = getAdditionalPrice();
        setTotalPrice((intPrice + additionalPrice) * count);
    }, [props.price, selectedOptions, count, getAdditionalPrice, intPrice]);


    const handleValueChanged = (event) => {
        setSpecial(event.target.value);
    };

    const handleSelectChange = (event) => {
        const selectedValue = Number(event.target.value);
        setCount(selectedValue);
        calcTotalPrice(selectedValue);
    };

    const calcTotalPrice = (selectedValue = count) => {
        const additionalPrice = getAdditionalPrice();
        setTotalPrice((price + additionalPrice) * selectedValue);
    };

    const numberArrays = Array.from({ length: 20 }, (_, i) => i + 1);

    const addToCart = () => {
        props.onHide();
        const url = `${BASE_URL}/addCart`;
        const data = {
            customer: 0,
            quantity: count,
            item: props.item.id,
            item_addon: selectedOptions.addons.map(addon => addon.id),
            item_option: selectedOptions.options ? selectedOptions.options.id : null,
            special_request: special,
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        console.log("Request Data", requestOptions);
        // fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }

    return (
        <Card className="border-0 border-bottom" alt="Special Instructions">
            <Card.Body >
                <TypographyH5>Special Instructions</TypographyH5>
                <OptionTextArea onChange={handleValueChanged} />
                <div className={styles.inform}>
                    Option may charge extra for special request.
                </div>
                <Form.Select
                    size={6}
                    style={{ width: "80px" }}
                    onChange={handleSelectChange}
                >
                    {numberArrays.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </Form.Select>
                <Button
                    className="btn-dark my-2 w-100 p-2"
                    onClick={() => { addToCart() }}
                >
                    Add {count} to order - ${totalPrice}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default OptionSpecialRequest;
