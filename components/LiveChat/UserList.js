import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import AvailableUser from './AvailableUser';

const UserList = ({ users }) => {
    return (
        <ListGroup as="ol" numbered>
            {users.map(user => (
                <AvailableUser key={user.id} user={user} />
            ))}
        </ListGroup>
    );
};

export default UserList;