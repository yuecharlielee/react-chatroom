import React from 'react';
import { InputGroup, Button, Form } from 'react-bootstrap';

class User_input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<InputGroup className="mb-6">
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Button
            </Button>
        </InputGroup>);
    }
}
export default User_input;