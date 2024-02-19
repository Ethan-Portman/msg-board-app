// pages/home.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MessageBoard from '@/components/MessageBoard/MessageBoard';
import { useAuth } from '@/components/Authentication/AuthContext';
import { useRouter } from 'next/router';

const HomePage = ({ jsonData }) => {
    const { setToken } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        router.push('/login');
    };

    return (
        <>
            <Head>
                <title>Message Board</title>
                <meta name="description" content="A simple message board app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Container>
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <MessageBoard jsonData={jsonData} />
                        <Button onClick={handleLogout}>LOG OUT</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
