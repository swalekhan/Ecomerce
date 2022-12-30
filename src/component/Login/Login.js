import { useRef } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory()
    const emailRef = useRef()
    const passRef = useRef()

    const submitHandler = (e) =>{
      e.preventDefault();

      const updatedemail = emailRef.current.value;
      const updatedPass = passRef.current.value;
     
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCWiniCYxqAVOK5BkdZfgrK35YR2k8VUt8',{
        method:'POST',
        body:JSON.stringify({
            email:updatedemail,
            password:updatedPass,
            returnSecureToken:true,
        }),
        headers:{
            'Content-type':'application/json'
        }
      }).then((res)=>{
         if(res.ok){
         return res.json();
         }else{
            return res.json().then((data)=>{
                console.log(data)
                alert(data.error.message)
            })
         }
      }).then((data)=>{
        console.log(data)
      history.replace('/Product')
      })

    }

  return ( 
    <Card border="primary" style={{ width: '25rem', margin: "4% 36%" }} className="p-2">
            <Card.Header  >Login</Card.Header>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref = {emailRef} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control ref={passRef}  type="text" />
                </Form.Group>
        
                <Button variant="primary" className="m-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
        
  )
}

export default Login