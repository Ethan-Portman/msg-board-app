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
    const handleClose = () => setShowOffCanvas(false);
    const handleShow = () => setShowOffCanvas(true);
    const handleToggleForm = () => setShowLoginForm(!showLoginForm);

    const handleRegister = async (registerData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/users', registerData);
        handleClose();
    };

    return (
        <>
            <RegisterButton handleShow={handleShow} />
            <Offcanvas show={showOffCanvas} onHide={handleClose} placement="end">
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
                    {showLoginForm ? <LoginForm /> : <RegisterForm handleRegister={handleRegister} />}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default AuthenticationOffCanvas;



// <>
//     <RegisterButton handleShow={handleShow} />
//     <Offcanvas show={showOffCanvas} onHide={handleClose} placement="end">
//         <AuthenticationHeader />
//         <Offcanvas.Body>
//             <Nav className="flex-column">
//                 <Nav.Link onClick={handleToggleForm}>
//                     {showLoginForm ? 'Login' : 'Register'}
//                 </Nav.Link>
//             </Nav>
//             {showLoginForm ? <LoginForm /> : <RegisterForm handleRegister={handleRegister} />}
//         </Offcanvas.Body>
//     </Offcanvas>
// </>