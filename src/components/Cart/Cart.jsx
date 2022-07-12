import { useCartContext } from "../../components/Context/cartContext"
import Button from 'react-bootstrap/Button';
import "./Cart.css"



const Cart = ({ item }) => {
    const { removeProduct } = useCartContext()

    return (
        <tr>
            <td><img className="prodPicture" src={item.product.foto} alt="imagen" /></td>
            <td>{item.product.name}</td>
            <td>{item.quantity}</td>
            <td>${item.product.price}</td>
            <td><Button variant="danger" onClick={() => { removeProduct(item.product.id) }}>
                X
            </Button></td>
        </tr>
    )
}

export default Cart
