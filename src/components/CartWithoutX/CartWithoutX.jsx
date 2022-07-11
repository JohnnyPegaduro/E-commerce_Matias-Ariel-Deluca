import { Container, Table } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useCartContext } from '../Context/cartContext'

const CartWithoutX = () => {
    
    const { cartList, totalPrice} = useCartContext()
    
    
    return (
        <Container>
            <Table className="mt-5" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                        cartList.map((item) => ( <Cart item={item} key={item.product.id} /> ))
                    }

                </tbody>
                <tbody>
                    <tr>
                        <th>Total: $ {totalPrice()}</th>
                    </tr>
                </tbody>
            </Table>

        </Container>


    )
};

export default CartWithoutX;