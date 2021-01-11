import './App.css';
import CallWar from './components/CallWar'
import Word from './components/Word'
import { Container, Row, Col, Navbar, NavbarBrand, Nav } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>Bets</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Call War</Link>
                <Link className="nav-link" to="/the-word">The Word</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <CallWar />} />
          <Route path="/the-word" exact render={() => <Word />} />
        </Container>
      </Router>
      
    </div>
  );
}

export default App;
