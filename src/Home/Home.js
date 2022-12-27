import React from "react";
import { Button, Navbar, Table } from "react-bootstrap";
const Home = () => {
return (
    <>
    <h1 style={{textAlign:"center", margin:"15px"}}>TOUR</h1>
    <Table>
    <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="primary">BUY TICKET</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><Button variant="primary">BUY TICKET</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td >Larry the Bird</td>
          <td><Button variant="primary">BUY TICKET</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td >Larry the Bird</td>
          <td><Button variant="primary">BUY TICKET</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td >Larry the Bird</td>
          <td><Button variant="primary">BUY TICKET</Button></td>
        </tr>
      </tbody>
      </Table>
      <Navbar bg="dark" expand="lg" variant='dark' className="p-5" > <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Navbar>
    </>
)
}

export default Home;