import React,{useState}from'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineAddShoppingCart} from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useCartContext } from '../Context/cartContext'




const ItemCount = ({min, max,  data , onAdd}) => {
    const [count, setCount] = useState(min)
    const {addToCart} = useCartContext()
    
    function add(){
        if(count < max) {
                setCount(count + 1)
        }
    }

    function substraction(){
        if(count > min){
                setCount(count - 1)
        }
    }

    function reset(){
        setCount(min)
    }

    function handleSubmit(){
        addToCart({
            quantity: count,
            product: data
        })
        onAdd(true)
        
    }


    return (
        <div className="d-flex justify-content-center">
            <Card bg="dark" text="light" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="text-center">Cantidad : {count}</Card.Title>
                    <div className="d-flex justify-content-center botones-contador">
                    <Button variant="danger" onClick={substraction}><AiOutlineMinusCircle/></Button>
                    <Button variant="danger" onClick={reset}>Reset</Button>
                    <Button variant="danger" onClick={add}><AiOutlinePlusCircle/></Button>
                    </div> 
                    <div className="d-flex justify-content-center mt-3">
                    <Button variant="danger" onClick={handleSubmit} ><MdOutlineAddShoppingCart/>Comprar</Button>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
    export default ItemCount;


