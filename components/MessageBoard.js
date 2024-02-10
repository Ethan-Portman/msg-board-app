import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";
import { useState } from "react";
import axios from "axios";

const MessageBoard = ({ jsonData }) => {
    const [messages, setMessages] = useState(jsonData);

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
            <NewMessageForm addNewMessage={addNewMessage} />
            <MessageList messages={messages} />
        </>
    )
};

export default MessageBoard;