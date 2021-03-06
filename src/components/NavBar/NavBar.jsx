import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../Context/cartContext'




const NavBar = () => {


    const {iconCart, cartList} = useCartContext()


    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <i><img src="https://i.ibb.co/1XSLbP6/biceps.png" alt="biceps" border="0" height={60} /></i>
                        <span>Pura Genetica</span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to='/'>Inicio</NavLink>
                        <NavLink to='/categoria/remeras'>Remeras</NavLink>
                        <NavLink to="/categoria/gorras">Gorras</NavLink>
                    </Nav>
                    <Nav className="justify-content-end">
                        
                            <Link to='/cart'>
                                <Button variant="secondary">
                                    <CartWidget>
                                    <Badge bg="primary">{cartList.length === 0 ? 0 : iconCart()}</Badge>
                                    </CartWidget>
                                </Button>
                            </Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar