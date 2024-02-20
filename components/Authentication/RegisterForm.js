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
import FormParent from './FormParent';

const RegisterForm = ({ handleSubmit }) => {
    const [submitError, setSubmitError] = useState(null);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            await handleSubmit(values);
            resetForm();
            setSubmitError(null);
            setSubmitting(false);
        } catch (error) {
            if (error.response.status === 409) {
                setSubmitError('Username is already taken. Please choose a different username.');
            } else if (error.response.status === 400) {
                setSubmitError('Error setting up the request:');
            }
            setSubmitting(false);
        }
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {/* Formik component for handling form state and validation */}
                <FormParent
                    validationSchema={registerSchema}
                    onSubmit={handleFormData}
                    submitError={submitError}
                    btnTitle={"register"}
                />
            </Card.Body>
        </Card >
    );
};

export default RegisterForm;



