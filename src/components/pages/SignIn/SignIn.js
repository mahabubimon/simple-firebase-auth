import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth"

const SignIn = () => {
  const { handleGoogleSignIn, handleGitHubSignIn } = useAuth();

  return (
    <Container className="text-center">
      <h2>Sign In with</h2>
      <button onClick={handleGoogleSignIn}>Google</button>
      <button onClick={handleGitHubSignIn}>GitHub</button>
      <br />
      <Link to="/register">New User?</Link>
    </Container>
  );
};

export default SignIn;
