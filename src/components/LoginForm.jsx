import React ,{useState}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Button } from 'react-bootstrap';

import { Link, useNavigate} from 'react-router-dom';
import { MdEmail } from "react-icons/md";

import { RiLockPasswordFill } from "react-icons/ri";



import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';




// const loginBackground = require('../assets/images/laundry-register-bg.jpg');

function LoginForm  () {
    //const navigate =useNavigate();
    const navigate= useNavigate('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('https://password-backend-q26r.onrender.com/api/auth/login', { email, password });

        if(response.status === 200  ) {
           
            Swal.fire({
                title: "Good job!",
                text: "Login successfully!",
                icon: "success"
              });
              navigate('/')
             
              localStorage.setItem('authToken', response.data.token);
         
        } else {
          alert(response.data.Error);
        }
      } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "check your Email or password!",
          
          });
      }
    };
   

  
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required(''),
        password: Yup.string().required('')
    });

    const onSubmit = values => {
        console.log('Form data', values);
    };

    return (
        <div className="login-form-container">
         
            <ToastContainer/>
            <Container className="form-container">
                <h1 className="form-title">Login</h1>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    {formik => (
                        <Form onSubmit={handleSubmit} >
                            <div className="form-group">
                           
                                <label htmlFor="email">  <MdEmail size={30} color="#E1306C" /></label>
                                <Field type="email" placeholder="Enter Email" id="email"className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}required />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>

                            <div className="form-group">
                           
                                <label htmlFor="password"> <RiLockPasswordFill size={30}color="#E1306C"/></label>
                                <Field type="password" id="name" placeholder="Enter Password" name="password"  className="form-control"value={password} onChange={(e)=>setPassword(e.target.value)}required />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <div className="register-link">
                            <p>Don't have an account? <Link to="/register">Register here</Link></p>
                            <p>Forgot passwrod <Link to="/forgot-password">click here</Link></p>


                            </div>

          

                            <Button type="submit" className="btn btn-primary btn-block">Login</Button>
                        </Form>
                    )}
                </Formik>
                
            </Container>
        </div>
    );
};

export default LoginForm;