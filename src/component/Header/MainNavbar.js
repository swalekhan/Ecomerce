import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Context from '../../Store/Context';
import { NavLink, } from 'react-router-dom';


const MainNavbar = (props) => {
    const abc = useContext(Context)
   
    const getDataBackend = async()=>{

        props.onCardShow(true)
    
        let removeDotEmail = abc.token.replace(/[^a-z0-9]/gi)
        try{
       const response = await fetch(`${abc.url}/${removeDotEmail}`)     
       const data = await response.json()
        data.map((e)=>abc.addItem(e)) 
        }catch (err){
          console.log(err)
        }
    }

    const logoutHandler = () => {
        abc.removeToken("")
      
    }

    const style = {
        margin: "0px 10px",
        color: "white",
        textDecoration: "none"
    }
    return (
        <Navbar style={{position:"fixid"}} bg="dark" expand="lg" variant='dark' fixed='0px'>
            <Container >
                <Navbar.Brand href="/">E-commerce</Navbar.Brand>
                <Nav >
                    <ul style={{ display: "flex", listStyle: "none", margin: "5px" }}>
                        <li> <NavLink style={style} to="/Home">Home</NavLink></li>
                        <li><NavLink style={style} to="/Product">Store</NavLink></li>
                        <li><NavLink style={style} to="/About">About</NavLink></li>
                        <li><NavLink style={style} to="/Contact">Contact us</NavLink></li>
                        <li><NavLink style={style} to="/Login"><button onClick={logoutHandler} style={{backgroundColor:" transparent",color:"white",border:"none"}}>Logout</button></NavLink></li>
                    </ul>
                </Nav>
               { abc.cardButton &&<Button style={{border:"2px solid white", backgroundColor:"black"}} className='ms-auto' onClick={getDataBackend}>Card<span style={{ color: "red", marginLeft: "5px" }}>{abc.items.length===0?0:abc.items.length}</span></Button>}
            </Container>
        </Navbar>
    )
}

export default MainNavbar;