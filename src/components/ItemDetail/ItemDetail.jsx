const ItemDetail = ({producto}) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <img src={producto.foto} alt="" className="w-100" />
            </div>
            <div className="col-md-6">                
                <h2>nombre: {producto.name}</h2>
                <h3>categoría: {producto.categoria}</h3>
                <h4>precio: {producto.categoria}</h4>
            </div>
        </div>
    )
}

export default ItemDetail
