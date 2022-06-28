import { useState, useEffect } from "react"
import { getFetch } from "../helpers/getFetch"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const { productoId } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getFetch(prods => {
            setData(prods.find(prods => prods.id === productoId))
            setLoading(true)
        })
            .catch(err => console.log(`No se ha podido traer los productos debido al error ${err}`))
        // .finally(console.log(data))
    }, [productoId])

    return (
        <div>
            {
                loading ?
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                        <Spinner animation="border" variant="warning" role="status" />
                    </div>
                    :
                    <ItemDetail data={data} param={productoId} />

            }
        </div>
    )
}

export default ItemDetailContainer
