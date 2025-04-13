import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const handleLogin=()=>{
      console.log("Login Successfull");
      navigate('/adminpage');
    }
  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="p-4 shadow-lg rounded bg-white" style={{ minWidth: '350px', maxWidth: '400px', width: '100%' }}>
          <h3 className="text-center mb-4 text-primary">Admin Login</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" 
            onClick={handleLogin}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminLogin;
