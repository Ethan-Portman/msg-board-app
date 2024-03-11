import { Form, Row, Col, Button } from 'react-bootstrap';

const SendMessageForm = ({ onSubmit, inputValue, setInputValue }) => {
    return (
        <Form id="form" onSubmit={onSubmit} className="w-100">
            <Form.Group id="input" className="mb-3 d-flex">
                <Form.Control
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow-1"
                    placeholder='Type your message'
                />
                <Button variant="primary" type="submit" className="ml-2">
                    Send
                </Button>

            </Form.Group>
        </Form>
    );
};

export default SendMessageForm;