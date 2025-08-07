import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/AuthContext';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import AddCardModal from './AddCardModal';
import AddAddressModal from './AddAddressModal';
import CardListModal from './CardListModal';

import { getAddress, getCardList } from '../../services/ProfileService';

const ViewCard = (props) => {
    const { user, logout } = useAuth();
    const mobile = user?.mobile;
    const country_code = mobile ? mobile.toString().slice(0, 3) : "64";
    const phone_number = mobile ? mobile.toString().slice(3) : '';
    const full_mobile = mobile ? `${country_code}) ${phone_number}` : '';
    const handleClick = props.buttonClick;

    const [showAddCardModal, setShowAddCardModal] = useState(false);
    const [showAddressModal, setShowAddressModal] = useState(false);
    const [showCardListModal, setShowCardListModal] = useState(false);

    const [addressData, setAddressData] = useState({});
    const [address, setAddress] = useState("");
    const [cardList, setCardList] = useState([]);
    const [defaultCardNumber, setDefaultCardNumber] = useState([]);

    const handleCardModalOpen = () => setShowAddCardModal(true);
    const handleCardModalClose = () => setShowAddCardModal(false);
    const handleAddressModalOpen = () => setShowAddressModal(true);
    const handleAddressModalClose = () => setShowAddressModal(false);
    const handleCardListModalOpen = () => setShowCardListModal(true);
    const handleCardListModalClose = () => setShowCardListModal(false);

    const onClickLogout = () => {
        logout();
    };

    const convertCardNumber = (number) => {
        return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12)}`;
    }

    const fetchAddress = async () => {
        try {
            const payload = { user_id: user.user_id, address_id: user?.address_id };
            const result = await getAddress(payload);
            const data = result?.data || {};
            setAddressData(data);
            setAddress(`${data.street}, ${data.suburb || ''}`);
        } catch (error) {
            console.error("Error fetching address:", error);
        }
    };

    const fetchCards = async () => {
        try {
            const payload = { user_id: user.user_id };
            const result = await getCardList(payload);
            console.log("card list result :: ", result)
            setCardList(result.data);
        } catch (error) {
            setCardList([]);
        }
    }

    const getDefaultCard = ()=> {
        const defaultCard = cardList.find(card => card.is_default === 1);
        return convertCardNumber(defaultCard.card_number);
    }

    useEffect(() => {
        if (!user) return;

        fetchAddress();
        fetchCards();
    }, [user]);

    return (
        <div className="d-flex flex-column align-items-center gap-4" style={{ width: '100%' }}>
            {/* Profile Card */}
            <Card style={{ width: "50vw", maxWidth: 600, minWidth: 400, padding: 20, borderRadius: 15 }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Manage Profile
                    </Card.Title>
                    <Row className="mb-2">
                        <Col xs={4}><strong>Name:</strong></Col>
                        <Col>{`${user?.first_name} ${user?.last_name}`}</Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={4}><strong>Email:</strong></Col>
                        <Col>{user?.email}</Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={4}><strong>Phone:</strong></Col>
                        <Col>{full_mobile}</Col>
                    </Row>
                    <div className="text-center d-flex flex-column align-items-center mt-4">
                        <Button
                            variant="dark"
                            className="px-4 mb-2"
                            onClick={handleClick}
                            style={{ fontWeight: 'bold', width: "50%" }}
                        >
                            Edit your profile
                        </Button>
                        <Button
                            variant="outline-dark"
                            className="px-4"
                            onClick={onClickLogout}
                            style={{ fontWeight: 'bold', width: "50%" }}
                        >
                            Logout
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Payment Methods Card */}
            <Card style={{ width: "50vw", maxWidth: 600, minWidth: 400, padding: 20, borderRadius: 15 }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Payment Methods
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center px-2">
                        {cardList?.length === 0 ?
                            <>
                                <p className="mb-0 text-muted">No card added</p>
                                <Button
                                    variant="dark"
                                    onClick={handleCardModalOpen}
                                    className="d-flex align-items-center gap-2"
                                >
                                    <i className="fa-regular fa-credit-card"></i> Add Card
                                </Button>
                            </>
                            :
                            <>
                                <p className="mb-0 text-muted"> {getDefaultCard()}</p>
                                <Button
                                    variant="dark"
                                    onClick={handleCardListModalOpen}
                                    className="d-flex align-items-center gap-2"
                                >
                                    <i className="fa-regular fa-credit-card"></i> Change Card
                                </Button>
                            </>
                        }
                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: "50vw", maxWidth: 600, minWidth: 400, padding: 20, borderRadius: 15 }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Addresses
                    </Card.Title>
                    <div className="d-flex justify-content-between align-items-center px-2">
                        <p className="mb-0 text-muted">{address ? address : "No Address"}</p>
                        <Button
                            variant="dark"
                            onClick={handleAddressModalOpen}
                            className="d-flex align-items-center gap-2"
                        >
                            <i className="fa-regular fa-address-book"></i>Add Address
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal for Adding Card */}
            <AddCardModal
                user={user}
                show={showAddCardModal}
                handleClose={handleCardModalClose}
                refreshCards={fetchCards}
            />
            <AddAddressModal
                show={showAddressModal}
                handleClose={handleAddressModalClose}
                userAddresses={addressData}
            />
            <CardListModal
                show={showCardListModal}
                handleClose={handleCardListModalClose}
                cardList={cardList}
                clickAddCard= {handleCardModalOpen}
                refreshCards={fetchCards}
            />
        </div>
    );
};

export default ViewCard;
