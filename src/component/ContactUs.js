import React from "react";



import React, { Component } from 'react'

export class ContactUs extends Component {

    constructor(props){
        super(props)
        console.log(this.props.name + "Child Constructure")
    }

    componentDidMount(){
         console.log(this.props.name + "Child did mount")
    }

  render() {

    return (
      <div>
        <h1>ContactUs</h1>
      </div>
    )
  }
}

export default ContactUs