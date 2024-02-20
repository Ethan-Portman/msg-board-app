// pages/homepage.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MessageBoard from '@/components/MessageBoard/MessageBoard';
import { useAuth } from '@/components/Authentication/AuthContext';
import { useRouter } from 'next/router';
import axios from 'axios';

const HomePage = () => {
    const router = useRouter();
    const { token, setToken, loading } = useAuth();

    useEffect(() => {
        if (!loading) {
            if (token == null) { router.push('/login'); }
            if (router.pathname == '/') { router.push('/homepage'); }
        }
    }, [loading, token, router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
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
                        <MessageBoard />
                        <Button onClick={handleLogout}>LOG OUT</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
