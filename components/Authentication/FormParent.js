import { Form, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import AuthenticationError from './AuthenticationError';

const FormParent = ({ validationSchema, onSubmit, errorMessage, successMessage, btnTitle }) => (
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
                <Form.Group as={Row} className="align-items-center" controlId="password">
                    <Col xs={12}>
                        <Form.Label className="mt-1">Password</Form.Label>
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
                <Row className="mt-5 mx-0 p-0">
                    <Col xs={3} className='m-0 p-0 text-center'>
                        <Button variant="primary" type="submit" className="px-5" disabled={isSubmitting || !isValid}>
                            {btnTitle}
                        </Button>
                    </Col>
                    <Col xs={4}>
                        {errorMessage && (<p className='text-danger'>{errorMessage}</p>)}
                        {successMessage && (<p className='text-success'>{successMessage}</p>)}
                    </Col>
                </Row>
            </Form>
        )}
    </Formik >
)

export default FormParent;
