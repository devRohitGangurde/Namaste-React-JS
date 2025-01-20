import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router';

export default  Header = () => {
     
    const [bntName,setBtnName] =useState('Login')

    return (
        <div className="header-container">
            <div className="logo">
            <img src="https://picsum.photos/100" alt="User Icon" />
            </div>
            
            <div className="nav-menu">
                <ul>
                    <Link className='link-style' to={'/instaMart'}>InstaMart </Link>
                    <Link className='link-style' to={'/'}>Home </Link>
                    <Link className='link-style' to={'/about'} >About us</Link>
                    <Link className='link-style' to={'/contact'} >Contact us</Link>
                    <Link className='link-style' to={'/about'} >Cart</Link>
                    <button className='login-btn' onClick={()=>{setBtnName("Logout")}}>{bntName}</button>
                </ul>

            </div>
        </div>
    );
};