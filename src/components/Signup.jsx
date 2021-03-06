import React,{useState} from "react"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Ryad from "./assets/Ryad.png";


const Signup=(props)=>{

const [userid,setUserid]=useState("")
const [pwd1,setPwd1]=useState("")
const [pwd2,setPwd2]=useState("")


const idchanged=(event)=>{
setUserid(event.target.value)
}
const pwd1changed=(event)=>{
    setPwd1(event.target.value)
}
const pwd2changed=(event)=>{
    setPwd2(event.target.value)
}
const onSubmit=()=>{
    if(pwd1===pwd2){
        fetch('https://login-react-signup.herokuapp.com/register', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "userid":userid,
                "password":pwd1
            }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
        alert("Login Now")
        props.setVerify({
            Login:true,
            Signup:false,
            Forgot:false,
            Table:false
            });       
        ;}
          else{
          alert("Wrong Password")}
}
return(
  <div className="container-login">
    <div className="container-presentation">
    <img src={Ryad} alt="Logo" className="logo" />
      <div className="text-presentation">
        <h2>Welcome</h2> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p> <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, velit voluptate accusamus molestias omnis labore numquam nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p>
      </div>
  </div>

  <div className="container">
    <Container>
        <h3>Login Form</h3>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={idchanged}/>
        
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={pwd1changed}/>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Re enter Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={pwd2changed}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
      </Container>
  </div>
</div>
)
}
export default Signup;