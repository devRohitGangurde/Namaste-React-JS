import { useState } from 'react';
import './Header.css';

export default  Header = () => {
     
    const [bntName,setBtnName] =useState('Login')

    return (
        <div className="header-container">
            <div className="logo">
            <img src="https://picsum.photos/100" alt="User Icon" />
            </div>
            
            <div className="nav-menu">
                <ul>
                    <li>Home </li>
                    <li>About us </li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>{setBtnName("Logout")}}>{bntName}</button>
                </ul>

            </div>
        </div>
    );
};