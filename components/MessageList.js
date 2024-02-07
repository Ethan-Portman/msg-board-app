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
                {messages.map((message, index) => (
                    <Message key={message.id} {...message} msgNum={index} />
                ))}
            </tbody>
        </Table>
    );
};

export default MessageList;