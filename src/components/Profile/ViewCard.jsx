import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/AuthContext';
import { Row, Col, Button } from 'react-bootstrap';
import FormTextBox from '../../components/Form/FormTextBox';

const ViewCard = (props) => {

    const { user } = useAuth();
    const mobile = user?.mobile;
    const phoneNumber = mobile ? mobile.toString().slice(2) : ''; // Extract the phone number part
    const handleClick = props.buttonClick;

    console.log("Profile user:", user);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: 700, backgroundColor: '#f2f2f2' }}>
            <Card style={{ width: 600, padding: 20, borderRadius: 15 }}>
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
                    <div className="text-center">
                        <Button variant="dark" className="rounded-pill px-4" onClick={handleClick} style={{ fontWeight: 'bold' }}>
                            Edit your profile
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ViewCard;