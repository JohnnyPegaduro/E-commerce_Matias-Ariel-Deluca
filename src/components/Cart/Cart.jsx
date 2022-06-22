import { useCartContext } from "../../components/Context/cartContext"
import Button from 'react-bootstrap/Button';


const Cart = () => {
    const { cart, vaciarCarrito } = useCartContext()
    return (
        <div>
            <ul>
                {
                    cart.map(item => <li key={item.id}>
                        <div className="w-25">
                            <img src={item.foto} className='w-25' />
                        </div>
                        nombre: {item.name} precio: {item.price} cantidad: {item.cantidad}
                    </li>  )
                }
            </ul>
            <div>
                <Button variant="danger" onClick={vaciarCarrito} >Vaciar Carrito</Button>
            </div>
        </div>
    )
}

export default Cart
