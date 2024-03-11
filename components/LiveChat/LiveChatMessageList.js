import { ListGroup, Container, Row, Col } from 'react-bootstrap';
import LiveChatMessage from './LiveChatMessage';

const LiveChatMessageList = ({ name, recipient }) => {
    return (
        <Container fluid style={{ height: '500px', overflowY: 'auto' }}>
            <ListGroup>
                <LiveChatMessage isIncoming={false} name={name} otherName={recipient} />
                <LiveChatMessage isIncoming={false} name={name} otherName={recipient} />
                <LiveChatMessage isIncoming={false} name={name} otherName={recipient} />
            </ListGroup>
        </Container>
    );
};

export default LiveChatMessageList;
