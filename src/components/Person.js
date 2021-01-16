import React, { useState, useEffect } from 'react';
import { db } from '../firebase'

import Button from 'react-bootstrap/Button'
import { Container, Row , Col} from 'react-bootstrap'

const Person = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        db.ref().child('users').on('value', snapshot => {
            if (snapshot.val() != null) {
                setCount(snapshot.val()[props.id]["count"])
            }
        })
    }, [])

    const add = (val) => {
        let type = "added"
        if (val < 0) {
            type = "removed"
        }
        db.ref('users/3').set({
            date: new Date().toLocaleDateString(),
            points: Math.abs(val),
            type: type,
            user: props.name
        })
        db.ref('users/' + props.id).set({
            id: props.id,
            name: props.name,
            count: count + val
        })
        setCount(count + val)
    }

    return (
        <div>
            <h1 className="text-center">{ props.name }</h1>
            <h2 className="text-center">{ count }</h2>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <div className="flex-parent jc-center">
                        <Col>
                            <Button className="block mr-5" variant={ props.btnColor } size="lg" onClick={() => add(1)}>Add 1</Button>
                        </Col>
                        <Col>
                            <Button className="block" variant={ props.btnColor } size="lg" onClick={() => add(5)}>Add 5</Button>
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <div className="flex-parent jc-center">
                        <Col>
                            <Button className="block mr-5" variant={ props.btnColor } size="lg" onClick={() => add(10)}>Add 10</Button>
                        </Col>
                        <Col>
                            <Button className="block" variant={ props.btnColor } size="lg" onClick={() => add(-1)}>Delete</Button>
                        </Col>
                    </div>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <div className="flex-parent jc-center">
                        <Col>
                            <Button className="block" variant={ props.btnColor } size="lg" onClick={() => add(-count)}>Clear</Button>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Person