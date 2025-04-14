import React, { Fragment, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const showErrorAlert = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: message,
            confirmButtonColor: '#3085d6',
        });
    };

    const showSuccessAlert = (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
            confirmButtonColor: '#3085d6',
            timer: 1500
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.username.trim()) {
            showErrorAlert('Username is required');
            valid = false;
        }

        if (!formData.password) {
            showErrorAlert('Password is required');
            valid = false;
        } else if (formData.password.length < 6) {
            showErrorAlert('Password must be at least 6 characters');
            valid = false;
        }

        return valid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (!validateForm()) return;
        
        setIsSubmitting(true);

        try {
            const response = await axios.post(
                "http://localhost:9000/admin/login",
                formData,
                { headers: { 'Content-Type': 'application/json' } }
            );
            
            const result = response.data;
            
            if (result.success) {
                showSuccessAlert('Login successful!');

                navigate('/adminpage/addstudents');
            } else {
                showErrorAlert(result.message || 'Login failed');
            }
        } catch (err) {
            console.error("Login error:", err);
            const errorMessage = err.response?.data?.message || 
                               err.message || 
                               'Login failed. Please try again.';
            showErrorAlert(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
                <div className="p-4 shadow-lg rounded bg-white" style={{ minWidth: '350px', maxWidth: '400px', width: '100%' }}>
                    <h3 className="text-center mb-4 text-primary">Admin Login</h3>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter username" 
                                name="username"  
                                value={formData.username} 
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password" 
                                placeholder="Password" 
                                value={formData.password} 
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                                type="checkbox" 
                                label="Remember me" 
                                disabled={isSubmitting}
                            />
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            type="submit" 
                            className="w-100" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Logging in...
                                </>
                            ) : 'Submit'}
                        </Button>
                    </Form>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminLogin;