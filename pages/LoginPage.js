// pages/LoginPage.js
import { useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';

import AuthenticationHeader from '../components/Authentication/AuthenticationHeader';
import LoginForm from '../components/Authentication/LoginForm';
import RegisterForm from '../components/Authentication/RegisterForm';
import PageHeader from '@/components/StaticPageComponents/PageHeader';

const LoginPage = ({ setToken }) => {
    const [key, setKey] = useState('login'); // State to manage active tab

    const handleRegister = async (registerData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/users', registerData);
    };

    const handleLogin = async (loginData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/login', loginData);
        const { token } = response.data;
        // Store the token in sessionStorage
        sessionStorage.setItem('token', token);
        setToken(token);
    };

    return (
        <>
            <PageHeader />
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <AuthenticationHeader />
                        <Tabs
                            id="authentication-tabs"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="login" title="Login">
                                <LoginForm handleLogin={handleLogin} />
                            </Tab>
                            <Tab eventKey="register" title="Register">
                                <RegisterForm handleRegister={handleRegister} />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default LoginPage;