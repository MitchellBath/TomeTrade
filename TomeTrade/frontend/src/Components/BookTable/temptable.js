import React, { Component } from 'react'
import APIURLS from '../../api'
import EnhancedTable from './booktable';

export default class TempTable extends Component {

   
        state=
        {
            data:null
        }
    
    componentDidMount()
    {
        fetch(APIURLS.V1.getallbooks, {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((json) => {
              if (json!== undefined) {
                this.setState({
                    data:json
                }) 
               
              } else {
                alert("APi Called Failed");
              }
            });
        
    
      
        
    }

    render() {
        if(this.state.data != null)
        {
            return <EnhancedTable data ={this.state.data} />
        }
        return (
            <div>
                
            </div>
        )
    }
}
