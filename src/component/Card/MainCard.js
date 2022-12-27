import {Button,  Modal,Stack } from "react-bootstrap";
import CardItem from './CardItem'
const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

const MainCard = (props) => {
    
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
          <ul>{ cartElements.map((e)=>(<CardItem item = {e.imageUrl} price={e.price} quantity ={e.quantity} key={e.imageUrl}/>))}</ul>
          <h3>Total ${73}</h3>
         </Modal.Body>
         <Modal.Footer>
         <Button variant="secondary" >Purchase</Button>
         </Modal.Footer>
         </Modal>
        </>
    )
}

export default MainCard;