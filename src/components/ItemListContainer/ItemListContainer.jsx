import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getFetch } from "../helpers/getFetch";
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
            <h1>Cargando...</h1>            
        :   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ItemList productos={productos}/>
            </div>
        }      
        </div>
        
        
    )

}

export default ItemListContainer