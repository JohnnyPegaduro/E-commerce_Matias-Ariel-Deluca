import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Table, Container, Button } from 'react-bootstrap'



const ItemDetail = ({ data }) => {

    const [addedToCart, setAddedToCart] = useState(false)

    return (
        <div>
            <Container >

                <h1 className="text-center mb-5 mt-5">Detalle del Producto</h1>

                <div className="detail-content d-flex flex-column align-items-center m-3">
                    <div className="d-flex flex-column justify-content-center align-items-center mb-5 imagen">
                        <img src={data.foto} alt={data.name} height={280} />
                    </div>
                    <div className="d-flex flex-column">
                        <Table className='mt-1' striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                </tr>
                            </tbody>
                        </Table>
                        {
                        addedToCart ? 
                        
                            <Link className="btn btn-danger" to="/cart"> Ir al Carrito </Link>
                        :
                            <ItemCount data={data} onAdd={setAddedToCart} max={5} min={1} />
                            }

                        <div className="d-flex justify-content-center mt-3">
                            <Link to="/">
                                <Button className="m-2 boton-mirando" variant="dark">
                                    Seguir Mirando
                                </Button>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className="mb-5 mt-5 d-flex justify-content-center  align-items-center botones">
                </div>
            </Container>
        </div>
    )
}

export default ItemDetail

