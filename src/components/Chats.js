import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import User_input from './User_input';

class Chats extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_input() {

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md = {12}>
                        <div>user</div>
                    </Col>

                    <Col md = {12}>
                        <User_input></User_input>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Chats;