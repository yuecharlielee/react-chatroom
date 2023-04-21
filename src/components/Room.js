import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

class Room extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className='d-grid mt-3'>
            <Button variant="primary" type="submit">
                Sign in with google
            </Button>
        </div>);
    }
}

export default Room;