import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RegisterButton from './RegisterButton';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';

const RegisterOffCanvas = () => {
    const [showLoginBtn, setShowLoginBtn] = useState(false);
    const handleClose = () => setShowLoginBtn(false);
    const handleShow = () => setShowLoginBtn(true);

    const handleLogin = (loginData) => {
        // Implement your login logic here using the loginData
        console.log('Login data:', loginData);
        // Close the off-canvas after login
        handleClose();
    };

    return (
        <>
            <RegisterButton handleShow={handleShow} />

            <Offcanvas show={showLoginBtn} onHide={handleClose} placement="end">
                <RegisterHeader closeButton={handleClose} />

                <Offcanvas.Body>
                    <RegisterForm handleLogin={handleLogin} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default RegisterOffCanvas;