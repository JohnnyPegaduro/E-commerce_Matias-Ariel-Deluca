import ItemCount from "../ItemCount/ItemCount"

export const Cart = () => {

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
    }

  return (
    <>
    
    <div>Cart</div>
    <ItemCount initial={1} stock={5} onAdd={onAdd} />
    
    </>
  )
}
