import React from 'react';
import { Button, Container, Form, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


class Sign_in extends React.Component {


    constructor(props) {
        super(props);
    }

    sign_up = () => {
        const navigate = useNavigate();
        console.log("aaaa");
        navigate('/chatroom');
    }

    render() {
        return (
            <Container>
                <Row className='mt-3'>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Tabs justify>
                            <Tab eventKey="sign_up" title="Sign up">
                                <Form>
                                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                        <Form.Label>Nick name</Form.Label>
                                        <Form.Control type="text" placeholder='Nick name' />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Check</Form.Label>
                                        <Form.Control type="password" placeholder="Check" />
                                    </Form.Group>
                                    <div className='d-grid' >
                                        <Button variant="primary" type="submit" onClick={this.sign_up} href = "/chatroom">
                                            SIGN UP
                                        </Button>
                                    </div>
                                </Form>
                            </Tab>
                            <Tab eventKey="log_in" title="Log in">
                                <Form>
                                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <div className='d-grid'>
                                        <Button variant="primary" type="submit">
                                            LOG IN
                                        </Button>
                                    </div>
                                    <div className='d-grid mt-3'>
                                        <Button variant="primary" type="submit">
                                            Sign in with google
                                        </Button>
                                    </div>
                                </Form>

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>



            </Container>

        );
    }
}

export default Sign_in;