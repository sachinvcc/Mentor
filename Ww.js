import React from 'react';
import Card from 'react-bootstrap/Card';
import amai from '../src/Img/amai.jpg';
import amm from '../src/Img/amm.jpg';
import ammm from '../src/Img/ammm.jpg';

function Ww() {
  return (
    <div className='container'><br></br>
        <div className='row'>
            <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
            <img src={amai} alt='rrr' />
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          <h6>Web Development</h6><br></br>
          <p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut</p>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
            <img src={amm} alt='rrr' />
      <Card.Body>
        <Card.Title>Sarah Jhinson</Card.Title>
        <Card.Text>
          <h6>Marketing</h6><br></br>
          <p>Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className='col-md-4'>
            <Card style={{ width: '18rem' }}>
            <img src={ammm} alt='rrr' />
      <Card.Body>
        <Card.Title>William Anderson</Card.Title>
        <Card.Text>
          <h6>Content</h6><br></br>
          <p>Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
    </div>
  );
}

export default Ww;
