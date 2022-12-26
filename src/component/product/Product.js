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
        <Row xs={2} md={2} className="g-4" >
            {productsArr.map((e) =>
            (
                    <Col>
                        <Card >
                            <Card.Header className="p-3">
                                <Card.Title>{e.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Img src={e.imageUrl} alt="pic" />
                                <Card.Text>{e.price}</Card.Text>
                                <Button>Add to Crad</Button>
                            </Card.Body>
                        
                        </Card>
                    </Col>
                
           ))}
           </Row>
        </>
    )
}
export default Product;