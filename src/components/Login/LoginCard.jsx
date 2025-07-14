import React, { useState } from 'react';
import FormTextBox from '../Form/FormTextBox';
import { login } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { Alert, Form, Button } from 'react-bootstrap';

const LoginCard = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [validated, setValidated] = useState(false);

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleMode = props.handleMode;
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        setSubmitted(true);
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        const result = await login({ email, password });

        if (result.success) {
            navigate("/"); // ✅ Triggers PrivateRoute again
        } else {
            // alert(result.message);
            setErrorMessage(result.message); // set the error
            setShowErrorModal(true);        // show the modal
        }
    };

    const isEmailValid = email.trim() !== '';

    return (
        <>
            <h4 className="mb-4 text-center text-danger">Log in to Order n Eat</h4>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <FormTextBox
                        required
                        name="email"
                        precheck={submitted}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid" style={{ paddingLeft: 5 }}>
                        Email address is required
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <FormTextBox
                        required
                        name="password"
                        precheck={submitted}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <div className="mb-3 text-end">
                    <a href="#" className="text-danger text-decoration-none small">
                        Forgotten Password?
                    </a>
                </div>
                {showErrorModal &&
                    <Alert variant="danger" className="mt-3">
                        {errorMessage}
                    </Alert>
                }

                <Button
                    variant="danger"
                    type="submit"
                    className="w-100 mb-2"
                >
                    Log In
                </Button>

                <Button
                    variant="secondary"
                    className="w-100"
                    onClick={() => handleMode()}
                >
                    Sign up
                </Button>
            </Form>
        </>
    )
}
export default LoginCard;