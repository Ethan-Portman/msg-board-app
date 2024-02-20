import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from "yup";

// Define the Validation Schema for a new Message
const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Your name must be at least ${min} characters.')
        .max(15, 'Your name cannot be more than ${max} characters.')
        .matches(/^[A-Za-z0-9_]+$/, 'Invalid name. Use upper or lower case letters, 0 to 9, or underscore only.')
        .required('Your name is required.'),
    msgText: yup
        .string()
        .trim()
        .min(2, 'Your message must be at least ${min} characters.')
        .max(30, 'Your message must be no more than ${max} characters')
        .required('A message is required.')
});

// NewMessageForm component that receives a function (addNewMessage) as a prop
// Performs that function on submit with the correct Values as the Params
const NewMessageForm = ({ addNewMessage }) => {
    const handleFormData = (values, { resetForm, setSubmitting }) => {
        addNewMessage(values);
        resetForm();
        setSubmitting(false);
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Add a Message:</Card.Title>
                {/* Formik component for handling form state and validation */}
                <Formik
                    schema={schema}
                    onSubmit={handleFormData}
                    initialValues={{ name: '', msgText: '' }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        errors
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            {/* Row containing form fields */}
                            <Row className="align-items-center">
                                {/* Form field for entering a name */}
                                <Form.Group as={Col} xs={4} className="mt-2" controlId="name">
                                    <Form.Label>Enter a Name:</Form.Label>
                                    <Form.Control
                                        placeholder="Your name"
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
                                </Form.Group>
                                {/* Form field for entering a message */}
                                <Form.Group as={Col} className="mt-2" controlId="msgText">
                                    <Form.Label>Enter Message:</Form.Label>
                                    <Form.Control
                                        placeholder="Your message"
                                        value={values.msgText}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isValid={touched.msgText && !errors.msgText}
                                        isInvalid={touched.msgText && errors.msgText}
                                    />
                                    {/* Validation feedback for the message field */}
                                    <Form.Control.Feedback type="invalid">
                                        {errors.msgText}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            {/* Submit button */}
                            <Button variant="primary" type="submit" className="mt-3">
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    );
};

export default NewMessageForm;