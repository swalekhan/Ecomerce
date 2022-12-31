import { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Context from '../../Store/Context';
import { NavLink } from 'react-router-dom';
const MainNavbar = (props) => {
    const abc = useContext(Context)
   
     
    const getDataBackend = async()=>{
        props.onShow()
        let removeDotEmail = abc.token.replace(/[^a-z0-9]/gi)
        // console.log("email",removeDotEmail)
        try{
       const response = await fetch(`https://crudcrud.com/api/6382280ea42b4608a05dd0249faf5f8e/${removeDotEmail}`)
            
       const data = await response.json()
         console.log(data)
         abc.addItem(data)
        }catch (err){
          console.log(err)
        }
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
                        <li><NavLink style={style} to="/Login">Login</NavLink></li>
                    </ul>
                </Nav>
                <Button variant='success' className='ms-auto' onClick={getDataBackend}>Card<span style={{ color: "red", marginLeft: "5px" }}>{abc.items.length}</span></Button>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;