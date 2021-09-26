import React, { Component } from 'react'
import ViewCard from './ViewCard'

export default class MainFile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
 
        }
    }
    setCity = (e) => {
        this.setState({
          city: e.target.value
        })
      }
   
    open = () => {
        return <ViewCard city={this.state.city}/>
    }
    render() {
        return (
            <div>
       <ViewCard/></div>
                  
        )
    }
}
