import { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";


const MainForm = (props) => {
    // const [input, setInput] = useState({ title: "", opening: "", release: "" });
    const inputValue = useRef()
    const inputValue2 = useRef()
    const inputValue3 = useRef()

    //   const titleHandler = (e) =>{setInput({...input,title:e.target.value})}
    //   const openingHandler = (e) =>{setInput({...input,opening:e.target.value})}
    //   const releaseHandler = (e) =>{setInput({...input,release:e.target.value})}


    const submitHandler = (e) => {
        e.preventDefault()
        const Movie = {
            title: inputValue.current.value,
            opening: inputValue2.current.value,
            release: inputValue3.current.value
        }
        props.addMovie(Movie)
    }

    return (
        <Card border="primary" style={{ width: '18rem', margin: "4% 45%" }}>
            <Card.Header variant="warning" >Header</Card.Header>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={inputValue} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Opening Text</Form.Label>
                    <Form.Control ref={inputValue2} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Released Date</Form.Label>
                    <Form.Control  ref={inputValue3} type="text" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
    )
}

export default MainForm;