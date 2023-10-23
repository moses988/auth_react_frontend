import React,{useState} from 'react'
import {Container,Form,Button}  from 'react-bootstrap';
import '../styles/login.css';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config/global';

export const Login = () => {
   const navigate = useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,
          [name]:value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/login`,formData);
            console.log(response);
            if(response.data === "Invaild user name or password"){
              alert("Invaild user name or password");
            }else if(response.data === "Server Busy"){
             alert("Verify your email id");
            }else if(response?.status){
             localStorage.setItem("userInfo",JSON.stringify(response.data));
             navigate("/home")
            }
        } catch (error) {
          console.error("login during error",error)            
        }
    console.log(formData)
    }
  return (
    <Container>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />

        </Form.Group>
  
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />

        </Form.Group>
        <Button variant="primary"  type="submit">Login</Button>
      
    </Form>


</Container>
  )
}
export default Login