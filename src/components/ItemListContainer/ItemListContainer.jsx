import ItemCount from "../../components/ItemCount/ItemCount"

const ItemListContainer = ({Saludo}) => {

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
        
        <h1><center>{Saludo}</center></h1>
        
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        
        </>
    )
}

export default ItemListContainer