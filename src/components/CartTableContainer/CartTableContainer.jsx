import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useCartContext } from '../Context/cartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Cart from '../Cart/Cart'

const CartTableContainer = () => {
    const { cartList, totalPrice, clearList } = useCartContext()

    async function generarOrden(e) {
        e.preventDefault()
        let orden = {}     
        
        orden.buyer = {name: 'fede', email: 'f@gmail.com', phone: '123456789'}
        orden.total = totalPrice()

        // insertar
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, orden)
        .then(resp => console.log(resp.id) )  
        
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.cantidad
            // const cantidad = cartItem.cantidad
            
            return {id, name, price}   
        })   
        
        
    }


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
                <Button variant="success" onClick={generarOrden}>Finalizar Compra</Button>
                <Button variant="danger" onClick={clearList }>
                    Borrar Todo
                </Button>
        </Container>


    )
}

export default CartTableContainer