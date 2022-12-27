import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const MainNavbar = (props) => {
   return ( 
    <Navbar bg="dark" expand="lg" variant='dark' fixed='0px'>
        <Container>
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Nav >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Store</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                
            </Nav>
            <Button  variant='success' className='ms-auto' onClick={props.onShow}>Card<span style={{color:"red", marginLeft:"5px"}}>{1}</span></Button>
        </Container>
    </Navbar>
   )
}

export default MainNavbar;