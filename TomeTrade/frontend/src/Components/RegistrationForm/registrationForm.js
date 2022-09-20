import React, { Component } from "react";
import "./styles.css";
import CustomInput from "../Input/input";
import Button from "../Buttons/button";
import APIURLS from "../../api"
import validator from 'validator';

export default class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
  };

  getUserDetailsData = () => {
    
    var emailNode = document.getElementById("email").value;
    var userPermNode = document.getElementById("password").value;
    var usernameNode = document.getElementById("username").value;

    if (
        emailNode !== null &&
      userPermNode !== null &&
      usernameNode !== null &&
      emailNode.trim() !== "" &&
      userPermNode.trim() !== "" &&
      usernameNode.trim() !== "" &&
      validator.isEmail(emailNode)
    ) {
      fetch(APIURLS.V1.register, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailNode,
          username : usernameNode,
          password: userPermNode,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json["key"] !== false && json["key"] !== undefined) {
            this.props.history.push("/");
          } else {
            alert("Username already exists please try again");
          }
        });
    }
    else
    {
      if(usernameNode === null || usernameNode.trim() === "")
      {
        alert("Username cannot be empty");
      }
      else if(userPermNode === null || userPermNode.trim() === "")
      {
        alert("Password cannot be empty");
      }
      else if(emailNode === null || emailNode.trim() === "")
      {
        alert("Email cannot be empty");
      }
      else if(!validator.isEmail(emailNode))
      {
        alert("Email is invalid");
      }
    }
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Username"
            id="username"
            formControlProps={{
            fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />
          {/* <CustomInput
            labelText="Confirm Password"
            id="confirm password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          /> */}

          <Button type="button" onClick={() => this.getUserDetailsData()} color="facebook" className="form__custom-button">
            Sign Up
          </Button>

          <a color="google" href="/">
            Login
          </a >

        </form>
      </div>
    );
  }
}