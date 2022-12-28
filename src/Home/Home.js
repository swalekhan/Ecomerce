import React, { useCallback, useEffect, useState } from "react";
import { Button, Navbar, Table } from "react-bootstrap";
import MainForm from "./MainForm";
import MoviesItem from "./MoviesItem";
import Spiner from "./Spiner";


const Home = () => {
  const [update, setUpdate] = useState(false)
  const [error, setError] = useState()
  const [spiner, setSpiner] = useState(false)
  const [state, setState] = useState([]);


  const fetchHandler = useCallback(async () => {
    setSpiner(true)
    try {
      let response = await fetch("https://crudcrud.com/api/4b42ad80fe604115b84c56712f70093b/moveis")

      if (!response.ok) {
        throw new Error("somthing wrong with this")
      }

      let data = await response.json()
      console.log(data)
      const updatedItem = data.map((e) => {
        return {
          id: e._id,
          opening: e.opening,
          title: e.title,
          release: e.release
        }
      })

      setState(updatedItem);
    } catch (error) {
      setError(error.message)
    }

    setSpiner(false)
  }, [])

 

    const addMovies = useCallback(async(movie) => {
    setUpdate(true)
    const response = await fetch("https://crudcrud.com/api/4b42ad80fe604115b84c56712f70093b/moveis", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }})
  

    const data = await response.json();
    console.log(data)
    setUpdate(false)
  },[])


  const deleteHandler = useCallback(async(id) => {
    setUpdate(true)
    const response = await fetch(`https://crudcrud.com/api/4b42ad80fe604115b84c56712f70093b/moveis/${id}`, {
      method: 'DELETE',
    })
    const data = await response;
    console.log(data)
    setUpdate(false)
},[])


useEffect(() => {
  fetchHandler()
}, [fetchHandler,addMovies,deleteHandler,update])


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




    <MainForm addMovie={addMovies} />
    {spiner && <Spiner />}
    {!spiner && <Button variant="warning" className="m-3 ms-5" onClick={fetchHandler}>fetch Movies</Button>}
    {!spiner && state.length > 0 && state.map((e) => (
      <MoviesItem title={e.title} openingText={e.opening} releaseData={e.release} key={e.id} id={e.id} deleteHandler={deleteHandler} />
    ))}
    {!spiner && state.length === 0 && !error && <p>no Movies found</p>}
    {!spiner && error && <p>{error}</p>}
    <Navbar bg="dark" expand="lg" variant='dark' className="p-5" > <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand></Navbar>
  </>
)
}

export default Home;