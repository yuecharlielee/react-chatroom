import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Room from './Room';

class Rooms extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <div className='d-grid mt-3'>
                            <Button variant="primary" type="submit">
                                Sign in with google
                            </Button>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Room>

                            </Room>
                        </Row>

                    </Col>
                    <Col md={12} className='mt-3 mb-3'>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit">
                                    加入
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    新增
                                </Button>

                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    登入
                                </Button>
                            </Col>
                        </Row>
                    </Col>


                </Row>
            </Container>
        );
    }
}

export default Rooms;