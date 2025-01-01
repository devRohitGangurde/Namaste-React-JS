import './Header.css';

export default  Header = () => {
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
                </ul>

            </div>
        </div>
    );
};