import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className='mb-3'>
          <Card.Img variant="top" src={props.imagem} />
          <Card.Header>{props.text}</Card.Header>
          <Card.Body>
            <Card.Title>{props.children}</Card.Title>
            <Card.Text>
              Macaquinho capa de revista 100%
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Cartao