import React, { Component } from "react";
import "./styles.css";
import CustomInput from "../Input/input";
import Button from "../Buttons/button";
import APIURLS from "../../api"

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  getUserDetailsData = () => {
    
    var userNameNode = document.getElementById("username").value;
    var userPermNode = document.getElementById("password").value;

    if (
      userNameNode !== null &&
      userPermNode !== null &&
      userNameNode.trim() !== "" &&
      userPermNode.trim() !== "" 
    ) {
      fetch(APIURLS.V1.loginValidation, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userNameNode,
          password: userPermNode,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json["key"] !== false && json["key"] !== undefined) {
            localStorage.setItem("key",json["key"]);
            localStorage.setItem("user",json["user"]);
            
            this.props.history.push("/Home");
          } else {
            alert("Invalid username or password");
          }
        });
    }
    else{
      if(userNameNode === null || userNameNode.trim() === "")
      {
        alert("Username cannot be empty");
      }
      else if(userPermNode === null || userPermNode.trim() === "")
      {
        alert("Password cannot be empty");
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
        <div>
          TomeTrade Login Form
          </div>
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
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />

          <Button type="button" color="primary" onClick={() => this.getUserDetailsData()} className="form__custom-button">
            Log in
          </Button>
          <a color="google" href="/registration" className="form__custom-button">
            Sign Up
          </a >
        </form>
      </div>
    );
  }
}