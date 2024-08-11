import logo from '../../lawza.gif';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const Headers = () => {

    const [btnName, setBtnName] = useState('Login');
     return (
    <div className='header'>
        <div id='logo'>
            <img src={logo} alt='logo' />
        </div>

        <div id='nav-items'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    < Link to="/cart">Cart</Link>
                </li>
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