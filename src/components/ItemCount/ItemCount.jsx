import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ItemCount = () => {
  //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(1)

  // Function is called everytime increment button is clicked
    const handleClick1 = () => {
    // Counter state is incremented
        setCounter(counter + 1)
    }

  // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
    }

return (
    <Container>
        <Row className="justify-content-md-center">
            <Col md="auto"><h1>Contador</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto"><h1>{counter}</h1></Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col xs lg="1">
                <Button variant="success" onClick={handleClick1}>Agregar</Button>
            </Col>
            <Col xs lg="1">
                <Button variant="danger" onClick={handleClick2}>Quitar</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default ItemCount


