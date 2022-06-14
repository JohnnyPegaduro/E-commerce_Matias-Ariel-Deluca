import { useState, useEffect } from "react"
import { getFetchOne } from "../helpers/getFetch"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})

    useEffect(() => {
        getFetchOne()
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))            
    }, [])

    
    
    return <ItemDetail producto={producto} />
}
export default ItemDetailConatainer
