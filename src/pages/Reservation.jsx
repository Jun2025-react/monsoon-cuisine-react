import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import FloatingSelect from '../components/Form/FloatingSelect';
import FloatingTextBox from '../components/Form/FloatingText';
import { u_getTimeOption } from '../services/TimeUtils';
import CustomCalendar from '../components/CustomCalendar/CustomCalendar';

const Reservation = () => {

    const [guests, setGuests] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState();
    const [timeOptions, setTimeOptions] = useState(u_getTimeOption({ isToday: true, interval: 15 }));
    const [showCalendar, setShowCalendar] = useState(false);
    const [name, setName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [isCompleted, setIsCompleted] = useState(false);

    const [request, setRequest] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const reservationData = {
            date: selectedDate.toLocaleDateString(),
            time: selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            people: guests,
            name: name,
            contact: contactNumber,
            request: request
        };

        console.log('Reservation Data:', reservationData);
        setIsCompleted(true);
        // alert("Reservation submitted!");
    };

    useEffect(() => {
        const today = new Date();
        const isToday = selectedDate.getFullYear() === today.getFullYear() &&
            selectedDate.getMonth() === today.getMonth() &&
            selectedDate.getDate() === today.getDate();

        setTimeOptions(u_getTimeOption({ isToday: isToday, interval: 15, delay: 15 }));

    }, [selectedDate]);

    const handlePhoneChange = (e) => {
        const { name, value } = e.target;
        console.log("Phone Change:", name, value);
        if (!/^\d*$/.test(value)) return; // digits only
        
        setContactNumber(value);
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center py-5"
            style={{ minHeight: 700, background: '#f9f9f9' }}
        >
            {isCompleted === false ? (
                <Card
                    className="shadow p-4"
                    style={{ minWidth: 400, maxWidth: 800, borderRadius: '16px', width: "70vw" }}
                >
                    <h4 className="text-center mb-4">Make a Reservation</h4>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col xs={4}>
                                    <FloatingSelect
                                        label="Guests"
                                        options={["1", "2", "3", "4", "5+"]}
                                        value={guests}
                                        onChange={setGuests}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <FloatingSelect
                                        label="Time"
                                        options={timeOptions.map(time => time)}
                                        value={selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null}
                                        onChange={(e) => {
                                            const newDate = new Date();
                                            newDate.setHours(parseInt(e.split(':')[0]), parseInt(e.split(':')[1]), 0);
                                            setSelectedTime(newDate);
                                        }}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <FloatingTextBox
                                        label="Date"
                                        value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                                        onClick={() => {
                                            setShowCalendar(prev => !prev);
                                        }}
                                        type="text"
                                        readOnly={true}
                                    />
                                </Col>
                            </Row>
                            {
                                showCalendar && (
                                    <Row>
                                        <Col xs={12} className="d-flex">
                                            <CustomCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
                                        </Col>
                                    </Row>
                                )
                            }
                            <Row>
                                <Col xs={4} className="mt-3">
                                    <FloatingTextBox
                                        label="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        readOnly={false}
                                    />
                                </Col>
                                <Col xs={8} className="mt-3">
                                    <FloatingTextBox
                                        label="Contact Number"
                                        value={contactNumber}
                                        onChange={handlePhoneChange}
                                        type="text"
                                        readOnly={false}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="mt-3">
                                    <FloatingTextBox
                                        label="Special Requests"
                                        value={request}
                                        onChange={(e) => setRequest(e.target.value)}
                                        type="text"
                                        readOnly={false}
                                    />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button variant="danger" type="submit" className="w-100 rounded-pill mt-3 py-2">
                            Make Reservation
                        </Button>
                    </Form>
                </Card>)
                :
                <Card
                    className="shadow p-4"
                    style={{ minWidth: 400, maxWidth: 800, borderRadius: '16px', width: "70vw" }}
                >
                    <h4 className="text-center mt-5">Reservation Confirmed!</h4>
                    <div className="d-flex justify-content-center align-items-center mb-4" style={{ height: '100%' }}>
                        <p className="text-center">Thank you for your reservation. We look forward to serving you!</p>
                    </div>
                </Card>

            }
        </div >
    );
}

export default Reservation;