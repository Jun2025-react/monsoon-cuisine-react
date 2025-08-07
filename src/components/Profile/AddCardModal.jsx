import React, { useState, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { addCard } from '../../services/ProfileService';

const AddCardModal = ({ user, show, handleClose, refreshCards }) => {
    const [cardInfo, setCardInfo] = useState({
        card1: '', card2: '', card3: '', card4: '',
        month: '', year: '',
        name: '',
        card_number: ''
    });

    // Refs for auto-focus
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);

    const handleCardChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("card") && !/^\d*$/.test(value)) return; // digits only
        if (value.length > 4) return; // max 4 digits

        setCardInfo((prev) => ({ ...prev, [name]: value }));

        // Auto jump to next box
        if (value.length === 4) {
            if (name === "card1") card2Ref.current?.focus();
            if (name === "card2") card3Ref.current?.focus();
            if (name === "card3") card4Ref.current?.focus();
        }
    };
    const handleCardHolderChange = (e) => {
        setCardInfo((prev) => ({ ...prev, name: e.target.value }));
    };

    const handleCardSubmit = async () => {
        const fullCardNumber = `${cardInfo.card1}${cardInfo.card2}${cardInfo.card3}${cardInfo.card4}`;
        if (fullCardNumber.length !== 16) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        const user_id = user?.user_id;
        const payload = {
            user_id,
            card_number: fullCardNumber,
            is_default: 0
        };
        
        const result = addCard(payload)
        refreshCards();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton />
            <Modal.Body>
                <Form autoComplete="off">
                    {/* Card Number */}
                    <Form.Label>Card Number</Form.Label>
                    <div className="d-flex justify-content-between mb-3">
                        <Form.Control
                            type="text"
                            name="card1"
                            maxLength="4"
                            className="text-center"
                            inputMode="numeric"
                            placeholder="1234"
                            value={cardInfo.card1}
                            onChange={handleCardChange}
                            style={{ width: '22%', }}
                        />
                        <Form.Control
                            type="text"
                            placeholder="1234"
                            name="card2"
                            maxLength="4"
                            ref={card2Ref}
                            className="text-center"
                            inputMode="numeric"
                            value={cardInfo.card2}
                            onChange={handleCardChange}
                            style={{ width: '22%', }}
                        />
                        <Form.Control
                            type="text"
                            placeholder="1234"
                            name="card3"
                            maxLength="4"
                            ref={card3Ref}
                            className="text-center"
                            inputMode="numeric"
                            value={cardInfo.card3}
                            onChange={handleCardChange}
                            style={{ width: '22%', }}
                        />
                        <Form.Control
                            type="text"
                            placeholder="1234"
                            name="card4"
                            maxLength="4"
                            ref={card4Ref}
                            className="text-center"
                            inputMode="numeric"
                            value={cardInfo.card4}
                            onChange={handleCardChange}
                            style={{ width: '22%', }}
                        />
                    </div>

                    {/* Expiry */}
                    <div className="d-flex justify-content-between mb-3">
                        <div style={{ width: '48%' }}>
                            <Form.Label>Select Month</Form.Label>
                            <Form.Select
                                name="month"
                                value={cardInfo.month}
                                onChange={handleCardChange}
                            >
                                <option value="" disabled hidden >MM</option>
                                {[...Array(12)].map((_, i) => {
                                    const month = String(i + 1).padStart(2, '0');
                                    return <option key={month} value={month}>{month}</option>;
                                })}
                            </Form.Select>
                        </div>
                        <div style={{ width: '48%' }}>
                            <Form.Label>Select Year</Form.Label>
                            <Form.Select
                                name="year"
                                value={cardInfo.year}
                                onChange={handleCardChange}
                            >
                                <option value="" disabled hidden >YYYY</option>
                                {Array.from({ length: 15 }, (_, i) => {
                                    const year = new Date().getFullYear() + i;
                                    return <option key={year} value={year}>{year}</option>;
                                })}
                            </Form.Select>
                        </div>
                    </div>

                    {/* Name */}
                    <Form.Group className="mb-3">
                        <Form.Label>Card Holder Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Card Holder Name"
                            value={cardInfo.name}
                            onChange={handleCardHolderChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    variant='dark'
                    onClick={handleCardSubmit}
                >
                    ADD CARD
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddCardModal;
