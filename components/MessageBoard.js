import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";
import { useState } from "react";

const MessageBoard = () => {
    const [messages, setMessages] = useState([
        { id: 0, name: "Bob", msgTxt: "Hello there" },
        { id: 1, name: "Joe", msgTxt: "Hey" },
        { id: 2, name: "Bob", msgTxt: "How are you?" }
    ])

    const addNewMessage = (values) => {
        const newMessage = {
            id: messages.length,
            name: values.name,
            msgTxt: values.msgText,
        };
        setMessages([newMessage, ...messages]);
    }

    return (
        <>
            <NewMessageForm addNewMessage={addNewMessage} />
            <MessageList messages={messages} />
        </>
    )
};

export default MessageBoard;