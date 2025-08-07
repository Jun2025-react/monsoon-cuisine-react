import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';

import { addAddress, setDefaultCard } from '../../services/ProfileService';

const CardListModal = ({ show, handleClose, cardList, clickAddCard, refreshCards }) => {

    const { user } = useAuth();
    const convertCardNumber = (number) => {
        return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12)}`;
    }
    const onClickSelect = async (cardId) => {
        const payload = {
            user_id: user.id,
            card_id: cardId
        }
        try {
            const result = await setDefaultCard(payload);
            await refreshCards(); 
            handleClose();        
        } catch (e) {
            console.error("Error occured");
        }
    }
    const onClickAddCardBtn = () => {
        clickAddCard();
        handleClose();
    }


    return (
        <Modal show={show}>
            <Modal.Header closeButton onHide={() => handleClose()} />
            <Modal.Body>
                {
                    cardList.map(card =>
                        <Card
                            key={card.id}
                            style={{
                                borderRadius: 15,
                                height: 70,
                            }} className="mb-2">
                            <Card.Body className="d-flex justify-content-between align-items-center px-2">
                                <div className="ps-3" style={{
                                    fontFamily: "monospace",
                                    minWidth: 200,
                                    textAlign: "left",
                                    letterSpacing: 1
                                }} >{convertCardNumber(card.card_number)}</div>
                                {!card.is_default ?
                                    <Button
                                        variant="dark"
                                        // onClick={handleCardListModalOpen}
                                        onClick={() => onClickSelect(card.id)}
                                        className="d-flex align-items-center gap-2"
                                    >
                                        Select
                                    </Button> :
                                    <Button variant="outline-secondary" disabled className="d-flex align-items-center gap-2">
                                        Selected
                                    </Button>
                                }
                            </Card.Body>
                        </Card>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>Cancel</Button>
                <Button variant="dark" onClick={onClickAddCardBtn}>Add Card</Button>
            </Modal.Footer>
        </Modal >
    );
};

export default CardListModal;
