import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Form, Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '@/components/Authentication/AuthContext';
import LiveChatMessage from './LiveChatMessage';
import UserList from './UserList';
import LiveChatMessageList from './LiveChatMessageList';
import SendMessageForm from './SendMessageForm';
import axios from 'axios';


const LiveChat = () => {
    const { name } = useAuth();
    const recipient = "TO_DO";
    const [socket, setSocket] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

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
            socket.on('privateMessage', (message) => {
                console.log("NEW MESSAGE");
                setMessages((prevMessages) => [...prevMessages, message]);
            });
        }
    }, [socket]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://172.30.71.9:3004/v1/users');
                setUsers(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the async function immediately

    }, []); // The empty dependency array means the effect runs once after the initial render


    const onSubmit = (event) => {
        event.preventDefault();
        if (socket && inputValue.trim() !== '') {
            const newMessage = {
                "sender": name,
                "recipient": recipient,
                "message": inputValue
            }
            socket.emit('message', newMessage);
            setInputValue('');
        }
    }

    return (
        <Container fluid className="" >
            <Row>
                <Col>
                    <Card >
                        <UserList users={users} />
                    </Card>
                </Col>

                <Col>
                    <Card >
                        <Card.Title>{recipient}</Card.Title>
                        <LiveChatMessageList name={name} recipient={{ recipient }} />
                        <SendMessageForm onSubmit={onSubmit} inputValue={inputValue} setInputValue={setInputValue} />
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LiveChat;