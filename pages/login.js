/*
  LoginPage.js - Next.js component for user authentication
  - Provides a login page with tabs for login and registration
  - Utilizes the AuthContext to manage user authentication state
  
  Functions:
  - handleRegister: Async function to handle user registration
  - handleLogin: Async function to handle user login
    - Sends login request to the server, sets the token on success, and redirects to '/'
    - Handles login errors and logs them to the console
*/

import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import LoginForm from '@/components/Authentication/LoginForm';
import RegisterForm from '@/components/Authentication/RegisterForm';
import PageHeader from '@/components/StaticPageComponents/PageHeader';
import { useAuth } from '@/components/Authentication/AuthContext';


const login = () => {
    const [key, setKey] = useState('login');
    const router = useRouter();
    const { setToken } = useAuth();

    const handleRegister = async (registerData) => {
        const response = await axios.post('http://172.30.71.9:3004/v1/users', registerData);
    };

    const handleLogin = async (loginData) => {
        try {
            console.log('Logging in...');
            const response = await axios.post('http://172.30.71.9:3004/v1/login', loginData);
            const token = response.data.token;
            console.log('Login successful. Token:', token);
            localStorage.setItem('token', token);
            setToken(token);
            router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <>
            <PageHeader />
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <h1 className="display-6">Authentication</h1>
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

export default login;