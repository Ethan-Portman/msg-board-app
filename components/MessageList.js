import Table from 'react-bootstrap/Table';
import Message from "@/components/Message";

const MessageList = ({ messages }) => {
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