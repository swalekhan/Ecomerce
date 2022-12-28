import { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Contact = () => {
     const [alert, setAlert] = useState(false)

    const name = useRef()
    const email = useRef()
    const phone = useRef()

     const submitHandler = async(e) =>{
        e.preventDefault();
        setAlert(true)
        let info = {
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value
        }
       const response = await fetch("https://crudcrud.com/api/d218d5d96c7643f0853f94555e9b99a4/info",{
        method:"POST",
        body:JSON.stringify(info),
        headers:{
        'Content-Type': 'application/json'
        }
       })

       const data = await response.json()
         console.log(data)
         setAlert(false)
     }

    return (
        <>
        {alert && <p>submited form</p>}
        <Card border="primary" style={{ width: '25rem', margin: "4% 36%" }} className="p-2">
            <Card.Header variant="warning" >Contact us</Card.Header>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref = {name} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={email}  type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone no.</Form.Label>
                    <Form.Control ref={phone}  type="text" />
                </Form.Group>
        
                <Button variant="primary" className="m-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
        </>
    )
}

export default Contact;