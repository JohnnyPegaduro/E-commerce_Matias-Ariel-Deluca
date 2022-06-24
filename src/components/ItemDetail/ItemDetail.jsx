import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../components/Context/cartContext";


const ItemDetail = ({ producto }) => {

    const { cartList, addToCart } = useCartContext()

    const [estado, setEstado] = useState(true)

    const onAdd = (quantity) => {

        console.log(`Compraste ${quantity} unidades`);

        addToCart({ product: producto, cantidad: quantity })

        setEstado(false)

    }

    console.log(cartList)

    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.foto} alt="" className="w-50 m-5" />
            </div>
            <div className="col-md-6 mt-5">
                <div className="row mt-5">
                    <h2>nombre: {producto.name}</h2>
                    <h3>categoría: {producto.categoria}</h3>
                    <h4>precio: {producto.price}</h4>
                </div>
                <div className="row">
                    <div className="col">
                        {

                            estado ?

                                <ItemCount initial={1} stock={5} onAdd={onAdd} />

                                :

                                <Link to="/cart">

                                    <button className="btn btn-outline-primary">ir al carro</button>

                                </Link>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

