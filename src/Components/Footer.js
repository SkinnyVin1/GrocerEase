import "../Components/Footer.css";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerBody">
      <div className="footLogo">
        <img src={Logo} id="footlogos" />
        <div className="logoText">
          <p>
            <b>Address:</b>
            5171 W Campbell Ave undefined Kent, <br />
            Utah 53127 United States
          </p>

          <p>
            <b>Email:</b>
            grocerease@hop.com
          </p>

          <p>
            <b>Call Us:</b>
            (+91) - 540-025-124553
          </p>
        </div>
      </div>
      <div className="footerContenttop">
        <div className="company">
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
            <li>Contact Us</li>
            <li>Suppor Center</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="account">
          <h2>Account</h2>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare Products</li>
          </ul>
        </div>
        <div className="information">
          <h2>Information</h2>
          <ul>
            <li>Beverages</li>
            <li>Vegetable</li>
            <li>Meat</li>
            <li>Beauty</li>
            <li>Bread</li>
            <li>Accessories</li>
            <li>Supplies</li>
          </ul>
        </div>
        <div className="payment">
          <h2>Payment Methods</h2>
          <ul>
            <li>Visa</li>
            <li>Master Card</li>
            <li>American Express</li>
            <li>Gcash</li>
            <li>PayMaya</li>
            <li>Coins.ph</li>
            <li>Bank Methods</li>
          </ul>
        </div>
      </div>
      <div className="footerContentBottom">
        <div className="creator">
          <p>Ⓒ All rights reserved - Create by Group 1</p>
        </div>
        <div className="follow">
          <p>
            <b>Follow Us:</b>
          </p>
          <ul>
            <li>
              <i class="fa-brands fa-discord"></i>
            </li>
            <li>
              <i class="fa-brands fa-github"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
