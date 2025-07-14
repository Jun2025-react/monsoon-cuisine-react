import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/AuthContext';
import { Row, Col, Button } from 'react-bootstrap';
import FormTextBox from '../../components/Form/FormTextBox';

const ViewCard = (props) => {

    const { user, logout } = useAuth();
    const mobile = user?.mobile;
    const phoneNumber = mobile ? mobile.toString().slice(2) : ''; // Extract the phone number part
    const handleClick = props.buttonClick;

    // console.log("Profile user:", user);
    const onClickLogout = () => {
        logout();  
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: 700, backgroundColor: '#f2f2f2' }}>
            <Card style={{ width: "50vw",maxWidth: 600, minWidth: 400, padding: 20, borderRadius: 15 }}>
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
                            className="rounded-pill px-4 mb-2"
                            onClick={handleClick}
                            style={{ fontWeight: 'bold', width: "50%" }}
                        >
                            Edit your profile
                        </Button>
                        <Button
                            variant="outline-dark"
                            className="rounded-pill px-4"
                            onClick={onClickLogout}
                            style={{ fontWeight: 'bold', width: "50%" }}
                        >
                            Logout
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ViewCard;