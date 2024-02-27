import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Form, Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';


const LiveChat = (userID, otherUserID) => {
    const [socket, setSocket] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = io('ws://172.30.71.9:3004', {
            path: '/socket.io',
            transports: ['websocket'],
            timeout: 10000,
        });

        socket.on('connect_error', (error) => {
            console.error('Socker.IO connection error:', error.message);
        });

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (socket) {
            socket.on('message', (message) => {
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket]);

    const onSubmit = (event) => {
        event.preventDefault();
        if (socket && inputValue.trim() !== '') {
            socket.emit('message', inputValue);
            setInputValue('');
        }
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" >
            <Card style={{ width: '40rem' }}>
                <Card.Title>Chat</Card.Title>
                <Container style={{ height: '300px', overflowY: 'auto' }}>
                    <Row>
                        <Col>
                            <ListGroup>
                                {/* Your list items go here */}
                                <ListGroup.Item>Item 1</ListGroup.Item>
                                <ListGroup.Item>Item 2</ListGroup.Item>
                                <ListGroup.Item>Item 3</ListGroup.Item>
                                <ListGroup.Item>Item 1</ListGroup.Item>
                                <ListGroup.Item>Item 2</ListGroup.Item>
                                <ListGroup.Item>Item 3</ListGroup.Item>
                                <ListGroup.Item>Item 1</ListGroup.Item>
                                <ListGroup.Item>Item 2</ListGroup.Item>
                                <ListGroup.Item>Item 3</ListGroup.Item>
                                <ListGroup.Item>Item 1</ListGroup.Item>
                                <ListGroup.Item>Item 2</ListGroup.Item>
                                <ListGroup.Item>Item 3</ListGroup.Item>
                                <ListGroup.Item>Item 1</ListGroup.Item>
                                <ListGroup.Item>Item 2</ListGroup.Item>
                                <ListGroup.Item>Item 3</ListGroup.Item>
                                {/* Add more ListGroup.Items as needed */}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>

                <Row className="mt-auto">
                    <Col className="w-100">
                        <Form id="form" onSubmit={onSubmit} className="w-100">
                            <Form.Group id="input" className="mb-3 d-flex">
                                <Form.Control
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="flex-grow-1"
                                    placeholder='Type your message'
                                />
                                <Button variant="primary" type="submit" className="ml-2">
                                    Send
                                </Button>

                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
}

export default LiveChat;