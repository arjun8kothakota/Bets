import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { Container, Row , Col} from 'react-bootstrap'

const Person = (props) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const parsedCount = Number(localStorage.getItem(props.name) || 0)
        setCount(parsedCount)
    }, [])

    useEffect(() => {
        localStorage.setItem(props.name, count)
    }, [count])

    return (
        <div>
            <h1 className="text-center">{ props.name }</h1>
            <h2 className="text-center">{ count }</h2>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Button className="block ml-1" variant={ props.btnColor } size="lg" onClick={() => setCount(count + 1)}>Add 1</Button>
                    </Col>
                    <Col md="1" />
                    <Col>
                        <Button className="block" variant={ props.btnColor } size="lg" onClick={() => setCount(count + 5)}>Add 5</Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col xs lg="6">
                        <Button className="block ml-1" variant={ props.btnColor } size="lg" onClick={() => setCount(count + 10)}>Add 10</Button>
                    </Col>
                    <Col md="1" />
                    <Col>
                        <Button className="block" variant={ props.btnColor } size="lg" onClick={() => setCount(count - 1)}>Delete</Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-3">
                    <Col xs lg="5">
                        <Button className="block ml-1" variant={ props.btnColor } size="lg" onClick={() => setCount(0)}>Clear</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Person