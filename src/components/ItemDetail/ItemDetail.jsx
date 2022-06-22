import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../components/Context/cartContext";


const ItemDetail = ({producto}) => {
    
    const { cart, addToCart } = useCartContext()
    
    const [estado, setEstado] = useState(null)

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
        setEstado(`${quantity}`)
        addToCart({...producto, cantidad: quantity})
        }

        console.log(cart)

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
                            <Link to="/cart">
                            <button className="btn btn-outline-primary">ir al carro</button>
                            </Link>
                            :
                            <ItemCount initial={1} stock={5} onAdd={onAdd}  />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail

