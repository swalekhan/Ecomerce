// import React, {  useContext, } from "react";
import { Button, Table } from "react-bootstrap";
// import Context from "../Store/Context";


const Home = () => {
  // const abc = useContext(Context);

  // useEffect(()=>{
  //  abc.cardButtonHandler(false)
  // },[abc])
  

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
    </>
)
}

export default Home;