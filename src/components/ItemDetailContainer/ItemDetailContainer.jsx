import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, getFirestore, doc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const [loading] = useState(false)
    const { productoId } = useParams()

    useEffect(() =>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', productoId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    })

    // useEffect(() => {
    //     getFetch()
    //         .then(res => setData(res.find(res => res.id === productoId  )))
    //         .catch(err => console.log(`No se ha podido traer los productos debido al error ${err}`))
    //     // .finally(console.log(data))
    // }, [productoId])

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
