import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        
    }
    return (
        <Container className="text-center">
            <h2>Please Register</h2>
            <form>
                <label htmlFor="name">Your Name:</label> <br />
                <input type="text" required /> <br />
                <label htmlFor="email">Your Email:</label> <br />
                <input type="email" required /> <br />
                <label htmlFor="password">Set Password:</label> <br />
                <input type="password" required /> <br /> <br />
                <input onClick={handleRegister} type="submit" value="Register" />
            </form>
            <NavLink to="/signIn">Already Have an Account?</NavLink>
        </Container>
    );
};

export default Register;