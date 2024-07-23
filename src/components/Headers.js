import logo from '../../lawza.gif';
import { useState } from 'react';

const Headers = () => {

    const [btnName, setBtnName] = useState('Login');
     return (
    <div className='header'>
        <div id='logo'>
            <img src={logo} alt='logo' />
        </div>

        <div id='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Cart</li>
                <button className='login'
                onClick={() => {
                    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                }}
                >{btnName}</button>
            </ul>
        </div>
    </div>
);
}



export default Headers;