import React from "react";
import {  Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../../Store/Context";
import { Link } from "react-router-dom";

const Item = (props) => {
    const abc = useContext(Context)

    const clickHandler = () => {
        abc.addItem({
         price:props.price,
         title:props.title,
         imageUrl:props.imageUrl,
         quantity:props.quantity
        })
        props.alert(true)
        // alert("Success! Product added in card")
    }

    
    return (
        <Col  md={{ span: 3, offset: 2 }} className="mt-5">
            <Card style={{border:"none"}}>
                <div>
                    <Card.Title>{props.title}</Card.Title>
                </div>

                <div>
                <Link to={ "/SingleProduct/" +props.title}> <Card.Img src={props.imageUrl} alt="pic" /></Link> {/* Link for dynamic router */}
                    <Card.Text style={{display:"inline-block", margin:"15px 150px 50px -5px",  fontSize: "medium", fontWeight:"bold" }}>${props.price}</Card.Text>
                    <Button onClick={clickHandler}>Add to Crad</Button>
                </div>
            </Card>
        </Col>
    )
}

export default Item;