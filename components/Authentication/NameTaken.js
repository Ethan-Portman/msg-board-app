import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function NameTaken({ registerError }) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap!</Alert.Heading>
                <p>
                    {registerError}
                </p>
            </Alert>
        );
    }
}

export default NameTaken;