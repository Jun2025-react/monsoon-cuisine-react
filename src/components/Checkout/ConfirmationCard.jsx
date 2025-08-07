import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ConfirmationCard = ({ order }) => {
    // Fallback mock data if no props provided
    const mockOrder = {
        orderId: 'MSN123456',
        deliveryAddress: '8 Anzac Road, Auckland',
        estimatedTime: '40 minutes',
        item: {
            name: 'Pudding',
            addOns: 'cardamom, nutmeg',
            options: 'more sweet',
            quantity: 1,
            price: 13.0,
            image: '/images/pudding.jpg', // use your own path
        },
        paymentCard: '**** **** **** 5678',
        total: 13.0
    };

    const orderInfo = order || mockOrder;

    return (
        <Container className="mt-5">
            <Card className="p-4 shadow-sm">
                <h2 className="text-center">Thank you for your order!</h2>
                <p className="text-center text-muted mb-4">#{orderInfo.orderId}</p>

                <p className="text-center">Your order will be delivered to <strong>{orderInfo.deliveryAddress}</strong></p>
                <p className="text-center">Estimated delivery in <strong>{orderInfo.estimatedTime}</strong></p>

                <hr />

                <h5>Order Summary</h5>
                <Row className="align-items-center mb-3">
                    <Col xs={3}>
                        <img src={orderInfo.item.image} alt="food" className="img-fluid rounded" />
                    </Col>
                    <Col>
                        <p className="mb-0"><strong>{orderInfo.item.name}</strong></p>
                        <small>Add-ons: {orderInfo.item.addOns}</small><br />
                        <small>Options: {orderInfo.item.options}</small>
                    </Col>
                    <Col xs={2} className="text-end">
                        x{orderInfo.item.quantity}
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col>Card</Col>
                    <Col className="text-end">{orderInfo.paymentCard}</Col>
                </Row>
                <Row className="mt-2">
                    <Col>Total</Col>
                    <Col className="text-end">${orderInfo.total.toFixed(2)}</Col>
                </Row>

                <p className="text-center text-muted mt-4">You will receive an email confirmation shortly</p>

                <div className="text-center">
                    <Button variant="dark" href="/">Return to Home</Button>
                </div>
            </Card>
        </Container>
    );
};

export default ConfirmationCard;
