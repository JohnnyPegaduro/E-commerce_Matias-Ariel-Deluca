import { useCartContext } from "../../components/Context/cartContext"
import Button from 'react-bootstrap/Button';



const CartTable = ({item}) => {
    const { removeProduct } = useCartContext()
    
    return (
                        <tr>
                            <td><img style={{width: "100px", height:"100px"}} src={item.product.foto}/></td>
                            <td>{item.product.name}</td>
                            <td>{item.quantity}</td>
                            <td>${item.product.price}</td>
                            <td><Button variant="danger" onClick={()=>{removeProduct(item.product.id)}}>
                                X
                            </Button></td>
                        </tr>
  )
}

export default CartTable
