import React from 'react'
// import '../App.css';
import Person from './Person'
import { Container, Row, Col } from 'react-bootstrap'

const CallWar = () => {
    return (
        <div className="background">
            <div className="spacing">
                <h1 className="text-center big">Who ended the call?</h1>
                <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col>
                    <Person name="Arjun" id="1" btnColor="outline-danger"/>
                    </Col>
                    <Col md="3" />
                    <Col>
                    <Person name="Sneha" id="2" btnColor="outline-primary"/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default CallWar