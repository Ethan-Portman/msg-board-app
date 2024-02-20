/*
This component represents a registation form for a Next.js application
   - Utilizes the Formik library for handling form state and validation 
   - Utilizes the Yup library for building a validation schema used by Formik

Form Fields
    - username
    - password

Form is responsible for handling registation and communicating with the
parent component through the 'handleLogin' prop.

Errors in Login are displayed with an AuthenticationError. 
*/

import { useState, useEffect } from 'react';
import { Card, Form, Row, Col, Button, Toast } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import AuthenticationError from './AuthenticationError';
import { registerSchema } from './FormSchemas';

const RegisterForm = ({ handleRegister }) => {
    const [registerError, setRegisterError] = useState(null);
    const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            await handleRegister(values);
            resetForm();
            setRegisterError(null);
            setShowRegisterSuccess(true);
            setSubmitting(false);
        } catch (error) {
            if (error.response.status === 409) {
                setRegisterError('Username is already taken. Please choose a different username.');
            } else if (error.response.status === 400) {
                setRegisterError('Error setting up the request:');
            }
            setSubmitting(false);
        }
    };


    return (
        <Card className="mb-3">
            <Card.Body>
                {/* Formik component for handling form state and validation */}
                <Formik
                    validationSchema={registerSchema}
                    onSubmit={handleFormData}
                    initialValues={{ name: '', password: '' }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            {/* Form field for entering a name */}
                            <Form.Group as={Row} className="align-items-center mb-3" controlId="name">
                                <Col xs={12}>
                                    <Form.Label>Username:</Form.Label>
                                </Col>
                                <Col xs={12}>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={touched.name && errors.name}
                                    />
                                    {/* Validation feedback for the name field */}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            {/* Form field for entering a password */}
                            <Form.Group as={Row} className="align-items-center mb-3" controlId="password">
                                <Col xs={12}>
                                    <Form.Label>Password</Form.Label>
                                </Col>
                                <Col xs={12}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Your password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={touched.password && errors.password}
                                    />
                                    {/* Validation feedback for the password field */}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            {/* Submit button */}
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit" className="mt-3">
                                        Register
                                    </Button>
                                </Col>

                                <Col>
                                    <Toast show={showRegisterSuccess} onClose={() => setShowRegisterSuccess(false)} className="mb-5">
                                        <Toast.Header>
                                            <strong className="me-auto">Registration Complete</strong>
                                        </Toast.Header>
                                        <Toast.Body>User <strong>{values.name}</strong> created </Toast.Body>
                                    </Toast>
                                </Col>

                            </Row>

                            {registerError && (  // Display the Error
                                <AuthenticationError error={registerError} />
                            )}
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    );
};

export default RegisterForm;