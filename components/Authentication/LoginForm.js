/*
This component represents a login form for a Next.js application
   - Utilizes the Formik library for handling form state and validation 
   - Utilizes the Yup library for building a validation schema used by Formik

Form Fields
    - username
    - password

Form is responsible for handling login attempts and communicating with the
parent component through the 'handleLogin' prop.

Errors in Login are displayed with an AuthenticationError. 
*/

import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import AuthenticationError from './AuthenticationError';

// Define the Validation Schema for Login
const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .max(20, 'Name cannot be more than 15 characters.')
        .required('Name is required.'),
    password: yup
        .string()
        .trim()
        .max(20, 'Password cannot be more than 15 characters.')
        .required('Password is required.'),
});


const LoginForm = ({ handleLogin }) => {
    const [loginError, setLoginError] = useState(null);

    // Handles all errors, including server-side
    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            handleLogin(values);
            resetForm();
            setSubmitting(false);
            setLoginError(null);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setLoginError('Invalid Login, please try again.');
            } else {
                console.log('Error setting up the request:', error.message);
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
                                    <Form.Label>Password:</Form.Label>
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
                                Login
                            </Button>

                            {loginError && (  // Display the Error
                                <AuthenticationError error={loginError} />
                            )}
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    )
};

export default LoginForm;