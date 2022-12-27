import { Row, Col, Card, Button } from "react-bootstrap";


const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const Product = () => {

    return (
        <>
            <h1 style={{ textAlign: "center", margin: "10px" }}>MUSIC</h1>
            <Row md={12} lg={12}>
                {productsArr.map((e) =>
                (
                    <Col md={{ span: 3, offset: 2 }} className="mt-5">
                        <Card>
                            <div>
                                <Card.Title text="center">{e.title}</Card.Title>
                            </div>
                            <div>
                                <Card.Img src={e.imageUrl} alt="pic" />
                                <Card.Text>${e.price}</Card.Text>
                                <Button>Add to Crad</Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Product;