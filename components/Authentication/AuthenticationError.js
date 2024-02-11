import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AuthenticationError({ error }) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap!</Alert.Heading>
                <p>
                    {error}
                </p>
            </Alert>
        );
    }
}

export default AuthenticationError;