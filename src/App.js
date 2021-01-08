import 'bootstrap/dist/css/bootstrap.min.css';

import Person from './components/Person'

import './App.css';
import { Container, Row, Col } from 'react-bootstrap'


function App() {
  return (
    <div className="spacing">
      <h1 className="text-center">This is stupid</h1>
      <Container>
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
  );
}

export default App;
