import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFetch } from "../helpers/getFetch";
import { Spinner } from 'react-bootstrap'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoriaId } = useParams()
    
    useEffect(()=>{
        if (categoriaId) {
            getFetch()// llamada a la api
            .then((resp)=> {
                setProductos(resp.filter(producto => producto.categoria === categoriaId))
                setLoading(false)
        })
        .catch(err => console.log(err))
        } else {
            getFetch()// llamada a la api
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false) )
        }

        // .finally(()=> )
    }, [categoriaId])


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