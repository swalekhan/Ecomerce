import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import Context from "../../Store/Context";
import { Link } from "react-router-dom";

const Item = (props) => {
    const abc = useContext(Context)

    const clickHandler = async () => {
        // abc.addItem({
        //     price: props.price,
        //     title: props.title,
        //     imageUrl: props.imageUrl,
        //     quantity: props.quantity
        // })
      
        props.alert(true)

        let removeDotEmail = abc.token.replace(/[^a-z0-9]/gi)

        try {
            const response = await fetch(`https://crudcrud.com/api/d100ff03ccc741e2bc63066ea49a9a6a/${removeDotEmail}`, {
                method: "POST",
                body: JSON.stringify({
                    price: props.price,
                    title: props.title,
                    imageUrl: props.imageUrl,
                    quantity: props.quantity
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

           return response
        } catch (err) {
            alert(err.message)
        }
    }


    return (
        <Col md={{ span: 3, offset: 2 }} className="mt-5">
            <Card style={{ border: "none" }}>
                <div>
                    <Card.Title>{props.title}</Card.Title>
                </div>

                <div>
                    <Link to={"/SingleProduct/" + props.title}> <Card.Img src={props.imageUrl} alt="pic" /></Link> {/* Link for dynamic router */}
                    <Card.Text style={{ display: "inline-block", margin: "15px 150px 50px -5px", fontSize: "medium", fontWeight: "bold" }}>${props.price}</Card.Text>
                    <Button onClick={clickHandler}>Add to Crad</Button>
                </div>
            </Card>
        </Col>
    )
}

export default Item;