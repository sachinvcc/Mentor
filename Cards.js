import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import anil from '../src/Img/anil.jpg';
import ann from '../src/Img/ann.jpg';
import annn from '../src/Img/annn.jpg';

function Cards() {
  return (
    <div className='container'>
      <div>
      Courses <br></br>
    <h1>Popular Courses</h1><br></br>
    <div className='row'>
        <div className='col-md-4'>
    <Card style={{ width: '18rem' }}>
    <img src={anil} alt='rrr' />
      <Card.Body>
      <Button variant="primary">Web Development</Button>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
        Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
    <img src={ann} alt='rrr' />
      <Card.Body>
      <Button variant="primary">Web Development</Button>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
        Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>   
        <div className='col-md-4'>
        <Card style={{ width: '18rem' }}>
    <img src={annn} alt='rrr' />
      <Card.Body>
      <Button variant="primary">Web Development</Button>
        <Card.Title>Website Design</Card.Title>
        <Card.Text>
        Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>      
    </div>
      </div>
    </div>
  );
}

export default Cards;
