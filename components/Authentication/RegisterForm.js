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

import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import AuthenticationError from './AuthenticationError';

// Define the Validation Schema for Registration
const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Name must be at least 2 characters.')
        .max(15, 'Name cannot be more than 15 characters.')
        .matches(/^[A-Za-z0-9_]+$/, 'Invalid name. Use upper or lower case letters, 0 to 9, or underscore only.')
        .required('Name is required.'),
    password: yup
        .string()
        .trim()
        .min(6, 'Password must be at least 6 characters.')
        .max(15, 'Password cannot be more than 15 characters.')
        .required('Password is required.'),
});

const RegisterForm = ({ handleRegister }) => {
    const [registerError, setRegisterError] = useState(null);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            await handleRegister(values);
            resetForm();
            setSubmitting(false);
            setRegisterError(null);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setRegisterError('Username is already taken. Please choose a different username.');
            } else {
                console.error('Error setting up the request:', error.message);
            }
            setSubmitting(false);
        };
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {/* Formik component for handling form state and validation */}
                <Formik
                    validationSchema={schema}
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
                            <Button variant="primary" type="submit" className="mt-3">
                                Register
                            </Button>

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