import React from "react";


import React, { Component } from "react";
import ContactUs from "./ContactUs";

export class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructure");
    this.state={
        counter:0
    }
  }

  componentDidMount() {
    console.log("Parent did mount");
  }
 
  componentDidUpdate() {
    console.log("Parent did componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Parent did componentWillUnmount");
  }
  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About+{ this.state.counter}</h1>
        <ContactUs name={"Child 1"} />
        <ContactUs name={"Child 2"} />
        <button onClick={()=>{
            
            this.setState({
                counter:this.state.counter+1
            })
   
        }}> Add + 1</button>
      </div>
    );
  }
}

export default About;
