import 'bootstrap/dist/css/bootstrap.min.css';

import Person from './components/Person'

import './App.css';
import { Container, Row, Col } from 'react-bootstrap'


function App() {
  return (
    <div className="spacing">
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <Person name="Arjun" btnColor="outline-danger"/>
          </Col>
          <Col md="3" />
          <Col>
            <Person name="Sneha" btnColor="outline-primary"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
