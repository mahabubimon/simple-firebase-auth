import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Home = () => {
    const {user} = useAuth();
    console.log(user)
    return (
        <Container className="text-center">
            <h2>Welcome</h2>
            <h4>User: {user.displayName}</h4>
            <img src={user.photoURL} alt="" />

        </Container>
    );
};

export default Home;