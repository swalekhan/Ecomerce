import { useContext, useRef} from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Context from "../Store/Context";

const Login = () => {
    const abc = useContext(Context)
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
            const email = updatedemail.replace(/[^0-9a-z]/gi, "") 
            abc.addToken(email)
         return res.json();
         }else{
            return res.json().then((data)=>{
                alert(data.error.message)  // error 
            })
         }
      }).then((data)=>{
      history.replace('/Product')
      })

    }

    const style ={
      border:"2px solid  rgb(248, 106, 106)",
      backgroundColor:"rgb(248, 106, 106)",
      color:"white",
      textAlign: "center"
   }
  return ( 
    <Card  style={{ width: '25rem', margin: "4% 36%",border:"2px solid  rgb(248, 106, 106)" }} className="p-2">
            <Card.Header style={style} >Login</Card.Header>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref = {emailRef} type="text" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control ref={passRef}  type="text" />
                </Form.Group>
        
                <Button style={style} className="m-3" type="submit">
                    Login
                </Button>
            </Form>
        </Card>
        
  )
}

export default Login