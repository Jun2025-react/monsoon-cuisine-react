import React, { useState, useEffect } from 'react';
import OptionTextArea from './OptionTextArea';
import styles from './OptionSpecialRequest.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { usePresentOption } from '../../context/PresentOptionContext';
import TypographyH5 from '../Typography/Headings/TypographyH5';
import Card from 'react-bootstrap/Card';
import { useCart } from '../../context/CartContext';

const OptionSpecialRequest = (props) => {
    const [special, setSpecial] = useState("");
    const [price, setPrice] = useState(props.price || 0);
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(props.price || 0);
    // const { selectedOptions } = usePresentOption();
    // const { addToCart } = useCart();

    const menuItem = props.item;

    useEffect(() => {
        setPrice(props.price || 0);
        calcTotalPrice(props.price);
    }, [props.price]);

    const handleValueChanged = (event) => {
        setSpecial(event.target.value);
    };

    const handleSelectChange = (event) => {
        const selectedValue = Number(event.target.value);
        setCount(selectedValue);
        calcTotalPrice(selectedValue);
    };

    const calcTotalPrice = (selectedValue = count) => {
        setTotalPrice(price * selectedValue);
    };
    // const addToCartValue = () => {
    //     const options = { ...selectedOptions, special };
    //     const cart = {
    //         id: new Date().getTime(), // unique id
    //         name: menuItem.name,
    //         count: count,
    //         options: options,
    //         totalPrice: totalPrice
    //     };
    //     addToCart(cart);
    //     // console.log("Added cart item:", cart);
    //     // console.log("Added cart cartItems:", cartItems);
    // };

    const numberArrays = Array.from({ length: 20 }, (_, i) => i + 1);

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
                    // onClick={addToCartValue} // You can pass special/count/totalPrice if needed
                >
                    Add {count} to order - ${totalPrice}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default OptionSpecialRequest;
