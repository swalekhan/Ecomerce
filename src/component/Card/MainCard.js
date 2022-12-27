import { useContext } from "react";
import {Button,  Modal,Stack } from "react-bootstrap";
import Context from "../../Store/Context";
import CardItem from './CardItem'

const MainCard = (props) => {
    const abc = useContext(Context)
    return (
        <>
         <Modal show={props.show} onHide={props.onHide}>
         <Modal.Header closeButton>
          <Modal.Title className="text-center">Card</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <Stack  direction="horizontal" className="ms-5 " gap={3}>
            <div>Item</div>
            <div>price</div>
            <div>quantity</div>
         </Stack>
          <ul>{ abc.items.map((e)=>(<CardItem item = {e.imageUrl} price={e.price} quantity ={e.quantity} key={e.imageUrl}/>))}</ul>
          <h3>Total ${abc.totalItems}</h3>
         </Modal.Body>
         <Modal.Footer>
         <Button variant="secondary" >Purchase</Button>
         </Modal.Footer>
         </Modal>
        </>
    )
}

export default MainCard;