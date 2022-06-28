import carrito from './../CartWidget/carrito.svg'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useCartContext } from '../Context/cartContext'

const CartWidget = () => {

    const {iconCart, cartList} = useCartContext()

return (
    <div>
        <Container>
            <Row>
                <Col xs lg="auto">
                    <i><img src={carrito}height={40} alt="" /></i>
                    <Badge>{cartList.length === 0 ? 0 : iconCart()}</Badge>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default CartWidget
