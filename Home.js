import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function CollapsibleExample() {
  return (
    <div>
        <div className='girl'>
            <div className='bg-color'>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="">
      <Container>
        <Navbar.Brand href="#home" className='home fs-2'>Mentor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navv">
            <Nav.Link href="#" className='active'>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Courses</Nav.Link>
            <Nav.Link href="#">Trainers</Nav.Link>
            <Nav.Link href="#">Events</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Drop Down 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Drop Down 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Drop Down 3</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Drop Down 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Contact</Nav.Link>
              <Button variant="outline-secondary" className='bnt'>Get Started</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='headerr'>
         Learning Today,<br></br>
        Leading Tomorrow <br></br>
        We are team of talented designers making websites with Bootstrap<br></br>
        <Button variant="outline-secondary">Get Started</Button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default CollapsibleExample;
