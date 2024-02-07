import Table from 'react-bootstrap/Table';
import Message from "@/components/Message";

const MessageList = () => {
    const messages = [
        { id: 0, name: "Bob", message: "Hello there" },
        { id: 1, name: "Joe", message: "Hey" },
        { id: 2, name: "Bob", message: "How are you?" }
    ]

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {messages.map(message => (
                    <Message key={message.id} {...message} />
                ))}
            </tbody>
        </Table>
    );
};

export default MessageList;