import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/AuthContext';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import AddCardModal from './AddCardModal';

const ViewCard = (props) => {
    const { user, logout } = useAuth();
    const mobile = user?.mobile;
    const phoneNumber = mobile ? mobile.toString().slice(2) : '';
    const handleClick = props.buttonClick;

    const [showModal, setShowModal] = useState(false);
    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    
    const onClickLogout = () => {
        logout();
    };

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
                        <Col>{phoneNumber}</Col>
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
                        <p className="mb-0 text-muted">No card added</p>
                        <Button
                            variant="dark"
                            onClick={handleModalOpen}
                            className="d-flex align-items-center gap-2"
                        >
                            <i className="bi bi-credit-card"></i> Add Card
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal for Adding Card */}
            <AddCardModal
                show={showModal}
                handleModalClose={() => handleModalClose()}
            />
        </div>
    );
};

export default ViewCard;
