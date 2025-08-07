import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import LocationIQAddressInput from './LocationIQAddressInput';
import { useAuth } from '../../context/AuthContext';
import { addAddress } from '../../services/ProfileService';

const AddAddressModal = ({ show, handleClose, onSave }) => {
    const { user } = useAuth();
    const [addressData, setAddressData] = useState({});
    const [extraFields, setExtraFields] = useState({
        mobile: user?.mobile || "",
        secondary_address: "",
        place: "",
        other_place: ""
    });

    const handleSave = () => {
        const payload = { ...addressData, ...extraFields };
        addAddress(payload);
        console.log("Address saved:", payload);
        // onSave({ ...addressData, ...extraFields });
        handleClose();
    };
    const handleAddressSelect = (data) => {
        setAddressData({
            street: data.street,
            city: data.city,
            suburb: data.suburb,
            postcode: data.postcode,
            latitude: data.latitude,
            longitude: data.longitude,
            full: data.full
        });
    }

    return (
        <Modal show={show}>
            <Modal.Header closeButton onHide={() => handleClose()}></Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-2">
                    <Form.Label>Address Search</Form.Label>
                    <LocationIQAddressInput onSelect={handleAddressSelect} />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Suburb</Form.Label>
                    <Form.Control
                        value={addressData.suburb || ""}
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        value={addressData.city || ""}
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Post code</Form.Label>
                    <Form.Control
                        value={addressData.postcode || ""}
                        disabled
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Additional Address</Form.Label>
                    <Form.Control
                        placeholder="Unit, Floor, etc."
                        onChange={(e) => setExtraFields(prev => ({ ...prev, secondary_address: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Place Name</Form.Label>
                    <Form.Control
                        placeholder="e.g., Home, Office"
                        name="place"
                        onChange={(e) => setExtraFields(prev => ({ ...prev, place: e.target.value }))}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-dark" onClick={handleClose}>Cancel</Button>
                <Button variant="dark" onClick={handleSave}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddAddressModal;
