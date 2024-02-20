import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { loginSchema } from './FormSchemas';
import FormParent from './FormParent';


const LoginForm = ({ handleLogin }) => {
    const [errorMessage, setErrorMessage] = useState(null);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            resetForm();
            setSubmitting(false);
            await handleLogin(values);
        } catch (error) {
            if (error.message === 'Invalid Credentials') { setErrorMessage('Invalid Credentials.'); }
            else if (error.message === 'Username taken') { setErrorMessage('Error setting up the request:'); };
            setTimeout(() => { setErrorMessage(null); }, 2000);
            setSubmitting(false);
        };
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                {/* Formik component for handling form state and validation */}
                <FormParent
                    validationSchema={loginSchema}
                    onSubmit={handleFormData}
                    errorMessage={errorMessage}
                    successMessage={null}
                    btnTitle={"Login"}
                />
            </Card.Body>
        </Card>
    )
};

export default LoginForm;