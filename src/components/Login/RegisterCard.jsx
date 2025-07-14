import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import FormTextBox from '../Form/FormTextBox';
import FormCheck from 'react-bootstrap/FormCheck';
import { COUNTRY_FLAGS } from '../../constants/constants';
import Select from 'react-select';
import { register } from '../../services/AuthService';

const RegisterCard = (props) => {
    const handleMode = props.handleMode;
    const [validated, setValidated] = useState(false);
    const [countryCode, setCountryCode] = useState(64); // New Zealand default
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: '',
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const countryOptions = COUNTRY_FLAGS.map(flag => ({
        label: (
            <div className="d-flex align-items-center">
                <img src={flag.src} alt="flag" width={20} className="me-2" />
                {`+${flag.code}`}
            </div>
        ),
        value: flag.value,
        code: flag.code
    }));

    const handleSelectChange = (selected) => {
        setCountryCode(selected.value);
        setFormData((prev) => ({
            ...prev,
            countryCode: selected.value,
        }));
    }

    const handleSubmit = async (event) => {
        setSubmitted(true);

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        event.preventDefault(); // prevent form submission
        const response = await register(formData); // ✅ await the promise

        if (response.success) {
            // alert("Registration successful");
            handleMode();
        } else {
            console.log("Registration failed:", response.message);
            // alert(response.message || "Registration failed");
        }
    };

    const isTermValid = (e) => {
        return formData.agreeTerms;
    }

    const checkPassword = (value) => {
        if (!value) {
            return true
        }
        if (formData.password !== formData.confirm_password) {
            return true;
        }
        return false;
    }
    return (
        <>
            <h4 className="mb-4 text-danger text-center">Create your Order Meal Account</h4>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
            >
                <Row >
                    <Col xs={12} md={12} lg={6} className="mb-3">
                        <FormTextBox
                            required
                            name="first_name"
                            value={formData.first_name}
                            precheck={submitted}
                            onChange={handleChange}
                            useValidationText={true}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={6} className="mb-3">
                        <FormTextBox
                            required
                            name="last_name"
                            value={formData.last_name}
                            precheck={submitted}
                            onChange={handleChange}
                            useValidationText={true}
                        />
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <FormTextBox
                        required
                        name="email"
                        precheck={submitted}
                        value={formData.email}
                        onChange={handleChange}
                        useValidationText={true}
                    />
                </Form.Group>

                <Form.Group className="mb-3 d-flex align-items-center">
                    <Select
                        className="me-2"
                        styles={{ container: (base) => ({ ...base, width: 200 }) }}
                        options={countryOptions}
                        value={countryOptions.find(opt => opt.code === countryCode)}
                        onChange={handleSelectChange}
                    />
                    <FormTextBox
                        required
                        name="mobile"
                        precheck={submitted}
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={submitted && checkPassword(formData.password)}
                    />
                    {
                        <Form.Control.Feedback type="invalid" style={{ paddingLeft: 5 }}>
                            {formData.password !== formData.confirm_password ? "Password is not matched" : "This field is required"}
                        </Form.Control.Feedback>
                    }
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        required
                        type="password"
                        placeholder="confirm_password"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        isInvalid={submitted && checkPassword(formData.confirm_password)}
                    />
                    {
                        <Form.Control.Feedback type="invalid" style={{ paddingLeft: 5 }}>
                            {formData.password !== formData.confirm_password ? "Password is not matched" : "This field is required"}
                        </Form.Control.Feedback>
                    }
                </Form.Group>
                <Form.Group className="mb-5">
                    <FormCheck
                        required
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        label={
                            <label htmlFor="agreeTerms" className="form-check-label">
                                I agree to the{' '}
                                <a href="#" onClick={(e) => e.stopPropagation()}>Order Meal Terms & Conditions</a>{' '}
                                and{' '}
                                <a href="#" onClick={(e) => e.stopPropagation()}>Privacy Policy</a>
                            </label>
                        }
                        isInvalid={submitted && !isTermValid()}
                        feedback="* This agreement is required"
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button type="submit" className="w-100 mb-2" variant='danger'>
                    Create an account
                </Button>

                <Button variant="secondary" className="w-100" onClick={() => handleMode()}>
                    Log in
                </Button>
            </Form>
        </>
    );
};

export default RegisterCard;
