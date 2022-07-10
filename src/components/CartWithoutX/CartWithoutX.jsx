

const CartWithoutX = ({item}) => {
    
    
    
    
    return (
        <tr>
            <td>{item.product.name}</td>
            <td>{item.quantity}</td>
            <td>${item.product.price}</td>
        </tr>
    )
};

export default CartWithoutX;