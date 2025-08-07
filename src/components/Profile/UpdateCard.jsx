import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../../context/AuthContext';
import FormTextBox from '../../components/Form/FormTextBox';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Select from 'react-select';
import { COUNTRY_FLAGS } from '../../constants/constants';
import { updateProfile } from '../../services/ProfileService';

const UpdateCard = (props) => {

    const { user } = useAuth();
    const mobile = user?.mobile;
    const phoneNumber = mobile ? mobile.toString().slice(3) : ''; // Extract the phone number part
    const handleClick = props.buttonClick;
    const [formData, setFormData] = useState({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        mobile: mobile,
        country_code: 64,
        phone_number: phoneNumber,
        // address_1: user.address_1 || '',
        // address_2: user.address_2 || '',
    });
    console.log("UpdateCard formData:", phoneNumber);
    console.log("UpdateCard formData:", mobile);
    const handleCancel = props.cancelUpdate;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log("UpdateCard handleChange:", name, value, type, checked);
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const [countryCode, setCountryCode] = useState(64); // New Zealand default
    const countryOptions = COUNTRY_FLAGS.map(flag => ({
        label: (
            <div className="d-flex align-items-center w-100">
                <img src={flag.src} alt="flag" className="me-2" />
                {`+${flag.code}`}
            </div>
        ),
        value: flag.value,
        code: flag.code
    }));
    const handleSelectCountry = (selected) => {
        setCountryCode(selected.value);
        setFormData((prev) => ({
            ...prev,
            country_code: selected.value,
        }));
    }

    // const [regionCode, setRegionCode] = useState(1); // Auckland default
    // const regionOptions = [
    //     { label: (<div className="d-flex align-items-center">Auckland</div>), value: "auckland", code: 1 },
    // ]
    // const handleSelectRegion = (selected) => {
    //     setRegionCode(selected.value);
    //     setFormData((prev) => ({
    //         ...prev,
    //         regionCode: selected.value,
    //     }));
    // }

    // const [cityCode, setCityCode] = useState(1); // Auckland default
    // const cityOptions = [
    //     {
    //         label: (<div className="d-flex align-items-center">Auckland</div>
    //         ), value: "auckland", code: 1
    //     },
    // ];
    // const handleSelectCity = (selected) => {
    //     setCityCode(selected.value);
    //     setFormData((prev) => ({
    //         ...prev,
    //         cityCode: selected.value,
    //     }));
    // }

    // const [suburbCode, setSuburbCode] = useState(1); // Auckland default
    // const suburbOptions = [
    //     {
    //         label: (<div className="d-flex align-items-center">Auckland</div>
    //         ), value: "auckland", code: 1
    //     },
    // ];
    // const handleSelectSuburb = (selected) => {
    //     setSuburbCode(selected.value);
    //     setFormData((prev) => ({
    //         ...prev,
    //         suburbCode: selected.value,
    //     }));
    // }

    const handleSubmit = async () => {
        const updatedData = {
            ...formData,
            mobile: `+${countryCode}${formData.phone_number}`
        };

        try {
            const result = updateProfile(updatedData);
            window.location.href = "/profile";
            
        } catch (error) {
            console.error("Error updating profile:", error);
        }
            
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: 700, backgroundColor: '#f2f2f2' }}>
            <Card style={{ width: 700, padding: 20, borderRadius: 15 }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                        Manage Profile
                    </Card.Title>
                    <Form
                        noValidate
                        onSubmit={handleClick}
                    >
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Email
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    useValidationText={true}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                First Name
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    useValidationText={true}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Last Name
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    useValidationText={true}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 d-flex align-items-center">
                            <Form.Label column sm={3}>
                                Mobile
                            </Form.Label>
                            <Col sm={3} className="d-flex align-items-center me-0">
                                <Select
                                    className="w-100"
                                    options={countryOptions}
                                    value={countryOptions.find(opt => opt.code === countryCode)}
                                    onChange={handleSelectCountry}
                                />
                            </Col>
                            <Col sm={6} className="ps-0">
                                <FormTextBox
                                    required
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Region
                            </Form.Label>
                            <Col sm={9}>
                                <Select
                                    name="region"
                                    options={regionOptions}
                                    value={regionOptions.find(opt => opt.code === regionCode)}
                                    onChange={handleSelectRegion}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                City
                            </Form.Label>
                            <Col sm={9}>
                                <Select
                                    name="city"
                                    options={cityOptions}
                                    value={cityOptions.find(opt => opt.code === cityCode)}
                                    onChange={handleSelectCity}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Suburb
                            </Form.Label>
                            <Col sm={9}>
                                <Select
                                    name="suburb"
                                    options={suburbOptions}
                                    value={suburbOptions.find(opt => opt.code === suburbCode)}
                                    onChange={handleSelectSuburb}
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Street Number
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="street_number"
                                    value={user.street_number}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Street Name
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="street_name"
                                    value={user.street_name}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group> */}
                        {/* <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Addreess 1 
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="address_1"
                                    value={formData.address_1}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Address 2
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="address_2"
                                    value={formData.address_2}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>  */}
                        {/* <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={3} style={{ textAlign: 'left' }}>
                                Postal Code
                            </Form.Label>
                            <Col sm={9}>
                                <FormTextBox
                                    required
                                    name="postal_code"
                                    value={user.postal_code}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Form.Group> */}
                        <Button variant="dark" className="w-100" onClick={() => handleSubmit()}>
                            Apply
                        </Button>
                        <Button variant="outline-dark" className="w-100 mt-2" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Form>
                </Card.Body>

            </Card>
        </div>
    );
}

export default UpdateCard;