import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import Person from './Person'
import { Container, Row, Col } from 'react-bootstrap'

const CallWar = () => {
    const [lastChanged, setLastChanged] = useState({})

    useEffect(() => {
        db.ref().child('users').on('value', snapshot => {
            if (snapshot.val() != null) {
                setLastChanged(snapshot.val()["3"])
            }
        })
    }, [])

    let word = "points"

    if (lastChanged['points'] === 1) {
        word = "point"
    }

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
                <Row className="justify-content-md-center mt-5">
                    <h2>Last edited: { lastChanged['type'] } { lastChanged['points'] } { word } for { lastChanged['user'] } on { lastChanged['date'] } at { lastChanged['time'] } </h2>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default CallWar