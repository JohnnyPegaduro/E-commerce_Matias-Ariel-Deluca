import carrito from './../CartWidget/carrito.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CartWidget = () => {
return (
    <div>
        <Container>
            <Row>
                <Col xs lg="2">
                    <img src={carrito}height={40} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default CartWidget
