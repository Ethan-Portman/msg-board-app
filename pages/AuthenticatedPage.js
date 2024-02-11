import MessageBoard from "@/components/MessageBoard/MessageBoard";
import NavBar from "@/components/StaticPageComponents/NavBar";
import { Button, Container, Row, Col } from "react-bootstrap";


const AuthenticatedPage = ({ jsonData, setToken }) => {

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        setToken(null);
    };

    return (
        <>
            <NavBar />
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <MessageBoard jsonData={jsonData} />
                        <Button onClick={handleLogout}>LOG OUT</Button>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default AuthenticatedPage;