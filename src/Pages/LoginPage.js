import "../Pages/LoginPage.css";
import Bg from "../Images/loginbg.png";
import ShoImg from "../Images/5865.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginBody">
      <img src={Bg} id="bg" />
      <div className="loginContainer">
        <div className="loginForm">
          <div className="imgContent">
            <img src={ShoImg} alt="" />
          </div>
          <div className="lForm">
            <span>Welcome to</span>
            <h1>GrocerEase</h1>
            <ul>
              <li>
                <Link to="/">Go Back to Main Page</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
