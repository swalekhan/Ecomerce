import { useContext, useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Context from "../Store/Context";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
      const abc = useContext(Context)

      useEffect(()=>{
          abc.cardButtonHandler(false)
      },[abc])


     const submitHandler = async(e) =>{
        e.preventDefault();
        let info = {
            name:name,
            email:email,
            phone:phone,
        }
        try{
       const response = await fetch(`https://ecommerce-74080-default-rtdb.firebaseio.com/${abc.token}contact.json/`,{
        method:"POST",
        body:JSON.stringify(info),
        headers:{
        'Content-Type': 'application/json'
        } })
         
       const data = await response.json()
         console.log(data)
        //  alert("thanks! we will contact you soon.")
       }catch(err){
           alert(err.message)
           console.log(err)
        }

        // ........... erease data from input after submiting....
       
        setEmail("");
        setPhone("");
        setName("");
     }
      

     const style ={
        border:"2px solid  rgb(248, 106, 106)",
        backgroundColor:"rgb(248, 106, 106)",
        color:"white",
        textAlign: "center"
     }
    return (
        <>
        <Card  style={{ width: '25rem', margin: "4% 36%",border:"2px solid  rgb(248, 106, 106)" }} className="p-2">
            <Card.Header style={style} >Contact us</Card.Header>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>(setName(e.target.value))} value={name} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>(setEmail(e.target.value))} value={email}  type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Phone no.</Form.Label>
                    <Form.Control onChange={(e)=>(setPhone(e.target.value))} value={phone} type="text" />
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