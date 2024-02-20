import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { loginSchema } from './FormSchemas';
import FormParent from './FormParent';


const LoginForm = ({ handleSubmit }) => {
    const [submitError, setSubmitError] = useState(null);

    const handleFormData = async (values, { resetForm, setSubmitting }) => {
        try {
            await handleSubmit(values);
            resetForm();
            setSubmitError(null);
            setSubmitting(false);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setSubmitError('Invalid Login, please try again.');
            } else {
                setSubmitError('Something went wrong.');
            }
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
                    submitError={submitError}
                    btnTitle={"login"}
                />
            </Card.Body>
        </Card>
    )
};

export default LoginForm;