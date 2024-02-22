// pages/homepage.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '@/components/Authentication/AuthContext';
import NavBar from '@/components/StaticPageComponents/NavBar';
import MessageBoard from '@/components/MessageBoard/MessageBoard';
import { fetchMessages, redirectIfNeeded } from '@/lib/homepageUtil';


export const getServerSideProps = async () => {
    const jsonData = await fetchMessages();
    return { props: { jsonData } };
};


const HomePage = ({ jsonData }) => {
    const router = useRouter();
    const { token, setToken, loading } = useAuth();

    useEffect(() => {
        redirectIfNeeded(loading, token, router);
    }, [loading, token]);

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

            <NavBar />

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
