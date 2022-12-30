import React from "react";
import Item from "./Item";
import {Row} from "react-bootstrap"
// import Context from "../../Store/Context";

const cartElements = [
    {
        id:1,
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 1,
    },
    {
        id:2,
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 1,
    },
    {
        id:3,
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    }
]

    

const Product = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}>MUSIC</h1>
            <Row md={12} lg={12}>
                {cartElements.map((e) =>
                (<Item imageUrl = {e.imageUrl} price = {e.price} title={e.title} key={e.imageUrl} quantity = {e.quantity} id = {e.id}/>))}
            </Row>
        </>
    )
}
export default Product;