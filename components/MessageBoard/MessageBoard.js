import MessageList from "@/components/MessageBoard/MessageList";
import NewMessageForm from "@/components/MessageBoard/NewMessageForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const MessageBoard = ({ jsonData }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (jsonData) {
            setMessages(jsonData);
        }
    }, [jsonData]);

    const addNewMessage = async (values) => {
        try {
            const response = await axios.post('http://172.30.71.9:3004/v1/messages', values);
            setMessages([response.data, ...messages]);
            console.log(messages);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <h1 className="display-4 text-center">Message Board</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <NewMessageForm addNewMessage={addNewMessage} />
                    <MessageList messages={messages} />
                </Col>
            </Row>
        </>
    )
};

export default MessageBoard;
