import React,{useState}from'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineAddShoppingCart} from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";




export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    return(
        <>

    <Container>
        <Row className="justify-content-md-center">
            <Col md="auto"> <Badge><h2>{count}</h2></Badge></Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Button variant="success" disabled={count >= stock} onClick={increase} > <AiOutlinePlusCircle style={{color: 'white', fontSize: '25px'}}/></Button>
            </Col>
            <Col md="auto">
                <Button variant="danger" disabled={count <= 1} onClick={decrease} ><AiOutlineMinusCircle style={{color: 'white', fontSize: '25px'}} /></Button>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
            <Button  color="primary" outline='true' style={{fontSize: "15px" }} disabled={stock <= 0} onClick={()=>onAdd(count)} ><MdOutlineAddShoppingCart style={{color: 'white', fontSize: '18px'}}/>Agregar al carrito</Button>
            </Col>
        </Row>
    </Container>
    
        </>
        )
    }

    export default ItemCount;


