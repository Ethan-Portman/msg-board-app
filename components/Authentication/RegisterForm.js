import { useState } from 'react';
import { Card } from 'react-bootstrap';
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



