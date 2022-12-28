import React, { useState } from "react";
import { Button, Navbar, Table } from "react-bootstrap";
import MoviesItem from "./MoviesItem";
const Home = () => {

  const [state, setState] = useState([]);

  const fetchHandler =() =>{
    fetch("https://swapi.dev/api/films/").then((response) =>{
      return response.json();
    }).then((data)=>{
      // const updatedItem = data.results.map((e)=>{
      // return {
      //   id:e.episode_id,
      //   openingText:e.opening_crawl,
      //   title:e.title,
      //   releaseData:e.release_date
      // }
      // })
      setState(data.results);
    })
  } 

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
      <Button variant="warning" onClick={fetchHandler}>fetch Movies</Button>
      {state.map((e)=>(
        <MoviesItem title = {e.title}  openingText={e.opening_crawl} releaseData = {e.release_date} key={e.episode_id}/>
      ))}
      <Navbar bg="dark" expand="lg" variant='dark' className="p-5" > <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Navbar>
    </>
)
}

export default Home;