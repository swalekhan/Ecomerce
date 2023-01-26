import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Context from '../../Store/Context';
import { NavLink, } from 'react-router-dom';


const MainNavbar = (props) => {
    const abc = useContext(Context)
   
    const showCard = ()=>{ // card handler
        props.onCardShow(true)
    }

    const logoutHandler = () => {
        abc.removeToken(null)
      
    }

    const style = {
        margin: "0px 10px",
        color: "white",
        textDecoration: "none"
    }
    return (
        <Navbar bg="dark" expand="lg" variant='dark' sticky='top'>
            <Container >
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Nav >
                    <ul style={{ display: "flex", listStyle: "none", margin: "5px" }}>
                        <li> <NavLink style={style} to="/Home">Home</NavLink></li>
                        <li><NavLink style={style} to="/Product">Store</NavLink></li>
                        <li><NavLink style={style} to="/About">About</NavLink></li>
                        <li><NavLink style={style} to="/Contact">Contact us</NavLink></li>
                       {abc.isTokenTrue && <li><NavLink style={style} to="/Login"><button onClick={logoutHandler} style={{backgroundColor:" transparent",color:"white",border:"none"}}>Logout</button></NavLink></li>}
                    </ul>
                </Nav>
             {abc.isTokenTrue &&  <Button style={{border:"2px solid white", backgroundColor:"black"}} className='ms-auto' onClick={showCard}>Card<span style={{ color: "red", marginLeft: "5px" }}>{abc.items?abc.items.length:0}</span></Button>}
            </Container>
        </Navbar>
    )
}

export default MainNavbar;