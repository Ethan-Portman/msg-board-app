import { useState } from 'react';
import { useRouter } from 'next/router';
import { Tab, Tabs, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import LoginForm from '@/components/Authentication/LoginForm';
import RegisterForm from '@/components/Authentication/RegisterForm';
import PageHeader from '@/components/StaticPageComponents/PageHeader';
import { useAuth } from '@/components/Authentication/AuthContext';

const Login = () => {
    const router = useRouter();
    const { setToken } = useAuth();
    const [activeTab, setActiveTab] = useState('login');

    const handleRegister = async (credentials) => {
        const REGISTER_ENDPOINT = 'http://172.30.71.9:3004/v1/users';
        try {
            const response = await axios.post(REGISTER_ENDPOINT, credentials);
        } catch (error) {
            if (error.response.status === 409) {
                throw new Error('Username taken');
            } else {
                throw new Error('Unexpected Error');
            }
        }
    };

    const handleLogin = async (credentials) => {
        const LOGIN_API_ENDPOINT = 'http://172.30.71.9:3004/v1/login';
        try {
            const response = await axios.post(LOGIN_API_ENDPOINT, credentials);
            const token = response.data.token;
            localStorage.setItem('token', token);
            setToken(token);
            router.push('/homepage');
        } catch (error) {
            if (error.response.status === 401) {
                throw new Error('Invalid Credentials');
            } else {
                throw new Error('Unexpected Error');
            }
        }
    };

    return (
        <>
            <PageHeader />

            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>

                        <h1 className="display-6">Authentication</h1>

                        <Tabs id="authentication-tabs" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} className="mb-3">
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

export default Login;
