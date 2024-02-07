import { Container, Row, Col } from 'react-bootstrap'
import Header from "@/components/Header";
import MessageList from "@/components/MessageList";
import Footer from "@/components/Footer";

const Main = () => (
    <Container>
        <Row className='justify-content-center'>
            <Col lg={8}>
                <Header />
                <MessageList />
                <Footer />
            </Col>
        </Row>
    </Container>
);


export default Main;