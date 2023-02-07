import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function TextExample() {
  return (
    <div className='container'><br></br>
        <div className='row'>
        <div className='col-md-3'>
        <Card className='yyy' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Why Choose Mentor?</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.<br></br><br></br>
        <Button variant="outline-secondary">Learn More </Button>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-3'>
        <Card className='aaa'  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Corporis voluptates sit</Card.Title>
        <Card.Text>
        Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-3'>
        <Card className='aaa'  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Ullamco laboris ladore pan</Card.Title>
        <Card.Text>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-3'>
        <Card className='aaa'  style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Labore consequatur</Card.Title>
        <Card.Text>
        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
    </div>
  );
}

export default TextExample;

