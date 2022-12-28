import React, { useCallback, useEffect, useState } from "react";
import { Button, Navbar, Table } from "react-bootstrap";
import MoviesItem from "./MoviesItem";
import Spiner from "./Spiner";
const Home = () => {
  const [error, setError] = useState()
  const [spiner, setSpiner] = useState(false)
  const [state, setState] = useState([]);

  const fetchHandler = useCallback(async () => {
    setSpiner(true)
    try {
      let response = await fetch("https://swapi.dev/api/films/")

      if (!response.ok) {
        throw new Error("somthing wrong with this")
      }

      let data = await response.json()
      const updatedItem = data.results.map((e) => {
        return {
          id: e.episode_id,
          openingText: e.opening_crawl,
          title: e.title,
          releaseData: e.release_date
        }
      })
      setState(updatedItem);
    } catch (error) {
      setError(error.message)
    }
    setSpiner(false)
  },[])
 
  useEffect(()=>{
    fetchHandler()
  },[fetchHandler])
   
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "15px" }}>TOUR</h1>
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
      {spiner && <Spiner />}
      {!spiner && <Button variant="warning" className="m-3 ms-5" onClick={fetchHandler}>fetch Movies</Button>}
      {!spiner && state.length>0 && state.map((e) => (
        <MoviesItem title={e.title} openingText={e.opening_crawl} releaseData={e.release_date} key={e.episode_id} />
      ))}
      {!spiner && state.length === 0 && !error && <p>no Movies found</p>}
      {!spiner &&  error && <p>{error}</p>}
      <Navbar bg="dark" expand="lg" variant='dark' className="p-5" > <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Navbar>
    </>
  )
}

export default Home;