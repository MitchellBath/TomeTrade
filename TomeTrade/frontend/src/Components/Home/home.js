import React, { Component } from 'react'
import "./home.css"
import Button from "../Buttons/button"
import TabPanel from "../Tabs/tabs"

export default class Home extends Component {

    logout = () => {
        localStorage.clear();
        this.props.history.push("/");
    }
    componentDidMount()
    {
        if (localStorage.getItem("key") === null) {
            if(this.props.history !== undefined)
            {
                this.props.history.push("/");
            }
            localStorage.clear();
          }
          
        console.log(localStorage.getItem("user"));
    }

    render() {
        return (
            <div>
                <div className="logout">
                <Button type="button" onClick={() => this.logout()} color="facebook" className="">
                Logout
                </Button>
                </div>  
                <div className = "Test">
                    Welcome To Tometrade, { localStorage.getItem("user")}
                </div>
                <div className="tabpanel">
                    {/* <Button type="button" onClick={() => this.logout()} color="green" className="">
                        Add Book
                    </Button> */}
                    <TabPanel >

                    </TabPanel>
                </div>
            </div>
        )
    }
}
