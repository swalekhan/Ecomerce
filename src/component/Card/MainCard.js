import { useContext } from "react";
import {Button,  Modal,Stack } from "react-bootstrap";
import Context from "../../Store/Context";
import CardItem from './CardItem'

const MainCard = (props) => {
    const abc = useContext(Context)
  const clickHandler = () =>{
    alert("thanks for purchesing")
  }
    const style ={
        border:"2px solid  rgb(248, 106, 106)",
        backgroundColor:"rgb(248, 106, 106)",
        color:"white",
        textAlign: "center"
     }
    return (
        <>
         <Modal show={props.show} onHide={props.onHide}>
         <Modal.Header style={style} closeButton>
          <Modal.Title  >Card</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <Stack  direction="horizontal" className="ms-5 " gap={3}>
            <div>Item</div>
            <div>price</div>
            <div>quantity</div>
         </Stack>
          <ul>{ abc.items.map((e)=>(<CardItem item = {e.imageUrl} price={e.price} quantity ={e.quantity} key={e.imageUrl}/>))}</ul>
          <h3>Total ${abc.totalAmount}</h3>
         </Modal.Body>
         <Modal.Footer>
         <Button style={style} onClick={clickHandler} >Purchase</Button>
         </Modal.Footer>
         </Modal>
        </>
    )
}

export default MainCard;