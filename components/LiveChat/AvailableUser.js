import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const AvailableUser = ({ user }) => {
    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{user.name}</div>
                Cras justo odio
            </div>
            <Badge bg="primary" pill>
                14
            </Badge>
        </ListGroup.Item>
    );
};

export default AvailableUser;