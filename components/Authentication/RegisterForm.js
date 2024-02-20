import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { registerSchema } from './FormSchemas';
import FormParent from './FormParent';

const RegisterForm = ({ handleRegister }) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            resetForm();
            setSubmitting(false);
            await handleRegister(values);
            setSuccessMessage('Registration Complete');
            setTimeout(() => { setSuccessMessage(null); }, 3000);
        } catch (error) {
            if (error.message === 'Username taken') { setErrorMessage('Username is already taken.'); }
            else if (error.message === 'Unexpected Error') { setErrorMessage('Error setting up the request:'); };
            setTimeout(() => { setErrorMessage(null); }, 2000);
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
                    errorMessage={errorMessage}
                    successMessage={successMessage}
                    btnTitle={"Register"}
                />
            </Card.Body>
        </Card >
    );
};

export default RegisterForm;



