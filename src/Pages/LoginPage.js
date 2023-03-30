import "../Pages/LoginPage.css";
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/shopping.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState([]);

  const togglePasswordVisibility = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setShowPassword(!showPassword);
  };

  // const [user, setUser] = useState([]);

  const LoginFunction = (e) => {
    e.preventDefault();
    let getData = new FormData();
    getData.append("username", document.getElementById("user").value);
    getData.append("password", document.getElementById("pass").value);
    axios({
      method: "POST",
      url: "http://localhost/grocerease.db/validate.php",
      data: getData,
    }).then(function (response) {
      if (response.data != "Login Failed") {
        alert("Login Successfull, Go to Homepage?");
        localStorage.setItem("mytime", response.data);
        window.location.href = "/group1_capstone";
      } else {
        alert("Username or Password did not match");
      }
    });
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
              <form>
                <input
                  type="text"
                  placeholder="Username"
                  className="inText"
                  id="user"
                  autoComplete="off"
                  required
                />
                <div className="passy">
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                    type={showPassword ? "text" : "password"}
                    id="pass"
                    placeholder="Password"
                    required
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

                <button onClick={LoginFunction}>Log In</button>

                <Link to="/"> or create an account</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   )}
    // </>
  );
};

export default LoginPage;
