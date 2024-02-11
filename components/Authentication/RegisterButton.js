import Button from 'react-bootstrap/Button';

const RegisterButton = ({ handleShow }) => {
    return (
        <Button variant="outline-warning" className="position-fixed top-0 end-0 m-4" onClick={handleShow}>
            Register
        </Button>
    );
}

export default RegisterButton;