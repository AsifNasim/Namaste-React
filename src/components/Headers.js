import logo from '../../lawza.gif';

const Headers = () => (
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
            </ul>
        </div>
    </div>
);

export default Headers;