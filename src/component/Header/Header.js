import "./Header.css";
import { Link } from "react-router";
import swiggyLogo from "../../img/swiggy-logo.png";
import dropdownArrow from "../../img/down-arrow.png";
import { cardIconUrl, SEARCH_IMG_URL } from "../../utils/constants";


export default Header = () => {

  return (
    <header className="flex justify-between items-center px-4 bg-white shadow-md">
     
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={swiggyLogo} alt="Logo" className="w-20 h-20" />
        <h1 className="text-2xl font-bold text-orange-600">Rohit's Food Delivery</h1>
        <h1 className="hover:text-orange-500 text-sm font-bold text-black pl-6">Other</h1>
        <h1 className="hover:text-orange-500 text-sm font-light text-gray-500 pl-1 hover:cursor-pointer">Nashik,Maharashtra,India</h1>
        <img src={dropdownArrow} alt="Logo"   className="w-5 h-5 ml-1"/>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-8 font-medium text-gray-700">
          <li>
          <div className="flex">
            <img alt="cart-img" src={SEARCH_IMG_URL} className="h-7 w-7 mr-2" />
            <Link
              to="/instaMart"
              className="hover:text-orange-500 transition duration-300"
            >
              Search
            </Link>
            </div>
          </li>
          <li>
          <div className="flex">
          <img alt="cart-img" src={cardIconUrl} className="h-7 w-7 mr-2" />
            <Link
              to="/"
              className="hover:text-orange-500 transition duration-300"
            >
              Offers
            </Link>
            </div>
          </li>
          <li>
          <div className="flex">
          <img alt="cart-img" src={cardIconUrl} className="h-7 w-7 mr-2" />
            <Link
              to="/about"
              className="hover:text-orange-500 transition duration-300"
            >
              Help
            </Link>
            </div> 
          </li>
          <li>
          <div className="flex">
          <img alt="cart-img" src={cardIconUrl} className="h-7 w-7 mr-2" />
            <Link
              to="/contact"
              className="hover:text-orange-500 transition duration-300"
            >
             Sign In
            </Link>
            </div>
          </li>
          <li>
          <div className="flex">
          <img alt="cart-img" src={cardIconUrl} className="h-7 w-7 mr-2" />
            <Link
              to="/cart"
              className="hover:text-orange-500 transition duration-300"
            >
              Cart
            </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
