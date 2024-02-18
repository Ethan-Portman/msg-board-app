/*
This component displays an alert for login or registration errors.
   - Utilizes the React Bootstrap Alert component to show an informative message.

When rendered, the alert is dismissible, allowing users to close it. 
*/

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


const AuthenticationError = ({ error }) => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap!</Alert.Heading>
                <p> {error} </p>
            </Alert>
        );
    }
}

export default AuthenticationError;