import logo from '../../../lawza.gif';
import React, { useState } from 'react';
const Headers = () => {
    const [btn, setBtn] = useState("Login");
    
    return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt='logo' />
        </div>
        <div className='header-content'>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Card</li>
                <button className='btn-class' onClick={() => {
                    btn === "Login" ? setBtn("Logout") : setBtn("Login");
                }}>
                    {btn}
                </button>
            </ul>
        </div>
    </div>
)
}

export default Headers;