import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { Spinner } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

    const [productos, setData] = useState([])

    const [loading, setLoading] = useState(true)


    const { categoriaId } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId ))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                setLoading(false)
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .finally(() => setLoading(false) )
        }
    }, [categoriaId])
    
    // useEffect(()=>{
    //     if (categoriaId) {
    //         getFetch()// llamada a la api
    //         .then((resp)=> {
    //             setProductos(resp.filter(producto => producto.categoria === categoriaId))
    //             setLoading(false)
    //     })
    //     .catch(err => console.log(err))
    //     } else {
    //         getFetch()// llamada a la api
    //         .then( (resp)=> setProductos(resp) )
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false) )
    //     }

    //     // .finally(()=> )
    // }, [categoriaId])
    
    
    return (
        
        <div>
            { loading ? 
            <div className="mt-5 d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="warning" role="status" />
            </div>          
        :   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ItemList productos={productos}/>
            </div>
        }      
        </div>
        
        
    )

}

export default ItemListContainer