import Logo from "../Images/logo.png";
import "../Components/NavigationBar.css";
import { Link } from "react-router-dom";
import Avatar from "../Images/21-avatar-outline.png";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import Heart from "../Images/heart.png";

const Navigationbar = () => {
  return (
    <div className="navibody">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="routes">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/Orders">Orders</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul>
          <li>
            <Link to="/">
              <div className="icon-container">
                <img src={Heart} alt="" />
                <span>Wishlist</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div className="icon-container">
                <img src={Cart} alt="" />
                <span>Cart</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/Login">
              <div className="icon-container">
                <img src={Avatar} alt="" />
                <span>Account</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
