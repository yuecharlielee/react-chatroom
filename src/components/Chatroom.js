import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chats from './Chats';
import Rooms from './Rooms';


class Chatroom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md = {3}>
                        <Rooms>

                        </Rooms>
                    </Col>
                    <Col md = {9}>
                        <Chats>

                        </Chats>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Chatroom;