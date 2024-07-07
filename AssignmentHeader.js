import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import userIcon from './user-icon.svg';



const Header = () => {
    return (
        <div className="header">
            <div id='logo'>
                <img src={logo} alt="apple logo" />
            </div>
            <div id="input">
                <input id='headerInput' type="text" placeholder="Search" />
            </div>
            <div id="user">
                <img src={userIcon} alt="user icon" />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);