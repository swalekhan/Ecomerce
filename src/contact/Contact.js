import { useContext, useRef, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Context from "../Store/Context";

const Contact = () => {
      const abc = useContext(Context)

    useEffect(()=>{
        abc.cardButtonHandler(false)
    },[abc])
    //  const [alert, setAlert] = useState(false)

    const name = useRef()
    const email = useRef()
    const phone = useRef()

     const submitHandler = async(e) =>{
        e.preventDefault();
        // setAlert(true)
        let info = {
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value
        }
        try{
       const response = await fetch("https://crudcrud.com/api/fa4a61c142754728abefb68917eeddf2/info",{
        method:"POST",
        body:JSON.stringify(info),
        headers:{
        'Content-Type': 'application/json'
        } })
         
       const data = await response.json()
         console.log(data)
         alert("thanks! we will contact you soon.")
        //  setAlert(false)
       }catch(err){
           alert(err.message)
        }
     }
      

     const style ={
        border:"2px solid  rgb(248, 106, 106)",
        backgroundColor:"rgb(248, 106, 106)",
        color:"white",
        textAlign: "center"
     }
    return (
        <>
        {/* {alert && <p>submited form</p>} */}
        <Card  style={{ width: '25rem', margin: "4% 36%",border:"2px solid  rgb(248, 106, 106)" }} className="p-2">
            <Card.Header style={style} >Contact us</Card.Header>
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
        
                <Button style={style} className="m-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
        </>
    )
}

export default Contact;