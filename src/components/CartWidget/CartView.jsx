import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'
import CartTableContainer from '../CartTableContainer/CartTableContainer'

const CartView = () => {
    const { cartList } = useCartContext()


    return (
        <Container>
            {
                cartList.length === 0 ?
                    <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
                        <h1 className='text-center'>Carrito de Compras</h1>
                        <p className="text-center">Oops El carrito esta Vacío</p>
                        <Link to="/">
                            <Button variant="danger">Ir al Inicio</Button>
                        </Link>
                    </div> :
                    <div className="mt-5">
                        <h1 className='text-center'>Carrito de Compras</h1>
                        <CartTableContainer />
                    </div>
            }

        </Container>

    )
}

export default CartView