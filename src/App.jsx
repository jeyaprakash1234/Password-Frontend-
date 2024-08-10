import React from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ForgotPasswords from './ForgotPassword';
import ResetPasswords from './ResetPassword';
import Home from './components/Home';
function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Password</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                       
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Routes>
                <Route path="/" element={< Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/forgot-password" element={<ForgotPasswords />} />
                 <Route path="/resetpassword/:id/:token" element={<ResetPasswords />} /> 
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
