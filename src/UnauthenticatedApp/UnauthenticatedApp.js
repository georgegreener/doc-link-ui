import React, { Component } from "react";
import LoginPage from "./LoginPage/LoginPage";

class UnauthenticatedApp extends Component {
  state = { username: "", password: "" };

  handleChange = (event, field) => {
    this.setState({
      [field]: event.target.value
    });
  };

  loginUser = () => {
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.authenticateUser(!this.props.isAuthenticated);
    }
  };

  render() {
    return (
      <LoginPage
        {...this.state}
        loginUser={this.loginUser}
        handleChange={this.handleChange}
        isAuthenticated={this.props.isAuthenticated}
      />
    );
  }
}

export default UnauthenticatedApp;
