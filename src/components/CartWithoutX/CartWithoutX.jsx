import { Container, Table } from "react-bootstrap";
import { useCartContext } from '../Context/cartContext'

const CartWithoutX = () => {
    
    const { cartList, totalPrice} = useCartContext()
    
    
    return (
        <Container>

            <h1>Lista de productos</h1>

            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>

                    </tr>
                </thead>
                <tbody>
                
                    {
                        cartList.map((item) => ( 
                            <tr>
                                <td><img className="prodPicture" src={item.product.foto} alt="imagen" /></td>
                                <td>{item.product.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.product.price}</td>
                            </tr> ))
                    }

                </tbody>
            </Table>

            <div>
                <h1>Total: $ {totalPrice()}</h1>
            </div>
            
        </Container>


    )
};

export default CartWithoutX;