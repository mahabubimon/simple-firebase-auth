import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const {user, handleSignOut} = useAuth();
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <NavLink exact to="/">
          <Navbar.Brand>Authentication</Navbar.Brand>
        </NavLink>
        <Nav className="ms-auto">
          <Stack direction="horizontal" gap={4}>
            <NavLink
              to="/home"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Home
            </NavLink>
            { !user.displayName ? <>
            <NavLink
              to="/register"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Register
            </NavLink>
            <NavLink
              to="/signIn"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SignIn
            </NavLink>
            </> :
            <NavLink
              to="/register"
              onClick={handleSignOut}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SignOut
            </NavLink>
            }
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
