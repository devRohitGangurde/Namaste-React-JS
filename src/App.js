import React from "react";
import ReactDOM from "react-dom/client"


import React from 'react'
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";

const AppLayout = () => {
  return (
    <div className="app-layout-container">
      <Header/>   
      <Body/>   
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);    