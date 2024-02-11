import { useState } from 'react';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import RegisterButton from './RegisterButton';
import AuthenticationHeader from './AuthenticationHeader';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { Nav } from 'react-bootstrap';

const AuthenticationOffCanvas = () => {
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleRegister = async (registerData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/users', registerData);
        setShowOffCanvas(false)
    };

    const handleLogin = async (loginData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/login', loginData);
        const { token } = response.data;
        // Store the token in sessionStorage
        sessionStorage.setItem('token', token);
        // Close the Offcanvas
        setShowOffCanvas(false);
    };

    return (
        <>
            <RegisterButton handleShow={() => setShowOffCanvas(true)} />
            <Offcanvas show={showOffCanvas} onHide={() => setShowOffCanvas(false)} placement="end">
                <AuthenticationHeader />
                <Offcanvas.Body>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link onClick={() => setShowLoginForm(true)}>Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => setShowLoginForm(false)}>Register</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {showLoginForm ? <LoginForm handleLogin={handleLogin} /> : <RegisterForm handleRegister={handleRegister} />}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default AuthenticationOffCanvas;
