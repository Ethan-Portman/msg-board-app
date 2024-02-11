// Home.js
import { useEffect, useState } from "react";
import axios from "axios";
import MessageBoard from "@/components/MessageBoard/MessageBoard";
import NavBar from "@/components/StaticPageComponents/NavBar";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from 'next/router';
import AuthenticationWrapper from "@/components/Authentication/AuthenticationWrapper";

const Home = () => {
    const [jsonData, setJsonData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('http://localhost:3004/v1/messages');
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array since it doesn't depend on any props or state

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        router.push('/Login')
    };

    return (
        <>
            <AuthenticationWrapper>
                <NavBar />
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <MessageBoard jsonData={jsonData} />
                            <Button onClick={handleLogout}>LOG OUT</Button>
                        </Col>
                    </Row>
                </Container>
            </AuthenticationWrapper>
        </>
    );
};

export default Home;