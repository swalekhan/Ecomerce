import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Context from '../../Store/Context';
import { NavLink } from 'react-router-dom';
const MainNavbar = (props) => {
    const abc = useContext(Context)
    return (
        <Navbar bg="dark" expand="lg" variant='dark' fixed='0px'>
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Nav >
                    <ul style={{display:"flex", listStyle:"none", margin:"5px"}}>
                    <li style={{margin:"0px 10px"}}> <NavLink to="/Home">Home</NavLink></li>
                    <li style={{margin:"0px 10px"}}>  <NavLink to="/Product">Store</NavLink></li>
                    <li style={{margin:"0px 10px"}}>  <NavLink to="/About">About</NavLink></li>
                    </ul>
                </Nav>
                <Button variant='success' className='ms-auto' onClick={props.onShow}>Card<span style={{ color: "red", marginLeft: "5px" }}>{abc.items.length}</span></Button>
                {console.log(abc.items.length)}
            </Container>
        </Navbar>
    )
}

export default MainNavbar;