import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Context from '../../Store/Context';

const MainNavbar = (props) => {
    const abc = useContext(Context)
   return ( 
    <Navbar bg="dark" expand="lg" variant='dark' fixed='0px'>
        <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Store</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>   
            </Nav>
            <Button  variant='success' className='ms-auto' onClick={props.onShow}>Card<span style={{color:"red", marginLeft:"5px"}}>{abc.totalItems}</span></Button>
        </Container>
    </Navbar>
   )
}

export default MainNavbar;