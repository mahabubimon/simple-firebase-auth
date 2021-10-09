import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "../../context/AuthProvider";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

const Layout = () => {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Layout;
