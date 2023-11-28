import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Card } from 'react-bootstrap'


function App() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="nav-container">
        <Container>
          <Nav >
            <Nav.Link href="#home">SHOP ALL</Nav.Link>
            <Nav.Link href="#features">PURIFICATION</Nav.Link>
            <Nav.Link href="#pricing">HOME</Nav.Link>
            <Navbar.Brand className="" href="#home">LARQ</Navbar.Brand>
            <Nav.Link href="#pricing">TECHNOLOGY</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">[icon]</Nav.Link>
            <Nav.Link href="#pricing">[icon]</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='pic-container bg-dark d-flex' style={{ height: "500px" }}>
        <h3 className='text-white text-center'>Input picture here</h3>
      </div>

      <div className='d-flex gap-2 justify-content-center m-5'>
      <Card>
          <Card.Body>
            <Card.Title>Brilliant</Card.Title>
            <Card.Subtitle>****</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>subtitle</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>subtitle</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>subtitle</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Subtitle>subtitle</Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </>
  );
}

export default App;
