import { useState } from 'react';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RegisterButton from './RegisterButton';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';

const RegisterOffCanvas = () => {
    const [showRegisterBtn, setShowRegisterBtn] = useState(false);  // Corrected variable name
    const handleClose = () => setShowRegisterBtn(false);
    const handleShow = () => setShowRegisterBtn(true);

    const handleRegister = async (registerData) => {
        // try {
        const response = await axios.post('http://172.30.71.9:3004/v1/users', registerData);
        handleClose();
        // } catch (err) {
        //     if (err.response && err.response.status === 400) {
        //         console.error('Error:', err.response.data);
        //     } else {
        //         console.error('Error setting up the request:', err.message);
        //     }
        // }
    };

    return (
        <>
            <RegisterButton handleShow={handleShow} />

            <Offcanvas show={showRegisterBtn} onHide={handleClose} placement="end">
                <RegisterHeader closeButton={handleClose} />

                <Offcanvas.Body>
                    <RegisterForm handleRegister={handleRegister} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default RegisterOffCanvas;