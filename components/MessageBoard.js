import MessageList from "./MessageList";

const MessageBoard = () => {
    const messages = [
        { id: 0, name: "Bob", message: "Hello there" },
        { id: 1, name: "Joe", message: "Hey" },
        { id: 2, name: "Bob", message: "How are you?" }
    ];

    return (
        <MessageList messages={messages} />
    )
};

export default MessageBoard;