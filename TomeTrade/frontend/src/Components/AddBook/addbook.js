import React, { Component } from "react";
import "./styles.css";
import CustomInput from "../Input/input";
import Button from "../Buttons/button";
import APIURLS from "../../api"

export default class AddBook extends Component {
  state = {
    email: "",
    password: ""
  };

  addBook = () => {
    
    var bookname = document.getElementById("bookname").value;
    var isbn = document.getElementById("isbn").value;
    console.log("Here 1");
    if (
        bookname !== null &&
        isbn !== null &&
        bookname.trim() !== "" &&
        isbn.trim() !== "" 
    ) {
      console.log("Here 2");
      fetch(APIURLS.V1.addbook, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookname: bookname,
          isbnVal: isbn,
          username: localStorage.getItem("user")
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("Here 3");
          if (json["key"] === true) {
            alert("Book added successfully")
            document.getElementById("bookname").value = ""
            document.getElementById("isbn").value = ""
          } else {
            alert("Error adding book");
          }
        });
    }
    else{
      if(bookname === null || bookname.trim() === "")
      {
        alert("Bookname cannot be empty");
      }
      else if(isbn === null || isbn.trim() === "")
      {
        alert("ISBN cannot be empty");
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
            labelText="BookName"
            id="bookname"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="ISBN"
            id="isbn"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="number"
          />

          <Button type="button" color="primary" onClick={() => this.addBook()} className="form__custom-button">
            Add
          </Button>
        </form>
      </div>
    );
  }
}