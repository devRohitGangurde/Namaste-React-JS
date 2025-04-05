import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route, Outlet } from "react-router";

import './index.css'; 
import React from 'react'
import Header from "./component/Header/Header";

import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Error from "./component/Error";
import { lazy } from "react";
import { Outlet } from "react-router";
import RestaurantsDetails from "./component/RestaurantsDetails/RestaurantsDetails";
import { ToastContainer, toast } from 'react-toastify';
import RestaurantHome from "./component/RestaurantHome/RestaurantHome";
import Footer from "./component/footer/Footer";
import UserContext from "./utils/UserContext";
import Cart from "./component/cart/Cart";

const InstaMart = lazy(()=>import('./component/Instamart/InstaMart'))

const AppLayout = () => {
  const [userName,setUserName]=useState();

  useEffect(()=>{
     setUserName("Rohit Gangurde, CEO")
  },[])

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app-layout-container">
      <Header/>  
      <Outlet/> 
      <ToastContainer/>
      <Footer/>
    </div>
    </UserContext.Provider>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<RestaurantHome/>} />  
          <Route path="/instaMart" element={<Suspense fallback={<h1>TESTING</h1>}> <InstaMart /></Suspense>} />  
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/restaurant/:resId" element={ <RestaurantsDetails/>} />
          <Route path="/cart" element={ <Cart/>} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);    