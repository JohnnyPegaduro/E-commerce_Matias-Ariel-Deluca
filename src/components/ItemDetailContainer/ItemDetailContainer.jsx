import { useState, useEffect } from "react"
import { getFetchOne } from "../helpers/getFetch"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})

    const { id } = useParams() 

    console.log(id)

    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp.find(prod => prod.id === id)))
            .catch(err => console.log(err))            
    }, [id])

    
    
    return <ItemDetail producto={producto} />
}
export default ItemDetailConatainer
