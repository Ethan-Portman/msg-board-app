import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import AuthenticationError from './AuthenticationError';

const FormParent = ({ validationSchema, onSubmit, submitError, btnTitle }) => (
    < Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={{ name: '', password: '' }}
        validateOnMount
    >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            isSubmitting,
            isValidating,
            isValid
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
                {/* Form field for entering a name */}
                <Form.Group as={Row} className="align-items-center mb-4" controlId="name">
                    <Col xs={12}>
                        <Form.Label>Username:</Form.Label>
                    </Col>
                    <Col xs={12} style={{ position: 'relative' }}>
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

                        <Form.Control.Feedback type="invalid" style={{ position: 'absolute', top: '100%' }}>
                            {errors.name}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {/* Form field for entering a password */}
                <Form.Group as={Row} className="align-items-center my-5" controlId="password">
                    <Col xs={12}>
                        <Form.Label>Password</Form.Label>
                    </Col>
                    <Col xs={12} style={{ position: 'relative' }}>
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
                        <Form.Control.Feedback type="invalid" style={{ position: 'absolute', top: '100%' }}>
                            {errors.password}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                {/* Submit button */}
                <Button variant="primary" type="submit" className="mt-3" disabled={isSubmitting || !isValid} >
                    {btnTitle}
                </Button>

                {submitError && (  // Display the Error
                    <AuthenticationError error={submitError} />
                )}
            </Form>
        )}
    </Formik >
)

export default FormParent;
