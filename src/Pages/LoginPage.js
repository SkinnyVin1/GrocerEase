import "../Pages/LoginPage.css";
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/shopping.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginBody">
      <img src={Bg} id="bg" />
      <div className="loginContainer">
        <div className="loginForm">
          <div className="imgContent">
            <img src={ShoImg} alt="" />
          </div>
          <div className="lForm">
            <div className="welcome">
              <span>Welcome to</span>
              <h1>GrocerEase</h1>
              <ul>
                <li>
                  <Link to="/">Go Back to Main Page</Link>
                </li>
              </ul>
            </div>
            <img src={ShoImg} id="hideImg" />
            <div className="logform">
              <form action="">
                <input type="text" placeholder="Username" className="inText" />
                <div className="passy">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="myInput"
                    placeholder="Password"
                  />

                  <div className="showForgot">
                    <Link to="/" id="forgot">
                      forgot password
                    </Link>

                    <button onClick={togglePasswordVisibility} id="showHide">
                      {showPassword ? "Hide" : "Show"} password
                    </button>
                  </div>
                </div>

                <button>Log In</button>

                <Link to="/"> or create an account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
