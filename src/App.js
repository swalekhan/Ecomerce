
import './App.css';
// import HNavbar from './component/Navbar/Navbar';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Product from './component/product/Product';
import Header from './component/Header/Header';

function App() {
   return (
      <div>
         <Navbar  bg="dark" expand="lg" variant='dark'>
            <Container>
               <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
               <Nav className="me-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/">Link</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <Header/>
         <Product />
      </div>
   );
}

export default App;
